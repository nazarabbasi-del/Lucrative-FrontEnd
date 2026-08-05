import React from 'react';
import { IconCheck } from '../../icons.jsx';
import CountUp from '../governance/anim/CountUp.jsx';

const checklist = [
  '40+ minutes spent per quote',
  'Calculates pricing using deterministic business rules',
  'Checks approval policies',
  'Creates professional quote wording',
  'Generates the final document',
  'Stores everything in the audit trail',
];

const steps = [
  ['Opportunity loaded', 'SALESFORCE'],
  ['Pricing engine', 'DETERMINISTIC'],
  ['Policy check', 'PASS'],
  ['Quote generated', 'READY'],
];

export default function QuotebaseVerified() {
  return (
    <section className="section section--grey">
      <div className="container qb-verified-grid">
        <div className="reveal">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Every quote. Fully verified.</h2>
          <p style={{ marginTop: 16, color: 'var(--text-600)', fontSize: 15, lineHeight: 1.7 }}>
            Instead of asking sales teams to assemble quotes manually, Quotebase coordinates every step automatically.
          </p>
          <p style={{ marginTop: 14, color: 'var(--text-600)', fontSize: 15, lineHeight: 1.7 }}>
            The AI agent handles the language, the pricing engine handles the math, and the policy layer decides what ships.
          </p>
          <p style={{ marginTop: 14, color: 'var(--text-600)', fontSize: 15, lineHeight: 1.7 }}>
            You get a finished, defensible quote &mdash; with the receipts to prove it.
          </p>

          <ul className="qb-check-list">
            {checklist.map((c) => (
              <li key={c}>
                <span className="qb-check-circle"><IconCheck /></span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <div className="qb-quote-card">
            <div className="qb-quote-card-head">
              <h4>ACME Manufacturing</h4>
              <span className="tag-pill" style={{ color: 'var(--teal-600)', margin: 0 }}><IconCheck /> Pass</span>
            </div>
            <p className="qb-quote-card-sub">QF-2026-04182 &middot; OPP #A038</p>

            <div className="qb-quote-line"><span>Line 1 &middot; Pro License &times; 40</span><b><CountUp to={32000} decimals={2} comma prefix="$" /></b></div>
            <div className="qb-quote-line"><span>Line 2 &middot; Onboarding</span><b><CountUp to={8500} decimals={2} comma prefix="$" /></b></div>
            <div className="qb-quote-line discount"><span>Volume discount &middot; 12%</span><span><CountUp to={4860} decimals={2} comma prefix={'−$'} /></span></div>
            <div className="qb-quote-line"><span>Tax &middot; CA 8.75%</span><b><CountUp to={3114.75} decimals={2} comma prefix="$" /></b></div>

            <div className="qb-quote-total">
              <b>Total &middot; net 30</b>
              <b><CountUp to={38754.75} decimals={2} comma prefix="$" /></b>
            </div>

            <div className="qb-quote-steps">
              {steps.map(([label, tag], i) => (
                <div className="loft-step-row" key={label}>
                  <span className="loft-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{label}</span>
                  <span className="right">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}