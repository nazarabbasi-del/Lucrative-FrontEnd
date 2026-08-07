import React, { useEffect, useRef, useState } from 'react';

// Adjust these two import paths/names to match your actual files if they
// differ. Same convention as PricingPage.jsx / ContactPage.jsx / PartnersPage.jsx.
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';

// Same three logos as PartnersPage.jsx — reused from src/assets/partners/
// rather than duplicated, since the original bundle used identical images.
import logoAws from '../assets/partners/logo-aws.png';
import logoVultr from '../assets/partners/logo-vultr.png';
import logoElevenlabs from '../assets/partners/logo-elevenlabs.png';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const HERO_BULLETS = [
  "Lucrative AI is building an AI-native platform that unifies CRM, marketing automation, analytics, revenue governance, and contracting into one intelligent ecosystem.",
  "We're actively seeking strategic partners, technology alliances, implementation firms, and investors who want to help shape the future of AI-powered revenue operations.",
  "If you're interested in collaborating, integrating, investing, or scaling with Lucrative AI, we'd love to hear from you.",
];

const INTEREST_OPTIONS = ['Investment', 'Partnership', 'Sales', 'Information'];

const TRUST_LOGOS = [
  { src: logoAws, alt: 'AWS' },
  { src: logoVultr, alt: 'Vultr' },
  { src: logoElevenlabs, alt: 'ElevenLabs' },
];

/* ------------------------------------------------------------------ */
/* Small reusable bits (same pattern as the other pages)              */
/* ------------------------------------------------------------------ */

function useRevealRoot() {
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll('.lc-reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return rootRef;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function InvestorsPage() {
  const rootRef = useRevealRoot();
  const [interest, setInterest] = useState('');

  // Wire this up to your actual submit endpoint — left as a no-op
  // preventDefault for now, same as ContactPage.jsx / PartnersPage.jsx.
  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <div ref={rootRef} className="lc-investors-page" style={{ background: '#f9fafb', color: '#121212', fontFamily: "'Lato',sans-serif" }}>
      <style>{INVESTORS_CSS}</style>

      <Nav />

      {/* HERO + FORM */}
      <div style={{ padding: '88px 0 96px', position: 'relative' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center' }}>

          <div className="lc-reveal">
            <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 9999, background: 'rgba(24,95,165,0.08)', color: '#185fa5', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 22, border: '1px solid rgba(24,95,165,0.2)' }}>Partner &amp; Investors</span>
            <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(32px,3.6vw,46px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#121212' }}>
              Partner with the Next Generation of <span style={{ color: '#185fa5' }}>Revenue Technology</span>
            </h1>
            <ul style={{ margin: '26px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {HERO_BULLETS.map((text) => (
                <li key={text} style={{ display: 'flex', gap: 12, fontSize: 15.5, lineHeight: 1.65, color: '#5c5c5c' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#185fa5', flexShrink: 0, marginTop: 10 }} />
                  {text}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#121212', fontWeight: 600, margin: '24px 0 0' }}>
              Submit the form and our team will get back to you shortly.
            </p>
          </div>

          <div id="investor-form" className="lc-reveal" style={{ transitionDelay: '120ms', background: '#0f2e4d', borderRadius: 22, padding: '36px 34px' }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 24, color: '#fff' }}>Get in touch</div>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: 18 }} onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label className="lc-field-label">First name</label>
                  <input type="text" className="lc-field" placeholder="Jane" />
                </div>
                <div>
                  <label className="lc-field-label">Last name</label>
                  <input type="text" className="lc-field" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="lc-field-label">Email address</label>
                <input type="email" className="lc-field" placeholder="jane@company.com" />
              </div>

              <div>
                <label className="lc-field-label">Company name</label>
                <input type="text" className="lc-field" placeholder="Acme Inc." />
              </div>

              <div>
                <label className="lc-field-label">What describes your best interest?</label>
                <select className="lc-field" value={interest} onChange={(ev) => setInterest(ev.target.value)} defaultValue="">
                  <option value="" disabled hidden></option>
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="lc-btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#185fa5', fontSize: 15.5, padding: '15px 26px', marginTop: 4 }}>
                Submit Inquiry
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* PARTNERS WHO TRUST US */}
      <section style={{ background: '#eef2f6', padding: '72px 0' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
          <div className="lc-reveal" style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(24px,2.8vw,32px)', letterSpacing: '-0.02em', color: '#121212' }}>Partners Who Trust Us</h2>
          </div>
          <div className="lc-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, maxWidth: 800, margin: '0 auto' }}>
            {TRUST_LOGOS.map((logo) => (
              <div key={logo.alt} className="lc-logo-chip">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// NOTE ON SCOPING: same rule as ContactPage.jsx / PartnersPage.jsx — every
// selector below targets a class name that only exists in this page's own
// JSX, never a bare element selector (`a`, `header`, `button`, `nav`, `ul`)
// that could reach into the shared <Nav /> component. No `overflow-x:
// hidden` on the wrapper either, since that can silently break Nav's
// `position: sticky` behavior.
const INVESTORS_CSS = `
.lc-investors-page{-webkit-font-smoothing:antialiased;}
.lc-investors-page .mono{font-family:'JetBrains Mono',ui-monospace,monospace;}
.lc-investors-page .lc-btn-primary{background:#0f2e4d;color:#fff;border-radius:9999px;font-weight:700;font-size:15px;padding:13px 26px;display:inline-flex;align-items:center;gap:8px;transition:background 180ms ease,transform 150ms ease;}
.lc-investors-page .lc-btn-primary:hover{background:#0a2038;color:#fff;}
.lc-investors-page .lc-btn-primary:active{transform:scale(0.96);}
.lc-investors-page .lc-field{-webkit-appearance:none;appearance:none;width:100%;padding:13px 16px;border:none;border-radius:12px;background:rgba(255,255,255,0.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.16);color:#fff;font-family:'Lato',sans-serif;font-size:14.5px;outline:none;transition:box-shadow 150ms ease;}
.lc-investors-page .lc-field::placeholder{color:#7fa8d4;}
.lc-investors-page .lc-field:focus{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,0.45);}
.lc-investors-page .lc-field-label{font-size:13px;font-weight:600;color:#a9c6e6;margin-bottom:8px;display:block;}
.lc-investors-page select.lc-field{-moz-appearance:none;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237fa8d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;background-size:10px 10px;padding-right:40px;}
.lc-investors-page select.lc-field option{background:#0f2e4d;color:#fff;}
.lc-investors-page .lc-logo-chip{display:flex;align-items:center;justify-content:center;height:110px;padding:16px 20px;border-radius:14px;background:#fff;box-shadow:inset 0 0 0 1px rgba(18,18,18,0.06);}
.lc-investors-page .lc-logo-chip img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;}

.lc-investors-page .lc-reveal{opacity:0;transform:translateY(26px);transition:opacity 700ms cubic-bezier(.2,.7,.3,1),transform 700ms cubic-bezier(.2,.7,.3,1);}
.lc-investors-page .lc-reveal.is-visible{opacity:1;transform:translateY(0);}

@media (max-width: 900px) {
  .lc-investors-page > div:first-of-type > div{grid-template-columns:1fr !important;}
}
@media (prefers-reduced-motion: reduce) {
  .lc-investors-page .lc-reveal{transition:none !important;animation:none !important;opacity:1 !important;transform:none !important;}
}
`;