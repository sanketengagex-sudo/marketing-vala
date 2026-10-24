/**
 * MARKETING VALA - MAIN INTERACTIVE CONTROLLER
 * Orchestrates navigation, service filtering, scope calculator, modals, and dynamic content.
 */

import { CONFIG } from './config.js';
import { SERVICES_DATA, renderServices } from './services.js';
import { PORTFOLIO_DATA, renderPortfolio } from './portfolio.js';
import { initEnquiryForm } from './form.js';

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

/**
 * Header sticky styling and scroll effects
 */
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

/**
 * Mobile Drawer Menu
 */
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

  // Close drawer with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggle(false);
    }
  });
}

/**
 * Populate dynamic contact credentials and social profile links from config.js
 */
function initSocialAndContactLinks() {
  // Official Contact elements
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

  // Social Media links from config.js (Facebook, Instagram, LinkedIn, Twitter, YouTube)
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

/**
 * Service Tab Filtering & Detail Explorer
 */
function initServicesSection() {
  const container = document.getElementById('services-grid-container');
  const tabs = document.querySelectorAll('[data-service-filter]');

  if (container) {
    renderServices(container, 'all');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-service-filter');
        renderServices(container, filter);
        initScrollAnimations();
      });
    });

    // Delegate service card actions
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

/**
 * Portfolio Tab Filtering
 */
function initPortfolioSection() {
  const container = document.getElementById('portfolio-grid-container');
  const tabs = document.querySelectorAll('[data-portfolio-filter]');

  if (container) {
    renderPortfolio(container, 'all');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.getAttribute('data-portfolio-filter');
        renderPortfolio(container, filter);
        initScrollAnimations();
      });
    });
  }
}

/**
 * Interactive Project Scope & Timeline Estimator
 */
function initScopeEstimator() {
  const checkboxes = document.querySelectorAll('.scope-calc-check');
  const estTimeline = document.getElementById('est-timeline');
  const estPillars = document.getElementById('est-pillars');
  const estRoadmap = document.getElementById('est-roadmap');
  const consultBtn = document.getElementById('est-consult-btn');

  if (!checkboxes.length || !estTimeline) return;

  function updateEstimator() {
    const selected = Array.from(checkboxes).filter(c => c.checked);
    
    // Toggle label visual class
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
      maxDays += Math.round(max * 0.7); // Accounts for parallel development
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

/**
 * Modal System
 */
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

  // Wire all "Get a Free Consultation" CTA buttons
  document.querySelectorAll('[data-action="free-consultation"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      focusEnquiryWithService('Free Growth Consultation');
    });
  });
}

/**
 * Open Service Detail Modal
 */
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

/**
 * Scroll to enquiry form and preselect service
 */
function focusEnquiryWithService(serviceName) {
  const formSection = document.getElementById('contact');
  const serviceSelect = document.getElementById('form-service');

  if (serviceSelect && serviceName) {
    // Try to match with existing option
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

/**
 * Scroll Reveal Animation Observer
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
