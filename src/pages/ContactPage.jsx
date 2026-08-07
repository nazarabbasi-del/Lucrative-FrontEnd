import React, { useEffect, useMemo, useRef, useState } from 'react';

// Adjust these two import paths/names to match your actual files if they
// differ. Based on your file tree these live at: src/sections/Nav.jsx and
// src/sections/Footer.jsx (same convention as PricingPage.jsx).
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';

// Images extracted from the bundled export. Drop them into
// src/assets/contact/ (paths already match that layout).
import heroImg from '../assets/contact/hero.webp';
import formSideImg from '../assets/contact/form-side.png';
import logoSalesforce from '../assets/contact/logo-salesforce.png';
import logoHubspot from '../assets/contact/logo-hubspot.png';
import logoMarketo from '../assets/contact/logo-marketo.png';
import logo6sense from '../assets/contact/logo-6sense.png';
import logoDemandbase from '../assets/contact/logo-demandbase.png';
import logoPipedrive from '../assets/contact/logo-pipedrive.png';
import logoMonday from '../assets/contact/logo-mondaycom.png';
import logoAttio from '../assets/contact/logo-attio.png';
import logoActiveCampaign from '../assets/contact/logo-activecampaign.png';
import logoServiceTitan from '../assets/contact/logo-servicetitan.png';
import logoOpenAI from '../assets/contact/logo-openai.png';
import logoClaude from '../assets/contact/logo-claude.png';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const CRM_OPTIONS = ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Pipedrive', 'Zoho', 'Attio', 'Monday CRM', 'GoHighLevel', 'Other'];

// "Area of interest" search/select pills. Gradient values copied 1:1 from
// the original bundle's pillStyle()/renderVals() logic.
const INTEREST_APPS = [
  { name: 'Loft for Sales', grad: { from: '#eaf2fb', to: '#d3e6f8', text: '#1c3a5c', border: 'rgba(47,111,176,0.3)' } },
  { name: 'Loft for Marketing', grad: { from: '#fdf3e0', to: '#f9e6bf', text: '#7a5710', border: 'rgba(201,138,30,0.3)' } },
  { name: 'Revenue Governance', grad: { from: '#e9ebee', to: '#d5d9de', text: '#1c2f42', border: 'rgba(28,47,66,0.3)' } },
  { name: 'Stratum Analytics', grad: { from: '#fbe9e6', to: '#f6d5cf', text: '#7a2e26', border: 'rgba(194,92,80,0.3)' } },
  { name: 'Quotebase', grad: { from: '#e2f5ef', to: '#c9ece0', text: '#146a57', border: 'rgba(45,156,136,0.3)' } },
];

const DEPLOYMENT_CARDS = [
  { tag: 'Migration', tagColor: '#185fa5', title: 'CRM Migrations', body: 'Move your data and workflows without disruption.' },
  { tag: 'Marketing', tagColor: '#3d8b5c', title: 'Marketing Automation', body: 'Automate campaigns, journeys, and lead nurturing.' },
  { tag: 'Strategy', tagColor: '#a67518', title: 'AI Strategy', body: 'Define where AI creates the most revenue impact.' },
  { tag: 'RevOps', tagColor: '#185fa5', title: 'Revenue Operations', body: 'Align sales, marketing, and success on one system.' },
  { tag: 'Integration', tagColor: '#3d8b5c', title: 'Enterprise Integrations', body: 'Connect Lucrative AI to your existing tech stack.' },
  { tag: 'Compliance', tagColor: '#a67518', title: 'Governance & Compliance', body: 'Enforce data policy and security standards.' },
  { tag: 'Workflows', tagColor: '#185fa5', title: 'Custom Workflows', body: 'Build automation tailored to your process.' },
  { tag: 'Reporting', tagColor: '#3d8b5c', title: 'Executive Reporting', body: 'Give leadership visibility into revenue performance.' },
];

