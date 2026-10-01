'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TiltCard from '@/components/TiltCard/TiltCard';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { track } from '@vercel/analytics';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Home() {
  const [newsEmail, setNewsEmail] = useState('');
  const [isSubmittingNews, setIsSubmittingNews] = useState(false);

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return toast.error('Please enter your email');
    setIsSubmittingNews(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Subscribed to the Architecture Letter!');
        track('newsletter_signup', { email: newsEmail, source: 'homepage' });
        setNewsEmail('');
      } else {
        toast.error(data.error || 'Subscription failed. Please try again.');
      }
    } catch {
      toast.error('Connection error. Please check your network.');
    } finally {
      setIsSubmittingNews(false);
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
      {/* Subtle architectural ambient diffusion */}
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
        {/* ── HERO — Cinematic Masterclass Background ──────── */}
        <section
          style={{
            position: 'relative',
            minHeight: 'clamp(600px, 90vh, 900px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
          }}
        >
          {/* Ken Burns cinematic background */}
          <style>{`
            @keyframes kenBurns {
              0%   { transform: scale(1.08) translate(0px, 0px); }
              50%  { transform: scale(1.14) translate(-1.5%, -1%); }
              100% { transform: scale(1.08) translate(0px, 0px); }
            }
            .hero-cinema-img {
              animation: kenBurns 20s ease-in-out infinite;
              will-change: transform;
            }
          `}</style>

          {/* Background image */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
            <img
              src="/hero-masterclass.jpg"
              alt="Zeki Ubor speaking at a masterclass"
              className="hero-cinema-img"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
              }}
            />
            {/* Gradient overlay — bottom-heavy for text readability */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.72) 75%, rgba(0,0,0,0.92) 100%)',
            }} />
            {/* Side vignette */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.2) 100%)',
            }} />
          </div>

          {/* Content — sits above the image */}
          <div className="ed-wrap" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(9rem, 18vh, 14rem)', paddingBottom: 'clamp(3rem, 8vh, 5rem)' }}>
            {/* bracket label row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3.5rem' }}>
              <motion.span
                className="ed-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                [ Human Architecture ]
              </motion.span>
              <motion.span
                className="ed-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                Lagos · Pan-African · Global
              </motion.span>
            </div>

            {/* Giant headline */}
            <motion.h1
              className="ed-display"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '3rem', maxWidth: '100%', color: '#fff', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
            >
              The Architect<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>of</em> Human<br />
              Potential
            </motion.h1>

            {/* Sub-row */}
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
              <p style={{ maxWidth: 480, fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, fontWeight: 300 }}>
                Architectural strategy for founders, executives, and visionaries — engineered to eliminate
                decision friction, scale under pressure, and build sustainable impact.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <Link href="/services" className="ed-btn ed-btn--fill">
                  Explore Pillars
                  <HiArrowRight style={{ width: 13, height: 13 }} />
                </Link>
                <Link href="/contact" className="ed-btn" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                  Inquire
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ROW ──────────────────────────────────────── */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div className="ed-grid-3 stats-row">
              {[
                { num: '40%',     label: 'Burnout Reduction',      sub: 'Through cognitive load restructuring' },
                { num: '15+ Hrs', label: 'Saved Weekly',            sub: 'Eliminating decision friction' },
                { num: '5 Layers',label: 'Human Architecture',      sub: 'Holistic leadership frameworks' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                  style={{
                    padding: 'clamp(2rem, 5vh, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
                    borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2.2rem, 4vw, 4rem)',
                      fontWeight: 700,
                      color: 'var(--gold)',
                      lineHeight: 1,
                      marginBottom: '0.6rem',
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '0.3rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT SNAPSHOT WITH GLASS & TILT ───────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            {/* Section label row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ The Strategist ]</span>
              <Link
                href="/about"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}
              >
                Full Story
                <HiArrowRight style={{ width: 12, height: 12 }} />
              </Link>
            </div>

            {/* Two-column */}
            <div className="ed-grid-2" style={{ alignItems: 'center' }}>
              <motion.div {...fadeUp}>
                <h2 className="ed-h2" style={{ marginBottom: '1.75rem' }}>
                  A Master Architect<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>of</em> Human Potential
                </h2>
                <p className="ed-body" style={{ marginBottom: '2.5rem' }}>
                  Zeki Ubor is not a traditional coach — he is an architect of the human condition. His
                  core premise: <strong style={{ color: 'var(--text)', fontWeight: 600 }}>identity is not
                  an accident, it is a deliberate architectural construction.</strong>
                </p>
                <Link href="/about" className="ed-btn ed-btn--gold">
                  Read the Full Story
                  <HiArrowRight style={{ width: 13, height: 13 }} />
                </Link>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16,1,0.3,1] }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}
              >
                {[
                  { n: '01', title: 'The Becoming Institute',   body: 'Systematic mastery of internal narrative, identity recalibration, and personal conviction.' },
                  { n: '02', title: 'Executive Strategy',       body: 'High-leverage decision models designed for founders and enterprise executives.' },
                  { n: '03', title: 'Leadership Architecture',  body: 'Structured frameworks that eliminate ambiguity in high-stakes leadership arenas.' },
                  { n: '04', title: 'Organizational Design',    body: 'Internal mechanisms and culture infrastructure for institutions scaling with vision.' },
                ].map((item, i) => (
                  <TiltCard key={i} maxTilt={8} scale={1.02}>
                    <div className="glass-card" style={{ padding: '1.75rem', height: '100%' }}>
                      <div style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 700 }}>{item.n}</div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.6rem' }}>{item.title}</h4>
                      <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.body}</p>
                    </div>
                  </TiltCard>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── THREE PROTOCOLS WITH TILT ──────────────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ Core Protocols ]</span>
              <Link
                href="/services"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}
              >
                All Pillars
                <HiArrowRight style={{ width: 12, height: 12 }} />
              </Link>
            </div>

            <motion.h2
              className="ed-h2"
              {...fadeUp}
              style={{ maxWidth: 640, marginBottom: '4rem' }}
            >
              Architecting Your Evolution
            </motion.h2>

            <div className="ed-grid-3" style={{ borderTop: '1px solid var(--border)' }}>
              {[
                { num: '01', title: 'Personal Mark',      tag: 'Identity Calibration',         body: 'Crafting an authentic leadership identity that commands attention and instills lasting authority.' },
                { num: '02', title: 'Structural Logic',   tag: 'Cognitive Load Optimization',  body: 'Designing mental frameworks and decision protocols that eliminate ambiguity in high-stakes arenas.' },
                { num: '03', title: 'The Becoming',       tag: 'Execution Architecture',       body: 'Transforming internal narratives into decisive execution, sustainable stamina, and lasting impact.' },
              ].map((item, i) => (
                <TiltCard key={i} maxTilt={6} scale={1.015}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                    className="glass-card"
                    style={{
                      padding: 'clamp(2.5rem, 6vh, 4rem) clamp(1.5rem, 3vw, 2.5rem)',
                      height: '100%',
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2.5rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>
                          Protocol {item.num}
                        </span>
                        <span style={{ fontSize: 10, letterSpacing: '0.15em', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>{item.tag}</span>
                      </div>
                      <h3 className="ed-h3" style={{ marginBottom: '1rem' }}>{item.title}</h3>
                      <p className="ed-body">{item.body}</p>
                    </div>
                    <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-subtle)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
                    >
                      Learn More <HiArrowRight style={{ width: 11, height: 11 }} />
                    </Link>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE / PHILOSOPHY WITH GLASS PANEL ────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap" style={{ maxWidth: 960 }}>
            <TiltCard maxTilt={4} scale={1.01}>
              <div className="glass-panel-gold" style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem)', borderRadius: '4px' }}>
                <span className="ed-label" style={{ display: 'block', marginBottom: '2.5rem' }}>[ The Realization ]</span>
                <motion.blockquote
                  {...fadeUp}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 4vw, 4rem)',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    lineHeight: 1.15,
                    color: 'var(--text)',
                    borderLeft: '3px solid var(--gold)',
                    paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
                    marginBottom: '2rem',
                  }}
                >
                  &ldquo;The problem was never the business. It was the inner architecture beneath the business.&rdquo;
                </motion.blockquote>
                <p className="ed-body" style={{ maxWidth: 560, paddingLeft: 'clamp(1.5rem, 4vw, 3rem)' }}>
                  As an architect, when a building shows distress, you don&apos;t repaint the facade —
                  you inspect the foundations and recalibrate the structural frames.
                </p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* ── INDUSTRIES / REACH ──────────────────────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ Institutional Reach ]</span>
            </div>
            <div className="ed-grid-5" style={{ borderTop: '1px solid var(--border)' }}>
              {[
                { code: '01', name: 'Venture Capital',    sub: 'High-Growth Tech Funds' },
                { code: '02', name: 'FinTech Unicorns',   sub: 'Payments & Digital Banking' },
                { code: '03', name: 'Enterprise SaaS',    sub: 'B2B Software Platforms' },
                { code: '04', name: 'Global Logistics',   sub: 'Supply Chain & Freight' },
                { code: '05', name: 'Infrastructure',     sub: 'Energy & Strategic Assets' },
              ].map((item, i) => (
                <TiltCard key={i} maxTilt={5} scale={1.01}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16,1,0.3,1] }}
                    className="glass-card"
                    style={{
                      padding: '2.5rem 1.5rem',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: 10, color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '1.25rem', fontWeight: 700 }}>{item.code}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{item.sub}</div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER WITH GLASS PANEL ────────────────────── */}
        <section className="ed-section">
          <div className="ed-wrap" style={{ maxWidth: 840 }}>
            <div className="glass-panel" style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)', borderRadius: '4px' }}>
              <span className="ed-label" style={{ display: 'block', marginBottom: '2.5rem' }}>[ Weekly Dispatch ]</span>
              <motion.h2 className="ed-h2" {...fadeUp} style={{ marginBottom: '1.5rem' }}>
                The Architecture Letter
              </motion.h2>
              <p className="ed-body" style={{ marginBottom: '3rem', maxWidth: 480 }}>
                Weekly deep-dives into mindset, identity, and personal architecture. Join 10,000+ visionaries.
              </p>
              <form onSubmit={handleNewsSubmit} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={newsEmail}
                  onChange={e => setNewsEmail(e.target.value)}
                  required
                  className="ed-input"
                  style={{ flex: 1, minWidth: 240 }}
                />
                <button
                  type="submit"
                  disabled={isSubmittingNews}
                  className="ed-btn ed-btn--fill"
                  style={{ opacity: isSubmittingNews ? 0.5 : 1 }}
                >
                  {isSubmittingNews ? 'Subscribing…' : 'Subscribe'}
                  <HiArrowRight style={{ width: 13, height: 13 }} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
