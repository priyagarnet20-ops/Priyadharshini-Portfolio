const publications = [
  {
    state: 'Accepted',
    date: 'March 2026',
    title: 'Comparative Evaluation of Ensemble and Neural Models for Electric Truck Charging Duration Prediction',
    venue: 'PEIS 2026 - NIT Uttarakhand - Springer',
    abstract:
      'Evaluated ML and deep learning regression models for EV charging duration prediction. CatBoost achieved R2 of 0.79, enabling stronger fleet management and charging station optimization.',
    tags: ['Machine Learning', 'CatBoost', 'Regression', 'EV Systems'],
  },
  {
    state: 'Published',
    date: 'Feb 2025',
    title: 'Smart Pack: Using Digital Twins for Sustainable Food Packaging',
    venue: 'National Conference on Innovations in Sustainable Materials',
    abstract:
      'Researched Digital Twin integration to optimize packaging lifecycles, material selection, and supply-chain efficiency with sustainability-focused decision support.',
    tags: ['Digital Twin', 'Sustainability', 'Research', 'Systems Design'],
    isbn: 'ISBN 978-93-342-2480-1',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative overflow-hidden bg-[#F8F1E6] px-4 pb-[92px] pt-[124px] text-blackish md:px-8 md:pb-[120px] md:pt-[146px]">
      <div className="mx-auto max-w-[1780px]">
        <div className="reveal mx-auto max-w-[1360px] border-b border-blackish/12 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[0.62rem] uppercase tracking-[0.26em] text-mid-gray/80">
            <span>06 / Publications</span>
            <span>Research Works</span>
          </div>

          <h2 className="mt-7 font-playfair text-[clamp(2.8rem,6.2vw,5.4rem)] leading-[0.95] tracking-[-0.02em] text-blackish">
            Publications,
            <br />
            <em className="italic text-accent-brown">in full detail.</em>
          </h2>

          <p className="mt-5 max-w-[680px] text-[0.92rem] leading-[1.8] text-dark-gray/90">
            A focused archive of research output with abstract-led cards, timeline cues, and clear metadata.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1360px] grid-cols-1 gap-8 md:grid-cols-[0.14fr_0.86fr] md:gap-12">
          <aside className="relative hidden md:block">
            <div className="sticky top-[132px] border-l border-blackish/18 pl-5">
              <div className="font-playfair text-[2.8rem] leading-none text-blackish">02</div>
              <div className="mt-2 text-[0.56rem] uppercase tracking-[0.2em] text-mid-gray">Papers</div>
              <div className="mt-10 space-y-7 text-[0.56rem] uppercase tracking-[0.18em] text-mid-gray">
                <div className="relative pl-4 before:absolute before:left-0 before:top-[0.45rem] before:h-2 before:w-2 before:rounded-full before:bg-blackish">2026</div>
                <div className="relative pl-4 before:absolute before:left-0 before:top-[0.45rem] before:h-2 before:w-2 before:rounded-full before:bg-blackish/45">2025</div>
              </div>
            </div>
          </aside>

          <div className="space-y-5">
            {publications.map((paper) => (
              <article
                key={paper.title}
                className="reveal group relative overflow-hidden border border-blackish/12 bg-[#F2E7D6] px-5 py-6 transition-colors duration-300 hover:bg-[#EEE1CD] md:px-8 md:py-8"
              >
                <div className="pointer-events-none absolute right-[-2%] top-[-8%] font-playfair text-[clamp(5rem,11vw,9rem)] italic leading-none text-blackish/5">
                  P
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 text-[0.55rem] uppercase tracking-[0.2em] text-mid-gray">
                  <span>- {paper.state}{paper.isbn ? ` - ${paper.isbn}` : ''}</span>
                  <span>{paper.date}</span>
                </div>

                <h3 className="mt-4 max-w-[900px] font-playfair text-[clamp(2rem,4.5vw,3.3rem)] leading-[1.02] text-blackish transition-all duration-300 group-hover:tracking-[-0.01em]">
                  {paper.title}
                </h3>

                <div className="mt-2 font-cormorant text-[0.98rem] italic text-mid-gray">{paper.venue}</div>

                <p className="mt-4 max-w-[920px] text-[0.88rem] leading-[1.78] text-dark-gray">{paper.abstract}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blackish/18 bg-[#F7EEDF] px-2.5 py-1 text-[0.54rem] uppercase tracking-[0.16em] text-mid-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
