'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Tools from '@/components/sections/Tools';
import Projects from '@/components/sections/Projects';
import Upcoming from '@/components/sections/Upcoming';
import Testimonials from '@/components/sections/Testimonials';
import Publications from '@/components/sections/Publications';
import HackathonsCertificates from '@/components/sections/HackathonsCertificates';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function PortfolioPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    const bar = document.getElementById('progress-bar');

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = `${mx}px`;
        cursor.style.top = `${my}px`;
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = `${pct}%`;
      setNavScrolled(window.scrollY > 60);
    };

    const sections = document.querySelectorAll('section[id]');
    const sectionRatios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        sectionRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveSection(bestId);
        }
      },
      { threshold: [0.15, 0.3, 0.45, 0.6, 0.75] }
    );

    const sectionFadeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hysteresis: different enter/exit thresholds reduce flicker near viewport edges.
          if (entry.intersectionRatio >= 0.28) {
            entry.target.classList.add('section-visible');
          } else if (entry.intersectionRatio <= 0.12) {
            entry.target.classList.remove('section-visible');
          }
        });
      },
      { threshold: [0, 0.12, 0.2, 0.28, 0.4, 0.6], rootMargin: '-4% 0px -12% 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Keep reveal animation responsive on scroll up/down with stable class toggling.
          if (entry.intersectionRatio >= 0.2) {
            entry.target.classList.add('visible');
          } else if (entry.intersectionRatio <= 0.08) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: [0, 0.08, 0.14, 0.2, 0.35], rootMargin: '0px 0px -4% 0px' }
    );

    document.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll);
    sections.forEach((s) => {
      s.classList.add('page-section');
      observer.observe(s);
      sectionFadeObs.observe(s);
    });
    reveals.forEach((r) => revealObs.observe(r));
    animateRing();
    onScroll();

    return () => {
      document.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      sectionFadeObs.disconnect();
      revealObs.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleSubmit = () => {
    setSent(true);
    window.setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
      <div id="progress-bar" />

      <Navbar
        mobileOpen={mobileOpen}
        onOpenMobile={() => setMobileOpen(true)}
        onCloseMobile={() => setMobileOpen(false)}
        scrolled={navScrolled}
        activeSection={activeSection}
      />

      <Hero />
      <About />
      <div className="h-px w-full bg-blackish/12" />
      <Tools />
      <Projects />
      <Upcoming />
      <Testimonials />
      <Publications />
      <HackathonsCertificates />
      <Contact sent={sent} onSubmit={handleSubmit} />
      <Footer />
    </>
  );
}
