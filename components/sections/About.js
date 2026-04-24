export default function About() {
  return (
    <section id="about" className="relative bg-[#F2E9DB] px-4 pb-[110px] pt-[130px] md:px-8 md:pb-[130px] md:pt-[150px]">
      <div className="mx-auto max-w-[1780px]">
        <div className="reveal text-center">
          <div className="mx-auto flex max-w-[1360px] items-center justify-between text-[0.62rem] uppercase tracking-[0.26em] text-mid-gray/80">
            <span>01 / About</span>
            <span>Research Blueprint</span>
          </div>
          <div className="mx-auto mt-10 max-w-[1260px] font-playfair text-[clamp(2.15rem,4.9vw,4.55rem)] leading-[1.03] text-blackish">
            <div>Designing intelligent systems</div>
            <div className="italic">from first principle thinking</div>
            <div>to production-grade execution</div>
          </div>
        </div>

        <div className="mt-[95px] grid grid-cols-1 gap-9 md:mt-[120px] md:grid-cols-[0.95fr_1.05fr] md:gap-12">
          <div className="reveal reveal-delay-1 border-y border-blackish/10 py-7">
            <div className="text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray">Focus Areas</div>
            <div className="mt-5 flex flex-wrap gap-2.5 text-[0.68rem] uppercase tracking-[0.12em] text-blackish">
              {[
                'Neural Networks',
                'Deep Learning',
                'Natural Language Processing',
                
                'Full-Stack Systems',
                'Applied Research',
              ].map((item) => (
                <span key={item} className="border border-blackish/20 bg-[#F6EFE2] px-3 py-2">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 border-t border-blackish/10 pt-6">
              <div className="text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray">Current Track</div>
              <div className="mt-3 space-y-2 text-[0.92rem] leading-[1.6] text-dark-gray">
                <p>Interning - Platinum Softwares</p>
                <p>Working - Lander Studio</p>
                <p>B.Tech CSE - Amrita Vishwa Vidyapeetham (2023 - 2027)</p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-4 border border-blackish/10 bg-[#F6EFE2] p-5 md:p-7">
            <h2 className="font-playfair text-[clamp(2.1rem,4.2vw,3.8rem)] leading-[0.95] tracking-[-0.02em] text-blackish">
              About <em className="italic">me</em>
            </h2>

            <div className="mt-8 space-y-5 text-[1.08rem] leading-[1.9] text-dark-gray md:text-[1.14rem]">
              <p>
                I am Priyadharshini S, a Computer Science undergraduate building machine learning systems that are accurate, explainable, and practical in real-world environments.
              </p>
              <p>
                My work combines research depth with engineering discipline. I move from problem framing and model design to deployment and iteration, with a strong focus on reliability and clarity at every stage.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-3 border-t border-blackish/10 pt-6 sm:grid-cols-2">
              {[
                ['Discover', 'Study requirements, constraints, and data behavior before selecting an approach.'],
                ['Build', 'Develop robust pipelines and applications with measurable, testable outcomes.'],
                ['Validate', 'Benchmark results, interpret model behavior, and refine for production readiness.'],
                ['Scale', 'Deploy systems that can evolve with changing user, data, and business needs.'],
              ].map(([title, desc]) => (
                <div key={title} className="border border-blackish/12 bg-[#F9F4EA] p-4">
                  <div className="text-[0.64rem] uppercase tracking-[0.2em] text-mid-gray">{title}</div>
                  <p className="mt-2 text-[0.84rem] leading-[1.65] text-dark-gray">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}