/**
 * MARKETING VALA - GLOBAL CONFIGURATION
 * 
 * Instructions:
 * 1. To connect your Google Sheets lead capture:
 *    Deploy your Google Apps Script (from /google-apps-script/Code.gs) as a Web App,
 *    and paste the Web App URL into 'googleAppsScriptUrl' below.
 * 2. To configure your real social media profile URLs:
 *    Paste your actual handles/URLs in 'socialLinks'. Keep empty or '#' if not yet launched.
 * 3. Official contact numbers & emails are defined here.
 */

export const CONFIG = {
  brandName: "Marketing Vala",
  tagline: "Growth • Code • Automation",
  
  // Official Contact Credentials
  contact: {
    phoneFormatted: "+91 9730032332",
    phoneRaw: "919730032332",
    email: "marketingvala.in@gmail.com",
    whatsappUrl: "https://wa.me/919730032332",
    mailtoUrl: "mailto:marketingvala.in@gmail.com",
    officeLocation: "India (Serving Pan-India & Global Remote Clients)",
    businessHours: "Mon – Sat: 9:30 AM – 7:30 PM IST"
  },

  // Google Sheets Lead Capture Integration Endpoint
  // Paste your published Google Apps Script Web App URL here:
  // e.g. "https://script.google.com/macros/s/AKfycbx.../exec"
  googleAppsScriptUrl: "",

  // Social Media Profile URLs (Leave '#' or empty if not yet published - do not invent links)
  socialLinks: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
    youtube: "#"
  },

  // Disclaimer notices
  disclaimers: {
    whatsappLogging: "WhatsApp conversations and email messages are handled directly on their native platforms. They are only logged automatically into client CRM systems when official API webhooks are configured.",
    testimonials: "All testimonial slots are currently reserved as verified placeholders. Testimonials are published strictly upon authenticated client sign-off.",
    portfolio: "Showcase items are functional demos, architectural prototypes, and concept models developed by Marketing Vala."
  }
};
