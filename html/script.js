(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Footer year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ==============================
  // Bootstrap Exercise helpers
  // ==============================
  // Initialize Bootstrap tooltips if present on the page.
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (tooltipTriggerList.length && window.bootstrap?.Tooltip) {
    tooltipTriggerList.forEach((el) => new window.bootstrap.Tooltip(el));
  }

  // Example: If there is a local collapse section controlled by data-bs-toggle="collapse",
  // you can optionally log state changes (safe demo; no dependency on specific IDs).
  document.addEventListener('shown.bs.collapse', (e) => {
    // Only log on pages where this exercise exists.
    if (document.querySelector('[data-bs-toggle="collapse"]')) {
      // eslint-disable-next-line no-console
      console.log('Collapse shown:', e.target);
    }
  });

  document.addEventListener('hidden.bs.collapse', (e) => {
    if (document.querySelector('[data-bs-toggle="collapse"]')) {
      // eslint-disable-next-line no-console
      console.log('Collapse hidden:', e.target);
    }
  });


  // Mobile nav toggle
  const nav = $('.nav');
  const toggle = $('.nav__toggle');
  const menu = $('#navMenu');

  if (toggle && nav && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    $$('.nav__link', nav).forEach((a) => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scrolling for internal anchors
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Copy-to-clipboard buttons
  const copyButtons = $$('[data-copy]');
  for (const btn of copyButtons) {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = old), 900);
      } catch {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        const old = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = old), 900);
      }
    });
  }

  // Contact form UI (client-side demo)
  const form = $('#contactForm');
  const status = form ? form.querySelector('.form__status') : null;
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();

      status.textContent = 'Sending...';
      status.style.color = 'var(--neon)';

      // Simulated send
      setTimeout(() => {
        status.textContent = 'Message sent' + (name ? ', ' + name : '') + '! (Demo)';
        status.style.color = 'var(--neon2)';
        form.reset();
      }, 650);

    });
  }

  // Projects modal
  const modal = $('#projectModal');
  const overlayCloseBtns = $$('[data-close]', modal);
  const closeBtns = $$('[data-close]');

  const modalKicker = $('#modalKicker');
  const modalTitle = $('#modalTitle');
  const modalText = $('#modalText');
  const modalHighlights = $('#modalHighlights');
  const modalChips = $('#modalChips');
  const modalLink = $('#modalLink');

  const projectDetails = [
    {
      kicker: 'UI • Neon Dashboard',
      title: 'PulseBoard',
      text: 'A dark-mode dashboard with glow charts, responsive panels, and fast-feeling interactions. Designed to feel “live” without sacrificing clarity.',
      highlights: ['Glowing chart widgets', 'Responsive filter UI', 'Keyboard-friendly interactions'],
      chips: ['HTML', 'CSS', 'JS'],
      link: '#'
    },
    {
      kicker: 'Motion • Scanline Landing',
      title: 'Flux Landing',
      text: 'A landing page experiment with animated grid, subtle parallax-like feel, and modal story blocks. Built with accessibility in mind.',
      highlights: ['Scroll-friendly sections', 'Neon CTA components', 'Reduced-motion support'],
      chips: ['CSS', 'Animation', 'A11y'],
      link: '#'
    },
    {
      kicker: 'Tooling • Component Kit',
      title: 'Neon UI Kit',
      text: 'Reusable neon-themed components: buttons, cards, inputs, and micro-interactions. Structured for easy extension and consistent style.',
      highlights: ['Consistent glow system', 'Composable UI patterns', 'Accessible form styles'],
      chips: ['Design System', 'JS', 'CSS'],
      link: '#'
    },
    {
      kicker: 'Web App • Terminal Todo',
      title: 'Neon Tasks',
      text: 'A terminal-styled todo app with smooth interactions and clean state handling. Focused on keyboard usability and fast feedback.',
      highlights: ['Keyboard shortcuts', 'Snappy input UX', 'State-safe UI updates'],
      chips: ['JS', 'UX', 'State'],
      link: '#'
    }
  ];

  const openModalFor = (idx) => {
    const d = projectDetails[idx];
    if (!d || !modal) return;

    modalKicker.textContent = d.kicker;
    modalTitle.textContent = d.title;
    modalText.textContent = d.text;

    modalHighlights.innerHTML = '';
    for (const h of d.highlights) {
      const li = document.createElement('li');
      li.textContent = h;
      modalHighlights.appendChild(li);
    }

    modalChips.innerHTML = '';
    for (const c of d.chips) {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = c;
      modalChips.appendChild(span);
    }

    if (modalLink) modalLink.href = d.link || '#';

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const focusTarget = modal.querySelector('[data-close]');
    if (focusTarget) focusTarget.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  $$('#projects [data-project]').forEach((card, i) => {
    const open = () => openModalFor(i);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });

  // Close by overlay and buttons
  if (modal) {
    overlayCloseBtns.forEach((btn) => btn.addEventListener('click', closeModal));
    // Also allow any [data-close] inside the modal panel
    closeBtns.forEach((btn) => {
      if (btn.closest('#projectModal')) btn.addEventListener('click', closeModal);
    });
  }

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
})();

