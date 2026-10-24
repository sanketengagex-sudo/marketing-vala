/**
 * MARKETING VALA - PORTFOLIO & CASE STUDY DEMOS
 * All items are clearly labelled Demo / Concept Architecture
 * Adhering to strict transparency: No fabricated clients or fake numbers
 */

export const PORTFOLIO_DATA = [
  {
    id: "demo-lead-funnel",
    title: "High-Ticket Lead Generation & Routing Funnel",
    category: "performance",
    badge: "Demo / Concept Architecture",
    previewType: "graph",
    shortDesc: "A complete multi-stage lead capture system demonstrating automated qualification scoring, friction-free forms, and instant WhatsApp notification routing.",
    specs: ["Meta CAPI Tracking", "Google Ads Architecture", "Automated Lead Scoring", "Zero-Latency Routing"]
  },
  {
    id: "demo-messaging-hub",
    title: "Unified WhatsApp Cloud API & RCS Hub",
    category: "messaging",
    badge: "Concept Prototype",
    previewType: "chat",
    shortDesc: "Demonstration of enterprise conversational messaging: interactive WhatsApp bot flows with rich RCS carousels and intelligent SMS failover.",
    specs: ["Official WhatsApp Cloud API", "RCS Verified Sender", "DLT Gateway Failover", "Multi-Agent Support"]
  },
  {
    id: "demo-software-portal",
    title: "Custom Client Operations & Reporting Portal",
    category: "engineering",
    badge: "Functional Demo",
    previewType: "code",
    shortDesc: "Fast, responsive web dashboard prototype engineered for real-time campaign KPI inspection, automated billing, and secure client communication.",
    specs: ["Modular JavaScript", "Dark Modern UI/UX", "REST API Webhooks", "Zero-Build Architecture"]
  },
  {
    id: "demo-ai-voice",
    title: "Autonomous Inbound Voice AI Calling Agent",
    category: "ai_automation",
    badge: "AI Concept Demonstration",
    previewType: "audio",
    shortDesc: "Low-latency voice agent architecture model capable of handling routine client calls, qualifying project requirements, and booking calendar meetings.",
    specs: ["Natural Conversational Flow", "Multi-Lingual Capabilities", "Calendar Booking Sync", "Automated CRM Logging"]
  },
  {
    id: "demo-brand-identity",
    title: "High-CTR Kinetic Ad Creative & Reels System",
    category: "creative",
    badge: "Concept Creative Kit",
    previewType: "design",
    shortDesc: "A creative framework designed for paid media: high-contrast typography, 9:16 vertical video templates, and vector assets engineered to stop the scroll.",
    specs: ["9:16 Vertical Video", "Kinetic Motion Graphics", "Vector Brand Asset Kit", "High-Contrast Aesthetics"]
  },
  {
    id: "demo-workflow-sync",
    title: "Zero-Touch CRM & Lead Pipeline Automation",
    category: "ai_automation",
    badge: "Workflow Architecture Demo",
    previewType: "flow",
    shortDesc: "System design demonstrating end-to-end data synchronization between web enquiry forms, Google Sheets, automated email confirmations, and team alerts.",
    specs: ["Google Apps Script API", "Instant Webhook Triggers", "Data Deduplication", "Instant Notification"]
  }
];

