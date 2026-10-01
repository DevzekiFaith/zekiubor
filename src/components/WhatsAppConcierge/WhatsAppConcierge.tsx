'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiX, HiArrowRight } from 'react-icons/hi';

const quickTopics = [
  { label: 'Executive Advisory',    text: 'Hello Zeki, I am interested in private 1-on-1 executive advisory and leadership architecture.' },
  { label: 'The Becoming Institute',text: 'Hello Zeki, I would like to inquire about The Becoming Institute and masterclass.' },
  { label: 'Keynote / Masterclass', text: 'Hello Zeki, I would like to inquire about a keynote or institutional leadership masterclass.' },
];

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(quickTopics[0].text);

  const startChatUrl = `https://wa.me/2349119059859?text=${encodeURIComponent(selectedTopic)}`;

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 120 }}>
      {/* Floating Concierge Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'absolute',
              bottom: '4.5rem',
              right: 0,
              width: 'min(360px, calc(100vw - 2.5rem))',
              background: 'var(--bg-alt)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              boxShadow: '0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(226,190,120,0.15)',
              overflow: 'hidden',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Header bar */}
            <div
              style={{
                padding: '1.25rem 1.25rem 1rem',
                borderBottom: '1px solid var(--border)',
                background: 'linear-gradient(180deg, rgba(226,190,120,0.08) 0%, transparent 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ position: 'relative', width: 44, height: 44 }}>
                  <Image
                    src="/icon.png"
                    alt="Zeki Ubor"
                    width={44}
                    height={44}
                    style={{ borderRadius: '50%', border: '2px solid var(--gold)', objectFit: 'cover' }}
                  />
                  {/* Green pulse dot */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: '#25D366',
                      border: '2px solid var(--bg-alt)',
                      boxShadow: '0 0 8px #25D366',
                    }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>Zeki Ubor</span>
                    <span style={{ fontSize: '9px', padding: '1px 5px', borderRadius: '3px', background: 'rgba(226,190,120,0.2)', color: 'var(--gold)', letterSpacing: '0.1em' }}>ADVISORY</span>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>
                    Direct Executive Concierge
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close concierge"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <HiX style={{ width: 18, height: 18 }} />
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '1.25rem' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Have a confidential inquiry or seeking immediate clarity on your leadership architecture? Select a focus topic:
              </p>

              {/* Quick topics */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {quickTopics.map((item, idx) => {
                  const isSelected = selectedTopic === item.text;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedTopic(item.text)}
                      style={{
                        textAlign: 'left',
                        padding: '0.6rem 0.85rem',
                        fontSize: '11px',
                        borderRadius: '4px',
                        border: isSelected ? '1px solid var(--gold)' : '1px solid var(--border)',
                        background: isSelected ? 'rgba(226,190,120,0.12)' : 'var(--bg)',
                        color: isSelected ? 'var(--gold)' : 'var(--text)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={startChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  width: '100%',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '4px',
                  background: '#25D366',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(37, 211, 102, 0.35)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.92';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaWhatsapp style={{ width: 17, height: 17 }} />
                <span>Start Direct WhatsApp</span>
                <HiArrowRight style={{ width: 14, height: 14 }} />
              </a>

              <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                <span style={{ fontSize: '10px', color: 'var(--text-subtle)' }}>
                  Response window: typically within 2 hours
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Open WhatsApp Advisory Concierge"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.75rem 1.15rem 0.75rem 0.85rem',
          borderRadius: '9999px',
          background: 'var(--bg-alt)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(0,0,0,0.36), 0 0 0 1px rgba(37, 211, 102, 0.2)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <span
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: '#25D366',
            color: '#fff',
            flexShrink: 0,
            boxShadow: '0 2px 10px rgba(37,211,102,0.4)',
          }}
        >
          <FaWhatsapp style={{ width: 18, height: 18 }} />
          <span
            style={{
              position: 'absolute',
              top: -1,
              right: -1,
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: '#25D366',
              border: '2px solid var(--bg-alt)',
              animation: 'pulse 2s infinite',
            }}
          />
        </span>
        <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
          <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Advisory Concierge
          </span>
          <span style={{ fontSize: '9px', color: '#25D366', fontWeight: 600 }}>WhatsApp Direct</span>
        </div>
      </motion.button>
    </div>
  );
}
