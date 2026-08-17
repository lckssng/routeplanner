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
        </div>
        <div class="bg-white px-5 py-5 text-center text-xs font-semibold text-[#dd7510]">
          <p>© 2026 Stichting Voortgezet Onderwijs Parkstad Limburg</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
