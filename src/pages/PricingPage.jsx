import React, { useEffect, useMemo, useRef, useState } from 'react';

// Adjust these two import paths/names to match your actual files if they differ.
// Based on your file tree these live at: src/sections/Nav.jsx and src/sections/Footer.jsx
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';

/* ------------------------------------------------------------------ */
/* Data (unchanged pricing logic, just moved out of the DOM-script)   */
/* ------------------------------------------------------------------ */

const CONTACT_TIERS = [
  { n: 5000, base: 99, name: 'Starter Plan' },
  { n: 15000, base: 199, name: 'Growth Plan' },
  { n: 35000, base: 399, name: 'Pro Plan' },
  { n: 75000, base: 699, name: 'Scale Plan' },
  { n: 250000, base: 1299, name: 'High-Volume Plan' },
  { n: 1000000, base: 2299, name: 'Ultra Enterprise' },
];
// Emails and AI Credits are bundled with whatever contact tier you're on —
// they never add cost of their own, at any tier.
const EMAIL_TIERS = [
  { n: 50000, price: 0 },
  { n: 150000, price: 0 },
  { n: 350000, price: 0 },
  { n: 750000, price: 0 },
  { n: 1500000, price: 0 },
  { n: 2500000, price: 0 },
];
const ACTION_TIERS = [
  { n: 500, price: 0 },
  { n: 1500, price: 0 },
  { n: 3000, price: 0 },
  { n: 6000, price: 0 },
  { n: 8000, price: 0 },
  { n: 10000, price: 0 },
];

const CONTACT_LABELS = ['5k', '15k', '35k', '75k', '250k', '1M'];
const EMAIL_LABELS = ['50k', '150k', '350k', '750k', '1.5M', '2.5M'];
const ACTION_LABELS = ['500', '1.5k', '3k', '6k', '8k', '10k'];

const CAPABILITY_CARDS = [
  { badge: 'Included', badgeColor: '#3d8b5c', badgeBg: 'rgba(109,199,143,0.16)', iconBg: 'rgba(109,199,143,0.18)', iconColor: '#3d8b5c', title: 'Default RevOps Consultancy', body: 'Mountainise RevOps architecture guidance at $0 cost.' },
  { badge: 'Included', badgeColor: '#3d8b5c', badgeBg: 'rgba(109,199,143,0.16)', iconBg: 'rgba(109,199,143,0.18)', iconColor: '#3d8b5c', title: '1-Click System Migration', body: 'Seamless migration from Salesforce, HubSpot, or GoHighLevel.' },
  { badge: 'Included', badgeColor: '#3d8b5c', badgeBg: 'rgba(109,199,143,0.16)', iconBg: 'rgba(109,199,143,0.18)', iconColor: '#3d8b5c', title: '100% Pre-Validated Email', body: 'Real-time deliverability checks before hitting SMTP.' },
  { badge: 'Included', badgeColor: '#3d8b5c', badgeBg: 'rgba(109,199,143,0.16)', iconBg: 'rgba(109,199,143,0.18)', iconColor: '#3d8b5c', title: 'Sales Sequences', body: 'No extra charges. Add non-marketing contacts to outreach at $0.' },
  { badge: 'Usage-based', badgeColor: '#185fa5', badgeBg: 'rgba(24,95,165,0.1)', iconBg: 'rgba(24,95,165,0.12)', iconColor: '#185fa5', title: 'Conversational AI CRM Builder', body: 'Outcome-based — pay only for what you build (objects, fields, flows).' },
  { badge: 'Pay-as-you-use', badgeColor: '#185fa5', badgeBg: 'rgba(24,95,165,0.1)', iconBg: 'rgba(24,95,165,0.12)', iconColor: '#185fa5', title: 'On-Demand AI Sales Coaching', body: 'Per coaching session or transcript requested.' },
  { locked: true, plan: 'Growth Plan+', title: 'AI Lead Qualification & Scoring', body: 'Unlocks from Growth Plan ($199/mo+). Upgrade to enable predictive scoring.' },
];

const COLOR_MAP = { red: '#d9534f', green: '#3d8b5c', orange: '#c08d1e', mute: '#a0a0a0', 'blue-bold': '#185fa5', default: '#5c5c5c' };

