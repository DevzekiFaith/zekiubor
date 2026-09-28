'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Slight delay so it doesn't flash on initial load
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 3rem)',
            maxWidth: 680,
            zIndex: 9999,
            background: 'var(--bg-alt)',
            border: '1px solid var(--border-strong)',
            borderRadius: '4px',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            backdropFilter: 'blur(12px)',
          }}
          className="cookie-banner"
          role="dialog"
          aria-label="Cookie consent"
        >
          {/* Thin gold accent bar */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--gold) 0%, transparent 100%)',
            borderRadius: '4px 4px 0 0',
          }} />

          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem', fontWeight: 700 }}>
              [ Architecture of Privacy ]
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              This site uses cookies to analyse performance and improve your experience.{' '}
              <Link href="/contact" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                Learn more
              </Link>
              .
            </p>
          </div>

          <style>{`
            @media (max-width: 767px) {
              .cookie-banner {
                width: calc(100% - 1.5rem) !important;
                padding: 1rem 1.25rem !important;
                bottom: 1rem !important;
              }
              .cookie-banner > div:first-child {
                min-width: 100% !important;
                margin-bottom: 1rem !important;
              }
              .cookie-banner > div:last-child {
                width: 100% !important;
                justify-content: space-between !important;
              }
              .cookie-banner button {
                flex: 1 !important;
              }
            }
          `}</style>

          <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
            <button
              onClick={decline}
              style={{
                background: 'none',
                border: '1px solid var(--border-strong)',
                color: 'var(--text-muted)',
                padding: '0.55rem 1.25rem',
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-muted)'; e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              Decline
            </button>
            <button
              onClick={accept}
              style={{
                background: 'var(--gold)',
                border: '1px solid var(--gold)',
                color: '#000',
                padding: '0.55rem 1.5rem',
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: 700,
                borderRadius: '2px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
