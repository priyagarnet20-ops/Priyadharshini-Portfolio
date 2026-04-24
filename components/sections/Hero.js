export default function Hero() {
  return (
    <section id="hero" className="min-h-screen overflow-hidden bg-[#F8F1E6] px-4 pt-[88px] md:px-8 md:pt-[96px]">
      <div className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-[1680px] grid-cols-1 content-center items-center gap-14 md:grid-cols-[1.08fr_0.92fr] md:gap-24">
        <div className="hero-left relative flex flex-col justify-center">
          <p className="hero-eyebrow mb-6 text-[0.72rem] uppercase tracking-[0.22em] text-mid-gray">B.Tech CSE · Amrita Vishwa Vidyapeetham</p>
          <h1 className="hero-name whitespace-nowrap font-playfair text-[clamp(2.2rem,7vw,5.6rem)] font-black leading-[0.95] tracking-[-0.03em] text-blackish">
            PRIYA <em className="text-accent-brown">DHARSHINI</em><span className="ml-[0.4em] inline-block">S</span>
          </h1>
         
          <p className="hero-quote mt-8 max-w-[420px] border-l-2 border-light-gray pl-5 text-[1.32rem] leading-[1.8] text-mid-gray">
           Passionate about building technology that is purposeful, reliable, and grounded in real-world impact.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block bg-blackish px-8 py-[14px] text-[0.78rem] uppercase tracking-[0.12em] text-cream transition duration-200 hover:-translate-y-[1px] hover:bg-dark-gray"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block border border-blackish px-8 py-[14px] text-[0.78rem] uppercase tracking-[0.12em] text-blackish transition duration-200 hover:bg-blackish hover:text-cream"
            >
              Get In Touch
            </a>
          </div>
          <div className="hero-scroll mt-12 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-mid-gray">
            <div className="hero-scroll-line h-px w-10 bg-mid-gray" />
            Scroll to explore
          </div>
        </div>

        <div className="hero-right relative flex items-center justify-start md:justify-end">
          <div className="hero-visual w-full max-w-[430px]">
            <div className="relative aspect-[3/4] overflow-hidden border border-blackish/10 bg-card-bg">
              <img
                src="/image2.jpeg"
                alt="Priyadharshini portrait"
                className="absolute inset-0 h-full w-full object-cover"
              />
              
              <div className="hero-big-letter absolute bottom-3 right-4 select-none font-playfair text-[clamp(5rem,9vw,8rem)] font-black italic leading-none text-transparent [text-stroke:1px_#D8D5CE] [-webkit-text-stroke:1px_#D8D5CE]">
                PS
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-[2px]">
              {[
                
                ['8+', 'Projects'],
                ['2', 'Papers'],
                ['2', 'Roles'],
              ].map(([num, label]) => (
                <div key={label} className="hero-stat bg-[#F5EEE2] px-2 py-2 text-center">
                  <div className="font-playfair text-[1rem] font-black leading-none">{num}</div>
                  <div className="mt-1 text-[0.52rem] uppercase tracking-[0.1em] text-mid-gray">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}