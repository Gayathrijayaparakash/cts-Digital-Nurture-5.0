(function () {
  "use strict";

  const bootstrapApi = window.bootstrap || {};

  const selectors = {
    alert: "#assetAlert",
    alertDot: "#assetStatusDot",
    alertTitle: "#assetStatusTitle",
    alertDetails: "#assetStatusDetails",
    cssBadge: "#cssBadge",
    jsBadge: "#jsBadge",
    tooltipBadge: "#tooltipBadge",
    pluginBadge: "#pluginBadge",
    runCheckButton: "#runCheckButton",
    toastButton: "#toastButton",
    toast: "#statusToast",
    toastMessage: "#toastMessage",
  };

  const get = (selector) => document.querySelector(selector);

  function setBadge(selector, ok, label) {
    const badge = get(selector);
    if (!badge) return;

    badge.textContent = label || (ok ? "Ready" : "Missing");
    badge.classList.toggle("text-bg-success", ok);
    badge.classList.toggle("text-bg-danger", !ok);
    badge.classList.remove("text-bg-secondary");
  }

  function showToast(message) {
    const toastEl = get(selectors.toast);
    const messageEl = get(selectors.toastMessage);

    if (!toastEl || !bootstrapApi.Toast) return;
    if (messageEl) messageEl.textContent = message;

    bootstrapApi.Toast.getOrCreateInstance(toastEl, {
      autohide: true,
      delay: 2600,
    }).show();
  }

  function detectAssets() {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    const scripts = Array.from(document.querySelectorAll("script[src]"));

    const cssLoaded = links.some((link) => {
      const href = link.getAttribute("href") || "";
      return href.includes("bootstrap.min.css");
    });

    const jsLoaded = scripts.some((script) => {
      const src = script.getAttribute("src") || "";
      return src.includes("bootstrap.bundle.min.js");
    });

    const pluginsAvailable = ["Modal", "Collapse", "Toast"].every((name) => !!bootstrapApi[name]);
    const tooltipAvailable = !!bootstrapApi.Tooltip;

    return {
      cssLoaded,
      jsLoaded,
      pluginsAvailable,
      tooltipAvailable,
      allReady: cssLoaded && jsLoaded && pluginsAvailable && tooltipAvailable,
    };
  }

  function updateStatus() {
    const status = detectAssets();
    const alert = get(selectors.alert);
    const dot = get(selectors.alertDot);
    const title = get(selectors.alertTitle);
    const details = get(selectors.alertDetails);

    setBadge(selectors.cssBadge, status.cssLoaded);
    setBadge(selectors.jsBadge, status.jsLoaded);
    setBadge(selectors.tooltipBadge, status.tooltipAvailable, status.tooltipAvailable ? "Initialized" : "Missing");
    setBadge(selectors.pluginBadge, status.pluginsAvailable);

    if (alert) {
      alert.classList.toggle("alert-success", status.allReady);
      alert.classList.toggle("alert-danger", !status.allReady);
      alert.classList.remove("alert-secondary");
    }

    if (dot) {
      dot.classList.toggle("is-ok", status.allReady);
      dot.classList.toggle("is-error", !status.allReady);
    }

    if (title) {
      title.textContent = status.allReady
        ? "Local Bootstrap files are working."
        : "One or more Bootstrap assets need attention.";
    }

    if (details) {
      details.textContent = status.allReady
        ? "CSS, JS bundle, and interactive plugins were detected successfully."
        : "Check the local file paths for bootstrap.min.css and bootstrap.bundle.min.js.";
    }

    return status;
  }

  function initializeTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (!bootstrapApi.Tooltip) return;

    tooltipTriggers.forEach((el) => {
      bootstrapApi.Tooltip.getOrCreateInstance(el);
    });
  }

  function bindEvents() {
    const runCheckButton = get(selectors.runCheckButton);
    const toastButton = get(selectors.toastButton);
    const modal = get("#localModal");
    const collapse = get("#demoCollapse");

    runCheckButton?.addEventListener("click", () => {
      const status = updateStatus();
      showToast(status.allReady ? "Self check passed. Local Bootstrap is ready." : "Self check found a missing Bootstrap asset.");
    });

    toastButton?.addEventListener("click", () => {
      showToast("Toast plugin is running from the local Bootstrap bundle.");
    });

    modal?.addEventListener("shown.bs.modal", () => {
      showToast("Modal plugin opened successfully.");
    });

    collapse?.addEventListener("shown.bs.collapse", () => {
      showToast("Collapse section expanded.");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeTooltips();
    bindEvents();
    updateStatus();
  });
})();
