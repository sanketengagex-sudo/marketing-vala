/**
 * MARKETING VALA - SERVICES DATA & CONTROLLER
 * Full Suite of 20 Services across 5 Specialized Categories
 */

export const SERVICES_DATA = [
  // 1. Creative & Brand Media
  {
    id: "graphic-design",
    name: "Graphic Design",
    category: "creative",
    categoryName: "Creative & Brand Media",
    badge: "Brand Visuals",
    shortDesc: "High-impact brand creatives, social media collaterals, pitch decks, and ad visuals built to stop the scroll.",
    deliverables: ["Social Media Post Kits", "Marketing & Ad Creatives", "Brochures & Digital Collateral", "Vector Brand Asset Delivery"],
    detailedScope: "Custom high-resolution graphic design tailored for digital performance. Every asset is engineered with brand typography, contrast hierarchy, and conversion psychology."
  },
  {
    id: "reels",
    name: "Reels & Short-Form Video",
    category: "creative",
    categoryName: "Creative & Brand Media",
    badge: "Viral Content",
    shortDesc: "Fast-paced, high-retention vertical reels and TikTok/YouTube Shorts engineered for organic reach and paid ads.",
    deliverables: ["Hook-Optimized Scriptwriting", "Dynamic Editing & Captions", "Sound Design & Motion Graphics", "Multi-Platform Export (9:16)"],
    detailedScope: "Vertical storytelling that grabs attention in the first 1.5 seconds. Designed for Instagram Reels, YouTube Shorts, and Meta video ads."
  },
  {
    id: "ai-videos",
    name: "AI Videos & Synthetic Media",
    category: "creative",
    categoryName: "Creative & Brand Media",
    badge: "Next-Gen AI",
    shortDesc: "Scalable video production using realistic AI avatars, multi-language voice cloning, and synthetic product showcases.",
    deliverables: ["Photorealistic AI Presenters", "Multi-Lingual Voiceovers", "Rapid Ad Variant Generation", "Cost-Effective Video at Scale"],
    detailedScope: "Eliminate expensive studio shoots. We produce ultra-realistic AI-powered spokesperson videos and localized promotional videos in minutes."
  },
  {
    id: "logo-design",
    name: "Logo Design & Identity",
    category: "creative",
    categoryName: "Creative & Brand Media",
    badge: "Identity",
    shortDesc: "Distinctive, memorable vector logos and complete visual identity systems that position your brand ahead of competitors.",
    deliverables: ["Primary & Secondary Marks", "Color Palette & Typography System", "Brand Style Guide Book", "Scalable Vector Formats (SVG, EPS, AI)"],
    detailedScope: "From concept ideation to scalable vector master files. Your brand identity is crafted to look stunning on both mobile screens and large-scale physical media."
  },

  // 2. Performance Marketing & Paid Acquisition
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    category: "performance",
    categoryName: "Performance Marketing",
    badge: "Full-Funnel ROI",
    shortDesc: "End-to-end data-driven ad management focusing ruthlessly on customer acquisition cost (CAC) and return on ad spend (ROAS).",
    deliverables: ["Full-Funnel Strategy Design", "Cross-Channel Budget Allocation", "Rapid Creative Testing Matrix", "Weekly Transparent Reporting"],
    detailedScope: "We align media spend with actual revenue outcomes. Every rupee or dollar deployed is tracked against qualified leads, sales, and ROAS targets."
  },
  {
    id: "lead-generation",
    name: "Lead Generation and Management",
    category: "performance",
    categoryName: "Performance Marketing",
    badge: "Pipeline Engine",
    shortDesc: "Predictable, qualified B2B and B2C lead pipelines paired with automated qualification and CRM routing systems.",
    deliverables: ["High-Converting Funnel Architecture", "Lead Qualification Scoring", "Instant WhatsApp/Email Notifications", "CRM Integration (HubSpot, Sheets, Zoho)"],
    detailedScope: "Never let a lead go cold. We capture high-intent inquiries and instantly route them to your sales team with automated follow-up sequences."
  },
  {
    id: "meta-ads",
    name: "Meta Ads (Instagram & Facebook)",
    category: "performance",
    categoryName: "Performance Marketing",
    badge: "Paid Social",
    shortDesc: "High-scaling Meta advertising campaigns targeting high-intent buyers using Advantage+ shopping and custom lookalikes.",
    deliverables: ["Campaign Hierarchy & Structure", "Creative Fatigue Management", "Custom & Lookalike Audiences", "Conversions API (CAPI) Tracking"],
    detailedScope: "Precision paid social on Facebook and Instagram. Combining striking ad creatives with robust Conversions API server-side tracking."
  },
  {
    id: "google-ads",
    name: "Google Ads (Search & PMax)",
    category: "performance",
    categoryName: "Performance Marketing",
    badge: "Search & Intent",
    shortDesc: "Capture active high-intent buyers at the exact moment of search with targeted Search, Performance Max, and YouTube campaigns.",
    deliverables: ["Negative Keyword Architecture", "High-CTR Responsive Search Ads", "Target CPA / Target ROAS Bidding", "Conversion Tracking Verification"],
    detailedScope: "Dominate search results when prospects search for your exact solutions. Optimized to weed out junk clicks and maximize high-intent inquiries."
  },
  {
    id: "campaign-optimisation",
    name: "Campaign Optimisation",
    category: "performance",
    categoryName: "Performance Marketing",
    badge: "CRO & Efficiency",
    shortDesc: "Continuous A/B testing of bids, creative hooks, landing pages, and copy to drive down cost per conversion.",
    deliverables: ["Landing Page CRO Audits", "A/B Testing Framework", "Bid Strategy Fine-Tuning", "Wasted Ad Spend Pruning"],
    detailedScope: "We continuously audit live campaigns to find efficiency leaks, test new variants systematically, and scale winning ad sets without blowing budgets."
  },
  {
    id: "audience-targeting",
    name: "Audience Targeting",
    category: "performance",
    categoryName: "Performance Marketing",
    badge: "Precision Segments",
    shortDesc: "Deep psychographic, demographic, and behavioral segmentation coupled with multi-touch retargeting funnels.",
    deliverables: ["First-Party Data Segmentation", "Hyper-Targeted In-Market Audiences", "Dynamic Sequential Retargeting", "Cross-Platform Audience Sync"],
    detailedScope: "Ensure your marketing budget is spent solely on prospective buyers with buying authority and verified interest in your product."
  },
  {
    id: "data-analysis",
    name: "Data Analysis & Reporting",
    category: "performance",
    categoryName: "Performance Marketing",
    badge: "Actionable Insights",
    shortDesc: "Transparent attribution dashboards, GA4 event tracking, and clean cohort analytics so you know your true CAC.",
    deliverables: ["Google Analytics 4 Custom Setup", "Interactive Looker Studio Dashboards", "Cross-Channel Attribution Modeling", "Executive KPI Summaries"],
    detailedScope: "No vanity metrics or confusing spreadsheets. We provide real-time dashboards showing exactly where your customers come from and what drives revenue."
  },

  // 3. Messaging & Direct Reach
  {
    id: "whatsapp-api",
    name: "WhatsApp API Automation",
    category: "messaging",
    categoryName: "Messaging & Direct Reach",
    badge: "Official Cloud API",
    shortDesc: "Automate customer support, lead qualification, payment links, and broadcast campaigns via Meta's Official WhatsApp Cloud API.",
    deliverables: ["Green Tick Verification Guidance", "Interactive Flow & Chatbot Setup", "CRM & Google Sheets Webhooks", "Broadcast Marketing Campaigns"],
    detailedScope: "Engage clients where they already spend their day. Build automated WhatsApp chatbots that qualify leads, book calls, and send notifications 24/7."
  },
  {
    id: "rcs-messaging",
    name: "RCS Messaging",
    category: "messaging",
    categoryName: "Messaging & Direct Reach",
    badge: "Rich Media SMS",
    shortDesc: "Next-generation Rich Communication Services with verified sender brand logos, interactive carousels, and one-tap action buttons.",
    deliverables: ["Verified Sender ID Onboarding", "Interactive Carousel Cards", "One-Tap Action Buttons (Call/Link)", "Real-time Read & Delivery Receipts"],
    detailedScope: "Transform boring plain-text SMS into branded, interactive mini-applications inside Android's native Messages app with verified trust badges."
  },
  {
    id: "transactional-sms",
    name: "Transactional/Service SMS",
    category: "messaging",
    categoryName: "Messaging & Direct Reach",
    badge: "High Delivery Rates",
    shortDesc: "High-speed DLT-compliant transactional SMS gateways for OTPs, critical alerts, order updates, and customer reminders.",
    deliverables: ["DLT Registration & Template Approval", "Ultra-Low Latency OTP Delivery", "Failover Routing Architecture", "REST API Webhook Integration"],
    detailedScope: "Reliable SMS infrastructure with 99.9% uptime. Automated failover routing ensures critical service updates and OTPs land within 3 seconds."
  },

  // 4. Web & Software Engineering
  {
    id: "website-design",
    name: "Website Design & Development",
    category: "engineering",
    categoryName: "Web & Software Engineering",
    badge: "Fast & Responsive",
    shortDesc: "Ultra-fast, mobile-first, conversion-optimized agency and corporate websites built with modern standards and accessible design.",
    deliverables: ["Responsive Mobile-First UI/UX", "Sub-second Page Load Speeds", "Interactive Lead Capture Elements", "Clean Semantic Codebase"],
    detailedScope: "Websites that don't just look pretty—they convert visitors into booked consultations. Optimized for Core Web Vitals, SEO, and lightning speeds."
  },
  {
    id: "seo",
    name: "Search Engine Optimisation (SEO)",
    category: "engineering",
    categoryName: "Web & Software Engineering",
    badge: "Organic Search",
    shortDesc: "Comprehensive technical SEO, keyword strategy, high-intent content architecture, and clean backlink profiling.",
    deliverables: ["Technical Site Health Audits", "High-Intent Keyword Roadmaps", "On-Page Schema & Structured Data", "Local SEO & Google Business Profile"],
    detailedScope: "Build an enduring organic traffic asset. We fix technical crawl errors, optimize schema markup, and rank your high-value commercial keywords."
  },
  {
    id: "custom-app-dev",
    name: "Custom App Development",
    category: "engineering",
    categoryName: "Web & Software Engineering",
    badge: "Web & Mobile Apps",
    shortDesc: "Custom web applications and hybrid mobile apps tailored to your business logic, client portals, and workflow needs.",
    deliverables: ["Scalable Front-End & Backend Stack", "Authentication & User Roles", "RESTful / GraphQL APIs", "Database Architecture & Backup"],
    detailedScope: "From client onboarding portals to specialized business calculators. We engineer dependable web apps with clean architecture and intuitive UI."
  },
  {
    id: "software-development",
    name: "Software Development",
    category: "engineering",
    categoryName: "Web & Software Engineering",
    badge: "Enterprise Systems",
    shortDesc: "Robust enterprise software solutions, internal tools, ERP micro-modules, and bespoke cloud integrations.",
    deliverables: ["Custom Backend Systems", "Third-Party API Integrations", "Secure Database Management", "Long-term Maintenance & Support"],
    detailedScope: "Eliminate repetitive manual tasks. We engineer bespoke software modules that connect your legacy systems, automate accounting, and sync inventory."
  },

  // 5. AI & Workflow Automation
  {
    id: "ai-calling-agents",
    name: "AI Calling Agents",
    category: "ai_automation",
    categoryName: "AI & Workflow Automation",
    badge: "Autonomous Voice",
    shortDesc: "Human-like autonomous inbound and outbound voice AI agents capable of answering questions, qualifying leads, and booking appointments.",
    deliverables: ["Sub-500ms Voice Latency", "Natural Human Conversational Flow", "Multi-Language & Accent Support", "Live CRM Sync & Call Recordings"],
    detailedScope: "Deploy conversational voice agents that handle inbound inquiries 24/7 or dial outbound leads within 30 seconds of an ad click to book sales calls."
  },
  {
    id: "workflow-automation",
    name: "Workflow Automation",
    category: "ai_automation",
    categoryName: "AI & Workflow Automation",
    badge: "Zero-Touch Ops",
    shortDesc: "Automate complex multi-step business operations using Zapier, Make, n8n, Python microservices, and LLM reasoning steps.",
    deliverables: ["End-to-End Workflow Mapping", "Lead-to-CRM-to-Invoice Automation", "AI Data Extraction & Document Parsing", "Automated Error Handling & Alerts"],
    detailedScope: "Connect your ads, CRM, messaging, invoices, and internal team alerts into a zero-touch pipeline that saves hundreds of team hours every month."
  }
];

