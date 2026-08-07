import React, { useEffect, useRef } from 'react';

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

// Loads the HubSpot forms embed script once (shared across any number of
// HubSpotForm instances / page navigations) and renders the given form
// into this component's own container via hbspt.forms.create's `target`
// option, rather than relying on HubSpot's script-position auto-injection
// — which doesn't work reliably once React has taken over the DOM.
let hubspotScriptPromise = null;
function loadHubSpotScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.hbspt) return Promise.resolve();
  if (hubspotScriptPromise) return hubspotScriptPromise;

  hubspotScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="js.hsforms.net/forms/embed/v2.js"]');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', reject);
      return;
    }
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.addEventListener('load', () => resolve());
    script.addEventListener('error', reject);
    document.body.appendChild(script);
  });
  return hubspotScriptPromise;
}

function HubSpotForm({ portalId, formId, region }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadHubSpotScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.hbspt) return;
        // Clear first — guards against a duplicate form appearing if this
        // effect re-runs (e.g. React StrictMode's double-invoke in dev).
        containerRef.current.innerHTML = '';
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${containerRef.current.id}`,
        });
      })
      .catch((err) => console.error('Failed to load HubSpot form:', err));
    return () => {
      cancelled = true;
    };
  }, [portalId, formId, region]);

  return <div ref={containerRef} id="hubspot-investors-form" className="lc-hubspot-form" />;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function InvestorsPage() {
  const rootRef = useRevealRoot();

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

          <div id="investor-form" className="lc-reveal" style={{ transitionDelay: '120ms', background: '#fff', borderRadius: 22, padding: '36px 34px' }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 24, color: '#fff' }}>Get in touch</div>
            </div>
            <HubSpotForm portalId="6539536" formId="d404e171-176d-42fa-bdf9-650486ac3fc9" region="na1" />
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

/* Best-effort restyle of the embedded HubSpot form to match the dark
   card it sits in. HubSpot injects its own default stylesheet with its
   own specificity, so these need !important to reliably win. HubSpot's
   exact class names can vary slightly by form/portal config — inspect
   the rendered form once live and adjust selectors here if anything
   still shows through unstyled. */
.lc-investors-page .lc-hubspot-form .hs-form-field{margin-bottom:0 !important;}
.lc-investors-page .lc-hubspot-form form{display:flex !important;flex-direction:column;gap:18px;}
.lc-investors-page .lc-hubspot-form label{font-size:13px !important;font-weight:600 !important;color:#a9c6e6 !important;margin-bottom:8px !important;display:block !important;}
.lc-investors-page .lc-hubspot-form .hs-form-required{color:#f4c96a !important;}
.lc-investors-page .lc-hubspot-form input[type="text"],
.lc-investors-page .lc-hubspot-form input[type="email"],
.lc-investors-page .lc-hubspot-form input[type="tel"],
.lc-investors-page .lc-hubspot-form select,
.lc-investors-page .lc-hubspot-form textarea{-webkit-appearance:none;appearance:none;width:100% !important;padding:13px 16px !important;border:none !important;border-radius:12px !important;background:rgba(255,255,255,0.08) !important;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.16) !important;color:#fff !important;font-family:'Lato',sans-serif !important;font-size:14.5px !important;outline:none !important;transition:box-shadow 150ms ease;}
.lc-investors-page .lc-hubspot-form input:focus,
.lc-investors-page .lc-hubspot-form select:focus,
.lc-investors-page .lc-hubspot-form textarea:focus{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,0.45) !important;}
.lc-investors-page .lc-hubspot-form ::placeholder{color:#7fa8d4 !important;}
.lc-investors-page .lc-hubspot-form .hs-error-msgs{list-style:none;margin:6px 0 0;padding:0;}
.lc-investors-page .lc-hubspot-form .hs-error-msgs label{color:#f4a68a !important;font-weight:500 !important;}
.lc-investors-page .lc-hubspot-form .hs-button{width:100% !important;justify-content:center;background:#185fa5 !important;color:#fff !important;border:none !important;border-radius:9999px !important;font-weight:700 !important;font-size:15.5px !important;padding:15px 26px !important;margin-top:4px !important;cursor:pointer;}
.lc-investors-page .lc-hubspot-form .hs-button:hover{background:#0f4c85 !important;}
.lc-investors-page .lc-hubspot-form .submitted-message{color:#fff !important;font-size:15px;line-height:1.6;}

@media (max-width: 900px) {
  .lc-investors-page > div:first-of-type > div{grid-template-columns:1fr !important;}
}
@media (prefers-reduced-motion: reduce) {
  .lc-investors-page .lc-reveal{transition:none !important;animation:none !important;opacity:1 !important;transform:none !important;}
}
`;