import type { IconName } from '../components/Icon.astro';

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: 'django',
    icon: 'layers',
    title: 'Django Web Development',
    summary:
      'Custom web applications built on Django, from internal business tools and client portals to content-managed marketing sites.',
    deliverables: [
      'Full-stack Django apps with clean, maintainable models and views',
      'Client, broker, and staff portals with authentication and permissions',
      'Wagtail CMS sites your team can edit without a developer',
      'HTMX-powered interactive UIs without a heavy JavaScript framework',
    ],
    stack: ['Django', 'Wagtail', 'HTMX', 'PostgreSQL', 'Tailwind'],
  },
  {
    slug: 'python',
    icon: 'code',
    title: 'Python Development',
    summary:
      'Scripts, services, and tooling that remove manual work, whether that is a one-off data migration or a long-running production service.',
    deliverables: [
      'Automation for recurring manual processes',
      'Scheduled jobs and file-processing pipelines',
      'Command-line tools and internal utilities',
      'Refactoring and modernizing existing Python codebases',
    ],
    stack: ['Python', 'pandas', 'SQLAlchemy', 'pytest'],
  },
  {
    slug: 'api',
    icon: 'plug',
    title: 'APIs & Integrations',
    summary:
      'REST APIs and system-to-system integrations that let your software talk to vendors, partners, and the rest of your stack.',
    deliverables: [
      'REST APIs with Django REST Framework or FastAPI',
      'Third-party API and webhook integrations',
      'Managed file transfer and batch file exchanges',
      'API documentation and versioning strategy',
    ],
    stack: ['DRF', 'FastAPI', 'OpenAPI', 'MFT'],
  },
  {
    slug: 'ai',
    icon: 'sparkles',
    title: 'AI & LLM Applications',
    summary:
      'Practical LLM features built into real products: chatbots grounded in your documents, tool-using agents, and MCP servers.',
    deliverables: [
      'Retrieval-augmented generation (RAG) over your documents',
      'Model Context Protocol (MCP) servers that expose your tools to AI clients',
      'Agentic workflows with tool and function calling',
      'Local / private LLM deployments with Ollama',
    ],
    stack: ['Anthropic', 'OpenAI', 'Ollama', 'MCP', 'PyTorch'],
  },
  {
    slug: 'edi',
    icon: 'file',
    title: 'Healthcare EDI Integration',
    summary:
      'Hands-on ANSI X12 experience from inside a claims administrator, including the parts that are only learned by fixing real rejections.',
    deliverables: [
      '834 enrollment, 837 claims, and 835 remittance file generation and ingestion',
      'Troubleshooting payer acknowledgment and response files',
      'CMS Section 111 mandatory insurer reporting and reconciliation',
      'Inbound and outbound integrations with claims administration systems',
    ],
    stack: ['X12 834', 'X12 837', 'X12 835', 'CMS-111'],
  },
  {
    slug: 'data',
    icon: 'chart',
    title: 'Data, Reporting & Dashboards',
    summary:
      'Turn raw database tables into reports and dashboards people actually use, and automate their delivery on a schedule.',
    deliverables: [
      'Power BI dashboards and paginated reports',
      'Automated daily, weekly, and monthly reporting',
      'ETL pipelines between systems',
      'SQL Server and PostgreSQL tuning, schema changes, and data integrity',
    ],
    stack: ['Power BI', 'SQL Server', 'PostgreSQL', 'pandas'],
  },
  {
    slug: 'devops',
    icon: 'server',
    title: 'Cloud, DevOps & Infrastructure',
    summary:
      'Reliable, repeatable deployments, from a single Docker host to a GitOps-managed Kubernetes cluster.',
    deliverables: [
      'Docker containerization and CI/CD pipelines',
      'Kubernetes (Talos) clusters managed with Flux CD',
      'Azure and GCP Cloud Run deployments',
      'Traefik ingress, TLS automation, and secrets management',
    ],
    stack: ['Docker', 'Kubernetes', 'Flux CD', 'Azure', 'GCP'],
  },
  {
    slug: 'it',
    icon: 'shield',
    title: 'IT & Systems Administration',
    summary:
      'Support for the servers and endpoints under your software, with experience in small-business and regulated environments.',
    deliverables: [
      'VMware ESXi / vSphere and Proxmox virtualization',
      'Endpoint management with ScreenConnect and PDQ',
      'Linux server setup and hardening',
      'Coordinating upgrades with third-party IT vendors',
    ],
    stack: ['VMware', 'Proxmox', 'Linux', 'PDQ'],
  },
];

export const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'A short call to understand the problem, the people affected, and what success looks like.',
  },
  {
    step: '02',
    title: 'Plan',
    text: 'A written scope with milestones, a clear estimate, and the trade-offs spelled out up front.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'Iterative delivery with regular check-ins, so you see working software early and often.',
  },
  {
    step: '04',
    title: 'Ship & support',
    text: 'Deployment, documentation, and handoff, with ongoing support available when you need it.',
  },
];
