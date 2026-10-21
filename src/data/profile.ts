export const profile = {
  name: 'Josh Horn',
  title: 'Full-Stack Python & Django Developer',
  location: 'Bryan, TX',
  email: 'jmhorn1115@gmail.com',
  github: 'https://github.com/jmhorn00',
  linkedin: 'https://www.linkedin.com/in/josh-horn-0aa116182',
  availability: 'Open to remote full-time and contract work',
  summary:
    'Full-stack Python/Django developer with 2+ years in healthcare claims administration, combining production web development with deep healthcare EDI domain knowledge. Comfortable across the whole stack and the infrastructure underneath it, from Django and SQL Server to VMware, Proxmox, Docker, and Kubernetes. I also build LLM-powered applications end to end: chatbots, RAG pipelines, MCP servers, and agentic tooling.',
};

export type Role = {
  title: string;
  period: string;
  highlights: string[];
};

export type Job = {
  company: string;
  location: string;
  roles: Role[];
};

export const experience: Job[] = [
  {
    company: 'The Kempton Group Administrators',
    location: 'Oklahoma City, OK',
    roles: [
      {
        title: 'Software Developer / Data Analyst',
        period: 'Dec 2023 – Present',
        highlights: [
          'Built an end-to-end EDI integration system in Python that generates outbound files from the company claims system for delivery to vendors and ingests inbound vendor files back into it, automating both directions of the trading-partner exchange.',
          'Work across 834 enrollment, 837 claims, and 835 remittance transactions, reading and troubleshooting payer acknowledgment and response files to resolve rejections.',
          'Create and submit CMS Section 111 mandatory insurer reporting files and reconcile the returned response files.',
          'Built internal Python/Django web applications for client and broker communications, plus a wide range of Python tooling, including automated daily, weekly, and monthly reporting and a claims notification system that replaced a manual client outreach process.',
          'Administer company SQL databases: schema changes, query optimization, data integrity, and production availability.',
          'Support virtualized server infrastructure on VMware ESXi and Proxmox, manage endpoints through ScreenConnect and PDQ, and coordinate upgrades and Azure deployments with third-party IT vendors.',
        ],
      },
      {
        title: 'Information Systems Intern',
        period: 'May 2023 – Dec 2023',
        highlights: [
          'Built Power BI dashboards that reduced claims reporting turnaround by 30%.',
          'Deployed software solutions to Azure alongside the development team.',
        ],
      },
    ],
  },
  {
    company: 'Six Flags Frontier City',
    location: 'Oklahoma City, OK',
    roles: [
      {
        title: 'Managerial Supervisor',
        period: 'Apr 2017 – May 2023',
        highlights: [
          'Managed daily operations, scheduling, and contractor coordination for a 120-person team across eight supervisor areas.',
        ],
      },
    ],
  },
];

export const education = {
  school: 'Oklahoma State University',
  degree: 'B.S., Management Information Systems',
  location: 'Stillwater, OK',
  date: 'December 2023',
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'C#', 'HTML/CSS'] },
  {
    group: 'Backend',
    items: ['Django', 'Django REST Framework', 'Wagtail CMS', 'FastAPI', 'SQLAlchemy'],
  },
  {
    group: 'AI / LLM',
    items: [
      'LLM applications',
      'Prompt engineering',
      'RAG pipelines',
      'MCP servers',
      'Tool / function calling',
      'Agentic workflows',
      'OpenAI & Anthropic APIs',
      'Ollama',
      'PyTorch',
      'Claude Code',
    ],
  },
  {
    group: 'Frontend',
    items: ['Astro', 'HTML5', 'CSS3', 'JavaScript', 'HTMX', 'Tailwind CSS', 'Vite', 'Responsive design'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'SQL Server', 'pandas', 'Power BI', 'ETL', 'Reporting automation'],
  },
  {
    group: 'Healthcare EDI',
    items: [
      'ANSI X12 834',
      'ANSI X12 837',
      'ANSI X12 835',
      'Payer acknowledgments',
      'CMS Section 111',
      'Claims system integrations',
    ],
  },
  {
    group: 'Infrastructure & IT',
    items: [
      'VMware ESXi / vSphere',
      'Proxmox',
      'Docker',
      'Kubernetes (Talos)',
      'Flux CD / GitOps',
      'Traefik',
      'cert-manager',
      'Azure',
      'GCP Cloud Run',
      'Linux',
      'ScreenConnect',
      'PDQ Deploy / Inventory',
      'Managed file transfer',
    ],
  },
  {
    group: 'Practice',
    items: ['Git', 'CI/CD', 'Automated deployments', 'SOPS / age secrets', 'REST API design'],
  },
];
