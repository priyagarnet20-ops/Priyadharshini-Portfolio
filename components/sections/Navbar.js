const links = [
  { href: '#about', label: 'About' },
  { href: '#tools', label: 'Tools' },
  { href: '#projects', label: 'Projects' },
  { href: '#upcoming', label: 'Upcoming' },
  { href: '#testimonials', label: 'Experience' },
  { href: '#publications', label: 'Publications' },
  { href: '#hackathons-certificates', label: 'H&C' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ mobileOpen, onOpenMobile, onCloseMobile, scrolled, activeSection }) {
  return (
    <>
      <div
        id="mobileMenu"
        className={`fixed inset-0 z-[800] flex-col items-center justify-center gap-10 bg-warm-white ${
          mobileOpen ? 'flex' : 'hidden'
        }`}
      >
        <button className="absolute right-6 top-6 border-none bg-transparent text-2xl text-blackish" onClick={onCloseMobile}>
          ✕
        </button>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-playfair text-[2rem] font-bold text-blackish"
            onClick={onCloseMobile}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Priyadharshini_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center border border-blackish px-5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-blackish"
          onClick={onCloseMobile}
        >
          ↓ Resume
        </a>
      </div>

      <nav
        id="navbar"
        className={`fixed left-0 right-0 top-0 z-[900] border-b border-blackish/12 bg-[#F8F1E6] transition-[background,box-shadow] duration-[400ms] ${
          scrolled ? 'nav-scrolled' : ''
        }`}
      >
        <div className="mx-auto grid w-full max-w-[1820px] grid-cols-[1fr_auto_1fr] items-center px-4 py-2.5 md:px-4">
          <a className="justify-self-start font-playfair text-[2.1rem] font-semibold italic tracking-[-0.01em] text-blackish md:text-[2.22rem]" href="#hero">
            priya.dev
          </a>

          <ul className="nav-links hidden list-none items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-main-link text-[0.7rem] font-medium uppercase tracking-[0.11em] text-mid-gray ${
                    activeSection === link.href.slice(1) ? 'active' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center justify-self-end gap-3 md:flex">
            <a
              href="/Priyadharshini_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav-resume inline-flex items-center border border-blackish px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-blackish"
            >
              ↓ Resume
            </a>
          </div>

          <button className="hamburger justify-self-end flex flex-col gap-[5px] md:hidden" onClick={onOpenMobile}>
            <span className="block h-px w-6 bg-blackish" />
            <span className="block h-px w-6 bg-blackish" />
            <span className="block h-px w-6 bg-blackish" />
          </button>
        </div>
      </nav>
    </>
  );
}
