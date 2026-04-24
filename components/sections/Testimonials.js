export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#EDE2D1] px-4 pb-[100px] pt-[125px] md:px-8 md:pb-[130px] md:pt-[145px]">
      <div className="mx-auto max-w-[1780px]">
        <div className="reveal mx-auto max-w-[1360px]">
          <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.26em] text-mid-gray/80">
            <span>05 / Experience &amp; Research</span>
            <span>In Practice</span>
          </div>

          <h2 className="mt-8 font-playfair text-[clamp(2.8rem,5.2vw,5.15rem)] leading-[0.98] tracking-[-0.02em] text-blackish">
            In <em className="italic">practice,</em>
            <br />
            in <em className="italic">print.</em>
          </h2>
        </div>

        <div className="reveal reveal-delay-1 mx-auto mt-10 grid max-w-[1360px] grid-cols-1 gap-9 md:grid-cols-[0.58fr_0.42fr]">
          <div>
            <div className="mb-4 text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray/80">Work</div>
            <div className="border-t border-blackish/12">
              <article className="py-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-playfair text-[2.45rem] leading-none text-blackish">Software Development Intern</h3>
                  <span className="pt-2 text-[0.56rem] uppercase tracking-[0.2em] text-mid-gray">Present</span>
                </div>
                <div className="mt-1.5 font-cormorant text-[1.08rem] italic text-mid-gray">at Platinum Softwares</div>
                <p className="mt-4 text-[0.86rem] leading-[1.75] text-dark-gray">
                  Building SS Bikez, a live motorcycle dealership CRM, end-to-end - enquiry management, appointments, follow-ups, and conversion tracking.
                </p>
                <ul className="mt-3 space-y-1.5 text-[0.78rem] leading-[1.6] text-dark-gray/90">
                  <li>- Architected salesperson-level data isolation and role-based access.</li>
                  <li>- Hardened production security for a Django + PostgreSQL deployment on Railway.</li>
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[0.56rem] uppercase tracking-[0.14em] text-mid-gray">
                  <span className="rounded-full border border-blackish/15 px-2 py-0.5">Django</span>
                  <span className="rounded-full border border-blackish/15 px-2 py-0.5">PostgreSQL</span>
                  <span className="rounded-full border border-blackish/15 px-2 py-0.5">Railway</span>
                </div>
              </article>

              <article className="border-t border-blackish/12 py-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-playfair text-[2.45rem] leading-none text-blackish">Web Designer</h3>
                  <span className="pt-2 text-[0.56rem] uppercase tracking-[0.2em] text-mid-gray">Present</span>
                </div>
                <div className="mt-1.5 font-cormorant text-[1.08rem] italic text-mid-gray">at Lander Studio</div>
                <p className="mt-4 text-[0.86rem] leading-[1.75] text-dark-gray">
                  Crafting high-conversion landing pages and onboarding flows with a focus on responsive layout, brand consistency, and UX performance.
                </p>
                <ul className="mt-3 space-y-1.5 text-[0.78rem] leading-[1.6] text-dark-gray/90">
                  <li>- Design systems in Figma, implementation in Framer.</li>
                  
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[0.56rem] uppercase tracking-[0.14em] text-mid-gray">
                  <span className="rounded-full border border-blackish/15 px-2 py-0.5">Figma</span>
                  <span className="rounded-full border border-blackish/15 px-2 py-0.5">Framer</span>
                </div>
              </article>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray/80">Experience Snapshot</div>

            <article className="border border-blackish/10 bg-[#EFE2CF] p-5">
              <p className="text-[0.9rem] leading-[1.8] text-dark-gray">
                My primary technical interests lie in Neural Networks and Deep Learning, Natural Language Processing, and Computer Vision - areas where I find the most intellectually challenging and impactful problems to work on.
              </p>
              <p className="mt-4 text-[0.9rem] leading-[1.8] text-dark-gray">
                Beyond the core ML domain, I have a genuine interest in UI/UX and web design - understanding how intelligent systems are presented and experienced is just as important to me as how they perform under the hood.
              </p>
              <p className="mt-4 text-[0.9rem] leading-[1.8] text-dark-gray">
                I am also drawn to Generative AI - not as a trend, but as a frontier with real, unsolved problems worth contributing to.
              </p>
              <p className="mt-4 text-[0.9rem] leading-[1.8] text-dark-gray">
                At the intersection of all these interests is a broader curiosity: how do you take something that works in research and make it work in the world?
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
