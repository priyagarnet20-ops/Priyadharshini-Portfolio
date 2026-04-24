const hackathons = [
  {
    title: 'Adobe GenSolve Hackathon',
    outcome: 'Selected for Round 2',
    details: 'Advanced through the initial screening round with a problem-solving focused submission.',
  },
  {
    title: 'Gemini API Developer Competition',
    outcome: 'Built Gem-Chef',
    details: 'Created an AI-powered smart kitchen assistant using Google Gemini for recipe guidance and contextual cooking help.',
  },
  {
    title: "Build2Break '24",
    outcome: 'Built SakhiCircle',
    details: 'Developed an AI credit scoring platform for rural Self-Help Groups to support fairer and data-backed financial decisions.',
  },
  {
    title: 'Eureka Challenge 3.0',
    outcome: 'Built Varroc DesignCopilot AI',
    details: 'Designed a CAD manufacturability validation system using XGBoost and SHAP for explainable production intelligence.',
  },
];

const certifications = [
  {
    name: 'Data Science for Engineers',
    issuer: 'IIT Madras',
  },
  {
    name: 'Introduction to Internet of Things',
    issuer: 'IIT Kharagpur',
  },
  {
    name: 'Data Mining',
    issuer: 'IIT Kharagpur',
  },
  {
    name: 'PEIS 2026 - Certificate of Presentation',
    issuer: 'NIT Uttarakhand',
  },
];

export default function HackathonsCertificates() {
  return (
    <section
      id="hackathons-certificates"
      className="relative overflow-hidden bg-[#EDE2D1] px-4 pb-[92px] pt-[124px] text-blackish md:px-8 md:pb-[120px] md:pt-[146px]"
    >
      <div className="mx-auto max-w-[1780px]">
        <div className="reveal mx-auto max-w-[1360px] border-b border-blackish/12 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[0.62rem] uppercase tracking-[0.26em] text-mid-gray/80">
            <span>07 / H&amp;C</span>
            <span>Performance Archive</span>
          </div>

          <h2 className="mt-7 font-playfair text-[clamp(2.6rem,6.2vw,5.2rem)] leading-[0.95] tracking-[-0.02em] text-blackish">
            Hackathons &amp;
            <br />
            <em className="italic text-accent-brown">certifications.</em>
          </h2>

          <p className="mt-5 max-w-[740px] text-[0.92rem] leading-[1.8] text-dark-gray/90">
            A dual-column performance ledger: one side captures competition builds and outcomes, the other records formal
            learning milestones.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1360px] grid-cols-1 gap-8 md:grid-cols-[0.62fr_0.38fr] md:gap-10">
          <div>
            <div className="mb-4 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray/80">
              <span>01 / Hackathons &amp; Competitions</span>
              <span>Built Under Pressure</span>
            </div>

            <div className="space-y-3">
              {hackathons.map((item) => (
                <article
                  key={item.title}
                  className="reveal group relative overflow-hidden border border-blackish/12 bg-[#F3EBDD] px-5 py-5 transition-colors duration-300 hover:bg-[#EFE2CF] md:px-6"
                >
                  <div className="pointer-events-none absolute right-4 top-3 font-playfair text-[2.3rem] italic leading-none text-blackish/8">
                    H
                  </div>
                  <h3 className="max-w-[92%] font-playfair text-[clamp(1.85rem,3.7vw,3rem)] leading-[1.02] text-blackish">{item.title}</h3>
                  <div className="mt-2 font-cormorant text-[1.02rem] italic text-mid-gray">{item.outcome}</div>
                  <p className="mt-3 text-[0.84rem] leading-[1.72] text-dark-gray/90">{item.details}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray/80">
              <span>02 / Certifications</span>
              <span>Formal Learning</span>
            </div>

            <div className="reveal border border-blackish/12 bg-[#EFE2CF] p-4 md:p-5">
              <div className="grid gap-px border border-blackish/10 bg-blackish/10">
                {certifications.map((item) => (
                  <article key={item.name} className="bg-[#F3E8D6] px-4 py-4">
                    <div className="text-[0.56rem] uppercase tracking-[0.18em] text-mid-gray">Certified Program</div>
                    <h3 className="mt-1 font-playfair text-[1.68rem] leading-[1.08] text-blackish">{item.name}</h3>
                    <div className="mt-1.5 text-[0.72rem] uppercase tracking-[0.15em] text-mid-gray">{item.issuer}</div>
                  </article>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-1 mt-5 border border-blackish/12 bg-[#F4ECDD] px-4 py-4">
              <div className="text-[0.56rem] uppercase tracking-[0.18em] text-mid-gray">Snapshot</div>
              <div className="mt-2 grid grid-cols-3 gap-px border border-blackish/10 bg-blackish/10">
                {[
                  ['04+', 'Hackathons'],
                  ['04', 'Certificates'],
                  ['08+', 'Total Milestones'],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[#F3E8D6] px-3 py-3 text-center">
                    <div className="font-playfair text-[1.8rem] leading-none text-blackish">{value}</div>
                    <div className="mt-1 text-[0.52rem] uppercase tracking-[0.16em] text-mid-gray">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
