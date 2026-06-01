(function () {
  "use strict";

  const searchForm = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#searchInput");
  const searchAlert = document.querySelector("#searchAlert");
  const clearSearchButton = document.querySelector("#clearSearchButton");
  const mainNavbar = document.querySelector("#mainNavbar");
  const searchCards = document.querySelectorAll(".search-card");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function setSearchMessage(message, type) {
    if (!searchAlert) return;

    searchAlert.textContent = message;
    searchAlert.className = `alert alert-${type} border-${type}`;
  }

  function closeMobileNavbar() {
    if (!mainNavbar || !window.bootstrap) return;

    const collapse = window.bootstrap.Collapse.getOrCreateInstance(mainNavbar, {
      toggle: false,
    });

    collapse.hide();
  }

  function resetSearch() {
    searchCards.forEach((card) => {
      card.classList.remove("is-hidden", "is-match");
    });

    searchAlert?.classList.add("d-none");

    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }
  }

  function runSearch() {
    const query = searchInput?.value.trim().toLowerCase() || "";

    searchCards.forEach((card) => {
      card.classList.remove("is-hidden", "is-match");
    });

    if (!query) {
      setSearchMessage("Type something to search the navbar examples.", "warning");
      return;
    }

    let matchCount = 0;

    searchCards.forEach((card) => {
      const haystack = `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();
      const isMatch = haystack.includes(query);

      card.classList.toggle("is-hidden", !isMatch);
      card.classList.toggle("is-match", isMatch);

      if (isMatch) {
        matchCount += 1;
      }
    });

    if (matchCount) {
      setSearchMessage(`Found ${matchCount} result${matchCount === 1 ? "" : "s"} for "${query}".`, "success");
    } else {
      setSearchMessage(`No results found for "${query}". Try logo, links, or search.`, "danger");
    }

    searchAlert?.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMobileNavbar();
  }

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    runSearch();
  });

  clearSearchButton?.addEventListener("click", resetSearch);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
})();
