const fixedFooter = document.querySelector("#fixedFooter");
const toggleFooterBtn = document.querySelector("#toggleFooterBtn");
const scrollBottomBtn = document.querySelector("#scrollBottomBtn");
const footerStatus = document.querySelector("#footerStatus");

toggleFooterBtn.addEventListener("click", () => {
  const isHidden = fixedFooter.classList.toggle("is-hidden");

  toggleFooterBtn.textContent = isHidden ? "Show Footer" : "Hide Footer";
  footerStatus.textContent = isHidden ? "Footer hidden" : "Pinned to bottom";
});

scrollBottomBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (!fixedFooter.classList.contains("is-hidden")) {
    footerStatus.textContent = window.scrollY > 80 ? "Still fixed while scrolling" : "Pinned to bottom";
  }
});
