export type Section = {
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  kind: 'Day job' | 'Side project';
  context: string;
  stack: string[];
  sections: Section[];
  /** Renders the EDI flow diagram and X12 explorer on the case study page. */
  feature?: 'edi';
};

export const work: CaseStudy[] = [
  {
    slug: 'edi-integration',
    title: 'Two-way EDI for a claims system',
    summary:
      'A Python integration that builds outbound X12 files from the claims system and loads what vendors send back into it.',
    kind: 'Day job',
    context: 'The Kempton Group Administrators',
    stack: ['Python', 'SQL', 'X12 834 / 837 / 835', 'Managed file transfer'],
    feature: 'edi',
    sections: [
      {
        heading: 'The problem',
        body: [
          'A claims administrator trades files with a lot of outside parties: enrollment (834), claims (837), and remittance (835), plus the acknowledgments and response files that come back for each of them. Without an integration, every one of those exchanges means pulling data out of the claims system, sending it, and getting the responses back in by hand.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'An end-to-end integration in Python that handles both directions. Outbound, it reads from the company claims system and generates the files each vendor expects. Inbound, it picks up the files vendors send back and loads them into the claims system.',
          'Both directions of the trading-partner exchange are now automated.',
        ],
      },
      {
        heading: 'The part that takes judgment',
        body: [
          "X12 is strict about format and surprisingly loose in practice. Every trading partner reads the implementation guide a little differently, so a real share of the work is reading acknowledgment and response files, working out why a payer rejected something, and fixing it at the source instead of patching the file.",
        ],
      },
      {
        heading: 'Related: CMS Section 111',
        body: [
          'I also create and submit the CMS Section 111 mandatory insurer reporting files and reconcile the response files CMS returns.',
        ],
      },
    ],
  },
  {
    slug: 'client-communications',
    title: 'Client & broker apps, and claim notifications',
    summary:
      'Internal Django apps for client and broker communication, including a notification system that replaced a manual outreach process.',
    kind: 'Day job',
    context: 'The Kempton Group Administrators',
    stack: ['Django', 'Python', 'SQL'],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Keeping clients and brokers informed about their claims is a big part of a TPA\'s day. Client outreach about claims was a manual process.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'Internal Python/Django web applications for client and broker communications, and a claims notification system that replaced the manual client outreach process.',
        ],
      },
    ],
  },
  {
    slug: 'claims-reporting',
    title: 'Claims reporting, from Power BI to scheduled Python',
    summary:
      'Dashboards that cut claims reporting turnaround by 30%, followed by automated daily, weekly, and monthly reports.',
    kind: 'Day job',
    context: 'The Kempton Group Administrators',
    stack: ['Power BI', 'Python', 'pandas', 'SQL Server'],
    sections: [
      {
        heading: 'Dashboards',
        body: [
          'As an information systems intern I built Power BI dashboards for claims reporting. They reduced reporting turnaround by 30%.',
        ],
      },
      {
        heading: 'Scheduled reports',
        body: [
          'Since then I have automated the recurring daily, weekly, and monthly reporting in Python, so reports go out on schedule without anyone assembling them.',
        ],
      },
      {
        heading: 'The database underneath',
        body: [
          'I also administer the company SQL databases these reports read from: schema changes, query optimization, data integrity, and keeping production available.',
        ],
      },
    ],
  },
  {
    slug: 'home-cluster',
    title: 'A GitOps-managed Kubernetes cluster',
    summary:
      'Talos Linux on Proxmox, managed entirely through Flux CD, with encrypted secrets and automated image updates.',
    kind: 'Side project',
    context: 'Self-hosted',
    stack: ['Talos Linux', 'Proxmox', 'Flux CD', 'Cilium', 'Traefik', 'cert-manager', 'SOPS / age'],
    sections: [
      {
        heading: 'The setup',
        body: [
          'A self-hosted Talos Linux cluster running on Proxmox. Everything in it is declared in Git and applied by Flux CD; nothing is changed by hand with kubectl.',
        ],
      },
      {
        heading: 'What runs it',
        body: [
          'Cilium for networking, Traefik for ingress, and cert-manager for TLS certificates. Secrets live in the repository encrypted with SOPS and age, so the whole cluster can be rebuilt from Git.',
        ],
      },
      {
        heading: 'How a deploy happens',
        body: [
          'CI builds an image and pushes it. Flux image update automation notices the new tag, commits the change to the cluster repository, and reconciles it. A deploy is a Git commit, which means every deploy has a history and can be rolled back.',
        ],
      },
    ],
  },
  {
    slug: 'document-chatbot',
    title: 'A chatbot that answers from your documents',
    summary:
      'A Django app that ingests PDF, Word, and PowerPoint files and answers questions using retrieval-augmented generation.',
    kind: 'Side project',
    context: 'Personal project',
    stack: ['Django', 'MarkItDown', 'RAG', 'LLM APIs'],
    sections: [
      {
        heading: 'How it works',
        body: [
          'Uploaded PDF, Word, and PowerPoint files go through an ingestion pipeline built on MarkItDown, which turns them into clean text. A retrieval layer finds the passages relevant to a question and gives them to the model as context, so answers come from the documents rather than from the model\'s memory.',
        ],
      },
    ],
  },
  {
    slug: 'ai-assistant',
    title: 'A local AI assistant and MCP tooling',
    summary:
      'A voice and text assistant on Ollama with tool calling, plus MCP servers and multi-agent orchestration.',
    kind: 'Side project',
    context: 'Personal project',
    stack: ['Ollama', 'Python', 'MCP', 'Tool calling'],
    sections: [
      {
        heading: 'The assistant',
        body: [
          'A local-first voice and text assistant running on Ollama. It uses tool calling for web research and smart-home control, behind a web UI I built for it.',
        ],
      },
      {
        heading: 'MCP and agents',
        body: [
          'I built Model Context Protocol servers to expose tools to LLM clients, and multi-agent orchestration that delegates work across specialized sub-agents.',
        ],
      },
    ],
  },
];