const WHY_CARDS = [
  { iconBg: 'rgba(24,95,165,0.1)', iconColor: '#185fa5', title: 'AI-Native Platform', body: 'Built from the ground up around AI—not retrofitted onto legacy software.',
    icon: <path d="M12 2l2 6h6l-5 4 2 7-7-4-7 4 2-7-5-4h6z" /> },
  { iconBg: 'rgba(109,199,143,0.16)', iconColor: '#3d8b5c', title: 'One Unified Workspace', body: 'CRM, marketing, analytics, governance, and contracting in one platform.',
    icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></> },
  { iconBg: 'rgba(237,178,62,0.16)', iconColor: '#a67518', title: 'Enterprise Ready', body: 'Secure architecture, governance controls, and scalable deployments.',
    icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
  { iconBg: 'rgba(24,95,165,0.1)', iconColor: '#185fa5', title: 'Human Support', body: 'Work directly with product specialists, solution engineers, and customer success managers.',
    icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" /></> },
];

const FAQ_ITEMS = [
  { q: 'How quickly can I get a demo?', a: 'Most demonstrations are scheduled within one business day and are tailored to your business objectives.' },
  { q: 'Do you support migrations from Salesforce or HubSpot?', a: 'Yes. Our team assists with migrations, integrations, data mapping, and onboarding to ensure a smooth transition.' },
  { q: 'Can I purchase individual products?', a: 'Yes. You can deploy Loft for Sales, Loft for Marketing, Revenue Governance, Stratum, or Nexum individually, or implement the complete Lucrative AI platform.' },
  { q: 'Does Lucrative AI integrate with our existing systems?', a: 'Yes. Lucrative AI integrates with leading CRM, marketing automation, analytics, and business platforms, with APIs available for custom integrations.' },
  { q: 'Is Lucrative AI suitable for enterprise organizations?', a: 'Yes. The platform is designed to support businesses of all sizes, from growing companies to large enterprises requiring governance, security, and scalable deployments.' },
  { q: 'What happens after I submit the form?', a: 'A member of our team will review your requirements and contact you to schedule a discovery call or product demonstration based on your needs.' },
];

const LOGO_GRID = [
  { src: logoSalesforce, alt: 'Salesforce' },
  { src: logoHubspot, alt: 'HubSpot' },
  { src: logoMarketo, alt: 'Marketo' },
  { src: logo6sense, alt: '6sense' },
  { src: logoDemandbase, alt: 'Demandbase' },
  { src: logoPipedrive, alt: 'Pipedrive' },
  { src: logoMonday, alt: 'Monday.com' },
  { src: logoAttio, alt: 'Attio' },
  { src: logoActiveCampaign, alt: 'ActiveCampaign' },
  { src: logoServiceTitan, alt: 'ServiceTitan' },
  { src: logoOpenAI, alt: 'OpenAI' },
  { src: logoClaude, alt: 'Claude' },
];

/* ------------------------------------------------------------------ */
/* Small reusable bits (same pattern as PricingPage.jsx)              */
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

function pillStyle(isSel, grad) {
  return isSel
    ? { padding: '10px 16px', borderRadius: 9999, background: `linear-gradient(135deg, ${grad.from}, ${grad.to})`, color: grad.text, fontSize: 13.5, fontWeight: 700, boxShadow: `inset 0 0 0 1px ${grad.border}`, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', transition: 'background 150ms ease' }
    : { padding: '10px 16px', borderRadius: 9999, background: 'rgba(255,255,255,0.06)', color: '#b5d4f4', fontSize: 13.5, fontWeight: 600, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)', display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', transition: 'background 150ms ease' };
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const rootRef = useRevealRoot();

  // "Select your area of interest" search + multi-select pills.
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState({});

  function toggleApp(name) {
    setSelected((s) => ({ ...s, [name]: !s[name] }));
  }

  const filteredApps = useMemo(() => {
    const q = query.toLowerCase();
    return INTEREST_APPS.filter((a) => a.name.toLowerCase().includes(q));
  }, [query]);

  // Wire this up to your actual submit endpoint (API route, form service,
  // etc.) — left as a no-op preventDefault for now, same as the original
  // bundle's onsubmit="return false;".
  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <div ref={rootRef} className="lc-contact-page" style={{ background: '#f9fafb', color: '#121212', fontFamily: "'Lato',sans-serif" }}>
      <style>{CONTACT_CSS}</style>

      <Nav />

      {/* HERO */}
      <header className="lc-hero" style={{ padding: '88px 0 48px', position: 'relative' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div className="lc-reveal">
            <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#121212' }}>
              Let's Build the Future of <span style={{ color: '#185fa5' }}>Your Revenue Operations</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#5c5c5c', maxWidth: 520, margin: '24px 0 0' }}>
              Whether you're evaluating Lucrative AI, planning a migration, exploring enterprise deployment, or looking to automate your sales and marketing operations, our team is here to help.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
              <a href="#demo-form" className="lc-btn-primary">Book a Demo</a>
              <a href="#demo-form" className="lc-btn-secondary">Talk to Sales</a>
            </div>
          </div>
          <div className="lc-reveal" style={{ transitionDelay: '120ms' }}>
            <img src={heroImg} alt="" style={{ width: '100%', height: 420, borderRadius: 20, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </header>

      {/* REQUEST A DEMO */}
      <section id="demo-form" style={{ background: '#eef2f6', padding: '64px 0 96px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 40, alignItems: 'stretch' }}>

          {/* LEFT: Copy */}
          <div className="lc-reveal" style={{ paddingTop: 12, display: 'flex', flexDirection: 'column' }}>
            <div>
              <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: '#121212', lineHeight: 1.2 }}>See Lucrative AI in Action</h2>
              <p style={{ fontSize: 15.5, color: '#5c5c5c', lineHeight: 1.7, marginTop: 16, maxWidth: 420 }}>Tell us about your business and we'll tailor the demonstration to your sales process, marketing strategy, and revenue operations.</p>
            </div>
            <img src={formSideImg} alt="" style={{ maxWidth: 440, width: '100%', marginTop: 'auto', alignSelf: 'center' }} />
          </div>

          {/* RIGHT: Form */}
          <div className="lc-reveal" style={{ transitionDelay: '120ms', background: '#0f2e4d', borderRadius: 22, padding: '36px 34px' }}>
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label className="lc-field-label">Business email</label>
                  <input type="email" className="lc-field" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="lc-field-label">Company</label>
                  <input type="text" className="lc-field" placeholder="Acme Inc." />
                </div>
              </div>

              <div>
                <label className="lc-field-label">Job title</label>
                <input type="text" className="lc-field" placeholder="VP of Revenue Operations" />
              </div>

              <div>
                <label className="lc-field-label">CRM currently using</label>
                <select className="lc-field" defaultValue="">
                  <option value="" disabled hidden></option>
                  {CRM_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="lc-field-label">Select your area of interest</label>
                <div style={{ position: 'relative', marginBottom: 12 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7fa8d4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ position: 'absolute', left: 15, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                    <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    className="lc-field"
                    style={{ paddingLeft: 40 }}
                    placeholder="Search apps..."
                    value={query}
                    onChange={(ev) => setQuery(ev.target.value)}
                  />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {filteredApps.map((app) => {
                    const isSel = !!selected[app.name];
                    return (
                      <button
                        key={app.name}
                        type="button"
                        onClick={() => toggleApp(app.name)}
                        style={pillStyle(isSel, app.grad)}
                      >
                        {isSel && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                        {app.name}
                      </button>
                    );
                  })}
                  {filteredApps.length === 0 && (
                    <span style={{ fontSize: 13, color: '#7fa8d4' }}>No apps match your search.</span>
                  )}
                </div>
              </div>

              <div>
                <label className="lc-field-label">Biggest challenge</label>
                <textarea className="lc-field" rows={3} placeholder="Tell us what you're trying to solve" />
              </div>

              <button type="submit" className="lc-btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#185fa5', fontSize: 15.5, padding: '15px 26px', marginTop: 4 }}>
                Submit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ENTERPRISE DEPLOYMENTS */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
          <div className="lc-reveal" style={{ maxWidth: 640, margin: '0 auto 40px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: '#121212', lineHeight: 1.2 }}>Planning an Enterprise Rollout?</h2>
            <p style={{ fontSize: 15.5, color: '#5c5c5c', lineHeight: 1.7, marginTop: 16 }}>Our solution architects work alongside your team to design secure, scalable deployments tailored to your business. We assist with:</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {DEPLOYMENT_CARDS.map((card, i) => (
              <div key={card.title} className="lc-reveal" style={{ transitionDelay: `${i * 40}ms`, borderRadius: 16, padding: 22, background: '#fff', boxShadow: 'inset 0 0 0 1px rgba(18,18,18,0.06)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '4px 12px', borderRadius: 9999, fontSize: 11, fontWeight: 700, letterSpacing: '0.02em', color: card.tagColor, boxShadow: `inset 0 0 0 1px ${card.tagColor}59` }}>{card.tag}</span>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 15, color: '#121212' }}>{card.title}</div>
                <div style={{ fontSize: 13, color: '#7e7e7d', lineHeight: 1.5 }}>{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL INTEGRATIONS */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
          <div className="lc-reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 44px' }}>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: '#121212' }}>Global Integrations</h2>
            <p style={{ fontSize: 15.5, color: '#5c5c5c', lineHeight: 1.7, marginTop: 14 }}>Lucrative AI integrates with the platforms your business already uses.</p>
          </div>
          <div className="lc-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }}>
            {LOGO_GRID.map((logo) => (
              <div key={logo.alt} className="lc-logo-chip">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TEAMS CHOOSE */}
      <section style={{ padding: '96px 0' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
          <div className="lc-reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: '#121212' }}>Why Teams Choose Lucrative AI</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {WHY_CARDS.map((card, i) => (
              <div key={card.title} className="lc-reveal" style={{ transitionDelay: `${i * 60}ms`, borderRadius: 16, padding: 26, background: '#fbfaf9', boxShadow: 'inset 0 0 0 1px rgba(18,18,18,0.05)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, background: card.iconBg, color: card.iconColor }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{card.icon}</svg>
                </span>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 15.5, color: '#121212' }}>{card.title}</div>
                <div style={{ fontSize: 13.5, color: '#5c5c5c', lineHeight: 1.55 }}>{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#eef2f6', padding: '96px 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
          <div className="lc-reveal" style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', color: '#121212' }}>Frequently Asked Questions</h2>
          </div>

          <div className="lc-reveal">
            {FAQ_ITEMS.map((item, i) => (
              <details key={item.q} className="lc-faq" open={i === 0} style={{ borderBottom: '1px solid rgba(18,18,18,0.08)' }}>
                <summary>
                  {item.q}
                  <svg className="lc-faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '96px 0' }}>
        <div className="lc-reveal" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ background: '#0f2e4d', borderRadius: 28, padding: '64px 56px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3.4vw,40px)', letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.2 }}>Ready to Modernize Your Revenue Operations?</h2>
            <p style={{ fontSize: 16, color: '#b5d4f4', lineHeight: 1.7, maxWidth: 600, margin: '18px auto 0' }}>See how Lucrative AI helps organizations unify CRM, marketing, analytics, governance, and intelligent contracting in one AI-native platform.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 32 }}>
              <a href="#demo-form" className="lc-btn-primary" style={{ background: '#185fa5' }}>Book a Demo</a>
              <a href="#demo-form" className="lc-btn-secondary" style={{ background: 'transparent', color: '#fff', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.3)' }}>Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const CONTACT_CSS = `
.lc-contact-page{-webkit-font-smoothing:antialiased;}
.lc-contact-page .mono{font-family:'JetBrains Mono',ui-monospace,monospace;}
.lc-contact-page .lc-btn-primary{background:#0f2e4d;color:#fff;border-radius:9999px;font-weight:700;font-size:15px;padding:13px 26px;display:inline-flex;align-items:center;gap:8px;transition:background 180ms ease,transform 150ms ease;}
.lc-contact-page .lc-btn-primary:hover{background:#0a2038;color:#fff;}
.lc-contact-page .lc-btn-primary:active{transform:scale(0.96);}
.lc-contact-page .lc-btn-secondary{background:#fff;color:#121212;border-radius:9999px;font-weight:700;font-size:15px;padding:13px 26px;box-shadow:inset 0 0 0 1px rgba(18,18,18,0.12);display:inline-flex;align-items:center;gap:8px;transition:background 150ms ease,transform 150ms ease;}
.lc-contact-page .lc-btn-secondary:hover{background:#fbfaf9;color:#121212;}
.lc-contact-page .lc-btn-secondary:active{transform:scale(0.96);}
.lc-contact-page .lc-field{-webkit-appearance:none;appearance:none;width:100%;padding:13px 16px;border:none;border-radius:12px;background:rgba(255,255,255,0.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.16);color:#fff;font-family:'Lato',sans-serif;font-size:14.5px;outline:none;transition:box-shadow 150ms ease;}
.lc-contact-page .lc-field::placeholder{color:#7fa8d4;}
.lc-contact-page .lc-field:focus{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,0.45);}
.lc-contact-page .lc-field-label{font-size:13px;font-weight:600;color:#a9c6e6;margin-bottom:8px;display:block;}
.lc-contact-page select.lc-field{-moz-appearance:none;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237fa8d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;background-size:10px 10px;padding-right:40px;}
.lc-contact-page select.lc-field option{background:#0f2e4d;color:#fff;}
.lc-contact-page textarea.lc-field{resize:vertical;min-height:88px;font-family:'Lato',sans-serif;}
.lc-contact-page .lc-logo-chip{display:flex;align-items:center;justify-content:center;height:76px;padding:18px 22px;border-radius:14px;background:#fff;box-shadow:inset 0 0 0 1px rgba(18,18,18,0.06);transition:box-shadow 150ms ease;}
.lc-contact-page .lc-logo-chip:hover{box-shadow:inset 0 0 0 1px rgba(24,95,165,0.3);}
.lc-contact-page .lc-logo-chip img{max-width:100%;max-height:100%;object-fit:contain;}
.lc-contact-page .lc-faq summary{cursor:pointer;list-style:none;font-family:'Montserrat',sans-serif;font-weight:600;font-size:16px;color:#121212;padding:22px 0;display:flex;align-items:center;justify-content:space-between;gap:16px;}
.lc-contact-page .lc-faq summary::-webkit-details-marker{display:none;}
.lc-contact-page .lc-faq .lc-faq-chevron{transition:transform 200ms ease;flex-shrink:0;}
.lc-contact-page .lc-faq[open] .lc-faq-chevron{transform:rotate(180deg);}
.lc-contact-page .lc-faq p{padding:0 0 22px;color:#5c5c5c;font-size:14.5px;line-height:1.6;max-width:760px;}

.lc-contact-page .lc-reveal{opacity:0;transform:translateY(26px);transition:opacity 700ms cubic-bezier(.2,.7,.3,1),transform 700ms cubic-bezier(.2,.7,.3,1);}
.lc-contact-page .lc-reveal.is-visible{opacity:1;transform:translateY(0);}

@media (max-width: 900px) {
  .lc-contact-page .lc-hero > div,
  .lc-contact-page section#demo-form > div{grid-template-columns:1fr !important;}
}
@media (prefers-reduced-motion: reduce) {
  .lc-contact-page .lc-reveal,.lc-contact-page .lc-faq-chevron{transition:none !important;animation:none !important;opacity:1 !important;transform:none !important;}
}
`;