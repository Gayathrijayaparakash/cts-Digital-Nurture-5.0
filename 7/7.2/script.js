(function () {
  "use strict";

  const sampleInput = document.querySelector("#sampleInput");
  const previews = [
    document.querySelector("#uppercasePreview"),
    document.querySelector("#lowercasePreview"),
    document.querySelector("#capitalizePreview"),
  ];

  function updatePreviews() {
    const value = sampleInput?.value.trim() || "bootstrap text utilities are useful";

    previews.forEach((preview) => {
      if (preview) {
        preview.textContent = value;
      }
    });
  }

  sampleInput?.addEventListener("input", updatePreviews);
  updatePreviews();
})();
