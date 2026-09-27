'use client';
import { FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { motion } from 'framer-motion';

const socials = [
  { name: 'LinkedIn',  icon: FaLinkedinIn, href: 'https://linkedin.com/in/zekiubor' },
  { name: 'X / Twitter',icon: FaXTwitter,   href: 'https://x.com/zekiubor' },
  { name: 'Instagram', icon: FaInstagram,   href: 'https://instagram.com/zekiubor' },
  { name: 'YouTube',   icon: FaYoutube,     href: 'https://youtube.com/@zekiubor' },
  { name: 'WhatsApp',  icon: FaWhatsapp,    href: 'https://wa.me/2349119059859' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
        paddingTop: 'clamp(4rem, 10vh, 7rem)',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="ed-wrap">
        {/* Top — brand + social */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-end',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand block */}
          <div>
            <p className="ed-label" style={{ marginBottom: '1rem' }}>[ Human Architecture ]</p>
            <h2
              className="ed-h1"
              style={{ color: 'var(--text)', marginBottom: '1.25rem', maxWidth: 520 }}
            >
              Zeki Ubor
            </h2>
            <p className="ed-body" style={{ maxWidth: 420 }}>
              Equipping founders, executives, and organizations with architectural frameworks to scale
              under pressure and engineer sustainable impact.
            </p>
          </div>

          {/* Social pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-end' }}>
            {socials.map(s => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ x: -4 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <Icon style={{ width: 14, height: 14 }} />
                  {s.name}
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Rule */}
        <hr className="ed-rule" style={{ marginBottom: '2rem' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem' }}>
          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { href: '/',          label: 'Home' },
              { href: '/about',     label: 'About' },
              { href: '/services',  label: 'Pillars' },
              { href: '/contact',   label: 'Inquiry' },
              { href: '/newsletter',label: 'Letter' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="ed-label"
                style={{ textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a
              href="tel:+2349119059859"
              className="ed-label"
              style={{ textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
            >
              +234 911 905 9859
            </a>
            <a
              href="mailto:lightwavesupport@gmail.com"
              className="ed-label"
              style={{ textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-subtle)')}
            >
              lightwavesupport@gmail.com
            </a>
            <span className="ed-label">Lagos, Nigeria</span>
            <span className="ed-label">© {new Date().getFullYear()} Zeki Ubor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