/**
 * Render all service cards into container
 */
export function renderServices(containerElement, filterCategory = "all") {
  if (!containerElement) return;

  const filtered = filterCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === filterCategory);

  containerElement.innerHTML = filtered.map(service => `
    <article class="service-card reveal-on-scroll" data-service-id="${service.id}" data-category="${service.category}">
      <div class="service-card-top">
        <div class="service-icon-box">
          ${getServiceIcon(service.category)}
        </div>
        <span class="service-category-tag">${service.badge}</span>
      </div>

      <h3 class="service-title">${service.name}</h3>
      <p class="service-description">${service.shortDesc}</p>

      <div class="service-deliverables">
        ${service.deliverables.map(del => `
          <div class="deliverable-item">
            <span class="deliverable-dot"></span>
            <span>${del}</span>
          </div>
        `).join('')}
      </div>

      <div class="service-card-actions">
        <button type="button" class="service-details-btn" data-action="explore-service" data-id="${service.id}">
          Explore Scope
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <button type="button" class="btn btn-outline-lime btn-sm" data-action="select-service" data-service-name="${service.name}">
          Request Service
        </button>
      </div>
    </article>
  `).join('');
}

function getServiceIcon(category) {
  switch (category) {
    case 'creative':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    case 'performance':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>`;
    case 'messaging':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
    case 'engineering':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
    case 'ai_automation':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}
