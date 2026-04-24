export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#F2E9DB] px-4 py-[80px] md:px-8 md:py-[120px]">
      <div className="container mx-auto max-w-[1680px]">
        <div className="contact-grid flex justify-center">
          <div className="contact-left mx-auto w-full max-w-[760px] text-center">
            <div className="section-label reveal mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-mid-gray">Let's Connect</div>
            <h2 className="section-title reveal reveal-delay-1 whitespace-nowrap font-playfair text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em]">
              Get In <em className="italic text-accent-brown">Touch.</em>
            </h2>
            <p className="contact-intro reveal reveal-delay-2 mt-6 font-cormorant text-[1.3rem] italic leading-[1.8] text-mid-gray">
              Open to internships, collaborations, research opportunities, and impactful software projects in machine learning, deep learning, and user experience design.
            </p>
            <div className="contact-links reveal reveal-delay-3 mx-auto mt-12 flex max-w-[720px] flex-col gap-4">
              {[
                ['mailto:priyadharshinisk20@gmail.com', 'priyadharshinisk20@gmail.com'],
                ['tel:+917397292200', '+91 7397292200'],
                ['https://www.linkedin.com/in/priyadharshini-senthilkumar-8217b3327', 'LinkedIn Profile'],
                ['https://www.amrita.edu', 'Amrita Vishwa Vidyapeetham'],
              ].map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center justify-between border-b border-blackish/12 py-4 text-blackish transition-[padding-left,color] duration-300 hover:pl-3 hover:text-accent-brown"
                >
                  <span className="text-[0.88rem] font-normal tracking-[0.05em]">{label}</span>
                  <span className="text-[1.2rem]">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
