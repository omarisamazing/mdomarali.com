// Cloudflare Worker: receives the brief form (POST /api/brief) and sends it
// via the Resend HTTP API. No dependencies, no build step.
//
// Deploy:
//   cd worker
//   npx wrangler secret put RESEND_API_KEY   # paste key from resend.com/api-keys
//   npx wrangler vars set TO_EMAIL hello@mdomarali.com
//   npx wrangler vars set FROM_EMAIL "Brief <brief@mdomarali.com>"
//   npx wrangler deploy
//
// Route /api/brief to this worker (Cloudflare dashboard: Workers Routes,
// or the Astro site's _routes / functions setup). FROM_EMAIL must be a
// verified Resend sender/domain.

interface Env {
  RESEND_API_KEY: string;
  TO_EMAIL: string;
  FROM_EMAIL: string;
  SITE_ORIGIN?: string; // e.g. https://mdomarali.com (CORS allow-list)
}

const MAX_LEN = 5000;

function cors(origin: string | null, env: Env): HeadersInit {
  const allowed = (env.SITE_ORIGIN ?? "https://mdomarali.com").split(",");
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

    if (!res.ok) {
      return new Response("Email failed", { status: 502, headers: cors(origin, env) });
    }
    return Response.json({ ok: true }, { headers: cors(origin, env) });
  },
};
