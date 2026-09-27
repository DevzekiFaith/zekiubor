'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiArrowRight } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '/',        label: 'Home' },
    { href: '/about',   label: 'About' },
    { href: '/services',label: 'Pillars' },
    { href: '/contact', label: 'Inquiry' },
  ];

  return (
    <>
      <header className={`ed-nav${scrolled ? ' scrolled' : ''}`}>
        {/* Left — Brand */}
        <Link href="/" className="ed-nav__brand" aria-label="Zeki Ubor home">
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text)', lineHeight: 1 }}>
            Zeki Ubor
          </span>
          <span className="ed-label" style={{ marginTop: '3px' }}>Human Architecture</span>
        </Link>

        {/* Center — Links */}
        <nav aria-label="Main navigation">
          <ul className="ed-nav__links">
            {navItems.map(item => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — CTA + Mobile toggle */}
        <div className="ed-nav__right" style={{ gap: '1.25rem', display: 'flex', alignItems: 'center' }}>
          <Link
            href="/contact"
            className="ed-btn ed-btn--gold"
            style={{ display: 'none' }}
            id="header-cta-desktop"
          >
            Inquiry
            <HiArrowRight style={{ width: 12, height: 12 }} />
          </Link>
          <style>{`
            @media (min-width: 768px) {
              #header-cta-desktop { display: inline-flex !important; }
            }
          `}</style>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'flex' }}
            className="md-menu-btn"
            id="mobile-menu-btn"
          >
            <HiMenu style={{ width: 22, height: 22 }} />
          </button>
          <style>{`
            @media (min-width: 768px) { #mobile-menu-btn { display: none !important; } }
          `}</style>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 200 }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              style={{
                position: 'fixed', right: 0, top: 0, bottom: 0,
                width: '100%', maxWidth: 320,
                background: 'var(--bg-alt)',
                borderLeft: '1px solid var(--border)',
                zIndex: 201,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: '2.5rem 2rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>
                    Zeki Ubor
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                  >
                    <HiX style={{ width: 22, height: 22 }} />
                  </button>
                </div>

                <nav>
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        style={{
                          display: 'block',
                          padding: '0.85rem 0',
                          borderBottom: '1px solid var(--border)',
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          color: 'var(--text)',
                          textDecoration: 'none',
                          letterSpacing: '-0.01em',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Quick Contact Info */}
                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a
                      href="tel:+2349119059859"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      +234 911 905 9859
                    </a>
                    <a
                      href="mailto:lightwavesupport@gmail.com"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        textTransform: 'none',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      lightwavesupport@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="ed-btn ed-btn--gold"
                style={{ width: '100%', justifyContent: 'center', marginTop: '2rem' }}
              >
                Start an Inquiry
                <HiArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}