class AppNavbar extends HTMLElement {
  connectedCallback() {
    const base = this.getBasePath();

    this.innerHTML = `
      <nav class="bg-neutral-primary text-white fixed top-0 w-full z-50">
        <div class="max-w-screen-xl mx-auto px-4 pt-4">

          <!-- NAVBAR BOX -->
          <div class="relative flex items-center justify-between px-6 py-3 bg-neutral-secondary-soft rounded-full">

            <!-- LOGO -->
            <a href="${base}index.html" class="flex items-center gap-3">
              <img
                src="${base}public/images/icons/Venom.png"
                class="h-7"
                alt="Venom Logo"
              />
              <span class="text-xl font-semibold text-heading">
                VenomDev
              </span>
            </a>

            <!-- DESKTOP MENU -->
            <div
              class="absolute left-1/2 -translate-x-1/2 hidden md:flex
                     bg-white/5 backdrop-blur px-6 py-2 rounded-full"
            >
              <ul class="flex items-center gap-6 text-sm font-medium">
                ${this.menuItem("Home", `${base}index.html`)}
                ${this.menuItem("Members", `${base}src/pages/members.html`)}
                ${this.menuItem("Schedule", `${base}src/pages/schedule.html`)}
                ${this.menuItem("Gallery", `${base}src/pages/gallery.html`)}
                ${this.menuItem("About", `${base}src/pages/about.html`)}
              </ul>
            </div>

            <!-- HAMBURGER -->
            <button
              id="menu-btn"
              class="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              <div class="hamburger"></div>
            </button>

            <!-- MOBILE MENU -->
            <div
              id="mobile-menu"
              class="absolute top-full mt-4 right-0 w-60 hidden md:hidden
                     bg-neutral-secondary-soft backdrop-blur rounded-2xl
                     p-4 shadow-xl"
            >
              <ul class="flex flex-col gap-2 text-sm font-medium">
                ${this.menuItem("Home", `${base}index.html`, true)}
                ${this.menuItem(
                  "Members",
                  `${base}src/pages/members.html`,
                  true
                )}
                ${this.menuItem(
                  "Schedule",
                  `${base}src/pages/schedule.html`,
                  true
                )}
                ${this.menuItem(
                  "Gallery",
                  `${base}src/pages/gallery.html`,
                  true
                )}
                ${this.menuItem("About", `${base}src/pages/about.html`, true)}
              </ul>
            </div>

          </div>
        </div>
      </nav>

      <!-- SPACER -->
      <div class="h-24"></div>
    `;

    this.initHamburger();
    this.setActiveMenu();
  }

  /* ================= UTIL ================= */

  getBasePath() {
    const path = window.location.pathname;
    if (path.includes("/src/pages/")) {
      return "../../";
    }
    return "./";
  }

  menuItem(label, link, mobile = false) {
    return `
      <li>
        <a
          href="${link}"
          class="nav-link block px-4 py-2 rounded-xl transition
          ${mobile ? "hover:bg-white/10" : "hover:text-white"}"
        >
          ${label}
        </a>
      </li>
    `;
  }

  /* ================= BEHAVIOR ================= */

  initHamburger() {
    const btn = this.querySelector("#menu-btn");
    const menu = this.querySelector("#mobile-menu");

    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      menu.classList.toggle("hidden");
    });

    // close when link clicked
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        btn.classList.remove("open");
        menu.classList.add("hidden");
      });
    });
  }

  setActiveMenu() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    const links = this.querySelectorAll(".nav-link");

    links.forEach((link) => {
      const target = link.getAttribute("href").split("/").pop();
      if (current === target) {
        link.classList.add("bg-white/10", "text-white");
      }
    });
  }
}

customElements.define("app-navbar", AppNavbar);