const MATRIX_ROWS = [
  { label: 'Estimated Monthly Total', highlight: 'blue', us: { kind: 'text', text: '$99 / mo', color: 'blue-bold' }, cells: [
    { kind: 'text', text: '$331 / mo', color: 'red' }, { kind: 'text', text: '$1,250 / mo', color: 'red' },
    { kind: 'text', text: '$75 / mo', color: 'mute' }, { kind: 'text', text: '$70 / mo', color: 'mute' },
    { kind: 'text', text: '$2,125 / mo', color: 'red' } ] },
  { label: 'Your Monthly Savings vs Market', highlight: 'green', us: { kind: 'text', text: 'BASELINE', color: 'green' }, cells: [
    { kind: 'text', text: 'Save $232/mo', color: 'green' }, { kind: 'text', text: 'Save $1,151/mo', color: 'green' },
    { kind: 'text', text: 'Parity', color: 'mute' }, { kind: 'text', text: 'Parity', color: 'mute' },
    { kind: 'text', text: 'Save $2,026/mo', color: 'green' } ] },
  { label: 'Default RevOps Consultancy', us: { kind: 'check', text: 'INCLUDED ($0)' }, cells: [
    { kind: 'text', text: 'None', color: 'mute' }, { kind: 'text', text: 'Partner Fee ($5k+)', color: 'red' },
    { kind: 'text', text: 'None', color: 'mute' }, { kind: 'text', text: 'None', color: 'mute' },
    { kind: 'text', text: 'Partner Fee ($10k+)', color: 'red' } ] },
  { label: '1-Click Data & Flow Migration', us: { kind: 'check', text: 'INCLUDED' }, cells: [
    { kind: 'text', text: 'Manual CSV' }, { kind: 'text', text: 'Manual / Paid' },
    { kind: 'text', text: 'Manual CSV' }, { kind: 'text', text: 'Manual CSV' },
    { kind: 'text', text: 'Paid Migration ($15k)', color: 'red' } ] },
  { label: 'Conversational AI CRM Builder', us: { kind: 'text', text: 'Outcome-based (Pay per build)' }, cells: [
    { kind: 'text', text: 'None', color: 'mute' }, { kind: 'text', text: 'Breeze AI Add-On' },
    { kind: 'text', text: 'None', color: 'mute' }, { kind: 'text', text: 'None', color: 'mute' },
    { kind: 'text', text: 'Agentforce Add-On' } ] },
  { label: 'AI Lead Qualification & Scoring', us: { kind: 'text', text: 'INCLUDED (2nd Plan+)', color: 'mute' }, cells: [
    { kind: 'text', text: 'Basic Workflows' }, { kind: 'text', text: 'Enterprise Tier Only' },
    { kind: 'text', text: 'Basic Rules' }, { kind: 'text', text: 'None', color: 'mute' },
    { kind: 'text', text: 'Einstein Add-On' } ] },
  { label: '30-Day Unused Seat Waiver', us: { kind: 'check', text: 'YES (Auto-Waive)' }, cells: [
    { kind: 'text', text: 'N/A (Unlimited)', color: 'mute' }, { kind: 'text', text: 'NO (Billed Always)', color: 'red' },
    { kind: 'text', text: 'N/A (Unlimited)', color: 'mute' }, { kind: 'text', text: 'NO (Billed Always)', color: 'red' },
    { kind: 'text', text: 'NO (Billed Always)', color: 'red' } ] },
  { label: 'Sales Sequences (Non-Marketing Contacts)', us: { kind: 'check', text: 'INCLUDED ($0 Extra)' }, cells: [
    { kind: 'text', text: 'Included' }, { kind: 'text', text: 'Billed per contact', color: 'red' },
    { kind: 'text', text: 'Billed per profile', color: 'red' }, { kind: 'text', text: 'Billed per contact', color: 'red' },
    { kind: 'text', text: 'Sales Engagement ($75/usr)', color: 'red' } ] },
  { label: '100% Real-Time Email Validation', us: { kind: 'check', text: 'INCLUDED' }, cells: [
    { kind: 'text', text: 'Add-On ($2.50/k)' }, { kind: 'text', text: '3rd-Party Add-On' },
    { kind: 'text', text: '3rd-Party Add-On' }, { kind: 'text', text: '3rd-Party Add-On' },
    { kind: 'text', text: '3rd-Party Add-On' } ] },
  { label: 'Unified AI Persona Engine', us: { kind: 'check', text: 'INCLUDED (Global)' }, cells: [
    { kind: 'text', text: 'Manual Prompts' }, { kind: 'text', text: 'Breeze AI Prompting' },
    { kind: 'text', text: 'Basic AI Copy' }, { kind: 'text', text: 'Basic Copy' },
    { kind: 'text', text: 'Einstein / Agentforce ($)', color: 'red' } ] },
  { label: 'Native CPQ & Contract Generator', us: { kind: 'check', text: 'INCLUDED ($0)' }, cells: [
    { kind: 'text', text: 'Basic Invoicing' }, { kind: 'text', text: 'Commerce Hub Add-On', color: 'red' },
    { kind: 'text', text: 'None', color: 'mute' }, { kind: 'text', text: 'None', color: 'mute' },
    { kind: 'text', text: 'CPQ Add-On ($75+/usr)', color: 'red' } ] },
  { label: 'AI Native Conversation Analytics Builder', us: { kind: 'text', text: 'Additional Cost (Usage-Based)' }, cells: [
    { kind: 'text', text: 'Basic Reports' }, { kind: 'text', text: 'Snowflake Sync Add-On' },
    { kind: 'text', text: 'KDP Warehouse Add-On' }, { kind: 'text', text: 'Standard Reports' },
    { kind: 'text', text: 'Data Cloud ($1,000s/mo)', color: 'red' } ] },
  { label: 'Automated SLA Lead Routing (<90s)', us: { kind: 'check', text: 'INCLUDED' }, cells: [
    { kind: 'text', text: 'Basic Workflows' }, { kind: 'text', text: 'Sales Hub Pro+ Only' },
    { kind: 'text', text: 'Basic Rules' }, { kind: 'text', text: 'None', color: 'mute' },
    { kind: 'text', text: 'Complex Flow Builder' } ] },
  { label: 'Native Data Hygiene & Deduplication', us: { kind: 'check', text: 'INCLUDED' }, cells: [
    { kind: 'text', text: 'Basic Filters' }, { kind: 'text', text: 'Ops Hub ($800/mo)', color: 'red' },
    { kind: 'text', text: 'KDP Add-On ($)' }, { kind: 'text', text: 'None', color: 'mute' },
    { kind: 'text', text: 'Duplicate Rules / 3rd Party' } ] },
  { label: 'AI Call & Meeting Intelligence', us: { kind: 'text', text: 'Pay-As-You-Use' }, cells: [
    { kind: 'text', text: '3rd-Party Add-On' }, { kind: 'text', text: 'Sales Hub Smart Talk' },
    { kind: 'text', text: 'None', color: 'mute' }, { kind: 'text', text: 'None', color: 'mute' },
    { kind: 'text', text: 'Einstein Conv. ($50/usr)', color: 'red' } ] },
  { label: 'Multi-Touch Revenue Attribution', us: { kind: 'check', text: 'INCLUDED' }, cells: [
    { kind: 'text', text: 'Basic UTMs' }, { kind: 'text', text: 'Mktg Enterprise ($3.6k/mo)', color: 'red' },
    { kind: 'text', text: 'E-Commerce Only' }, { kind: 'text', text: 'Basic Email' },
    { kind: 'text', text: 'CRM Analytics ($150/usr)', color: 'red' } ] },
  { label: 'HIPAA & Enterprise Compliance Shield', us: { kind: 'text', text: 'Additional Cost (Add-On)' }, cells: [
    { kind: 'text', text: 'HIPAA Add-On ($297/mo)', color: 'orange' }, { kind: 'text', text: 'Enterprise Tier Only' },
    { kind: 'text', text: 'Limited', color: 'mute' }, { kind: 'text', text: 'Basic' },
    { kind: 'text', text: 'Shield Add-On (+20%)', color: 'red' } ] },
  { label: 'Omnichannel AI Flow Builder', us: { kind: 'check', text: 'INCLUDED' }, cells: [
    { kind: 'text', text: 'Included' }, { kind: 'text', text: 'Marketing Hub Pro+' },
    { kind: 'text', text: 'Email & SMS Only' }, { kind: 'text', text: 'Basic Automation' },
    { kind: 'text', text: 'Marketing Cloud Ent.' } ] },
  { label: 'First 5 User Seats Included ($0 Tax)', us: { kind: 'check', text: '5 Seats Free' }, cells: [
    { kind: 'text', text: 'Unlimited Free' }, { kind: 'text', text: '$50–$150 / seat / mo', color: 'red' },
    { kind: 'text', text: 'Unlimited Free' }, { kind: 'text', text: 'Billed Per Seat', color: 'red' },
    { kind: 'text', text: '$25–$350 / seat / mo', color: 'red' } ] },
];

