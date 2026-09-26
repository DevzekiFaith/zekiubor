'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheck } from 'react-icons/hi';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TiltCard from '@/components/TiltCard/TiltCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Services() {
  const pillars = [
    {
      num: 'I',
      badge: 'Division I',
      title: 'The Becoming Institute',
      tagline: 'Personal Evolution',
      description: 'A sanctuary for individual transformation. Deconstruct limiting identities, develop original conviction, and build a self that commands lasting interest. Structured around the Human Architecture Framework — from identity and mindset, through systems and relationships, into expression and impact.',
      focus: [
        'Becoming a Person of Interest — Monthly Masterclass (Live, 3 hrs + Q&A)',
        'Identity & Purpose Deconstruction (Foundation Layer)',
        'Mindset & Belief Recalibration (Structural Layer)',
        'Systems, Habits & Expression Design (Infrastructure to Facade)',
      ],
      deliverable: 'An original personal architecture — built deliberately, from the inside out, that commands presence in every room.',
      cta: 'Join the Masterclass',
      link: 'https://www.origin.com.ng',
      external: true,
    },
    {
      num: 'II',
      badge: 'Division II',
      title: 'Leadership Architecture',
      tagline: 'Executive Authority',
      description: 'Frameworks for leaders who need to design their influence with architectural precision and unshakeable authority. For founders, C-suite executives, and mid-career leaders who have built something real — but sense the foundation needs redesigning.',
      focus: [
        'Leadership Architecture — 1–2 Day Executive Immersion',
        'Decision Friction Elimination & Cognitive Load Restructuring',
        'High-Stakes Crisis Advisory & Ambiguity Resolution',
        'Sovereign Presence & Non-Negotiable Operational Cadence',
      ],
      deliverable: 'A precision leadership system that eliminates 15+ hours of weekly decision latency and reduces executive cognitive load by 40%.',
      cta: 'Book Executive Call',
      link: 'https://calendly.com/mindvestglobalresources/30min',
      external: true,
    },
    {
      num: 'III',
      badge: 'Division III',
      title: 'Organisational Architecture',
      tagline: 'Institutional Design',
      description: 'Structural design for institutions seeking to align their human capital with their monumental vision. We partner with scaling enterprises and legacy corporations to build enduring cultural operating systems — not programmes, but infrastructure.',
      focus: [
        'Organisational Transformation Partnership — 6–12 Months',
        'Institutional Culture Architecture & Value Infrastructure',
        'Keynote Masterclasses & Corporate Leadership Summits',
        'Cross-Functional Execution Frameworks & Human Capital Design',
      ],
      deliverable: 'A resilient, autonomous institutional culture that preserves alignment and accelerates performance through hyper-growth.',
      cta: 'Partner With Us',
      link: '/contact?pillar=org',
      external: false,
    },
  ];

  const process = [
    { step: 'B', title: 'Baseline',           desc: 'Audit where you are with radical honesty using the Architecture Diagnostic — uncovering the invisible hairline fractures before they trigger crisis.' },
    { step: 'U', title: 'Uncover',            desc: 'Surface the beliefs, patterns, and inherited foundations that have been silently driving your architecture without your consent.' },
    { step: 'I', title: 'Intentional Design', desc: 'Deliberately redesign each layer — starting with identity and purpose, moving through mindset, systems, relationships, and into expression.' },
    { step: 'L', title: 'Layer & Live',       desc: 'Integrate the new architecture into daily life, leadership cadences, and institutional decision-making with precision.' },
    { step: 'D', title: 'Declare & Deploy',   desc: 'Step into your full expression and impact with the total weight of who you have intentionally become.' },
  ];

  const reach = [
    { code: '01', label: 'The Awakening',       sub: 'Ages 25–34 · Young professionals & early entrepreneurs seeking identity clarity' },
    { code: '02', label: 'The Reconstruction',  sub: 'Ages 35–45 · Mid-career leaders & business owners seeking realignment' },
    { code: '03', label: 'The Legacy Maker',    sub: 'Ages 45–55 · Senior executives seeking integrated leadership & cultural impact' },
    { code: '04', label: 'Institutions',         sub: 'Corporations & enterprises in Lagos, Ogun State & global markets' },
  ];

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100svh', overflowX: 'hidden', position: 'relative' }}>
      {/* Light subtle architectural ambient glow */}
      <div className="ambient-glow-wrapper">
        <div className="ambient-orb-gold top-[-5%] left-[-10%]" />
        <div className="ambient-orb-blue top-[35%] right-[-10%]" />
        <div className="ambient-orb-purple bottom-[10%] left-[5%]" />
      </div>

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
                [ Three Pillars ]
              </motion.span>
              <motion.span
                className="ed-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Operating Frameworks
              </motion.span>
            </div>

            <motion.h1
              className="ed-display"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '3rem', maxWidth: '100%' }}
            >
              Three Pillars<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>of</em> Human<br />
              Architecture
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '2rem',
                alignItems: 'flex-end',
              }}
            >
              <p style={{ maxWidth: 520, fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)', color: 'var(--text-muted)', lineHeight: 1.65, fontWeight: 300 }}>
                Mindvest Global operates three divisions — personal evolution, leadership authority, and institutional design — with one governing conviction: transformation is not a feeling. It is a structure.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <a href="https://www.origin.com.ng" target="_blank" rel="noopener noreferrer" className="ed-btn ed-btn--fill">
                  Join the Masterclass
                  <HiArrowRight style={{ width: 13, height: 13 }} />
                </a>
                <Link href="/contact" className="ed-btn">
                  Inquire Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS / OVERVIEW ROW ───────────────────────────── */}
        <section style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div className="ed-grid-3">
              {[
                { num: 'Division I',   label: 'The Becoming Institute',    sub: 'Personal Evolution · Monthly Masterclass' },
                { num: 'Division II',  label: 'Leadership Architecture',   sub: 'Executive Authority · 1–2 Day Immersion' },
                { num: 'Division III', label: 'Organisational Architecture', sub: 'Institutional Design · 6–12 Month Partnership' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    padding: 'clamp(2rem, 5vh, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
                    borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 3.2vw, 3rem)',
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

        {/* ── PILLARS IN-DEPTH WITH GLASS & TILT ─────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ Deep Structural Practices ]</span>
              <span className="ed-meta">Pillar Catalog</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              {pillars.map((pillar, idx) => (
                <TiltCard key={pillar.title} maxTilt={5} scale={1.015}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-panel"
                    style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)', borderRadius: '4px' }}
                  >
                    <div className="ed-grid-2" style={{ alignItems: 'start', gap: 'clamp(2rem, 5vw, 5rem)' }}>
                      {/* Left Column */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                          <span style={{ fontSize: 10, letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>
                            {pillar.badge}
                          </span>
                          <span style={{ width: 24, height: 1, background: 'var(--border)' }} />
                          <span style={{ fontSize: 10, letterSpacing: '0.15em', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                            {pillar.tagline}
                          </span>
                        </div>

                        <h2 className="ed-h2" style={{ marginBottom: '1.5rem' }}>
                          {pillar.title}
                        </h2>

                        <p className="ed-body" style={{ marginBottom: '2rem' }}>
                          {pillar.description}
                        </p>

                        <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.25rem', marginBottom: '2.5rem' }}>
                          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-subtle)', display: 'block', marginBottom: '0.25rem' }}>
                            Primary Impact
                          </span>
                          <p style={{ fontSize: 13, color: 'var(--text)', fontStyle: 'italic', fontWeight: 400 }}>
                            &ldquo;{pillar.deliverable}&rdquo;
                          </p>
                        </div>

                        {pillar.external ? (
                          <a href={pillar.link} target="_blank" rel="noopener noreferrer" className="ed-btn ed-btn--fill">
                            {pillar.cta}
                            <HiArrowRight style={{ width: 13, height: 13 }} />
                          </a>
                        ) : (
                          <Link href={pillar.link} className="ed-btn ed-btn--fill">
                            {pillar.cta}
                            <HiArrowRight style={{ width: 13, height: 13 }} />
                          </Link>
                        )}
                      </div>

                      {/* Right Column: Focus Deliverables */}
                      <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 'clamp(1.5rem, 4vw, 3rem)' }}>
                        <span className="ed-label" style={{ display: 'block', marginBottom: '1.75rem' }}>
                          [ Core Deliverables & Frameworks ]
                        </span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                          {pillar.focus.map((item, fIdx) => (
                            <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                              <div style={{ marginTop: '0.25rem', width: 14, height: 14, border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <HiCheck style={{ width: 10, height: 10, color: 'var(--gold)' }} />
                              </div>
                              <span style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 300, lineHeight: 1.55 }}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPLEMENTATION CYCLE WITH TILT ─────────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ Transformation Method ]</span>
              <span className="ed-meta">The BUILD Process</span>
            </div>

            <motion.h2 className="ed-h2" {...fadeUp} style={{ maxWidth: 640, marginBottom: '4rem' }}>
              The BUILD Method
            </motion.h2>

            <div className="ed-grid-5" style={{ borderTop: '1px solid var(--border)' }}>
              {process.map((p, i) => (
                <TiltCard key={p.step} maxTilt={6} scale={1.015}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card"
                    style={{
                      padding: '2.5rem 1.5rem',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '0.75rem' }}>
                      {p.step}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.65 }}>
                      {p.desc}
                    </p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT & INSTITUTIONAL REACH ───────────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ Who We Serve ]</span>
              <span className="ed-meta">Audience Profiles</span>
            </div>

            <div className="ed-grid-4" style={{ borderTop: '1px solid var(--border)' }}>
              {reach.map((r, i) => (
                <TiltCard key={r.code} maxTilt={5} scale={1.015}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card"
                    style={{
                      padding: '2.5rem 1.5rem',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: 10, color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '1.25rem', fontWeight: 700 }}>
                      {r.code}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>
                      {r.label}
                    </h4>
                    <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>
                      {r.sub}
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION WITH GLASS PANEL ────────────────── */}
        <section className="ed-section">
          <div className="ed-wrap" style={{ maxWidth: 880 }}>
            <div className="glass-panel-gold" style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem)', borderRadius: '4px' }}>
              <span className="ed-label" style={{ display: 'block', marginBottom: '2.5rem' }}>[ Direct Engagement ]</span>
              <motion.h2 className="ed-h2" {...fadeUp} style={{ marginBottom: '1.5rem' }}>
                Ready to Begin Your Architecture?
              </motion.h2>
              <p className="ed-body" style={{ marginBottom: '3rem', maxWidth: 540 }}>
                Whether you are an individual seeking transformation, an executive requiring a strategic immersion, or an institution building enduring culture — we begin with a conversation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://calendly.com/mindvestglobalresources/30min" target="_blank" rel="noopener noreferrer" className="ed-btn ed-btn--fill">
                  Book Executive Call
                  <HiArrowRight style={{ width: 13, height: 13 }} />
                </a>
                <Link href="/contact" className="ed-btn">
                  Submit an Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
