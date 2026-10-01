'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TiltCard from '@/components/TiltCard/TiltCard';
import { Toaster, toast } from 'react-hot-toast';
import { openBookingModal } from '@/components/BookingModal/BookingModal';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Pillar 01 — The Becoming Institute',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return toast.error('Please complete all required fields.');
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        toast.success('Inquiry transmitted successfully.');
        setFormData({ name: '', email: '', subject: 'Pillar 01 — The Becoming Institute', message: '' });
      } else {
        toast.error(data.error || 'Submission failed. Please email advisory@zekiubor.com directly.');
      }
    } catch {
      toast.error('Network error. Please try again or reach out directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100svh', overflowX: 'hidden', position: 'relative' }}>
      <style>{`
        @media (max-width: 767px) {
          .ed-wrap { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          .ed-section { padding-top: 3rem !important; padding-bottom: 3rem !important; }
          .ed-grid-2, .ed-grid-3, .ed-grid-4, .ed-grid-5 { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .hero-sub-row { grid-template-columns: 1fr !important; }
          .hero-sub-row > div:last-child { justify-content: flex-start !important; }
          .stats-row > div { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .stats-row > div:last-child { border-bottom: none !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .ed-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
          .ed-grid-5 { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
      {/* Light subtle architectural ambient glow */}
      <div className="ambient-glow-wrapper" style={{ opacity: 0.6 }}>
        <div className="ambient-orb-gold top-[-5%] left-[-10%]" />
        <div className="ambient-orb-blue top-[35%] right-[-10%]" />
        <div className="ambient-orb-purple bottom-[10%] left-[5%]" />
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--bg-alt)',
            color: 'var(--text)',
            border: '1px solid var(--border-strong)',
            fontSize: 13,
            borderRadius: 0,
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          },
          success: { iconTheme: { primary: '#A8822D', secondary: '#FFFFFF' } },
        }}
      />
      <Header />

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* ── HERO ───────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: 'clamp(9rem, 18vh, 14rem)',
            paddingBottom: 'var(--section-py)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3.5rem' }}>
              <motion.span
                className="ed-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                [ Direct Engagement ]
              </motion.span>
              <motion.span
                className="ed-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Lagos · Pan-African · Global
              </motion.span>
            </div>

            <motion.h1
              className="ed-display"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '3rem', maxWidth: '100%' }}
            >
              Initiate<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Strategic</em><br />
              Dialogue
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="hero-sub-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '2rem',
                alignItems: 'flex-end',
              }}
            >
              <p style={{ maxWidth: 520, fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)', color: 'var(--text-muted)', lineHeight: 1.65, fontWeight: 300 }}>
                For private 1:1 executive partnership, cohort admissions at The Becoming Institute, or institutional culture architecture with Mindvest Global.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── INQUIRY & CONTACT SECTION WITH GLASS & TILT ────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div className="ed-grid-2" style={{ alignItems: 'start', gap: 'clamp(3rem, 7vw, 7rem)' }}>
              {/* Left Column: Glass Form & Fast-Track Calendar */}
              <motion.div {...fadeUp}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <span className="ed-label">
                    [ Strategic Inquiry Form ]
                  </span>
                  <button
                    onClick={() => openBookingModal()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      background: 'rgba(226,190,120,0.12)',
                      border: '1px solid var(--gold)',
                      borderRadius: '4px',
                      color: 'var(--gold)',
                      padding: '4px 10px',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontWeight: 600,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--gold)';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(226,190,120,0.12)';
                      e.currentTarget.style.color = 'var(--gold)';
                    }}
                  >
                    <FaCalendarAlt style={{ width: 11, height: 11 }} />
                    <span>Skip to Calendar Booking</span>
                  </button>
                </div>

                {submitted ? (
                  <div
                    className="glass-panel-gold"
                    style={{
                      padding: '3rem 2rem',
                      textAlign: 'center',
                      borderRadius: '4px',
                    }}
                  >
                    <HiCheckCircle style={{ width: 48, height: 48, color: 'var(--gold)', margin: '0 auto 1.5rem auto' }} />
                    <h3 className="ed-h3" style={{ marginBottom: '1rem' }}>
                      Inquiry Transmitted
                    </h3>
                    <p className="ed-body" style={{ maxWidth: 420, margin: '0 auto 2rem auto' }}>
                      Your dossier has been securely routed to Zeki Ubor&apos;s executive advisory team. We will review your objectives and respond within 24–48 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="ed-btn ed-btn--gold"
                    >
                      Transmit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: '4px' }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '0.5rem' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Dr. Julian Vance"
                          value={formData.name}
                          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                          className="ed-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '0.5rem' }}>
                          Corporate / Personal Email *
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. julian@vanceventures.com"
                          value={formData.email}
                          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                          className="ed-input"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '0.5rem' }}>
                          Area of Engagement *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          className="ed-input"
                          style={{ cursor: 'pointer', background: 'var(--bg)', color: 'var(--text)' }}
                        >
                          <option value="Pillar 01 — The Becoming Institute">Pillar 01 — The Becoming Institute (Identity & Cohorts)</option>
                          <option value="Pillar 02 — Leadership Architecture">Pillar 02 — Leadership Architecture (Executive 1:1)</option>
                          <option value="Pillar 03 — Mindvest Global">Pillar 03 — Mindvest Global (Corporate Culture)</option>
                          <option value="Keynote & Masterclass Inquiries">Keynote & Masterclass Inquiries</option>
                          <option value="General Strategic Advisory">General Strategic Advisory</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: '0.5rem' }}>
                          Structural Context & Objectives *
                        </label>
                        <textarea
                          rows={5}
                          placeholder="Detail your current leadership terrain, institutional goals, or personal evolution priorities..."
                          value={formData.message}
                          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          required
                          className="ed-textarea"
                        />
                      </div>

                      <div style={{ paddingTop: '1rem' }}>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="ed-btn ed-btn--fill"
                          style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.6 : 1 }}
                        >
                          {isSubmitting ? 'Transmitting Dossier...' : 'Transmit Inquiry'}
                          <HiArrowRight style={{ width: 13, height: 13 }} />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </motion.div>

              {/* Right Column: Direct Channels & Information */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
              >
                <div>
                  <span className="ed-label" style={{ display: 'block', marginBottom: '2rem' }}>
                    [ Direct Channels ]
                  </span>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {[
                      {
                        title: 'Executive Advisory',
                        email: 'advisory@zekiubor.com',
                        desc: 'For private 1:1 executive partnership and crisis advisory.',
                      },
                      {
                        title: 'The Becoming Institute',
                        email: 'becoming@zekiubor.com',
                        desc: 'Cohort applications, identity calibrations, and program inquiries.',
                      },
                      {
                        title: 'Mindvest Global',
                        email: 'enterprise@zekiubor.com',
                        desc: 'Enterprise culture architecture, keynotes, and institutional design.',
                      },
                    ].map((channel, i) => (
                      <TiltCard key={i} maxTilt={6} scale={1.015}>
                        <div className="glass-card" style={{ padding: '1.75rem' }}>
                          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.4rem', fontWeight: 700 }}>
                            Channel 0{i + 1}
                          </span>
                          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.3rem' }}>
                            {channel.title}
                          </h4>
                          <a
                            href={'mailto:' + channel.email}
                            style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s ease', display: 'inline-block', marginBottom: '0.4rem' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                          >
                            {channel.email}
                          </a>
                          <p style={{ fontSize: 11, color: 'var(--text-subtle)', lineHeight: 1.5 }}>
                            {channel.desc}
                          </p>
                        </div>
                      </TiltCard>
                    ))}
                  </div>
                </div>

                {/* Operations & Turnaround with glass */}
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '4px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.3rem', fontWeight: 700 }}>
                      Primary Hub
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>
                      Lagos, Nigeria
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--text-subtle)', display: 'block', marginTop: '0.2rem' }}>
                      Global Engagements
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.3rem', fontWeight: 700 }}>
                      Response Protocol
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>
                      24–48 Hours
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--text-subtle)', display: 'block', marginTop: '0.2rem' }}>
                      Strict Confidentiality
                    </span>
                  </div>
                </div>

                {/* Blockquote with glass-panel-gold */}
                <TiltCard maxTilt={4} scale={1.01}>
                  <div className="glass-panel-gold" style={{ padding: '1.75rem', borderRadius: '4px', borderLeft: '3px solid var(--gold)' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--text)', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                      &ldquo;A building is not just a place to be, but a way to be. Your inner architecture is the most monumental structure you will ever design.&rdquo;
                    </p>
                    <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>
                      — Zeki Ubor
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
