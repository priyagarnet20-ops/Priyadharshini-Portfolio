export default function Analytics() {
  return (
    <section id="analytics" className="grid min-h-[60vh] grid-cols-1 bg-warm-white p-0 md:grid-cols-2">
      <div className="analytics-left reveal flex flex-col justify-center bg-card-bg px-6 py-20 md:px-[60px]">
        <div className="section-label text-[0.7rem] uppercase tracking-[0.2em] text-mid-gray">By the Numbers</div>
        <div className="mt-6 text-[0.85rem] text-mid-gray">Did you know?</div>
        <div className="font-playfair text-[clamp(5rem,10vw,9rem)] font-black leading-none tracking-[-0.04em]">93%</div>
        <div className="big-context mt-3 text-[0.88rem] leading-[1.8] text-mid-gray">
          of top tech companies value engineers who bridge networking and software development — exactly where I thrive.
        </div>
      </div>
      <div className="analytics-right reveal reveal-delay-1 flex flex-col justify-center px-6 py-20 md:px-[60px]">
        <div className="section-label text-[0.7rem] uppercase tracking-[0.2em] text-mid-gray">My Metrics</div>
        <div className="analytics-mini-grid mt-10 grid grid-cols-2 gap-6">
          {[
            ['1,200+', 'Lines of code daily'],
            ['350+', 'GitHub commits'],
            ['8', 'Hackathons participated'],
            ['147', 'Problems solved on LeetCode'],
          ].map(([num, label]) => (
            <div
              key={label}
              className="analytics-card border-l-[3px] border-blackish bg-card-bg px-5 py-6 transition-[border-color,transform] duration-300 hover:translate-x-1 hover:border-accent-brown"
            >
              <div className="font-playfair text-[1.8rem] font-black">{num}</div>
              <div className="mt-1 text-[0.72rem] text-mid-gray">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
