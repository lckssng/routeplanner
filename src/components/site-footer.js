const footerColumns = [
  {
    title: 'Navigatie',
    links: ['Home', 'Schoolkaart', 'Geschiedenis', 'Nieuws', 'Agenda', 'Routeplanner', 'Cookieverklaring', 'Privacyverklaring'],
  },
  {
    title: 'Scholen',
    links: ['Beroepscollege Brandenberg', 'Beroepscollege Herle', 'Beroepscollege Holz', 'Beroepscollege PPL', 'Bernardinuscollege', 'De Nieuwe Thermen', 'Eijkhagen College', 'Sintermeertencollege', 'Techniekcollege'],
  },
  {
    title: 'Handige links',
    links: ['Regelingen', 'Organisatie', 'Ouders & Onderwijs', '9222 reisplanner', 'Schooladvies & Doorstroomtoets', 'Overgang middelbare school'],
  },
];

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="routeplanner">
        <div class="site-footer-main bg-[#f7941d] text-white">
          <div class="mx-auto grid max-w-[1120px] gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-20 lg:px-10 lg:py-14">
            ${footerColumns
              .map(
                ({ title, links }) => `
                  <section>
                    <h2 class="footer-title">${title}</h2>
                    <ul class="mt-4 space-y-1.5 text-[0.89rem] font-semibold italic leading-snug">
                      ${links
                        .map(
                          (label) =>
                            `<li><a href="#" class="footer-link">${label}</a></li>`,
                        )
                        .join('')}
                    </ul>
                  </section>
                `,
              )
              .join('')}
          </div>
          <div class="footer-social-bar">
            <p class="footer-social-title">Volg ons</p>
            <div class="footer-social-links">
              <a
                class="footer-social-link"
                href="https://www.instagram.com/vindjouwschool.nl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volg Vindjouwschool.nl op Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <circle cx="12" cy="12" r="4.25"></circle>
                  <circle class="footer-social-dot" cx="17.4" cy="6.7" r="1"></circle>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                class="footer-social-link"
                href="https://www.facebook.com/vindjouwschool.nl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volg Vindjouwschool.nl op Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.55 21v-8h2.75l.42-3.2h-3.17V7.75c0-.93.26-1.56 1.6-1.56h1.7V3.33A22.6 22.6 0 0 0 14.37 3c-2.45 0-4.12 1.49-4.12 4.23V9.8H7.48V13h2.77v8h3.3Z"></path>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div class="site-footer-bottom bg-white px-5 py-5 text-center text-xs font-semibold text-[#dd7510]">
          <p>© 2026 Stichting Voortgezet Onderwijs Parkstad Limburg</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
