export interface CaseStudy {
  slug: string;
  category: "analysis" | "design";
  eyebrow: string;
  title: string;
  outcome: string;
  summary: string;
  brief: string[];
  method: { step: string; detail: string }[];
  stack: string[];
  findings: string[];
  nextSteps: string[];
  cover: string;
  coverAlt: string;
  gallery: { src: string; alt: string }[];
  videos: { src: string; poster: string; label: string }[];
  /** Private reference for asset swaps. Not rendered. */
  reference?: string;
}

export const cases: CaseStudy[] = [
  {
    slug: "presentation-statistics-deck",
    category: "design",
    eyebrow: "Presentation Design",
    title: "Statistics pitch deck slide system",
    outcome: "Investor-ready stat slides",
    summary:
      "A statistics-led pitch slide system: one message per slide, rebuilt charts with direct labels, and a reusable master layout for traffic, reach, and registration metrics.",
    brief: [
      "Goal: make community and traction statistics legible to investors in seconds.",
      "Deliverables: statistics slide layouts plus reusable chart masters.",
      "Constraint: dense metrics must survive projection in a bright room.",
    ],
    method: [
      { step: "Hierarchy", detail: "One hero metric per card; supporting metrics set smaller with plain-language labels." },
      { step: "Rebuild", detail: "Redrew bar and sparkline charts with direct labels and consistent rounding." },
      { step: "System", detail: "Master layouts for stat cards, section headers, and confidential footers." },
      { step: "Polish", detail: "Checked contrast and type sizes for projection and PDF export." },
    ],
    stack: ["PowerPoint", "Chart system", "Master slides"],
    findings: [
      "Annual page views, social reach, and membership read as one story.",
      "Registration dip is framed with the flow-improvement note, not hidden.",
      "Masters let the team add new quarters without redesigning.",
    ],
    nextSteps: [
      "Extend the system to the full 12-slide deck.",
      "Add an appendix data room with sources.",
      "Record a short handover on editing masters.",
    ],
    cover: "/work/presentation-statistics-cluba.webp",
    coverAlt: "Statistics pitch deck slide showing site traffic, social reach, and membership metrics",
    gallery: [
      {
        src: "/work/presentation-statistics-cluba.webp",
        alt: "Statistics pitch deck slide showing site traffic, social reach, and membership metrics",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/27222141-Statistics-Pitch-Deck-Slide",
  },
  {
    slug: "presentation-infographic-problem",
    category: "design",
    eyebrow: "Presentation Design",
    title: "Infographic problem slides that land",
    outcome: "2 narrative visuals",
    summary:
      "Problem-framing infographics: a construction cash-flow comparison and a reputational-cost map, designed to make the pain impossible to skim past.",
    brief: [
      "Goal: turn abstract industry pain into visuals a jury remembers.",
      "Deliverables: two infographic slides with a shared type and color system.",
      "Constraint: each slide must work standalone when forwarded as an image.",
    ],
    method: [
      { step: "Narrative", detail: "Picked one contrast per slide: then vs now, cause vs cost." },
      { step: "Diagram", detail: "Built custom line illustrations and petal maps instead of stock icons." },
      { step: "Type", detail: "Tight headline hierarchy with annotated callouts for key figures." },
      { step: "System", detail: "Shared palette and numbering so both slides feel like one deck." },
    ],
    stack: ["PowerPoint", "Infographics", "Slide system"],
    findings: [
      "Empire State vs Salesforce Tower contrast makes the bottleneck tangible.",
      "Five-point reputational map gives speakers a natural talk track.",
      "Both slides export cleanly as standalone share images.",
    ],
    nextSteps: [
      "Build the matching solution and traction slides.",
      "Add speaker notes with the 30-second talk track.",
      "Package the diagram styles as masters.",
    ],
    cover: "/work/presentation-the-problem.webp",
    coverAlt: "Infographic slide framing cash flow as the number one bottleneck in construction",
    gallery: [
      {
        src: "/work/presentation-the-problem.webp",
        alt: "Infographic slide framing cash flow as the number one bottleneck in construction",
      },
      {
        src: "/work/presentation-reputational-cost.webp",
        alt: "Infographic slide mapping the five reputational costs of operational failures",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/27018644-Infographic-Slide-The-Problem",
  },
  {
    slug: "presentation-analytics-dashboard",
    category: "design",
    eyebrow: "Presentation Design",
    title: "Analytics dashboard slide collection",
    outcome: "4 dashboard slides",
    summary:
      "A cohesive set of analytics dashboard slides — cash bridge, cost breakdown, and menu engineering — in one navy-and-gold system that stays readable at a glance.",
    brief: [
      "Goal: present operational analytics to non-finance stakeholders without wall-of-numbers fatigue.",
      "Deliverables: four dashboard slides with one shared visual language.",
      "Constraint: tables and charts must stay legible when printed in grayscale.",
    ],
    method: [
      { step: "Structure", detail: "Split each slide into hero number, visual proof, and ranked detail." },
      { step: "Charts", detail: "Waterfall, bar-split, and quadrant plots matched to each question." },
      { step: "Tables", detail: "Status columns (Watch / OK / Monitor) so rows scan in seconds." },
      { step: "System", detail: "One palette, one number format, one footer treatment across all four." },
    ],
    stack: ["PowerPoint", "Dashboard slides", "Data tables"],
    findings: [
      "Cash bridge reads net income to free cash flow in four bars.",
      "Menu-engineering quadrant separates stars from dogs at a glance.",
      "Alcohol cost detail pairs category bars with a sortable table.",
    ],
    nextSteps: [
      "Add quarter-over-quarter comparison variants.",
      "Build the appendix with metric definitions.",
      "Hand over the color and number-format cheat sheet.",
    ],
    cover: "/work/presentation-cashflow-bridge.webp",
    coverAlt: "Cash flow and owner economics dashboard slide with cash bridge chart",
    gallery: [
      {
        src: "/work/presentation-cashflow-bridge.webp",
        alt: "Cash flow and owner economics dashboard slide with cash bridge chart",
      },
      {
        src: "/work/presentation-alcohol-cost.webp",
        alt: "Alcohol cost detail slide with category breakdown bars and table",
      },
      {
        src: "/work/presentation-menu-engineering.webp",
        alt: "Menu engineering slide with stars, plowhorses, puzzles, and dogs quadrant",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/27602554-Presentation-Design-Analytics-Dashboard",
  },
  {
    slug: "presentation-staff-performance",
    category: "design",
    eyebrow: "Presentation Design",
    title: "Staff performance dashboard deck",
    outcome: "Ranked review-ready slides",
    summary:
      "A staff performance dashboard for review meetings: revenue-per-hour heroes up top, ranked server table below — built to drive fair, numbers-first conversations.",
    brief: [
      "Goal: give managers a single slide that anchors performance reviews.",
      "Deliverables: dashboard slide plus a print-ready review variant.",
      "Constraint: individual figures must be accurate and unambiguous.",
    ],
    method: [
      { step: "Heroes", detail: "Surfaced average vs top revenue and FOH/BOH revenue per hour first." },
      { step: "Table", detail: "Ranked employee rows with hours, revenue per hour, and comp percentage." },
      { step: "Chart", detail: "Horizontal ranked bars mirroring the table order." },
      { step: "Review", detail: "Checked every figure twice against the source sheet before delivery." },
    ],
    stack: ["PowerPoint", "Dashboard slides", "Review pack"],
    findings: [
      "Top-performer gap is visible without calling anyone out unfairly.",
      "Revenue-per-hour normalizes comparisons across different hours.",
      "Managers reuse the layout monthly with fresh exports.",
    ],
    nextSteps: [
      "Add a month-over-month trend strip.",
      "Build a one-page printed handout variant.",
      "Document the data-refresh checklist.",
    ],
    cover: "/work/presentation-staff-performance-1.webp",
    coverAlt: "Server and staff performance dashboard with ranked revenue table",
    gallery: [
      {
        src: "/work/presentation-staff-performance-1.webp",
        alt: "Server and staff performance dashboard with ranked revenue table",
      },
      {
        src: "/work/presentation-staff-performance-2.webp",
        alt: "Staff performance dashboard print variant with revenue per hour heroes",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/27616490-PowerPoint-Presentation-Design-Staff-Performance-Dashboard",
  },
  {
    slug: "data-analysis-dashboard",
    category: "analysis",
    eyebrow: "Data Analysis",
    title: "Sales and viewer analytics dashboard",
    outcome: "KPIs plus monthly trends",
    summary:
      "An analytics dashboard surfacing total sales, orders, and customers with monthly trends and an orders ledger — designed for weekly reviews.",
    brief: [
      "Question: which months and segments drive sales, and where do orders stall?",
      "Audience: operators who need the week-over-week story in one screen.",
      "Scope: KPI cards, sales report, orders list, and monthly trend views.",
    ],
    method: [
      { step: "Collect", detail: "Consolidated orders, customers, and monthly sales into one model." },
      { step: "KPI", detail: "Defined total sales, orders, and customers with since-last-week deltas." },
      { step: "Trend", detail: "Built monthly sales bars and daily trend lines with median markers." },
      { step: "Ledger", detail: "Added an orders list with status, ratings, and due dates." },
    ],
    stack: ["Dashboard design", "KPI cards", "Trend analysis"],
    findings: [
      "September peak of $47.5K flagged against a $45K median baseline.",
      "Pending and canceled orders surface directly in the ledger.",
      "Month selector keeps total-orders context next to the trend.",
    ],
    nextSteps: [
      "Wire the dashboard to live order data.",
      "Add cohort and retention views.",
      "Set up weekly snapshot exports for the team.",
    ],
    cover: "/work/data-analysis-demographics.webp",
    coverAlt: "Sales analytics dashboard with KPIs, sales report, and orders list",
    gallery: [
      {
        src: "/work/data-analysis-demographics.webp",
        alt: "Sales analytics dashboard with KPIs, sales report, and orders list",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/20846646-Data-Analysis-Dashboard-Design",
  },
  {
    slug: "mergex-valuation-platform",
    category: "analysis",
    eyebrow: "Business Analysis",
    title: "Business valuation platform analysis",
    outcome: "Valuation flow plus market views",
    summary:
      "Analysis and UX for a business valuation platform: an interactive value builder, guided valuation journey, and market-size views that make M&A-grade analysis approachable.",
    brief: [
      "Goal: help owners understand what drives their valuation and what to do next.",
      "Audience: small-business owners, not finance professionals.",
      "Scope: value builder, revenue and EBITDA trends, M&A activity, and TAM/SAM/SOM views.",
    ],
    method: [
      { step: "Flow", detail: "Mapped the guided journey: gather, select method, analyze, value, report." },
      { step: "Builder", detail: "Designed the interactive value builder around revenue-growth impact." },
      { step: "Evidence", detail: "Added transaction comparables, DCF projections, and WACC breakdown." },
      { step: "Market", detail: "Built M&A-by-buyer-type and TAM/SAM/SOM views for context." },
    ],
    stack: ["Business analysis", "Valuation modeling", "Dashboard UX"],
    findings: [
      "Revenue-growth impact (+25%) gives owners a lever, not just a number.",
      "DCF and WACC views make the methodology defensible.",
      "Market context stops owners from anchoring on generic multiples.",
    ],
    nextSteps: [
      "Validate the valuation engine against closed transactions.",
      "Add industry-specific benchmark packs.",
      "Prototype the detailed report delivery flow.",
    ],
    cover: "/work/mergex-value-builder.webp",
    coverAlt: "Interactive business value builder with revenue growth analysis",
    gallery: [
      {
        src: "/work/mergex-value-builder.webp",
        alt: "Interactive business value builder with revenue growth analysis",
      },
      {
        src: "/work/mergex-revenue-ebitda.webp",
        alt: "Revenue and EBITDA trends with valuation range and market size analysis",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/27658837-MergeX-Business-Valuation-Platform",
  },
  {
    slug: "insights-report",
    category: "analysis",
    eyebrow: "Business Analysis",
    title: "Recurring-expense insights report",
    outcome: "Spend story in one page",
    summary:
      "An insights report that turns bookkeeping data into decisions: recurring expenses detected, upcoming renewals flagged, and vendor trends visualized.",
    brief: [
      "Goal: show finance leads what renews, what changed, and what to do.",
      "Audience: operators reviewing subscriptions and vendor spend.",
      "Scope: recurring-expense detection, trend history, and vendor table.",
    ],
    method: [
      { step: "Detect", detail: "Surfaced prepaid subscriptions and recurring charges over 3+ months." },
      { step: "Trend", detail: "Charted monthly spend per vendor with percentage-change flags." },
      { step: "Prioritize", detail: "Ranked vendors by June amount so the biggest lines get attention first." },
      { step: "Deliver", detail: "Packaged insights with an xlsx download for the finance workflow." },
    ],
    stack: ["Spend analysis", "Insights report", "Excel export"],
    findings: [
      "AWS hosting up 200% flagged inline for review.",
      "Renewal timing (HubSpot renews in 30 days) prevents surprises.",
      "Vendor table keeps monthly trend next to the dollar amount.",
    ],
    nextSteps: [
      "Add anomaly alerts for sudden spend jumps.",
      "Expand to flux insights and new-vendor views.",
      "Schedule the monthly insight email.",
    ],
    cover: "/work/insights-pilot-report.webp",
    coverAlt: "Recurring expenses insights report with vendor trends and spend changes",
    gallery: [
      {
        src: "/work/insights-pilot-report.webp",
        alt: "Recurring expenses insights report with vendor trends and spend changes",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/16758428-Insights-Report",
  },
  {
    slug: "seo-ai-platform",
    category: "analysis",
    eyebrow: "SEO & Content",
    title: "AI SEO platform content and features",
    outcome: "Feature story plus FAQ",
    summary:
      "SEO feature storytelling for an AI platform: keyword opportunity finder, ranking tracker, and content-quality checks presented as scannable value blocks.",
    brief: [
      "Goal: convert search-driven visitors with feature-led content.",
      "Audience: marketers comparing AI SEO tools.",
      "Scope: feature blocks, pricing touchpoints, and FAQ coverage.",
    ],
    method: [
      { step: "Map", detail: "Matched each feature to a search intent: discover, track, create, collaborate." },
      { step: "Draft", detail: "Wrote scannable blocks with outcome-first headlines." },
      { step: "Proof", detail: "Paired claims with product visuals and ranking-tracker evidence." },
      { step: "Convert", detail: "Placed pricing and FAQ answers on the same journey." },
    ],
    stack: ["SEO content", "Feature pages", "FAQ schema"],
    findings: [
      "Five features cover the full evaluate-to-adopt journey.",
      "Ranking-tracker visual gives the growth claim credibility.",
      "FAQ placement captures comparison and pricing queries.",
    ],
    nextSteps: [
      "Add FAQ schema and measure rich-result wins.",
      "Build comparison pages for top competitors.",
      "Track feature-page assisted conversions.",
    ],
    cover: "/work/seo-ai-platform.webp",
    coverAlt: "AI SEO platform features page with keyword finder and ranking tracker",
    gallery: [
      {
        src: "/work/seo-ai-platform.webp",
        alt: "AI SEO platform features page with keyword finder and ranking tracker",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/26557636-AI-SEO-Platform-Pricing-Features-FAQ",
  },
  {
    slug: "seo-necolaus-dashboard",
    category: "analysis",
    eyebrow: "SEO & Content",
    title: "SEO analytics and local visibility program",
    outcome: "Backlinks plus rankings plus GBP",
    summary:
      "A full local-SEO program in one view: backlink analytics, authority trends, local rank maps, and Google Business Profile optimization with before/after proof.",
    brief: [
      "Goal: grow referring domains, hold local rankings, and convert profile views.",
      "Audience: service businesses competing in local search.",
      "Scope: backlink dashboard, rank tracking, and profile optimization.",
    ],
    method: [
      { step: "Audit", detail: "Mapped referring domains, authority score, and monthly-visit baselines." },
      { step: "Track", detail: "Monitored authority trends and backlink velocity month over month." },
      { step: "Local", detail: "Ran grid rank tracking and optimized categories, photos, and services." },
      { step: "Prove", detail: "Captured before/after profile states with review-count deltas." },
    ],
    stack: ["Backlink analysis", "Rank tracking", "GBP optimization"],
    findings: [
      "217K backlinks from 37.9K referring domains with authority trending up.",
      "Local grid shows green coverage across the service area.",
      "Profile optimization lifted reviews from 143 to 248 with richer categories.",
    ],
    nextSteps: [
      "Disavow review on low-quality referring domains.",
      "Expand service-area grids to neighboring suburbs.",
      "Add review-request automation for steady velocity.",
    ],
    cover: "/work/seo-necolaus-dashboard.webp",
    coverAlt: "SEO analytics dashboard showing backlinks, referring domains, and authority trends",
    gallery: [
      {
        src: "/work/seo-necolaus-dashboard.webp",
        alt: "SEO analytics dashboard showing backlinks, referring domains, and authority trends",
      },
      {
        src: "/work/seo-local-rank-map.webp",
        alt: "Local search rank map showing position coverage across service areas",
      },
      {
        src: "/work/seo-gbp-updates.webp",
        alt: "Google Business Profile update queue with business name and category changes",
      },
      {
        src: "/work/seo-dental-services-menu.webp",
        alt: "Service menu structure with treatment categories for local SEO",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/27604057-Necolaus-SEO-Analytics-Dashboard",
  },
  {
    slug: "seo-physio-local",
    category: "analysis",
    eyebrow: "SEO & Content",
    title: "Physiotherapy local SEO turnaround",
    outcome: "Profile plus site, before to after",
    summary:
      "Local SEO for a physiotherapy clinic: profile rewrite with proper categories, plus a homepage rebuild that turns searches into booked appointments.",
    brief: [
      "Goal: rank for physio + suburb queries and convert profile views into bookings.",
      "Audience: patients searching for physiotherapy and rehab nearby.",
      "Scope: Google Business Profile overhaul and homepage content rebuild.",
    ],
    method: [
      { step: "Fix", detail: "Rewrote business name, categories, hours, and appointment links." },
      { step: "Photos", detail: "Replaced generic exterior shots with team and interior proof." },
      { step: "Site", detail: "Rebuilt the hero around outcomes with injury-management keywords." },
      { step: "Track", detail: "Compared before/after states on reviews, calls, and direction requests." },
    ],
    stack: ["Local SEO", "GBP optimization", "Homepage copy"],
    findings: [
      "Profile title now captures North Shore + physiotherapy + rehab queries.",
      "Team photography replaced stock-feeling exterior shots.",
      "Homepage hero leads with booking and callback actions.",
    ],
    nextSteps: [
      "Add condition-specific service pages for long-tail queries.",
      "Launch a review cadence tied to discharge visits.",
      "Track calls and bookings by source monthly.",
    ],
    cover: "/work/seo-physio-before-after.webp",
    coverAlt: "Before and after of physiotherapy clinic Google Business Profile optimization",
    gallery: [
      {
        src: "/work/seo-physio-before-after.webp",
        alt: "Before and after of physiotherapy clinic Google Business Profile optimization",
      },
      {
        src: "/work/seo-physio-website.webp",
        alt: "Physiotherapy clinic homepage with appointment booking hero",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/25254360-SEO-thephysioco-co-nz",
  },
  {
    slug: "seo-airtahiti-measurement",
    category: "analysis",
    eyebrow: "SEO & Content",
    title: "Airline analytics and booking measurement",
    outcome: "GA4 plus GTM plus Looker",
    summary:
      "Measurement for an airline site: GA4 events, tag management, and a Looker Studio dashboard tracking the full journey from search to booking revenue by route.",
    brief: [
      "Goal: see which markets, devices, and sources turn searches into bookings.",
      "Audience: marketing and revenue teams running campaigns.",
      "Scope: GA4 setup, GTM tagging, and a Looker Studio performance dashboard.",
    ],
    method: [
      { step: "Events", detail: "Defined flight-search, select-flight, and booking events with revenue." },
      { step: "Tags", detail: "Implemented GTM containers with source, medium, and route parameters." },
      { step: "Dashboard", detail: "Built an all-markets view: users, sessions, engagement, conversion, order value." },
      { step: "Routes", detail: "Added booking-revenue-by-route and device/session breakdowns." },
    ],
    stack: ["GA4", "Google Tag Manager", "Looker Studio"],
    findings: [
      "Full funnel from users to bookings visible per market.",
      "Route-level revenue shows which destinations deserve budget.",
      "Device and source splits reveal where the booking flow leaks.",
    ],
    nextSteps: [
      "Add server-side tagging for booking reliability.",
      "Build route-level alerts for conversion drops.",
      "Connect ad spend for true ROAS by market.",
    ],
    cover: "/work/seo-airtahiti-site-dashboard.webp",
    coverAlt: "Airline website with analytics dashboard showing booking funnel by market",
    gallery: [
      {
        src: "/work/seo-airtahiti-site-dashboard.webp",
        alt: "Airline website with analytics dashboard showing booking funnel by market",
      },
      {
        src: "/work/seo-airtahiti-all-markets.webp",
        alt: "All-markets analytics dashboard with sessions, searches, and booking revenue",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/26963680-GA4-GTM-Looker-Studio-airtahiti-com",
  },
  {
    slug: "seo-email-ab-testing",
    category: "analysis",
    eyebrow: "SEO & Content",
    title: "Onboarding email A/B test and optimization",
    outcome: "Control vs variation uplift",
    summary:
      "An onboarding email teardown and redesign: control vs variation with annotated rationale — icons for scannability, a clear CTA, and an explainer video to pull users into their first project.",
    brief: [
      "Goal: lift first-project creation from the welcome email.",
      "Audience: new trial users deciding whether to invest setup time.",
      "Scope: email copy, layout, CTA, and onboarding content test.",
    ],
    method: [
      { step: "Audit", detail: "Scored the control on clarity, scannability, and CTA strength." },
      { step: "Vary", detail: "Designed the variation: hero visual, icon triptych, single CTA, video." },
      { step: "Annotate", detail: "Documented why each change should move the metric." },
      { step: "Measure", detail: "Defined success as first-project creation within 14 days." },
    ],
    stack: ["A/B testing", "Email optimization", "Onboarding"],
    findings: [
      "Variation replaces a text wall with one job: create your first project.",
      "Icon triptych makes the trial offer scannable in seconds.",
      "Embedded getting-started video answers setup anxiety inline.",
    ],
    nextSteps: [
      "Run the test to significance on new cohorts.",
      "Test subject lines for open-rate leverage.",
      "Roll learnings into the in-app onboarding checklist.",
    ],
    cover: "/work/seo-loop11-ab-test-wide.webp",
    coverAlt: "Email A/B test comparing control and variation onboarding designs",
    gallery: [
      {
        src: "/work/seo-loop11-ab-test-wide.webp",
        alt: "Email A/B test comparing control and variation onboarding designs",
      },
      {
        src: "/work/seo-loop11-ab-test-tall.webp",
        alt: "Annotated variation email showing icon, CTA, and video improvements",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/25254331-A-B-Testing-Email-Optimization-loop11-com",
  },
  {
    slug: "seo-dental-local",
    category: "analysis",
    eyebrow: "SEO & Content",
    title: "Dental group local presence rebuild",
    outcome: "143 to 248 reviews",
    summary:
      "A complete local presence rebuild for a dental group: profile optimization with before/after proof, backed by a service architecture that matches how patients search.",
    brief: [
      "Goal: dominate dentist + suburb searches and grow review velocity.",
      "Audience: patients comparing local dental practices.",
      "Scope: profile rebuild, category expansion, and service-page structure.",
    ],
    method: [
      { step: "Profile", detail: "Rewrote title, categories, products, and appointment links." },
      { step: "Proof", detail: "Swapped stock-feeling photos for team and treatment evidence." },
      { step: "Structure", detail: "Organized services into cosmetic, general, implants, and orthodontics." },
      { step: "Reviews", detail: "Built the ask into the post-visit flow for steady growth." },
    ],
    stack: ["Local SEO", "GBP optimization", "Service architecture"],
    findings: [
      "Reviews grew from 143 to 248 with a 4.9 rating held.",
      "Category expansion captures implants, orthodontics, and cosmetic queries.",
      "Treatment menu mirrors the site structure for consistent discovery.",
    ],
    nextSteps: [
      "Add before/after treatment galleries per service.",
      "Launch suburb-specific landing pages.",
      "Track calls, bookings, and direction requests monthly.",
    ],
    cover: "/work/seo-mulgrave-before-after-light.webp",
    coverAlt: "Before and after of dental group Google Business Profile with review growth",
    gallery: [
      {
        src: "/work/seo-mulgrave-before-after-light.webp",
        alt: "Before and after of dental group Google Business Profile with review growth",
      },
      {
        src: "/work/seo-mulgrave-before-after-dark.webp",
        alt: "Detailed before and after profile comparison for the dental group",
      },
    ],
    videos: [],
    reference: "https://dribbble.com/shots/25254360-SEO-thephysioco-co-nz",
  },
  {
    slug: "video-keyvo-overview",
    category: "design",
    eyebrow: "Video Editing",
    title: "Website overview video: Keyvo",
    outcome: "60-sec product tour",
    summary:
      "A fast website overview cut: the full site experience compressed into a shareable tour with pacing built for silent autoplay feeds.",
    brief: [
      "Goal: let viewers grasp the site's value without visiting it.",
      "Audience: prospects scrolling social and portfolio feeds.",
      "Constraint: must work muted with captions and clear visual beats.",
    ],
    method: [
      { step: "Select", detail: "Picked the five screens that carry the story: hero, features, proof, pricing, CTA." },
      { step: "Pace", detail: "Cut to one idea per shot with punch-in moves on key UI." },
      { step: "Caption", detail: "Burned-in captions timed to each beat for silent viewing." },
      { step: "Export", detail: "Delivered web-optimized mp4 plus a loop-safe social cut." },
    ],
    stack: ["Premiere", "Captions", "Web export"],
    findings: [
      "Full site story lands in under a minute.",
      "Captioned beats hold attention with sound off.",
      "One master export feeds portfolio, social, and outreach.",
    ],
    nextSteps: [
      "Cut a 15-second teaser for ads.",
      "Add localized caption tracks.",
      "A/B test hero-first vs proof-first openings.",
    ],
    cover: "",
    coverAlt: "Keyvo website overview video",
    gallery: [],
    videos: [
      {
        src: "/work/video/keyvo-website-overview.mp4",
        poster: "",
        label: "Keyvo website overview",
      },
    ],
    reference: "https://dribbble.com/shots/27214788-Keyvo-Website",
  },
  {
    slug: "video-saas-product-updates",
    category: "design",
    eyebrow: "Video Editing",
    title: "SaaS product update videos",
    outcome: "2 release cuts",
    summary:
      "Product-update edits for a SaaS launch cycle: screen capture shaped into tight release stories with callouts, pacing, and captions.",
    brief: [
      "Goal: ship release notes people actually watch.",
      "Audience: existing users deciding whether a new feature matters.",
      "Scope: two product-update cuts from raw captures.",
    ],
    method: [
      { step: "Script", detail: "Distilled each update to one headline change plus two supporting beats." },
      { step: "Cut", detail: "Trimmed raw captures to the clicks that prove the feature." },
      { step: "Callouts", detail: "Added zooms and labels so viewers never guess where to look." },
      { step: "Caption", detail: "Captioned for silent feeds and exported for web and social." },
    ],
    stack: ["Premiere", "Screen capture", "Captions"],
    findings: [
      "Two updates shipped as watchable under-two-minute stories.",
      "Callout zooms keep attention on the interface change.",
      "Captioned masters work across help docs and social.",
    ],
    nextSteps: [
      "Build a reusable intro/outro template.",
      "Add chapter markers for help-center embeds.",
      "Batch the next release cycle from the same template.",
    ],
    cover: "",
    coverAlt: "SaaS product update videos",
    gallery: [],
    videos: [
      {
        src: "/work/video/saas-product-update-v1.mp4",
        poster: "",
        label: "Product update cut 1",
      },
      {
        src: "/work/video/saas-product-update-v2.mp4",
        poster: "",
        label: "Product update cut 2",
      },
    ],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export interface WorkCard {
  category: "analysis" | "design";
  eyebrow: string;
  title: string;
  outcome: string;
  brief: string;
  method: string;
  stack: string[];
  slug: string | null;
  spotlight: boolean;
  featured: boolean;
  cover: string;
  coverAlt: string;
  coverVideo: string;
  galleryCount: number;
  hasVideo: boolean;
}

function toCard(c: CaseStudy, opts: { spotlight?: boolean; featured?: boolean } = {}): WorkCard {
  return {
    category: c.category,
    eyebrow: c.eyebrow,
    title: c.title,
    outcome: c.outcome,
    brief: c.brief[0],
    method: c.method.map((m) => m.step).join(", "),
    stack: c.stack.slice(0, 3),
    slug: c.slug,
    spotlight: opts.spotlight ?? false,
    featured: opts.featured ?? false,
    cover: c.cover,
    coverAlt: c.coverAlt,
    coverVideo: c.videos[0]?.src ?? "",
    galleryCount: c.gallery.length,
    hasVideo: c.videos.length > 0,
  };
}

export const workCards: WorkCard[] = [
  toCard(cases[2], { spotlight: true, featured: true }),
  toCard(cases[5], { featured: true }),
  toCard(cases[8], { featured: true }),
  ...cases
    .filter((_, i) => ![2, 5, 8].includes(i))
    .map((c) => toCard(c)),
];
