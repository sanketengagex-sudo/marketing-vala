/**
 * ===================================================================
 * MARKETING VALA - COMPLETE PRODUCTION APPLICATION BUNDLE
 * ===================================================================
 * Universal execution: Works seamlessly both via local file:// protocol
 * (direct double-click on Windows) and on production web servers.
 */

(function () {
  'use strict';

  /* ===================================================================
     1. GLOBAL CONFIGURATION & CREDENTIALS
     =================================================================== */
  const CONFIG = {
    brandName: "Marketing Vala",
    tagline: "Growth • Code • Automation",

    contact: {
      phoneFormatted: "+91 9730032332",
      phoneRaw: "919730032332",
      email: "marketingvala.in@gmail.com",
      whatsappUrl: "https://wa.me/919730032332",
      mailtoUrl: "mailto:marketingvala.in@gmail.com",
      officeLocation: "India (Serving Pan-India & Global Remote Clients)",
      businessHours: "Mon – Sat: 9:30 AM – 7:30 PM IST"
    },

    // Paste your published Google Apps Script Web App URL here:
    googleAppsScriptUrl: "",

    // Social Media Profile URLs (Configurable - Facebook, Instagram, LinkedIn, Twitter, YouTube)
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      youtube: "#"
    }
  };

  // Expose config globally for user configuration inspection
  window.MARKETING_VALA_CONFIG = CONFIG;

  /* ===================================================================
     2. SERVICES DATA (ALL 20 SERVICES)
     =================================================================== */
  const SERVICES_DATA = [
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

  /* ===================================================================
     3. PORTFOLIO & CASE STUDY DEMOS
     =================================================================== */
  const PORTFOLIO_DATA = [
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

  /* ===================================================================
     4. UI INITIALIZATION & EVENT LISTENERS
     =================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileDrawer();
    initSocialAndContactLinks();
    initServicesSection();
    initPortfolioSection();
    initScopeEstimator();
    initModals();
    initScrollAnimations();
    initEnquiryForm();
  });

  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMobileDrawer() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    const navLinks = document.querySelectorAll('.mobile-nav-link, [data-close-drawer]');

    if (!toggleBtn || !drawer) return;

    const toggle = (force) => {
      const isOpen = typeof force === 'boolean' ? force : !drawer.classList.contains('open');
      drawer.classList.toggle('open', isOpen);
      toggleBtn.classList.toggle('active', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    toggleBtn.addEventListener('click', () => toggle());

    navLinks.forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        toggle(false);
      }
    });
  }

  function initSocialAndContactLinks() {
    document.querySelectorAll('[data-contact-phone]').forEach(el => {
      el.textContent = CONFIG.contact.phoneFormatted;
    });
    document.querySelectorAll('[data-contact-email]').forEach(el => {
      el.textContent = CONFIG.contact.email;
    });
    document.querySelectorAll('a[data-contact-phone-link]').forEach(el => {
      el.href = `tel:+${CONFIG.contact.phoneRaw}`;
    });
    document.querySelectorAll('a[data-contact-whatsapp-link]').forEach(el => {
      el.href = CONFIG.contact.whatsappUrl;
    });
    document.querySelectorAll('a[data-contact-email-link]').forEach(el => {
      el.href = CONFIG.contact.mailtoUrl;
    });

    // Social Media links (Facebook, Instagram, LinkedIn, Twitter, YouTube)
    const socialMap = {
      facebook: CONFIG.socialLinks.facebook,
      instagram: CONFIG.socialLinks.instagram,
      linkedin: CONFIG.socialLinks.linkedin,
      twitter: CONFIG.socialLinks.twitter,
      youtube: CONFIG.socialLinks.youtube
    };

    Object.entries(socialMap).forEach(([network, url]) => {
      const elements = document.querySelectorAll(`[data-social="${network}"], #social-${network}, #top-social-${network}`);
      elements.forEach(el => {
        if (url && url !== '#') {
          el.href = url;
          el.target = '_blank';
          el.rel = 'noopener noreferrer';
        } else {
          el.href = '#';
          el.title = `Marketing Vala on ${network.charAt(0).toUpperCase() + network.slice(1)} (Configurable in config.js)`;
          el.addEventListener('click', (e) => {
            if (el.getAttribute('href') === '#') {
              e.preventDefault();
              alert(`To connect our ${network.charAt(0).toUpperCase() + network.slice(1)} page, set the link in assets/js/config.js.`);
            }
          });
        }
      });
    });
  }

  /* ===================================================================
     5. RENDER SERVICES
     =================================================================== */
  function initServicesSection() {
    const container = document.getElementById('services-grid-container');
    const tabs = document.querySelectorAll('[data-service-filter]');

    if (container) {
      renderServicesList(container, 'all');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const filter = tab.getAttribute('data-service-filter');
          renderServicesList(container, filter);
          initScrollAnimations();
        });
      });

      container.addEventListener('click', (e) => {
        const exploreBtn = e.target.closest('[data-action="explore-service"]');
        const selectBtn = e.target.closest('[data-action="select-service"]');

        if (exploreBtn) {
          const serviceId = exploreBtn.getAttribute('data-id');
          openServiceDetailModal(serviceId);
        } else if (selectBtn) {
          const serviceName = selectBtn.getAttribute('data-service-name');
          focusEnquiryWithService(serviceName);
        }
      });
    }
  }

  function renderServicesList(containerElement, filterCategory) {
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
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button type="button" class="btn btn-outline-lime btn-sm" data-action="select-service" data-service-name="${service.name}">
            Book Service
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

  /* ===================================================================
     6. RENDER PORTFOLIO
     =================================================================== */
  function initPortfolioSection() {
    const container = document.getElementById('portfolio-grid-container');
    const tabs = document.querySelectorAll('[data-portfolio-filter]');

    if (container) {
      renderPortfolioList(container, 'all');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const filter = tab.getAttribute('data-portfolio-filter');
          renderPortfolioList(container, filter);
          initScrollAnimations();
        });
      });
    }
  }

  function renderPortfolioList(containerElement, filterCategory) {
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
      case 'performance': return 'Ads & Lead Funnels';
      case 'messaging': return 'WhatsApp & SMS';
      case 'engineering': return 'Websites & Apps';
      case 'ai_automation': return 'AI & Automation';
      case 'creative': return 'Creative & Media';
      default: return 'Project Demo';
    }
  }

  function getPortfolioVisual(type) {
    switch (type) {
      case 'graph':
        return `
          <svg width="180" height="100" viewBox="0 0 200 100" fill="none">
            <path d="M10 80 Q 50 75, 90 40 T 170 15" stroke="#E5B869" stroke-width="3" fill="none" />
            <circle cx="170" cy="15" r="5" fill="#E5B869" />
            <path d="M10 90 L190 90" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
            <rect x="20" y="55" width="20" height="35" rx="3" fill="rgba(229,184,105,0.15)" />
            <rect x="60" y="40" width="20" height="50" rx="3" fill="rgba(229,184,105,0.25)" />
            <rect x="100" y="25" width="20" height="65" rx="3" fill="rgba(229,184,105,0.4)" />
            <rect x="140" y="15" width="20" height="75" rx="3" fill="rgba(229,184,105,0.6)" />
          </svg>
        `;
      case 'chat':
        return `
          <svg width="180" height="110" viewBox="0 0 200 120" fill="none">
            <rect x="20" y="15" width="130" height="35" rx="10" fill="#1E2736" stroke="rgba(255,255,255,0.1)" />
            <rect x="30" y="25" width="80" height="6" rx="3" fill="#94A3B8" />
            <rect x="30" y="35" width="50" height="5" rx="2.5" fill="#64748B" />
            <rect x="50" y="65" width="130" height="42" rx="10" fill="rgba(229,184,105,0.15)" stroke="#E5B869" />
            <rect x="62" y="76" width="100" height="6" rx="3" fill="#E5B869" />
            <rect x="62" y="88" width="60" height="5" rx="2.5" fill="#FFFFFF" />
          </svg>
        `;
      case 'code':
        return `
          <svg width="180" height="100" viewBox="0 0 200 100" fill="none">
            <rect x="15" y="10" width="170" height="80" rx="8" fill="#10151E" stroke="rgba(255,255,255,0.12)" />
            <circle cx="28" cy="22" r="3" fill="#EF4444" />
            <circle cx="38" cy="22" r="3" fill="#F59E0B" />
            <circle cx="48" cy="22" r="3" fill="#E5B869" />
            <line x1="28" y1="40" x2="80" y2="40" stroke="#E5B869" stroke-width="3" stroke-linecap="round" />
            <line x1="28" y1="52" x2="140" y2="52" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" />
            <line x1="28" y1="64" x2="110" y2="64" stroke="#CBD5E1" stroke-width="2.5" stroke-linecap="round" />
            <line x1="28" y1="76" x2="60" y2="76" stroke="#E5B869" stroke-width="2.5" stroke-linecap="round" />
          </svg>
        `;
      case 'audio':
        return `
          <svg width="180" height="90" viewBox="0 0 200 90" fill="none">
            <circle cx="100" cy="45" r="32" fill="rgba(229,184,105,0.1)" stroke="#E5B869" stroke-width="1.5" />
            <circle cx="100" cy="45" r="20" fill="rgba(229,184,105,0.25)" />
            <path d="M96 36 L108 45 L96 54 Z" fill="#E5B869" />
            <path d="M50 45 Q 65 30, 80 45" stroke="#E5B869" stroke-width="2" stroke-linecap="round" fill="none" />
            <path d="M120 45 Q 135 60, 150 45" stroke="#E5B869" stroke-width="2" stroke-linecap="round" fill="none" />
          </svg>
        `;
      case 'design':
        return `
          <svg width="180" height="100" viewBox="0 0 200 100" fill="none">
            <rect x="25" y="10" width="60" height="80" rx="6" fill="#161D27" stroke="#E5B869" stroke-width="1.5" />
            <polygon points="55,42 63,54 47,54" fill="#E5B869" />
            <rect x="100" y="15" width="75" height="40" rx="4" fill="#1E2736" stroke="rgba(255,255,255,0.1)" />
            <rect x="100" y="62" width="75" height="28" rx="4" fill="rgba(229,184,105,0.15)" stroke="rgba(229,184,105,0.4)" />
          </svg>
        `;
      default:
        return `
          <svg width="180" height="90" viewBox="0 0 200 90" fill="none">
            <rect x="30" y="30" width="30" height="30" rx="6" fill="#1E2736" stroke="#E5B869" />
            <line x1="60" y1="45" x2="90" y2="45" stroke="#E5B869" stroke-width="2" />
            <rect x="90" y="30" width="30" height="30" rx="6" fill="#1E2736" stroke="#E5B869" />
            <line x1="120" y1="45" x2="150" y2="45" stroke="#E5B869" stroke-width="2" />
            <circle cx="160" cy="45" r="10" fill="#E5B869" />
          </svg>
        `;
    }
  }

  /* ===================================================================
     7. SPRINT ESTIMATOR
     =================================================================== */
  function initScopeEstimator() {
    const checkboxes = document.querySelectorAll('.scope-calc-check');
    const estTimeline = document.getElementById('est-timeline');
    const estPillars = document.getElementById('est-pillars');
    const estRoadmap = document.getElementById('est-roadmap');
    const consultBtn = document.getElementById('est-consult-btn');

    if (!checkboxes.length || !estTimeline) return;

    function updateEstimator() {
      const selected = Array.from(checkboxes).filter(c => c.checked);

      checkboxes.forEach(c => {
        const parentLabel = c.closest('.scope-checkbox-label');
        if (parentLabel) {
          parentLabel.classList.toggle('selected', c.checked);
        }
      });

      if (selected.length === 0) {
        estTimeline.textContent = 'Select at least 1 module';
        estPillars.textContent = '0 Services';
        estRoadmap.textContent = 'Please choose one or more focus areas to preview your project execution roadmap.';
        return;
      }

      let minDays = 0;
      let maxDays = 0;
      const selectedNames = [];

      selected.forEach(c => {
        const min = parseInt(c.dataset.minDays || '5', 10);
        const max = parseInt(c.dataset.maxDays || '10', 10);
        minDays = Math.max(minDays, min);
        maxDays += Math.round(max * 0.7);
        selectedNames.push(c.dataset.serviceName);
      });

      estPillars.textContent = `${selected.length} ${selected.length === 1 ? 'Selected Service' : 'Selected Services'}`;
      estTimeline.textContent = `${minDays} – ${maxDays} Business Days`;
      estRoadmap.innerHTML = `<strong>Recommended Project Plan:</strong> Custom rollout plan for <em>${selectedNames.slice(0, 2).join(' & ')}</em> with setup, testing, and full launch.`;
    }

    checkboxes.forEach(c => c.addEventListener('change', updateEstimator));
    updateEstimator();

    if (consultBtn) {
      consultBtn.addEventListener('click', () => {
        const selected = Array.from(checkboxes).filter(c => c.checked).map(c => c.dataset.serviceName);
        focusEnquiryWithService(selected.length ? selected.join(' + ') : 'Comprehensive Multi-Service Suite');
      });
    }
  }

  /* ===================================================================
     8. MODALS & CONSULTATION ACTIONS
     =================================================================== */
  function initModals() {
    const overlay = document.getElementById('modal-overlay');
    const closeBtns = document.querySelectorAll('[data-close-modal]');

    if (!overlay) return;

    const closeModal = () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeModal();
      }
    });

    document.querySelectorAll('[data-action="free-consultation"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        focusEnquiryWithService('Free Growth Consultation');
      });
    });
  }

  function openServiceDetailModal(serviceId) {
    const service = SERVICES_DATA.find(s => s.id === serviceId);
    if (!service) return;

    const overlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    if (!overlay || !modalContent) return;

    modalContent.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
        <span class="section-label">${service.categoryName}</span>
        <span class="tech-pill active">${service.badge}</span>
      </div>
      <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--text-primary);">${service.name}</h2>
      <p style="font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 24px; line-height: 1.6;">${service.detailedScope}</p>
      
      <div style="background: #F8FAFC; border: 1px solid var(--border-subtle); border-radius: 12px; padding: 20px; margin-bottom: 28px;">
        <h4 style="font-size: 0.95rem; color: var(--gold-primary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 14px;">Key Deliverables</h4>
        <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
          ${service.deliverables.map(del => `
            <div style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: var(--text-secondary);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${del}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 14px; flex-wrap: wrap;">
        <button type="button" class="btn btn-primary" id="modal-select-service-btn">
          Request Consultation for this Service
        </button>
        <a href="${CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(`Hi Marketing Vala! I want to discuss ${service.name}.`)}" target="_blank" rel="noopener" class="btn btn-whatsapp">
          Chat on WhatsApp
        </a>
      </div>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    const selectBtn = document.getElementById('modal-select-service-btn');
    if (selectBtn) {
      selectBtn.addEventListener('click', () => {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        focusEnquiryWithService(service.name);
      });
    }
  }

  function focusEnquiryWithService(serviceName) {
    const formSection = document.getElementById('contact');
    const serviceSelect = document.getElementById('form-service');

    if (serviceSelect && serviceName) {
      let matched = false;
      for (const opt of serviceSelect.options) {
        if (opt.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(opt.value.toLowerCase())) {
          opt.selected = true;
          matched = true;
          break;
        }
      }
      if (!matched && serviceSelect.options.length > 0) {
        serviceSelect.value = serviceSelect.options[1].value;
      }
    }

    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('form-name');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  }

  /* ===================================================================
     9. ACCESSIBLE ENQUIRY FORM & SECURE LEAD CAPTURE
     =================================================================== */
  let formRenderTimestamp = Date.now();

  function initEnquiryForm() {
    const form = document.getElementById('enquiry-form');
    if (!form) return;

    formRenderTimestamp = Date.now();

    const nameInput = document.getElementById('form-name');
    const phoneInput = document.getElementById('form-phone');
    const emailInput = document.getElementById('form-email');
    const companyInput = document.getElementById('form-company');
    const serviceInput = document.getElementById('form-service');
    const messageInput = document.getElementById('form-message');
    const privacyCheckbox = document.getElementById('form-privacy');
    const honeypotInput = document.getElementById('form-hp');
    const feedbackAlert = document.getElementById('form-feedback-alert');
    const submitBtn = document.getElementById('form-submit-btn');

    [nameInput, phoneInput, emailInput, messageInput].forEach(field => {
      if (!field) return;
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') {
          validateField(field);
        }
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Spam check 1: Honeypot trap
      if (honeypotInput && honeypotInput.value.trim() !== '') {
        console.warn('Bot submission trapped via honeypot field.');
        showFeedback(feedbackAlert, 'error', 'Submission flagged. Please try again.');
        return;
      }

      // Spam check 2: Speed check (less than 2.5 seconds indicates bot)
      const timeTaken = (Date.now() - formRenderTimestamp) / 1000;
      if (timeTaken < 2.5) {
        console.warn('Bot submission trapped via speed check:', timeTaken, 'seconds');
        showFeedback(feedbackAlert, 'error', 'Please take a moment to review your details before submitting.');
        return;
      }

      // Validate all fields
      const isNameValid = validateField(nameInput, (val) => val.trim().length >= 2, 'Please enter your full name (minimum 2 characters).');
      const isPhoneValid = validateField(phoneInput, (val) => /^(\+?\d{1,4}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/.test(val.replace(/\s+/g, '')), 'Please enter a valid phone number with area/country code.');
      const isEmailValid = validateField(emailInput, (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), 'Please enter a valid email address.');
      const isMessageValid = validateField(messageInput, (val) => val.trim().length >= 10, 'Please describe your project requirements (minimum 10 characters).');
      const isPrivacyValid = privacyCheckbox ? privacyCheckbox.checked : true;

      if (!isPrivacyValid) {
        const privacyErr = document.getElementById('error-privacy');
        if (privacyErr) {
          privacyErr.textContent = 'You must agree to the privacy terms to submit.';
          privacyErr.classList.add('visible');
        }
      } else {
        const privacyErr = document.getElementById('error-privacy');
        if (privacyErr) privacyErr.classList.remove('visible');
      }

      if (!isNameValid || !isPhoneValid || !isEmailValid || !isMessageValid || !isPrivacyValid) {
        showFeedback(feedbackAlert, 'warning', 'Please correct the highlighted fields above before submitting.');
        return;
      }

      // Generate Unique Lead ID
      const leadId = `MV-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const timestamp = new Date().toISOString();

      // Lead payload matching required 10 Google Sheets columns:
      // Lead ID, Timestamp, Name, Phone, Email, Company, Service, Source, Status, Notes
      const leadPayload = {
        leadId: leadId,
        timestamp: timestamp,
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        company: companyInput ? companyInput.value.trim() || "Not Specified" : "Not Specified",
        service: serviceInput ? serviceInput.value : "General Growth Enquiry",
        source: "Marketing Vala Website Form",
        status: "New Lead",
        notes: messageInput.value.trim()
      };

      setButtonLoading(submitBtn, true);

      try {
        const endpoint = CONFIG.googleAppsScriptUrl ? CONFIG.googleAppsScriptUrl.trim() : "";

        if (endpoint && endpoint.startsWith("https://script.google.com")) {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(leadPayload)
          });

          let result = {};
          try {
            result = await response.json();
          } catch (e) {
            result = { status: response.ok ? "success" : "unknown" };
          }

          if (response.ok && (result.status === "success" || result.result === "success" || response.status === 200)) {
            showFeedback(
              feedbackAlert, 
              'success', 
              `<strong>Enquiry Confirmed!</strong> Your lead has been securely recorded to our Google Sheets pipeline (Lead ID: <code>${leadId}</code>). Our team will reach out within 24 hours.`
            );
            form.reset();
            backupLeadLocally(leadPayload);
          } else {
            showFeedback(
              feedbackAlert,
              'warning',
              `Integration responded with a non-confirming status. Your details were preserved. Please also ping us directly via <a href="${CONFIG.contact.whatsappUrl}" target="_blank" rel="noopener">WhatsApp (${CONFIG.contact.phoneFormatted})</a> to guarantee immediate response.`
            );
            backupLeadLocally(leadPayload);
          }
        } else {
          // Endpoint not yet configured - honest fallback notice
          backupLeadLocally(leadPayload);

          const waText = encodeURIComponent(
            `Hello Marketing Vala Team! I just submitted an enquiry on your website.\n\n` +
            `*Lead ID:* ${leadId}\n` +
            `*Name:* ${leadPayload.name}\n` +
            `*Phone:* ${leadPayload.phone}\n` +
            `*Email:* ${leadPayload.email}\n` +
            `*Company:* ${leadPayload.company}\n` +
            `*Service:* ${leadPayload.service}\n` +
            `*Brief:* ${leadPayload.notes}`
          );

          const directWhatsAppUrl = `https://wa.me/${CONFIG.contact.phoneRaw}?text=${waText}`;

          showFeedback(
            feedbackAlert,
            'warning',
            `<strong>Notice:</strong> Your enquiry is preserved locally in your browser. (The Google Apps Script Web App URL has not been connected in <code>assets/js/config.js</code> yet.)<br><br>
             To ensure your message reaches our team immediately, please click below:<br>
             <a href="${directWhatsAppUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="margin-top: 10px; display: inline-flex;">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.9z"/></svg>
               Send Enquiry Directly via WhatsApp (+91 9730032332)
             </a>`
          );
        }
      } catch (err) {
        console.error('Submission error:', err);
        backupLeadLocally(leadPayload);
        showFeedback(
          feedbackAlert,
          'error',
          `Network error communicating with endpoint. Please contact us directly via WhatsApp <a href="${CONFIG.contact.whatsappUrl}" target="_blank" rel="noopener"><strong>${CONFIG.contact.phoneFormatted}</strong></a> or email <a href="${CONFIG.contact.mailtoUrl}"><strong>${CONFIG.contact.email}</strong></a>.`
        );
      } finally {
        setButtonLoading(submitBtn, false);
        formRenderTimestamp = Date.now();
      }
    });
  }

  function validateField(field, testFn, customMessage) {
    if (!field) return true;
    const errorEl = document.getElementById(`error-${field.name}`);
    const val = field.value || '';

    let isValid = true;
    let message = '';

    if (testFn) {
      isValid = testFn(val);
      message = customMessage || 'Invalid input';
    } else {
      isValid = val.trim().length > 0;
      message = 'This field is required';
    }

    if (!isValid) {
      field.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
      }
    } else {
      field.setAttribute('aria-invalid', 'false');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
      }
    }

    return isValid;
  }

  function showFeedback(element, type, htmlContent) {
    if (!element) return;
    element.className = `form-feedback-alert visible ${type}`;
    element.innerHTML = htmlContent;
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function setButtonLoading(btn, isLoading) {
    if (!btn) return;
    if (isLoading) {
      btn.disabled = true;
      btn.dataset.originalText = btn.innerHTML;
      btn.innerHTML = `
        <span class="pulse-indicator" style="margin-right: 8px;"></span>
        Verifying & Sending...
      `;
    } else {
      btn.disabled = false;
      btn.innerHTML = btn.dataset.originalText || 'Submit Consultation Request';
    }
  }

  function backupLeadLocally(payload) {
    try {
      const existing = JSON.parse(localStorage.getItem('marketing_vala_leads') || '[]');
      existing.unshift(payload);
      localStorage.setItem('marketing_vala_leads', JSON.stringify(existing.slice(0, 50)));
    } catch (e) {
      console.warn('Local backup failed', e);
    }
  }

  /* ===================================================================
     10. SCROLL REVEAL OBSERVER
     =================================================================== */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

})();
