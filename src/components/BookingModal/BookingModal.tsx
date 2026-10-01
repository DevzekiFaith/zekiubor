'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

export function openBookingModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-booking-modal'));
  }
}

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsLoading(true);
    };
    window.addEventListener('open-booking-modal', handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-booking-modal', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2.5rem)',
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '820px',
              height: 'min(760px, 92vh)',
              background: 'var(--bg-alt)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(226,190,120,0.2)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '1.25rem 1.75rem',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'linear-gradient(180deg, rgba(226,190,120,0.06) 0%, transparent 100%)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '6px',
                    background: 'rgba(226,190,120,0.12)',
                    color: 'var(--gold)',
                  }}
                >
                  <FaCalendarAlt style={{ width: 16, height: 16 }} />
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)', margin: 0 }}>
                    Direct Executive Scheduling
                  </h3>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    30-Minute Private Executive Advisory Session · Zeki Ubor
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close scheduling modal"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <HiX style={{ width: 22, height: 22 }} />
              </button>
            </div>

            {/* Calendly iFrame container */}
            <div style={{ flex: 1, position: 'relative', background: '#0f0f11' }}>
              {isLoading && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    color: 'var(--text-muted)',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '2px solid var(--border)',
                      borderTopColor: 'var(--gold)',
                      animation: 'spin 1s linear infinite',
                    }}
                  />
                  <span>Loading Executive Calendar...</span>
                </div>
              )}
              <iframe
                src="https://calendly.com/mindvestglobalresources/30min?embed_domain=zekiubor.com&embed_type=Inline&background_color=0f0f11&text_color=f3f3f3&primary_color=e2be78"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule 30-Minute Diagnostic with Zeki Ubor"
                onLoad={() => setIsLoading(false)}
                style={{ display: 'block', border: 'none' }}
              />
            </div>

            {/* Footer assist bar */}
            <div
              style={{
                padding: '0.85rem 1.75rem',
                borderTop: '1px solid var(--border)',
                background: 'var(--bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
                Direct confidential calendar for institutional leaders & founders.
              </span>
              <a
                href="https://wa.me/2349119059859?text=Hello%20Zeki%2C%20I%20am%20looking%20to%20schedule%20a%20private%20advisory%20session"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '11px',
                  color: '#25D366',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                <FaWhatsapp style={{ width: 14, height: 14 }} />
                <span>Prefer to schedule via WhatsApp?</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
