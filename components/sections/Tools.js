'use client';

import { useMemo, useState } from 'react';

const tabs = [
  {
    key: 'languages',
    label: 'Languages',
    title: 'Languages.',
    description: 'A curated - not exhaustive - list of the languages I use daily and the ones I enjoy most.',
    cards: [
      { no: '01', name: 'Python', level: 'Expert' },
      { no: '02', name: 'JavaScript', level: 'Advanced' },
      { no: '03', name: 'Java', level: 'Intermediate' },
      { no: '04', name: 'SQL', level: 'Advanced' },
    ],
    marquee: ['PostgreSQL', 'TensorFlow', 'Scikit-learn',  'FastAPI', 'Figma', 'Framer'],
  },
  {
    key: 'frameworks',
    label: 'Frameworks',
    title: 'Frameworks.',
    description: 'Libraries and frameworks I use to build fast, stable applications from prototyping to production.',
    cards: [
      { no: '01', name: 'Django', level: 'Advanced' },
      { no: '02', name: 'FastAPI', level: 'Advanced' },
      { no: '03', name: 'Next.js', level: 'Advanced' },
      { no: '04', name: 'React', level: 'Advanced' },
    ],
    marquee: ['Django', 'FastAPI', 'Next.js', 'React', 'Framer Motion'],
  },
  {
    key: 'databases',
    label: 'Databases',
    title: 'Databases.',
    description: 'Data systems and storage tools I use for relational modeling, analytics, and application scale.',
    cards: [
      { no: '01', name: 'PostgreSQL', level: 'Advanced' },
      { no: '02', name: 'Supabase', level: 'Advanced' },
      { no: '03', name: 'MySQL', level: 'Intermediate' },
      { no: '04', name: 'MongoDB', level: 'Intermediate' },
    ],
    marquee: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB'],
  },
  {
    key: 'tools',
    label: 'Tools',
    title: 'Tools.',
    description: 'Everyday instruments I rely on for collaboration, design, debugging, deployment, and shipping.',
    cards: [
      { no: '01', name: 'GitHub', level: 'Advanced' },
      { no: '02', name: 'Figma', level: 'Advanced' },
      { no: '03', name: 'Framer', level: 'Advanced' },
    ],
    marquee: ['GitHub', 'Figma', 'Framer'],
  },
];

export default function Tools() {
  const [activeTab, setActiveTab] = useState('languages');
  const activeData = useMemo(() => tabs.find((tab) => tab.key === activeTab) ?? tabs[0], [activeTab]);
  const unifiedMarquee = useMemo(() => Array.from(new Set(tabs.flatMap((tab) => tab.marquee))), []);

  return (
    <section id="tools" className="relative bg-[#EDE2D1] px-4 pb-[90px] pt-[120px] text-blackish md:px-8 md:pb-[120px] md:pt-[145px]">
      <div className="mx-auto max-w-[1780px]">
        <div className="reveal mx-auto max-w-[1360px]">
          <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.26em] text-mid-gray/80">
            <span>02 / Tools &amp; Technologies</span>
            <span>Stack &amp; Instruments</span>
          </div>

          <h2 className="mt-8 font-playfair text-[clamp(2.7rem,5.3vw,5.2rem)] leading-[0.98] tracking-[-0.02em] text-blackish">
            The <em className="italic">instruments</em>
            <br />
            I <em className="italic">reach</em> for.
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-b border-blackish/16 pb-3 text-[0.62rem] uppercase tracking-[0.18em] text-mid-gray">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-4 py-1.5 transition-colors duration-200 ${
                  activeTab === tab.key ? 'bg-blackish font-medium text-cream' : 'text-mid-gray hover:text-blackish'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-1 mx-auto mt-6 grid max-w-[1360px] grid-cols-1 gap-8 md:grid-cols-[0.38fr_0.62fr] md:gap-10">
          <div className="pt-3">
            <div className="text-[0.62rem] uppercase tracking-[0.24em] text-mid-gray/80">Category - {activeData.label}</div>
            <h3 className="mt-2 font-playfair text-[clamp(2.45rem,5vw,4.4rem)] italic leading-none text-blackish">{activeData.title}</h3>
            <p className="mt-4 max-w-[310px] text-[0.88rem] leading-[1.8] text-dark-gray/90">
              {activeData.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px border border-blackish/12 bg-blackish/12 lg:grid-cols-3">
            {activeData.cards.map((card) => (
              <article key={card.no} className="bg-[#F3EBDD] px-5 py-4">
                <div className="flex justify-end text-[0.55rem] uppercase tracking-[0.2em] text-mid-gray">{card.no}</div>
                <div
                  className={`mt-1 font-playfair leading-none text-blackish ${
                    card.name.length > 10 ? 'text-[1.72rem]' : 'text-[2rem]'
                  }`}
                >
                  {card.name}
                </div>
                <div className="mt-2 text-[0.58rem] uppercase tracking-[0.16em] text-mid-gray">{card.level}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2 mx-auto mt-11 max-w-[1360px] border-y border-blackish/12 py-3">
          <div className="tools-marquee">
            <div className="tools-marquee-track">
              {[...unifiedMarquee, ...unifiedMarquee].map((item, idx) => (
                <span key={`${item}-${idx}`} className="tools-marquee-item font-playfair text-[2.6rem] italic leading-none text-blackish/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