export function renderPortfolio(containerElement, filterCategory = "all") {
  if (!containerElement) return;

  const filtered = filterCategory === "all"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === filterCategory);

  containerElement.innerHTML = filtered.map(item => `
    <article class="portfolio-card reveal-on-scroll" data-category="${item.category}">
      <div class="portfolio-preview">
        <span class="portfolio-concept-badge">${item.badge}</span>
        ${getPortfolioVisual(item.previewType)}
      </div>

      <div class="portfolio-body">
        <span class="portfolio-tag">${formatCategoryTag(item.category)}</span>
        <h3 class="portfolio-title">${item.title}</h3>
        <p class="portfolio-desc">${item.shortDesc}</p>

        <div class="portfolio-specs">
          ${item.specs.map(spec => `<span class="spec-chip">${spec}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function formatCategoryTag(cat) {
  switch (cat) {
    case 'performance': return 'Performance & Paid Media';
    case 'messaging': return 'Conversational & API Messaging';
    case 'engineering': return 'Software & Web Development';
    case 'ai_automation': return 'AI & Workflow Automation';
    case 'creative': return 'Creative & Visual Identity';
    default: return 'Architecture Concept';
  }
}

function getPortfolioVisual(type) {
  switch (type) {
    case 'graph':
      return `
        <svg width="180" height="100" viewBox="0 0 200 100" fill="none">
          <path d="M10 80 Q 50 75, 90 40 T 170 15" stroke="#10E56B" stroke-width="3" fill="none" />
          <circle cx="170" cy="15" r="5" fill="#10E56B" />
          <path d="M10 90 L190 90" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
          <rect x="20" y="55" width="20" height="35" rx="3" fill="rgba(16,229,107,0.15)" />
          <rect x="60" y="40" width="20" height="50" rx="3" fill="rgba(16,229,107,0.25)" />
          <rect x="100" y="25" width="20" height="65" rx="3" fill="rgba(16,229,107,0.4)" />
          <rect x="140" y="15" width="20" height="75" rx="3" fill="rgba(16,229,107,0.6)" />
        </svg>
      `;
    case 'chat':
      return `
        <svg width="180" height="110" viewBox="0 0 200 120" fill="none">
          <rect x="20" y="15" width="130" height="35" rx="10" fill="#1E2736" stroke="rgba(255,255,255,0.1)" />
          <rect x="30" y="25" width="80" height="6" rx="3" fill="#94A3B8" />
          <rect x="30" y="35" width="50" height="5" rx="2.5" fill="#64748B" />
          <rect x="50" y="65" width="130" height="42" rx="10" fill="rgba(16,229,107,0.15)" stroke="#10E56B" />
          <rect x="62" y="76" width="100" height="6" rx="3" fill="#10E56B" />
          <rect x="62" y="88" width="60" height="5" rx="2.5" fill="#FFFFFF" />
        </svg>
      `;
    case 'code':
      return `
        <svg width="180" height="100" viewBox="0 0 200 100" fill="none">
          <rect x="15" y="10" width="170" height="80" rx="8" fill="#10151E" stroke="rgba(255,255,255,0.12)" />
          <circle cx="28" cy="22" r="3" fill="#EF4444" />
          <circle cx="38" cy="22" r="3" fill="#F59E0B" />
          <circle cx="48" cy="22" r="3" fill="#10E56B" />
          <line x1="28" y1="40" x2="80" y2="40" stroke="#10E56B" stroke-width="3" stroke-linecap="round" />
          <line x1="28" y1="52" x2="140" y2="52" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" />
          <line x1="28" y1="64" x2="110" y2="64" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round" />
          <line x1="28" y1="76" x2="60" y2="76" stroke="#10E56B" stroke-width="2.5" stroke-linecap="round" />
        </svg>
      `;
    case 'audio':
      return `
        <svg width="180" height="90" viewBox="0 0 200 90" fill="none">
          <circle cx="100" cy="45" r="32" fill="rgba(16,229,107,0.1)" stroke="#10E56B" stroke-width="1.5" />
          <circle cx="100" cy="45" r="20" fill="rgba(16,229,107,0.25)" />
          <path d="M96 36 L108 45 L96 54 Z" fill="#10E56B" />
          <path d="M50 45 Q 65 30, 80 45" stroke="#10E56B" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="M120 45 Q 135 60, 150 45" stroke="#10E56B" stroke-width="2" stroke-linecap="round" fill="none" />
        </svg>
      `;
    case 'design':
      return `
        <svg width="180" height="100" viewBox="0 0 200 100" fill="none">
          <rect x="25" y="10" width="60" height="80" rx="6" fill="#161D27" stroke="#10E56B" stroke-width="1.5" />
          <polygon points="55,42 63,54 47,54" fill="#10E56B" />
          <rect x="100" y="15" width="75" height="40" rx="4" fill="#1E2736" stroke="rgba(255,255,255,0.1)" />
          <rect x="100" y="62" width="75" height="28" rx="4" fill="rgba(16,229,107,0.15)" stroke="rgba(16,229,107,0.4)" />
        </svg>
      `;
    default:
      return `
        <svg width="180" height="90" viewBox="0 0 200 90" fill="none">
          <rect x="30" y="30" width="30" height="30" rx="6" fill="#1E2736" stroke="#10E56B" />
          <line x1="60" y1="45" x2="90" y2="45" stroke="#10E56B" stroke-width="2" />
          <rect x="90" y="30" width="30" height="30" rx="6" fill="#1E2736" stroke="#10E56B" />
          <line x1="120" y1="45" x2="150" y2="45" stroke="#10E56B" stroke-width="2" />
          <circle cx="160" cy="45" r="10" fill="#10E56B" />
        </svg>
      `;
  }
}
