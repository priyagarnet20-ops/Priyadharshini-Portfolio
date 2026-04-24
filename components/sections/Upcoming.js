const upcoming = [
  {
    badge: 'In Progress',
    title: 'Enhancing Aviation and Flight Safety Through Near-Real-Time Weather Intelligence',
    subtitle: 'Near-real-time satellite weather intelligence for aviation safety',
    desc: 'A system that uses satellite data to monitor weather conditions in near real-time for aviation safety. It helps detect rapid changes in cloud coverage, cloud ceiling, and rainfall intensity, improving decision-making during take-off, landing, and low-altitude operations. The system provides continuous monitoring and risk awareness instead of relying on fixed-interval weather reports. Key features include real-time satellite weather monitoring, cloud detection and cloud ceiling estimation, precipitation intensity analysis, trend-based weather deterioration detection, and aviation risk assessment and guidance.',
    chips: ['Machine Learning', 'Deep Learning', 'Python', 'Satellite Data (MODIS, INSAT, Himawari)', 'Time-Series Analysis', 'Data Processing Pipelines'],
    progress: 40,
    number: '01',
  },
];

export default function Upcoming() {
  return (
    <section id="upcoming" className="relative overflow-hidden bg-[#F2E9DB] px-4 pb-[90px] pt-[126px] text-blackish md:px-8 md:pb-[118px] md:pt-[146px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[12%] top-[20%] h-[210px] w-[65%] rounded-[100%] border border-white/25" />
        <div className="absolute left-[10%] top-[28%] h-[250px] w-[76%] rounded-[100%] border border-white/18" />
        <div className="absolute right-[-20%] top-[38%] h-[230px] w-[62%] rounded-[100%] border border-white/18" />
        <div className="absolute left-[22%] bottom-[-13%] h-[220px] w-[62%] rounded-[100%] border border-white/14" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1780px]">
        <div className="reveal mx-auto max-w-[1360px]">
          <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.26em] text-mid-gray/80">
            <span>04 / Upcoming</span>
            <span>In The Studio</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[0.62fr_0.38fr] md:items-start">
            <h2 className="font-playfair text-[clamp(3rem,5.5vw,5.3rem)] leading-[0.98] tracking-[-0.02em] text-blackish">
              Quiet work,
              <br />
              <em className="italic">still in motion.</em>
            </h2>
            <p className="max-w-[320px] pt-2 text-[0.86rem] leading-[1.7] text-dark-gray/85 md:justify-self-end">
              A small field of things I am making right now. Some are prototypes, some are papers, all are curiosities worth returning to.
            </p>
          </div>

          <div className={`mt-9 grid grid-cols-1 gap-px border border-blackish/12 bg-blackish/12 ${upcoming.length === 1 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {upcoming.map((item) => (
              <article key={item.title} className={`reveal bg-[#F4ECDD] px-5 py-5 ${upcoming.length === 1 ? 'md:col-span-2' : ''}`}>
                <div className="flex items-center justify-between text-[0.5rem] uppercase tracking-[0.2em] text-mid-gray">
                  <span>- {item.badge}</span>
                  <span className="font-playfair text-[2rem] italic leading-none text-[#cdc0aa]">{item.number}</span>
                </div>

                <h3 className="mt-2 font-playfair text-[2rem] leading-none text-blackish">✧ {item.title}</h3>
                <div className="mt-2 font-cormorant text-[0.92rem] italic text-mid-gray">{item.subtitle}</div>
                <p className="mt-4 min-h-[80px] text-[0.8rem] leading-[1.72] text-dark-gray/90">{item.desc}</p>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-[0.5rem] uppercase tracking-[0.18em] text-mid-gray">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="mt-1 h-px w-full bg-blackish/14">
                    <div className="h-px bg-blackish" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-blackish/14 px-2.5 py-0.5 text-[0.52rem] uppercase tracking-[0.14em] text-mid-gray"
                    >
                      {chip}
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
