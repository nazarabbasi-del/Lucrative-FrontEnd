import React, { useEffect, useRef, useState } from 'react';

// Adjust these two import paths/names to match your actual files if they
// differ. Based on your file tree these live at: src/sections/Nav.jsx and
// src/sections/Footer.jsx (same convention as PricingPage.jsx / ContactPage.jsx).
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';

import logoAws from '../assets/partners/logo-aws.png';
import logoVultr from '../assets/partners/logo-vultr.png';
import logoElevenlabs from '../assets/partners/logo-elevenlabs.png';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PARTNER_CARDS = [
  { tag: 'Integration', tagColor: '#185fa5', title: 'Technology Companies', body: 'Integrate your platform natively into the Lucrative AI ecosystem.' },
  { tag: 'Consulting', tagColor: '#3d8b5c', title: 'CRM & RevOps Consultants', body: 'Deliver Lucrative AI implementations to your client base.' },
  { tag: 'Agency', tagColor: '#a67518', title: 'Marketing Agencies', body: 'Package Lucrative AI into your managed marketing services.' },
  { tag: 'Solutions', tagColor: '#185fa5', title: 'Solution Providers', body: 'Extend your product suite with AI-native revenue tooling.' },
  { tag: 'Enterprise', tagColor: '#3d8b5c', title: 'Systems Integrators', body: 'Architect and deploy Lucrative AI across enterprise environments.' },
  { tag: 'Referral', tagColor: '#a67518', title: 'Referral Partners', body: 'Introduce your network and earn recurring commission.' },
];

const INTEREST_OPTIONS = ['Investment', 'Partnership', 'Sales', 'Information'];

const TRUST_LOGOS = [
  { src: logoAws, alt: 'AWS' },
  { src: logoVultr, alt: 'Vultr' },
  { src: logoElevenlabs, alt: 'ElevenLabs' },
];

/* ------------------------------------------------------------------ */
/* Small reusable bits (same pattern as PricingPage.jsx / ContactPage.jsx) */
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

