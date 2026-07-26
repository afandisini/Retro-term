(function () {
  const html = document.documentElement;
  const sheet = document.querySelector("[data-sheet]");

  function setSheet(open) {
    if (!sheet) return;
    sheet.classList.toggle("is-open", open);
    sheet.setAttribute("aria-hidden", open ? "false" : "true");
  }

  document.querySelectorAll("[data-sheet-open]").forEach((button) => {
    button.addEventListener("click", () => setSheet(true));
  });

  document.querySelectorAll("[data-sheet-close]").forEach((button) => {
    button.addEventListener("click", () => setSheet(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setSheet(false);
  });

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    html.setAttribute("data-theme", html.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();

