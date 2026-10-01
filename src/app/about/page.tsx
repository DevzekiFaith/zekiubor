'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TiltCard from '@/components/TiltCard/TiltCard';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export default function About() {
  const layers = [
    { n: 'I',   title: 'Identity & Purpose',          body: 'The Foundation — Who you are. The underlying bedrock upon which your entire life, leadership, and personal authority are anchored.' },
    { n: 'II',  title: 'Mindset & Beliefs',           body: 'The Structure — What holds you up. The internal load-bearing frames determining how much psychological pressure you carry before fracture.' },
    { n: 'III', title: 'Systems & Habits',            body: 'The Infrastructure — How you operate. The mechanical flows, operational rhythms, and daily cadences that power your highest execution capacity.' },
    { n: 'IV',  title: 'Relationships & Environment', body: 'The Rooms — Who and what surrounds you. The relational ecosystem and environmental inputs that either reinforce or erode your architecture.' },
    { n: 'V',   title: 'Expression & Impact',         body: 'The Facade — How you show up. The exterior signal, commanding personal mark, and legacy footprint that the world engages with first.' },
  ];

  const cycle = [
    { step: 'B', title: 'Baseline',           desc: 'Assess where you are with radical honesty — uncovering the invisible hairline fractures in internal identity and decision flow before they trigger crisis.' },
    { step: 'U', title: 'Uncover',            desc: 'Surface the beliefs, patterns, and inherited foundations that have been silently driving your architecture without your knowledge or consent.' },
    { step: 'I', title: 'Intentional Design', desc: 'Deliberately redesign each layer — starting with identity and purpose, moving through mindset, systems, and into expression and impact.' },
    { step: 'L', title: 'Layer & Live',       desc: 'Integrate the new architecture into daily life, leadership cadences, and decision-making with precision and non-negotiable discipline.' },
    { step: 'D', title: 'Declare & Deploy',   desc: 'Step into your full expression and impact with the total weight of who you have intentionally, architecturally become.' },
  ];

  const vehicles = [
    {
      num: 'I',
      title: 'The Becoming Institute',
      tag: 'Personal Evolution',
      body: 'A sanctuary for individual transformation. Deconstruct limiting identities and build a self that commands lasting interest — through the flagship monthly Masterclass and the Human Architecture Framework.',
      cta: 'Join the Masterclass',
      href: 'https://www.origin.com.ng',
      external: true,
    },
    {
      num: 'II',
      title: 'Leadership Architecture',
      tag: 'Executive Authority',
      body: 'Frameworks for leaders who need to design their influence with precision. The 1–2 Day Executive Immersion for founders and executives who have built something real — but sense the foundation needs redesigning.',
      cta: 'Book Executive Call',
      href: 'https://calendly.com/mindvestglobalresources/30min',
      external: true,
    },
    {
      num: 'III',
      title: 'Organisational Architecture',
      tag: 'Institutional Design',
      body: 'Structural design for institutions aligning human capital with monumental vision. The 6–12 Month Transformation Partnership — not a programme, but enduring cultural infrastructure.',
      cta: 'Inquire for Institutions',
      href: '/contact?pillar=org',
      external: false,
    },
  ];

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
        <div className="ambient-orb-blue top-[40%] right-[-10%]" />
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
                [ Biography & Philosophy ]
              </motion.span>
              <motion.span
                className="ed-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                The Architecture of Self
              </motion.span>
            </div>

            <motion.h1
              className="ed-display"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '3rem', maxWidth: '100%' }}
            >
              Internal<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Architecture</em><br />
              Precedes Empire
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
                Zeki Ubor is an architect of human potential. Applying the timeless physics of structure, load, and tension to human leadership, he designs internal operating systems that withstand external chaos.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <Link href="/services" className="ed-btn ed-btn--fill">
                  Explore Pillars
                  <HiArrowRight style={{ width: 13, height: 13 }} />
                </Link>
                <Link href="/contact" className="ed-btn">
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
                { num: '12+ Yrs',  label: 'Architectural Discipline', sub: 'Rooted in spatial logic and structural physics' },
                { num: '5 Layers', label: 'Potential Diagnostic',     sub: 'Identity, Mindset, Values, Systems, Presentation' },
                { num: '10,000+',  label: 'Leaders Calibrated',       sub: 'Pan-African founders, executives, and visionaries' },
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

        {/* ── BIOGRAPHY & PORTRAIT WITH GLASS & TILT ─────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ The Paradigm Shift ]</span>
              <span className="ed-meta">Origin & Discipline</span>
            </div>

            <div className="ed-grid-2" style={{ alignItems: 'center' }}>
              {/* Left Column: Portrait with 3D Tilt */}
              <motion.div {...fadeUp}>
                <TiltCard maxTilt={6} scale={1.02}>
                  <div className="glass-panel" style={{ padding: '0.75rem', borderRadius: '4px' }}>
                    <div className="ed-img-wrap" style={{ aspectRatio: '4/5', maxHeight: 560, position: 'relative' }}>
                      <Image
                        src="/user-about.jpg"
                        alt="Zeki Ubor"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                        <span className="ed-label" style={{ color: '#E2BE78', display: 'block', marginBottom: '0.25rem' }}>
                          Zeki Ubor
                        </span>
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)' }}>
                          Principal Strategist & Human Architect
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>

              {/* Right Column: Bio Copy */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="ed-h2" style={{ marginBottom: '1.75rem' }}>
                  From Physical Edifices<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>to</em> Human Foundations
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p className="ed-body">
                    Trained in classical architecture, Zeki spent years examining how physical structures bear loads, resist shear forces, and endure environmental decay.
                  </p>
                  <p className="ed-body">
                    When a skyscraper fractures, structural engineers do not apply a fresh coat of paint to mask the fissures. They inspect the foundation, audit the load distributions, and reinforce the primary structural frames.
                  </p>
                  <p className="ed-body">
                    Yet in the business and leadership landscape, founders and executives routinely attempt to build multi-million dollar institutions on fractured internal foundations. The resulting symptoms — burnout, decision paralysis, erratic communication, and identity collapse — are structural failures of the internal self.
                  </p>
                  <p className="ed-body">
                    Zeki transitioned his architectural discipline into human engineering, constructing systematic frameworks that diagnose internal stress, calibrate sovereign identity, and build unshakeable leadership stamina.
                  </p>
                </div>

                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/services" className="ed-btn ed-btn--gold">
                    View Architectural Pillars
                    <HiArrowRight style={{ width: 13, height: 13 }} />
                  </Link>
                  <Link href="/contact" className="ed-btn">
                    Initiate Inquiry
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Paradigm Shift Section with Content and Image */}
            <div className="ed-grid-2" style={{ alignItems: 'center', marginTop: '4rem' }}>
              {/* Left Column: Content */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="ed-h2" style={{ marginBottom: '1.75rem' }}>
                  The Paradigm<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Shift</em>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p className="ed-body">
                    Transforming the way leaders think about personal architecture. The shift from surface-level fixes to foundational restructuring represents a fundamental change in how we approach human potential and leadership development.
                  </p>
                  <p className="ed-body">
                    By applying structural engineering principles to human systems, we create frameworks that endure pressure, scale sustainably, and produce lasting impact. This paradigm shift moves beyond coaching into the realm of architectural design.
                  </p>
                  <p className="ed-body">
                    The result is a new generation of leaders who don't just manage chaos — they architect stability from within, building internal systems that can withstand any external challenge.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard maxTilt={6} scale={1.02}>
                  <div className="glass-panel" style={{ padding: '0.75rem', borderRadius: '4px' }}>
                    <div className="ed-img-wrap" style={{ aspectRatio: '16/9', maxHeight: 400, position: 'relative' }}>
                      <Image
                        src="/paradigm-shift.jpg"
                        alt="Paradigm Shift - Zeki Ubor speaking at event"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── QUOTE / PHILOSOPHY WITH GLASS PANEL ────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap" style={{ maxWidth: 960 }}>
            <TiltCard maxTilt={4} scale={1.01}>
              <div className="glass-panel-gold" style={{ padding: 'clamp(2.5rem, 6vw, 4.5rem)', borderRadius: '4px' }}>
                <span className="ed-label" style={{ display: 'block', marginBottom: '2.5rem' }}>[ The Core Law ]</span>
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
                  &ldquo;You do not rise to the height of your ambitions. You fall to the structural integrity of your internal architecture.&rdquo;
                </motion.blockquote>
                <p className="ed-body" style={{ maxWidth: 580, paddingLeft: 'clamp(1.5rem, 4vw, 3rem)' }}>
                  Before an empire can stand without collapse, the individual leading it must possess an internal infrastructure capable of bearing its immense gravity.
                </p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* ── FIVE LAYERS WITH TILT & GLASS ──────────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ Diagnostic Model ]</span>
              <span className="ed-meta">Holistic Alignment</span>
            </div>

            <motion.h2 className="ed-h2" {...fadeUp} style={{ maxWidth: 720, marginBottom: '4rem' }}>
              The Five Layers of Human Architecture
            </motion.h2>

            <div className="ed-grid-5" style={{ borderTop: '1px solid var(--border)' }}>
              {layers.map((layer, i) => (
                <TiltCard key={layer.n} maxTilt={6} scale={1.015}>
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
                      Layer {layer.n}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {layer.title}
                    </h3>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.65 }}>
                      {layer.body}
                    </p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENGINEERING CYCLE WITH TILT ────────────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ The Method ]</span>
              <span className="ed-meta">Four-Stage Cadence</span>
            </div>

            <motion.h2 className="ed-h2" {...fadeUp} style={{ maxWidth: 640, marginBottom: '4rem' }}>
              The Architectural Engineering Cycle
            </motion.h2>

            <div className="ed-grid-4" style={{ borderTop: '1px solid var(--border)' }}>
              {cycle.map((c, i) => (
                <TiltCard key={c.step} maxTilt={6} scale={1.015}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card"
                    style={{
                      padding: '2.5rem 1.5rem',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: 10, color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '1.25rem', fontWeight: 700 }}>
                      Phase {c.step}
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
                      {c.title}
                    </h3>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.65 }}>
                      {c.desc}
                    </p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRACTICE VEHICLES WITH GLASS & TILT ────────────── */}
        <section className="ed-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="ed-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="ed-label">[ Practice Vehicles ]</span>
              <Link
                href="/services"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none' }}
              >
                Pillar Details
                <HiArrowRight style={{ width: 12, height: 12 }} />
              </Link>
            </div>

            <div className="ed-grid-3" style={{ borderTop: '1px solid var(--border)' }}>
              {vehicles.map((v, i) => (
                <TiltCard key={v.num} maxTilt={6} scale={1.02}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-panel"
                    style={{
                      padding: 'clamp(2.5rem, 6vh, 4rem) clamp(1.5rem, 3vw, 2.5rem)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '2.5rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 700 }}>
                          Vehicle {v.num}
                        </span>
                        <span style={{ fontSize: 10, letterSpacing: '0.15em', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                          {v.tag}
                        </span>
                      </div>
                      <h3 className="ed-h3" style={{ marginBottom: '1rem' }}>{v.title}</h3>
                      <p className="ed-body">{v.body}</p>
                    </div>
                    {v.external ? (
                      <a
                        href={v.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-subtle)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
                      >
                        {v.cta} <HiArrowRight style={{ width: 11, height: 11 }} />
                      </a>
                    ) : (
                      <Link
                        href={v.href}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-subtle)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
                      >
                        {v.cta} <HiArrowRight style={{ width: 11, height: 11 }} />
                      </Link>
                    )}
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
              <span className="ed-label" style={{ display: 'block', marginBottom: '2.5rem' }}>[ Initiate Evolution ]</span>
              <motion.h2 className="ed-h2" {...fadeUp} style={{ marginBottom: '1.5rem' }}>
                Blueprint Your Highest Capacity
              </motion.h2>
              <p className="ed-body" style={{ marginBottom: '3rem', maxWidth: 540 }}>
                Whether through intensive 1:1 executive partnership, cohort deconstruction at The Becoming Institute, or enterprise institutional design — your internal transformation begins with a diagnostic inquiry.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="ed-btn ed-btn--fill">
                  Schedule Private Diagnostic
                  <HiArrowRight style={{ width: 13, height: 13 }} />
                </Link>
                <Link href="/services" className="ed-btn">
                  Examine All Pillars
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
