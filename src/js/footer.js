class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-neutral-900 border-t border-white/10 mt-12 text-white">
        <div class="max-w-screen-xl mx-auto px-6 py-10">
          
          <!-- TOP -->
          <div class="flex flex-col md:flex-row md:justify-between gap-8">
            
            <!-- BRAND -->
            <div>
              <h2 class="text-xl font-semibold tracking-wide">
                Web Kelas XII RPL 3
              </h2>
              <p class="mt-2 text-sm text-white/60 max-w-sm">
                Official class website for documentation, schedule, members, and gallery.
              </p>
            </div>

            <!-- CONTACT -->
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wider text-white/80">
                Contact
              </h3>

              <ul class="mt-4 space-y-3 text-sm">
                <!-- Email -->
                <li class="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition">
                  ${this.iconMail()}
                  <a href="luminescent.10rpl3@gmail.com">
                    luminescent.10rpl3@gmail.com
                  </a>
                </li>

                <!-- Instagram -->
                <li class="flex items-center gap-3 text-white/70 hover:text-pink-400 transition">
                  ${this.iconInstagram()}
                  <a href="https://www.instagram.com/elvesoftthree?igsh=amRlcWxqOWxxYXR6" target="_blank">
                    @elvesoftthree
                  </a>
                </li>

                <!-- TikTok -->
                <li class="flex items-center gap-3 text-white/70 hover:text-white transition">
                  ${this.iconTikTok()}
                  <a href="https://www.tiktok.com/@10rpl.3?_t=8g8oAKctRez&_r=1" target="_blank">
                    @10rpl.3
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- DIVIDER -->
          <div class="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
            © ${new Date().getFullYear()} XII RPL 3. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }

  iconMail() {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 7l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
      </svg>
    `;
  }

  iconInstagram() {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5"
        viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1"/>
      </svg>
    `;
  }

  iconTikTok() {
    return `
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.7 2h2.1c.3 2 1.6 3.7 3.5 4.2v2.2
          c-1.6.1-3.2-.4-4.6-1.3v6.1
          c0 3.1-2.6 5.7-5.7 5.7S2.3 16.3 2.3 13.2
          4.9 7.5 8 7.5c.4 0 .8 0 1.2.1v2.3
          c-.4-.1-.8-.2-1.2-.2-1.9 0-3.4 1.5-3.4 3.4
          0 1.9 1.5 3.4 3.4 3.4
          1.9 0 3.3-1.5 3.3-3.4V2z"/>
      </svg>
    `;
  }
}

customElements.define("app-footer", AppFooter);