export default function PartnersPage() {
  const rootRef = useRevealRoot();
  const [interest, setInterest] = useState('');

  // Wire this up to your actual submit endpoint — left as a no-op
  // preventDefault for now, same as the original bundle's onsubmit="return false;".
  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <div ref={rootRef} className="lc-partners-page" style={{ background: '#f9fafb', color: '#121212', fontFamily: "'Lato',sans-serif" }}>
      <style>{PARTNERS_CSS}</style>

      <Nav />

      {/* HERO */}
      <div className="lc-reveal" style={{ padding: '88px 0 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#121212' }}>
            Build the Future of <span style={{ color: '#185fa5' }}>AI-Powered Revenue Operations</span> Together
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#5c5c5c', maxWidth: 680, margin: '24px auto 0' }}>
            Lucrative AI partners with organizations that share our vision of helping businesses modernize customer engagement, marketing automation, revenue operations, and AI-driven growth. From technology integrations to implementation services and strategic alliances, we're committed to building partnerships that deliver measurable value.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#5c5c5c', maxWidth: 680, margin: '16px auto 0' }}>
            If you're interested in partnering with Lucrative AI, complete the form and our partnerships team will contact you to discuss the next steps.
          </p>
        </div>
      </div>

      {/* WE PARTNER WITH + FORM */}
      <section id="partner-form" style={{ background: '#eef2f6', padding: '64px 0 96px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 28, alignItems: 'stretch' }}>

          {/* LEFT: We Partner With */}
          <div className="lc-reveal" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 24, letterSpacing: '-0.02em', color: '#121212', marginBottom: 26 }}>We Partner With</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flexGrow: 1 }}>
              {PARTNER_CARDS.map((card, i) => (
                <div key={card.title} className="lc-reveal lc-partner-card" style={{ transitionDelay: `${i * 40}ms`, borderRadius: 16, padding: 22, background: '#fff', boxShadow: 'inset 0 0 0 1px rgba(18,18,18,0.06)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '4px 12px', borderRadius: 9999, fontSize: 11, fontWeight: 700, letterSpacing: '0.02em', color: card.tagColor, boxShadow: `inset 0 0 0 1px ${card.tagColor}59` }}>{card.tag}</span>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 15.5, color: '#121212' }}>{card.title}</div>
                  <div style={{ fontSize: 13, color: '#7e7e7d', lineHeight: 1.5 }}>{card.body}</div>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 19, color: '#121212', marginTop: 30, letterSpacing: '-0.01em' }}>Let's build smarter solutions—together.</p>
          </div>

          {/* RIGHT: Form */}
          <div className="lc-reveal" style={{ transitionDelay: '120ms', background: '#0f2e4d', borderRadius: 22, padding: '36px 34px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 24, color: '#fff' }}>Get in touch</div>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: 18, flexGrow: 1 }} onSubmit={handleSubmit}>
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

              <div style={{ flexGrow: 1 }} />

              <button type="submit" className="lc-btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#185fa5', fontSize: 15.5, padding: '15px 26px', marginTop: 4 }}>
                Submit Inquiry
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* PARTNERS WHO TRUST US */}
      <section style={{ padding: '72px 0' }}>
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

// NOTE ON SCOPING: every selector below targets a class name that only
// exists inside THIS page's own JSX (never a bare element selector like
// `a`, `header`, `button`, `nav`, `ul` — those would also match inside the
// shared <Nav /> component, since Nav renders as a child of
// .lc-partners-page). Also deliberately no `overflow-x: hidden` on the
// wrapper, since that implicitly forces overflow-y:auto and can break
// Nav's `position: sticky` behavior. See the Contact page fixes for why.
const PARTNERS_CSS = `
.lc-partners-page{-webkit-font-smoothing:antialiased;}
.lc-partners-page .mono{font-family:'JetBrains Mono',ui-monospace,monospace;}
.lc-partners-page .lc-btn-primary{background:#0f2e4d;color:#fff;border-radius:9999px;font-weight:700;font-size:15px;padding:13px 26px;display:inline-flex;align-items:center;gap:8px;transition:background 180ms ease,transform 150ms ease;}
.lc-partners-page .lc-btn-primary:hover{background:#0a2038;color:#fff;}
.lc-partners-page .lc-btn-primary:active{transform:scale(0.96);}
.lc-partners-page .lc-field{-webkit-appearance:none;appearance:none;width:100%;padding:13px 16px;border:none;border-radius:12px;background:rgba(255,255,255,0.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.16);color:#fff;font-family:'Lato',sans-serif;font-size:14.5px;outline:none;transition:box-shadow 150ms ease;}
.lc-partners-page .lc-field::placeholder{color:#7fa8d4;}
.lc-partners-page .lc-field:focus{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,0.45);}
.lc-partners-page .lc-field-label{font-size:13px;font-weight:600;color:#a9c6e6;margin-bottom:8px;display:block;}
.lc-partners-page select.lc-field{-moz-appearance:none;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237fa8d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;background-size:10px 10px;padding-right:40px;}
.lc-partners-page select.lc-field option{background:#0f2e4d;color:#fff;}
.lc-partners-page .lc-partner-card{transition:background 150ms ease;}
.lc-partners-page .lc-partner-card:hover{background:#f2f6fb;}
.lc-partners-page .lc-logo-chip{display:flex;align-items:center;justify-content:center;height:110px;padding:16px 20px;border-radius:14px;background:#fff;box-shadow:inset 0 0 0 1px rgba(18,18,18,0.06);}
.lc-partners-page .lc-logo-chip img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;}

.lc-partners-page .lc-reveal{opacity:0;transform:translateY(26px);transition:opacity 700ms cubic-bezier(.2,.7,.3,1),transform 700ms cubic-bezier(.2,.7,.3,1);}
.lc-partners-page .lc-reveal.is-visible{opacity:1;transform:translateY(0);}

@media (max-width: 900px) {
  .lc-partners-page section#partner-form > div{grid-template-columns:1fr !important;}
}
@media (prefers-reduced-motion: reduce) {
  .lc-partners-page .lc-reveal{transition:none !important;animation:none !important;opacity:1 !important;transform:none !important;}
}
`;