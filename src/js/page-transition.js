document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  if (page) {
    requestAnimationFrame(() => {
      page.classList.add("enter");
    });
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (!link) return;

    e.preventDefault();

    const target = link.href;
    const overlay = document.getElementById("page-transition");

    overlay.classList.add("active");

    setTimeout(() => {
      window.location.href = target;
    }, 600);
  });
});
