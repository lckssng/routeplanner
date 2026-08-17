const navItems = [
  ['Schoolkaart', '#schoolkaart'],
  ['Geschiedenis', '#geschiedenis'],
  ['Nieuws', '#nieuws'],
  ['Agenda', '#agenda'],
];

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header x-data="{ mobileOpen: false }" @keydown.escape.window="mobileOpen = false">
        <div class="bg-[#f7941d] text-white">
          <div class="mx-auto flex min-h-10 max-w-[1120px] items-center justify-between gap-4 px-5 py-2 text-[0.72rem] font-bold sm:px-8 sm:text-xs lg:px-10">
            <p>Horion · Landgraaf · Kerkrade</p>
            <a class="top-link" href="#agenda">Bekijk open dagen <span aria-hidden="true">»</span></a>
          </div>
        </div>

        <div class="border-b border-[#d7d3d5] bg-white shadow-[0_2px_8px_rgba(42,32,36,0.04)]">
          <div class="mx-auto flex min-h-[78px] max-w-[1120px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-10">
            <a href="#" class="logo" aria-label="Vindjouwschool.nl, naar de startpagina">
              <span class="text-[#009fe3]">vind</span><span class="text-[#e51075]">jouw</span><span class="text-[#f7941d]">school</span><span class="text-[#3e3a3c]">.nl</span>
            </a>

            <nav class="hidden items-center gap-8 lg:flex" aria-label="Hoofdnavigatie">
              ${navItems
                .map(
                  ([label, href]) =>
                    `<a class="nav-link" href="${href}">${label}</a>`,
                )
                .join('')}
              <a href="#routeplanner" class="nav-cta">Doe de routeplanner <span aria-hidden="true">›</span></a>
            </nav>

            <button
              type="button"
              class="mobile-menu-button lg:hidden"
              @click="mobileOpen = !mobileOpen"
              :aria-expanded="mobileOpen"
              aria-controls="mobile-navigation"
              aria-label="Open of sluit het menu"
            >
              <span :class="mobileOpen ? 'rotate-45 translate-y-[7px]' : ''"></span>
              <span :class="mobileOpen ? 'opacity-0' : ''"></span>
              <span :class="mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''"></span>
            </button>
          </div>

          <nav
            id="mobile-navigation"
            class="border-t border-[#eee8eb] bg-white px-5 pb-5 pt-3 lg:hidden"
            x-cloak
            x-show="mobileOpen"
            x-transition.opacity.duration.180ms
            aria-label="Mobiele navigatie"
          >
            <div class="mx-auto flex max-w-[1120px] flex-col">
              ${navItems
                .map(
                  ([label, href]) =>
                    `<a class="mobile-nav-link" href="${href}" @click="mobileOpen = false">${label}</a>`,
                )
                .join('')}
              <a href="#routeplanner" class="nav-cta mt-3 justify-center" @click="mobileOpen = false">Doe de routeplanner <span aria-hidden="true">›</span></a>
            </div>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);

