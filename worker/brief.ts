// Cloudflare Worker: receives the brief form (POST /api/brief), stores it
// in D1, and notifies via the Resend HTTP API. No dependencies, no build step.
//
// Setup (run once, from worker/):
//   npx wrangler d1 create mdomarali-briefs   # then paste binding below
//   npx wrangler d1 execute mdomarali-briefs --remote --command "$(cat schema.sql)"
//   echo "<RESEND_KEY>" | npx wrangler secret put RESEND_API_KEY
//   echo "<RANDOM>" | npx wrangler secret put ADMIN_TOKEN
//   npx wrangler deploy
//
// Admin: GET /?token=<ADMIN_TOKEN> returns the latest 100 briefs as JSON.
// Route /api/brief to this worker (Cloudflare dashboard: Workers & Pages
// → this worker → Settings → Domains & Routes → Add route).

interface Env {
  RESEND_API_KEY: string;
  TO_EMAIL: string;
  FROM_EMAIL: string;
  SITE_ORIGIN?: string; // comma-separated CORS allow-list
  DB: D1Database;
  ADMIN_TOKEN: string;
}

const MAX_LEN = 5000;

function cors(origin: string | null, env: Env): HeadersInit {
  const allowed = (env.SITE_ORIGIN ?? "https://mdomarali.pages.dev").split(",");
  const ok = origin && allowed.includes(origin) ? origin : allowed[0];
  return {
    "access-control-allow-origin": ok,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
  };
}

function clean(v: unknown): string {
  return String(v ?? "").slice(0, MAX_LEN).replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, "");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("origin");
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors(origin, env) });
    }

    // Token-protected admin list. No token → 404 (don't reveal the endpoint).
    const url = new URL(request.url);
    if (request.method === "GET") {
      if (url.searchParams.get("token") !== env.ADMIN_TOKEN) {
        return new Response("Not found", { status: 404 });
      }
      const rows = await env.DB.prepare(
        "SELECT id, name, email, budget, deadline, message, created_at FROM briefs ORDER BY id DESC LIMIT 100",
      ).all();
      return Response.json({ ok: true, briefs: rows.results }, { headers: cors(origin, env) });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: cors(origin, env) });
    }

    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return new Response("Bad request", { status: 400, headers: cors(origin, env) });
    }

    if (body._gotcha) return new Response("OK", { headers: cors(origin, env) }); // honeypot

    const name = clean(body.name);
    const email = clean(body.email);
    const budget = clean(body.budget);
    const deadline = clean(body.deadline);
    const message = clean(body.message);

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
      return new Response("Missing fields", { status: 422, headers: cors(origin, env) });
    }

    // Persist first: a lead is never lost even if email fails.
    await env.DB.prepare(
      "INSERT INTO briefs (name, email, budget, deadline, message) VALUES (?, ?, ?, ?, ?)",
    )
      .bind(name, email, budget, deadline, message)
      .run();

    // Best-effort notify. Stored row is the source of truth.
    let emailed = false;
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${env.RESEND_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from: env.FROM_EMAIL,
          to: [env.TO_EMAIL],
          reply_to: email,
          subject: `Brief from ${name}${budget ? ` · ${budget}` : ""}${deadline ? ` · due ${deadline}` : ""}`,
          text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget || "-"}\nDeadline: ${deadline || "-"}\n\n${message}`,
        }),
      });
      emailed = res.ok;
    } catch {
      emailed = false;
    }
    return Response.json({ ok: true, emailed }, { headers: cors(origin, env) });
  },
};
