const accordionStatus = document.querySelector("#accordionStatus");
const accordionPanels = document.querySelectorAll("#lessonAccordion .accordion-collapse");

const panelNames = {
  panelOne: "Panel one is open.",
  panelTwo: "Panel two is open.",
  panelThree: "Panel three is open."
};

accordionPanels.forEach((panel) => {
  panel.addEventListener("shown.bs.collapse", () => {
    accordionStatus.textContent = panelNames[panel.id];
  });
});
