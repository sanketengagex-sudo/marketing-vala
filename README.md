# Marketing Vala - Official Agency Website

A complete, premium, production-oriented website for **Marketing Vala** — a digital marketing, creative, software development, and AI automation agency.

Built with a bespoke dark charcoal, neon lime green, and pure white aesthetic, high-contrast typography, subtle micro-interactions, responsive mobile drawer navigation, accessible forms with anti-spam protection, and a documented Google Sheets lead capture integration.

---

## 🚀 Key Features

- **Brand Design System:** Modern dark charcoal (`#090B0E`, `#0F1319`, `#161C26`) with electric lime green (`#10E56B`) accents and crisp typography.
- **Original Vector Logo:** Custom vector mark combining a geometric "M" & "V" hybrid with an upward exponential growth vector and modern wordmark.
- **Complete Suite of 20 Services:**
  1. *Creative & Media:* Graphic Design, Reels & Short-Form Video, AI Videos & Synthetic Media, Logo Design & Identity.
  2. *Performance Marketing:* Performance Marketing, Lead Generation & Pipeline Management, Meta Ads, Google Ads, Campaign Optimisation, Audience Targeting, Data Analysis & Attribution.
  3. *Messaging & SMS:* WhatsApp API Automation, RCS Messaging, Transactional/Service SMS.
  4. *Web & Software:* Website Design & Development, Search Engine Optimisation (SEO), Custom App Development, Software Development.
  5. *AI & Automation:* Autonomous AI Calling Agents, Workflow Automation.
- **Interactive Sprint Estimator:** Prospective clients can select services and receive an agile roadmap and estimated turnaround time.
- **Conversion-Driven CTAs:** Integrated "Get a Free Consultation" and "Chat on WhatsApp (+91 9730032332)" triggers across all touchpoints.
- **Spam-Protected Enquiry Form:** Client-side validation, accessible ARIA states, honeypot spam traps, and speed-bot detection.
- **Honest Google Sheets Integration:** Does not falsely claim leads are saved unless confirmed. Includes local backup and 1-click WhatsApp forwarding fallback.
- **Policy Compliance:** Clear placeholders on all testimonials and case studies (labelled Demo/Concept). Transparent notices explaining WhatsApp and email logging rules.
- **Dedicated Privacy Policy:** Fully drafted at `privacy.html`.

---

## 📁 Project Directory Structure

```
c:\Users\Admin\Documents\MV\
├── index.html                   # Main landing page
├── privacy.html                 # Complete Privacy Policy page
├── README.md                    # Project documentation
├── assets/
│   ├── css/
│   │   ├── variables.css        # Design tokens (colors, radii, shadows, fonts)
│   │   ├── style.css            # Base, typography, layouts, components, responsive styles
│   │   └── animations.css       # Subtle micro-interactions, glow animations
│   ├── js/
│   │   ├── config.js            # Configuration (Phone, WhatsApp, Email, Sheets endpoint, Social links)
│   │   ├── main.js              # Navigation, mobile drawer, modals, estimator
│   │   ├── services.js          # All 20 services data, categories, and explorer
│   │   ├── portfolio.js         # Demonstration concepts & filtering
│   │   └── form.js              # Validation, anti-spam, and Google Apps Script handler
│   └── images/
│       ├── logo.svg             # Original vector logo
│       └── favicon.svg          # Favicon mark
└── google-apps-script/
    ├── Code.gs                  # Google Apps Script for Google Sheets lead capture
    └── README.md                # Step-by-step setup guide (English & Marathi)
```

---

## ⚙️ Configuration Guide

All primary contact details, social links, and Google Apps Script URLs are located in `assets/js/config.js`:

```javascript
export const CONFIG = {
  // Official Contact Details
  contact: {
    phoneFormatted: "+91 9730032332",
    phoneRaw: "919730032332",
    email: "marketingvala.in@gmail.com",
    whatsappUrl: "https://wa.me/919730032332",
    mailtoUrl: "mailto:marketingvala.in@gmail.com",
  },

  // Paste your published Google Apps Script Web App URL here:
  googleAppsScriptUrl: "https://script.google.com/macros/s/.../exec",

  // Social Media Profile Links (configure your real handles here):
  socialLinks: {
    instagram: "https://instagram.com/your_handle",
    facebook: "https://facebook.com/your_page",
    linkedin: "https://linkedin.com/company/your_company",
    youtube: "https://youtube.com/@your_channel",
    x: "https://x.com/your_handle",
    threads: "https://threads.net/@your_handle"
  }
};
```

---

## 📊 Google Sheets Setup (10 Columns)

When your Google Apps Script is deployed, it records leads into the following 10 columns:
1. `Lead ID`
2. `Timestamp`
3. `Name`
4. `Phone`
5. `Email`
6. `Company`
7. `Service`
8. `Source`
9. `Status`
10. `Notes`

Detailed setup steps are documented in [`google-apps-script/README.md`](google-apps-script/README.md).
