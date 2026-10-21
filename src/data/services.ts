export type Service = {
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: 'django',
    title: 'Django web development',
    summary:
      'Most of what I build is Django: internal tools, client and broker portals, and the occasional marketing site. I like boring, well-structured code that the next person can pick up.',
    deliverables: [
      'New Django apps, or features added to one you already have',
      'Portals with logins, roles, and permissions',
      'Wagtail CMS sites your team can edit themselves',
      'Interactive pages with HTMX instead of a heavy JavaScript framework',
    ],
    stack: ['Django', 'Wagtail', 'HTMX', 'PostgreSQL', 'Tailwind'],
  },
  {
    slug: 'astro',
    title: 'Astro websites',
    summary:
      'Fast, content-focused websites built with Astro and shipped as static HTML with as little JavaScript as the page needs. This site is one of them.',
    deliverables: [
      'New marketing sites, portfolios, and documentation sites',
      'Moving an existing site to Astro',
      'Content in Markdown or a headless CMS your team can edit',
      'Deploys to Cloudflare, Netlify, Vercel, or your own server',
    ],
    stack: ['Astro', 'Markdown', 'CSS', 'Cloudflare'],
  },
  {
    slug: 'python',
    title: 'Python development',
    summary:
      'If someone on your team is doing the same thing by hand every week, it can probably be a Python script. I write the scripts, the scheduled jobs, and the small services around them.',
    deliverables: [
      'Automating recurring manual work',
      'Scheduled jobs and file-processing pipelines',
      'Command-line tools and internal utilities',
      'Cleaning up and modernizing older Python code',
    ],
    stack: ['Python', 'pandas', 'SQLAlchemy', 'pytest'],
  },
  {
    slug: 'api',
    title: 'APIs & integrations',
    summary:
      'Getting two systems to talk to each other reliably, whether that means a REST API, a webhook, or a nightly file drop over SFTP.',
    deliverables: [
      'REST APIs with Django REST Framework or FastAPI',
      'Third-party API and webhook integrations',
      'Managed file transfer and batch file exchanges',
      'API docs your partners can actually follow',
    ],
    stack: ['DRF', 'FastAPI', 'OpenAPI', 'MFT'],
  },
  {
    slug: 'edi',
    title: 'Healthcare EDI',
    summary:
      'I work with X12 files every day at a claims administrator, so I know where they tend to break: odd payer quirks, rejected acknowledgments, and CMS response files that need reconciling.',
    deliverables: [
      '834, 837, and 835 file generation and ingestion',
      'Tracking down why a payer rejected a file',
      'CMS Section 111 reporting and response reconciliation',
      'Inbound and outbound feeds for claims systems',
    ],
    stack: ['X12 834', 'X12 837', 'X12 835', 'CMS-111'],
  },
  {
    slug: 'ai',
    title: 'AI & LLM features',
    summary:
      'Practical uses of language models: a chatbot that answers from your own documents, an assistant that can call your internal tools, or an MCP server that exposes your system to AI clients.',
    deliverables: [
      'Document search and Q&A (RAG)',
      'MCP servers for your tools and data',
      'Agent workflows with tool calling',
      'Private, self-hosted models with Ollama',
    ],
    stack: ['Anthropic', 'OpenAI', 'Ollama', 'MCP'],
  },
  {
    slug: 'data',
    title: 'Data & reporting',
    summary:
      'Reports that land in the right inbox on schedule, and dashboards that answer the questions people actually ask.',
    deliverables: [
      'Power BI dashboards',
      'Automated daily, weekly, and monthly reports',
      'ETL between systems',
      'SQL Server and PostgreSQL schema work and query tuning',
    ],
    stack: ['Power BI', 'SQL Server', 'PostgreSQL', 'pandas'],
  },
  {
    slug: 'devops',
    title: 'Deployment & infrastructure',
    summary:
      'Getting software off a laptop and running somewhere dependable, from a single Docker host up to a Kubernetes cluster managed with GitOps.',
    deliverables: [
      'Docker images and CI/CD pipelines',
      'Kubernetes (Talos) with Flux CD',
      'Azure and GCP Cloud Run deployments',
      'TLS, reverse proxies, and secrets management',
    ],
    stack: ['Docker', 'Kubernetes', 'Flux CD', 'Azure', 'GCP'],
  },
  {
    slug: 'it',
    title: 'IT & systems administration',
    summary:
      'The servers and machines underneath the software. I handle this at my day job alongside development.',
    deliverables: [
      'VMware ESXi and Proxmox virtualization',
      'Endpoint management with ScreenConnect and PDQ',
      'Linux server setup',
      'Working with outside IT vendors on upgrades',
    ],
    stack: ['VMware', 'Proxmox', 'Linux', 'PDQ'],
  },
];
