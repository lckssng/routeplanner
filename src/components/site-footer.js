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
        <div class="bg-[#f7941d] text-white">
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
                href="https://www.linkedin.com/company/svo-pl-stichting-voortgezet-onderwijs-parkstad-limburg-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volg SVO|PL op LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.1 8.3H2.7V21h3.4V8.3ZM4.4 3A2 2 0 1 0 4.4 7a2 2 0 0 0 0-4Zm16.9 10.7c0-3.8-2-5.6-4.8-5.6a4.2 4.2 0 0 0-3.8 2.1V8.3H9.3V21h3.4v-6.3c0-1.7.3-3.3 2.4-3.3s2.8 1.9 2.8 3.4V21h3.4v-7.3Z"></path>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white px-5 py-5 text-center text-xs font-semibold text-[#dd7510]">
          <p>© 2026 Stichting Voortgezet Onderwijs Parkstad Limburg</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