function fmtNum(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'k';
  return n.toString();
}

/* ------------------------------------------------------------------ */
/* Small reusable bits                                                */
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

function MatrixCell({ cell }) {
  if (!cell) return null;
  if (cell.kind === 'check') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#3d8b5c', fontWeight: 700, fontSize: 13 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: 'rgba(109,199,143,0.18)', flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3d8b5c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        {cell.text}
      </span>
    );
  }
  const isBold = cell.color === 'blue-bold';
  const color = COLOR_MAP[cell.color || 'default'];
  return (
    <span style={{ color, fontWeight: isBold ? 700 : 400, fontSize: isBold ? 17 : 13.5, fontFamily: isBold ? "'Montserrat',sans-serif" : 'inherit' }}>
      {cell.text}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  // Contacts is the "package" dial — the plan name, base price, and
  // included-contacts allowance are always tied to it. Moving Contacts up
  // pulls Emails/Actions up too, but only the ones currently BELOW the new
  // level (never pulls them down — a bar set higher than Contacts stays
  // put). Emails and Actions can also be moved independently, any time,
  // without touching Contacts or each other — if that pushes either of
  // them above the Contacts tier, the plan name/base stay the same, but an
  // "Extended Usage" line appears in the breakdown for the difference (see
  // `extendedUsageCost` below), so the total still reflects it.
  const [contactsIdx, setContactsIdx] = useState(0);
  const [emailsIdx, setEmailsIdx] = useState(0);
  const [actionsIdx, setActionsIdx] = useState(0);
  const [seats, setSeats] = useState(5);

  function handleContactsChange(value) {
    setContactsIdx(value);
    setEmailsIdx((prev) => Math.max(prev, value));
    setActionsIdx((prev) => Math.max(prev, value));
  }

  const rootRef = useRevealRoot();
  const matrixSectionRef = useRef(null);
  const [matrixVisible, setMatrixVisible] = useState(false);

  useEffect(() => {
    const section = matrixSectionRef.current;
    if (!section) return;
    if (!('IntersectionObserver' in window)) {
      setMatrixVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMatrixVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  const c = CONTACT_TIERS[contactsIdx];
  const e = EMAIL_TIERS[emailsIdx];
  const a = ACTION_TIERS[actionsIdx];
  // The plan identity (name, base price, included-contacts allowance) is
  // always tied to the Contacts tier. If Emails or Actions has been pushed
  // to a higher tier than Contacts, that costs extra — priced as the
  // difference between the two tiers' base prices, so no separate overage
  // rate table is needed.
  const plan = c;
  const effectiveIdx = Math.max(contactsIdx, emailsIdx, actionsIdx);
  const extendedUsageCost = CONTACT_TIERS[effectiveIdx].base - c.base;
  const extraSeats = Math.max(0, seats - 5);
  const seatPrice = extraSeats * 5;
  const total = c.base + extendedUsageCost + seatPrice;

  const pct = (val, min, max) => ((val - min) / (max - min)) * 100;

  return (
    <div ref={rootRef} className="lc-pricing-page" style={{ background: '#f6f8fa', color: '#121212', fontFamily: "'Lato',sans-serif" }}>
      <style>{PRICING_CSS}</style>

      <Nav />

      {/* HERO */}
      <header style={{ padding: '88px 0 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h1 className="lc-hero-title" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#121212' }}>
            Build your <span style={{ color: '#185fa5' }}>custom Lucrative&nbsp;AI</span> engine.
          </h1>
          <p className="lc-hero-sub" style={{ fontSize: 17, lineHeight: 1.65, color: '#5c5c5c', maxWidth: 640, margin: '24px auto 0' }}>
            AI-Native Pay-As-You-Use architecture. Includes default RevOps consultancy, 1-click system migration, outcome-based conversational CRM building, and 100% pre-validated email deliverability.
          </p>
          <div className="lc-hero-badges" style={{ display: 'inline-flex', alignItems: 'center', gap: 28, marginTop: 28, flexWrap: 'wrap', justifyContent: 'center', fontSize: 13, color: '#5c5c5c', fontWeight: 600 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#185fa5' }} />AI-Native RevOps Engine</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#185fa5' }} />$99 Baseline</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#185fa5' }} />Zero Seat Tax</span>
          </div>
        </div>
      </header>

      {/* CONFIGURATOR */}
      <section id="configurator" style={{ padding: '40px 0 96px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 28, alignItems: 'stretch' }}>

          {/* LEFT: Sliders */}
          <div className="lc-reveal" style={{ background: '#fff', borderRadius: 22, boxShadow: 'inset 0 0 0 1px rgba(18,18,18,0.06)', padding: 34, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <div style={{ marginBottom: 34 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 15, color: '#121212' }}>Active Contact Database</div>
                  <div style={{ fontSize: 13, color: '#7e7e7d', marginTop: 2 }}>Determines base infrastructure scale.</div>
                </div>
                <span key={`contacts-${contactsIdx}`} className="mono lc-value-pulse" style={{ padding: '6px 14px', borderRadius: 9999, background: 'rgba(24,95,165,0.08)', color: '#185fa5', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {fmtNum(c.n)} Contacts
                </span>
              </div>
              <input type="range" min={0} max={5} step={1} value={contactsIdx} onChange={(ev) => handleContactsChange(+ev.target.value)}
                className="lc-slider" style={{ '--pct': pct(contactsIdx, 0, 5) + '%' }} />
              <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 11, color: '#a0a0a0', letterSpacing: '0.04em' }}>
                {CONTACT_LABELS.map((l) => <span key={l}>{l}</span>)}
              </div>
            </div>

            <div style={{ marginBottom: 34 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 15, color: '#121212', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    Verified Email Sends / Month
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#4fa76f" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M8 12.5l2.5 2.5 5-5.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div style={{ fontSize: 13, color: '#7e7e7d', marginTop: 2 }}>100% Real-Time Deliverability Validation included before sending.</div>
                </div>
                <span key={`emails-${emailsIdx}`} className="mono lc-value-pulse" style={{ padding: '6px 14px', borderRadius: 9999, background: 'rgba(109,199,143,0.16)', color: '#3d8b5c', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {fmtNum(e.n)} Emails
                </span>
              </div>
              <input type="range" min={0} max={5} step={1} value={emailsIdx} onChange={(ev) => setEmailsIdx(+ev.target.value)}
                className="lc-slider" style={{ '--pct': pct(emailsIdx, 0, 5) + '%' }} />
              <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 11, color: '#a0a0a0', letterSpacing: '0.04em' }}>
                {EMAIL_LABELS.map((l) => <span key={l}>{l}</span>)}
              </div>
            </div>

            <div style={{ marginBottom: 34 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 15, color: '#121212' }}>AI Native Credits / Month</div>
                  <div style={{ fontSize: 13, color: '#7e7e7d', marginTop: 2 }}>SDR Email Drafting, CPQ Approvals, Persona Alignment &amp; Workflows.</div>
                </div>
                <span key={`actions-${actionsIdx}`} className="mono lc-value-pulse" style={{ padding: '6px 14px', borderRadius: 9999, background: 'rgba(24,95,165,0.08)', color: '#185fa5', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {fmtNum(a.n)} Actions
                </span>
              </div>
              <input type="range" min={0} max={5} step={1} value={actionsIdx} onChange={(ev) => setActionsIdx(+ev.target.value)}
                className="lc-slider" style={{ '--pct': pct(actionsIdx, 0, 5) + '%' }} />
              <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 11, color: '#a0a0a0', letterSpacing: '0.04em' }}>
                {ACTION_LABELS.map((l) => <span key={l}>{l}</span>)}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 15, color: '#121212', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                    Active Team Seats
                    <span style={{ padding: '3px 10px', borderRadius: 9999, background: 'rgba(237,178,62,0.16)', color: '#a67518', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>First 5 Free</span>
                  </div>
                  <div style={{ fontSize: 13, color: '#7e7e7d', marginTop: 2 }}>Extra seats: $5/mo. <strong style={{ color: '#3d8b5c' }}>30-Day Auto-Inactivity Waiver included.</strong></div>
                </div>
                <span key={`seats-${seats}`} className="mono lc-value-pulse" style={{ padding: '6px 14px', borderRadius: 9999, background: 'rgba(24,95,165,0.08)', color: '#185fa5', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {seats} Users
                </span>
              </div>
              <input type="range" min={5} max={50} step={1} value={seats} onChange={(ev) => setSeats(+ev.target.value)}
                className="lc-slider" style={{ '--pct': pct(seats, 5, 50) + '%' }} />
            </div>
          </div>

          {/* RIGHT: Estimate */}
          <div className="lc-reveal" style={{ transitionDelay: '120ms' }}>
            <div style={{ background: '#0f2e4d', borderRadius: 22, padding: 0, overflow: 'hidden', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '26px 28px 22px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7fa8d4', fontWeight: 700 }}>Workspace Estimate</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 24, color: '#fff', marginTop: 6 }}>{plan.name}</div>
                </div>
                <span className="mono" style={{ padding: '5px 11px', borderRadius: 9999, background: 'rgba(255,255,255,0.08)', color: '#b5d4f4', fontSize: 11, fontWeight: 700 }}>$99/mo Base Minimum</span>
              </div>
              <div style={{ padding: '22px 28px', display: 'grid', gap: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ fontSize: 14.5, color: '#fff', fontWeight: 700 }}>Base Infrastructure (Up to {plan.n.toLocaleString()} Contacts)</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18, color: '#fff', whiteSpace: 'nowrap' }}>${plan.base}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14.5, color: '#fff', fontWeight: 700 }}>Verified Emails ({e.n.toLocaleString()})</div>
                    <div style={{ fontSize: 12, color: '#7fa8d4', marginTop: 2 }}>{e.price === 0 ? 'Included in plan' : 'Usage-based tier'}</div>
                  </div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18, color: '#fff', whiteSpace: 'nowrap' }}>${e.price}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14.5, color: '#fff', fontWeight: 700 }}>AI Credits ({a.n.toLocaleString()})</div>
                    <div style={{ fontSize: 12, color: '#7fa8d4', marginTop: 2 }}>{a.price === 0 ? 'Included in plan' : 'Usage-based tier'}</div>
                  </div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18, color: '#fff', whiteSpace: 'nowrap' }}>${a.price}</div>
                </div>
                {extendedUsageCost > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 14.5, color: '#fff', fontWeight: 700 }}>Extended Usage</div>
                      <div style={{ fontSize: 12, color: '#f4c96a', marginTop: 2 }}>Emails/AI Credits usage exceeds your Contacts tier</div>
                    </div>
                    <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18, color: '#fff', whiteSpace: 'nowrap' }}>${extendedUsageCost}</div>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14.5, color: '#fff', fontWeight: 700 }}>User Seats ({seats} Users)</div>
                    <div style={{ fontSize: 12, color: '#6dc78f', marginTop: 2, fontWeight: 700 }}>{extraSeats === 0 ? '5 Free + Auto-Waive Active' : `5 Free + ${extraSeats} extra @ $5/mo`}</div>
                  </div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 18, color: '#fff', whiteSpace: 'nowrap' }}>${seatPrice}</div>
                </div>
              </div>
              <div style={{ padding: '22px 28px 26px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 14, color: '#b5d4f4' }}>Total Monthly Investment</div>
                    <div style={{ fontSize: 12, color: '#6dc78f', fontWeight: 700, marginTop: 3 }}>$99/mo Base Floor Guaranteed</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <div key={total} className="lc-value-pulse" style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 44, color: '#fff', letterSpacing: '-0.02em' }}>${total.toLocaleString()}</div>
                    <div style={{ fontSize: 14, color: '#b5d4f4' }}>/ mo</div>
                  </div>
                </div>
                <a href="#" className="lc-btn-primary" style={{ marginTop: 22, width: '100%', justifyContent: 'center', background: '#185fa5', fontSize: 15.5, padding: '15px 26px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#edb23e" aria-hidden="true"><path d="M12 2l2 6h6l-5 4 2 7-7-4-7 4 2-7-5-4h6z" /></svg>
                  Deploy Workspace Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BUILT-IN CAPABILITIES */}
        <div style={{ maxWidth: 1240, margin: '40px auto 0', padding: '0 32px' }}>
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: 'inset 0 0 0 1px rgba(18,18,18,0.06)', padding: '40px 44px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 26, letterSpacing: '-0.02em', color: '#121212' }}>Built-in capabilities &amp; services.</h3>
                <p style={{ fontSize: 14, color: '#7e7e7d', marginTop: 6, maxWidth: 520 }}>Everything that ships with your workspace — no add-ons required.</p>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 9999, background: 'rgba(109,199,143,0.16)', color: '#3d8b5c', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.04em' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4fa76f' }} />Included ($0)
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 9999, background: 'rgba(24,95,165,0.1)', color: '#185fa5', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.04em' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#185fa5' }} />Usage-based
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 9999, background: '#f2f0ed', color: '#7e7e7d', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.04em' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a0a0a0' }} />Higher plan
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
              {CAPABILITY_CARDS.map((card, i) => (
                card.locked ? (
                  <div key={card.title} className="lc-reveal lc-cap-card" style={{ transitionDelay: `${i * 60}ms`, borderRadius: 16, padding: 22, background: '#f7f5f2', boxShadow: 'inset 0 0 0 1px rgba(18,18,18,0.06)', display: 'flex', flexDirection: 'column', gap: 14, gridColumn: 'span 2' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: '#e6e2dc', color: '#7e7e7d' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7e7e7d' }}>
                        <span style={{ padding: '3px 9px', borderRadius: 9999, background: 'rgba(237,178,62,0.16)', color: '#a67518' }}>{card.plan}</span>
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
                      <div>
                        <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 14.5, color: '#5c5c5c', marginBottom: 6 }}>{card.title}</div>
                        <div style={{ fontSize: 13, color: '#a0a0a0', lineHeight: 1.55 }}>{card.body}</div>
                      </div>
                      <a href="#" style={{ flexShrink: 0, fontSize: 12.5, fontWeight: 700, color: '#185fa5', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        Upgrade
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div key={card.title} className="lc-reveal lc-cap-card" style={{ transitionDelay: `${i * 60}ms`, borderRadius: 16, padding: 22, background: card.badge === 'Included' ? '#fbfaf9' : 'rgba(24,95,165,0.04)', boxShadow: card.badge === 'Included' ? 'inset 0 0 0 1px rgba(18,18,18,0.05)' : 'inset 0 0 0 1px rgba(24,95,165,0.16)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: card.iconBg, color: card.iconColor }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /></svg>
                      </span>
                      <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: card.badgeColor }}>{card.badge}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 14.5, color: '#121212', marginBottom: 6 }}>{card.title}</div>
                      <div style={{ fontSize: 13, color: '#5c5c5c', lineHeight: 1.55 }}>{card.body}</div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITOR MATRIX */}
      <section id="matrix" ref={matrixSectionRef} style={{ background: '#eaeef3', padding: '96px 0', position: 'relative' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
          <div className="lc-reveal" style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 48px' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 9999, background: 'rgba(24,95,165,0.08)', color: '#185fa5', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18, border: '1px solid rgba(24,95,165,0.2)' }}>Market Intelligence</span>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 500, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#121212', marginBottom: 16 }}>Side-by-side competitor benchmarking.</h2>
            <p style={{ fontSize: 16, color: '#5c5c5c', lineHeight: 1.65 }}>
              See how your selected requirements{' '}
              <span className="mono" style={{ padding: '2px 8px', borderRadius: 6, background: '#fff', boxShadow: 'inset 0 0 0 1px rgba(18,18,18,0.06)', color: '#121212', fontSize: 13.5 }}>
                {fmtNum(c.n)} Contacts, {fmtNum(e.n)} Emails, {seats} Seats
              </span>{' '}
              compare against major enterprise platforms.
            </p>
          </div>

          <div id="matrixBody" className={matrixVisible ? 'is-visible' : ''} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1.1fr 1fr 1fr 1fr 1fr 1fr', alignItems: 'center', background: 'linear-gradient(180deg,#e6eef8 0%,#dbe6f4 100%)', borderRadius: 24, padding: '18px 24px', gap: 12 }}>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5c5c5c' }}>Platform Solution</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#185fa5', paddingLeft: 14 }}>Lucrative AI</div>
              {['GoHighLevel', 'HubSpot', 'Klaviyo', 'Mailchimp', 'Salesforce'].map((name) => (
                <div key={name} style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a0a0a0', paddingLeft: 10 }}>{name}</div>
              ))}
            </div>

            {MATRIX_ROWS.map((r, idx) => {
              let rowBg = '#fff';
              let usBg = 'rgba(24,95,165,0.04)';
              if (r.highlight === 'blue') { rowBg = '#fff'; usBg = 'rgba(24,95,165,0.08)'; }
              if (r.highlight === 'green') { rowBg = 'rgba(109,199,143,0.10)'; usBg = 'rgba(109,199,143,0.22)'; }
              return (
                <div key={r.label} className="lc-matrix-row" style={{ animationDelay: `${idx * 32}ms`, display: 'grid', gridTemplateColumns: '1.7fr 1.1fr 1fr 1fr 1fr 1fr 1fr', alignItems: 'center', background: rowBg, borderRadius: 24, padding: '16px 24px', boxShadow: 'inset 0 0 0 1px rgba(18,18,18,0.05)', gap: 12 }}>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13.5, color: '#121212', lineHeight: 1.4 }}>{r.label}</div>
                  <div style={{ background: usBg, borderRadius: 14, padding: '10px 14px', minHeight: 44, display: 'flex', alignItems: 'center' }}><MatrixCell cell={r.us} /></div>
                  {r.cells.map((cell, ci) => (
                    <div key={ci} style={{ padding: '6px 10px' }}><MatrixCell cell={cell} /></div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Scoped CSS — animation rules only (layout stays inline above, same */
/* approach the original bundle used).                                */
/* ------------------------------------------------------------------ */

const PRICING_CSS = `
.lc-pricing-page .mono{font-family:'JetBrains Mono',ui-monospace,monospace;}
.lc-pricing-page .lc-btn-primary{background:#0f2e4d;color:#fff;border-radius:9999px;font-weight:700;font-size:15px;padding:13px 26px;display:inline-flex;align-items:center;gap:8px;transition:background 180ms ease,transform 150ms ease,box-shadow 150ms ease;}
.lc-pricing-page .lc-btn-primary:hover{background:#0a2038;color:#fff;}
.lc-pricing-page .lc-btn-primary:active{transform:scale(0.96);}

.lc-pricing-page input.lc-slider{-webkit-appearance:none;appearance:none;width:100%;height:4px;background:linear-gradient(to right,#0f2e4d var(--pct,25%),#e6e2dc var(--pct,25%));border-radius:9999px;outline:none;transition:background 120ms ease;}
.lc-pricing-page input.lc-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:2px solid #0f2e4d;cursor:pointer;transition:transform 150ms ease,box-shadow 150ms ease;}
.lc-pricing-page input.lc-slider:hover::-webkit-slider-thumb{transform:scale(1.14);}
.lc-pricing-page input.lc-slider:active::-webkit-slider-thumb{transform:scale(1.24);box-shadow:0 0 0 7px rgba(15,46,77,0.14);}
.lc-pricing-page input.lc-slider::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#fff;border:2px solid #0f2e4d;cursor:pointer;transition:transform 150ms ease,box-shadow 150ms ease;}
.lc-pricing-page input.lc-slider:hover::-moz-range-thumb{transform:scale(1.14);}

@keyframes lc-fade-up{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
@keyframes lc-pulse{0%{transform:scale(1);}35%{transform:scale(1.05);}100%{transform:scale(1);}}
@keyframes lc-drop-in{from{opacity:0;transform:translateY(14px) scale(0.98);}to{opacity:1;transform:translateY(0) scale(1);}}

.lc-pricing-page .lc-reveal{opacity:0;transform:translateY(26px);transition:opacity 700ms cubic-bezier(.2,.7,.3,1),transform 700ms cubic-bezier(.2,.7,.3,1);}
.lc-pricing-page .lc-reveal.is-visible{opacity:1;transform:translateY(0);}

.lc-pricing-page .lc-hero-title,.lc-pricing-page .lc-hero-sub,.lc-pricing-page .lc-hero-badges{opacity:0;animation:lc-drop-in 720ms cubic-bezier(.2,.7,.3,1) forwards;}
.lc-pricing-page .lc-hero-title{animation-delay:60ms;}
.lc-pricing-page .lc-hero-sub{animation-delay:180ms;}
.lc-pricing-page .lc-hero-badges{animation-delay:300ms;}

.lc-pricing-page .lc-cap-card{transition:transform 220ms ease,box-shadow 220ms ease;}
.lc-pricing-page .lc-cap-card:hover{transform:translateY(-4px);box-shadow:0 12px 26px rgba(18,18,18,0.09);}

.lc-pricing-page .lc-value-pulse{animation:lc-pulse 340ms ease;}

.lc-pricing-page #matrixBody .lc-matrix-row{opacity:0;transition:transform 200ms ease,box-shadow 200ms ease;}
.lc-pricing-page #matrixBody.is-visible .lc-matrix-row{animation:lc-fade-up 560ms cubic-bezier(.2,.7,.3,1) both;}
.lc-pricing-page #matrixBody.is-visible .lc-matrix-row:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(18,18,18,0.08);}

@media (prefers-reduced-motion: reduce){
  .lc-pricing-page .lc-reveal,.lc-pricing-page .lc-hero-title,.lc-pricing-page .lc-hero-sub,.lc-pricing-page .lc-hero-badges,.lc-pricing-page #matrixBody.is-visible .lc-matrix-row{
    animation:none !important;transition:none !important;opacity:1 !important;transform:none !important;
  }
}
`;