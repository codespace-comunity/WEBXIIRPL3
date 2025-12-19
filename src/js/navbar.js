class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="bg-neutral-primary text-white fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl mx-auto p-4">
                <!-- NAVBAR BOX -->
                <div
                class="relative flex items-center px-8 py-3 bg-neutral-secondary-soft rounded-full"
                >
                <!-- LOGO (LEFT) -->
                <a href="#" class="flex items-center gap-3">
                    <img
                    src="../../public/images/icons/Venom.png"
                    class="h-7"
                    alt="Venom Logo"
                    />
                    <span class="text-xl text-heading font-semibold whitespace-nowrap">
                    VenomDev
                    </span>
                </a>

                <!-- MENU (CENTER) -->
                <div
                    class="absolute left-1/2 -translate-x-1/2 hidden md:flex bg-white/5 backdrop-blur px-6 py-2 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                >
                    <ul class="flex items-center gap-6 text-sm font-medium">
                    <li>
                        <a
                        href="../../src/pages/index.html"
                        class="px-3 py-1 rounded-full text-heading hover:text-white transition"
                        >
                        Home
                        </a>
                    </li>
                    <li>
                        <a
                        href="../../src/pages/members.html"
                        class="px-3 py-1 rounded-full text-heading hover:text-white transition"
                        >
                        Members
                        </a>
                    </li>
                    <li>
                        <a
                        href="../../src/pages/schedule.html"
                        class="px-3 py-1 rounded-full text-heading hover:text-white transition"
                        >
                        Schedule
                        </a>
                    </li>
                    <li>
                        <a
                        href="../../src/pages/gallery.html"
                        class="px-3 py-1 rounded-full text-heading hover:text-white transition"
                        >
                        Gallery
                        </a>
                    </li>
                    <li>
                        <a
                        href="../../src/pages/about.html"
                        class="px-3 py-1 rounded-full text-heading hover:text-white transition"
                        >
                        About
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    `;
  }
}

customElements.define("app-navbar", AppNavbar);
