(function () {
  "use strict";

  const followButton = document.querySelector("#followButton");

  followButton?.addEventListener("click", () => {
    const following = followButton.classList.toggle("btn-success");
    followButton.classList.toggle("btn-primary", !following);
    followButton.textContent = following ? "Following" : "Follow";
  });
})();
