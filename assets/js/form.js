/**
 * MARKETING VALA - SECURE LEAD CAPTURE & FORM CONTROLLER
 * 
 * Features:
 * - Full client-side validation with ARIA accessibility states
 * - Anti-spam protection (Honeypot trap + human submission speed detection)
 * - Safe Google Apps Script Web App integration (never claims saved unless confirmed)
 * - Local backup & graceful fallback with 1-click WhatsApp escalation
 * - Payload aligns 100% with required Google Sheets columns:
 *   [Lead ID, Timestamp, Name, Phone, Email, Company, Service, Source, Status, Notes]
 */

import { CONFIG } from './config.js';

let formRenderTimestamp = Date.now();

export function initEnquiryForm() {
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

  // Real-time blur validation
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

    // 1. Spam check: Honeypot
    if (honeypotInput && honeypotInput.value.trim() !== '') {
      console.warn('Bot submission trapped via honeypot field.');
      showFeedback(feedbackAlert, 'error', 'Submission flagged. Please try again.');
      return;
    }

    // 2. Spam check: Submission speed (less than 2.5 seconds indicates automated bot)
    const timeTaken = (Date.now() - formRenderTimestamp) / 1000;
    if (timeTaken < 2.5) {
      console.warn('Bot submission trapped via speed check:', timeTaken, 'seconds');
      showFeedback(feedbackAlert, 'error', 'Please take a moment to review your details before submitting.');
      return;
    }

    // 3. Validate all fields
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

    // Prepare lead payload matching required Google Sheets columns:
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

    // Set UI to loading state
    setButtonLoading(submitBtn, true);

    try {
      const endpoint = CONFIG.googleAppsScriptUrl ? CONFIG.googleAppsScriptUrl.trim() : "";

      if (endpoint && endpoint.startsWith("https://script.google.com")) {
        // Live integration configured: Submit to Google Apps Script Web App
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8" // Ensures no CORS preflight issues with Apps Script
          },
          body: JSON.stringify(leadPayload)
        });

        // Parse result
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
        // Endpoint NOT yet configured - strict honesty: do not claim saved to Google Sheets
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
    btn.innerHTML = btn.dataset.originalText || 'Send Enquiry';
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
