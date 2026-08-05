import React from 'react';
import { IconChevronDown } from '../../icons.jsx';
import salesforceHub from '../../assets/deco-salesforce-hub.png';
import CountUp from '../governance/anim/CountUp.jsx';

const auditRows = [
  ['09:14 &middot; quote generated', 'QF-04182', 'var(--teal-500)'],
  ['09:15 &middot; manager approved', 'j.chen', 'var(--gold-500)'],
  ['09:16 &middot; emailed to customer', 'tracked', 'var(--blue-500)'],
];

const roleRows = [
  ['Admin', 'rules &middot; templates &middot; users'],
  ['Manager', 'approvals &middot; overrides'],
  ['Sales', 'generate &middot; send'],
];

const templates = [
  { label: 'EMEA &middot; EN', color: 'var(--blue-500)' },
  { label: 'NA &middot; Enterprise', color: 'var(--red-500)' },
  { label: 'APAC &middot; JP', color: 'var(--teal-500)' },
];

export default function QuotebaseFeatures() {
  return (
    <section className="section section--grey">
      <div className="container">
        <h2 className="section-title reveal">Everything you need to<br />generate accurate quotations.</h2>

        <div className="qb-features-row qb-features-row--top reveal" style={{ marginTop: 44 }}>
          <div className="qb-feature-card qb-feature-card--dark">
            <div>
              <span className="tag-pill" style={{ color: 'var(--gold-500)', margin: 0 }}>The core guarantee</span>
              <h4>Deterministic pricing</h4>
              <p>Business rules calculate every price, tax, discount, and total. No language model can override the ledger.</p>
            </div>

            <div className="qb-mini-receipt">
              <div className="qb-quote-line"><span>Pro License &times; 40</span><b><CountUp to={32000} decimals={2} comma prefix="$" /></b></div>
              <div className="qb-quote-line discount"><span>Discount &middot; 12%</span><span><CountUp to={4860} decimals={2} comma prefix={'−$'} /></span></div>
              <div className="qb-quote-total">
                <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.04em', fontWeight: 700, whiteSpace: 'nowrap' }}>calculated by code</span>
                <b><CountUp to={38754.75} decimals={2} comma prefix="$" /></b>
              </div>
            </div>
          </div>

          <div className="qb-feature-card">
            <h4>Policy guardrails</h4>
            <p>Automatically classify every quote before it reaches the customer.</p>
            <div className="qb-status-row"><span>Within limits</span><span className="tag-pill" style={{ color: 'var(--teal-500)', margin: 0 }}>Pass</span></div>
            <div className="qb-status-row"><span>Needs approval</span><span className="tag-pill" style={{ color: 'var(--gold-500)', margin: 0 }}>Review</span></div>
          </div>
        </div>

        <div className="qb-features-row qb-features-row--half reveal">
          <div className="qb-feature-card">
            <h4>Salesforce integration</h4>
            <p>Quotes straight from opportunities &mdash; OAuth 2.0, no stored credentials, no copying.</p>
            <img src={salesforceHub} alt="Salesforce integration" className="qb-feature-img" />
          </div>

          <div className="qb-feature-card qb-audit-card">
            <h4>Audit trail</h4>
            <p>Every quote, approval, and email permanently recorded &mdash; append-only, tamper-evident.</p>
            <div className="qb-audit-log">
              {auditRows.map(([label, val, color]) => (
                <div className="qb-audit-row" key={label}>
                  <span className="qb-audit-dot" style={{ background: color }} />
                  <span dangerouslySetInnerHTML={{ __html: label }} />
                  <span className="right">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="qb-features-row qb-features-row--half reveal">
          <div className="qb-feature-card">
            <h4>Role-based access</h4>
            <p>Separate permissions for Admins, Managers, and Sales. Least-privilege by default.</p>
            <div className="qb-role-list">
              {roleRows.map(([role, perms]) => (
                <div className="qb-role-row" key={role}>
                  <b>{role}</b>
                  <span dangerouslySetInnerHTML={{ __html: perms }} />
                  <IconChevronDown />
                </div>
              ))}
            </div>
          </div>

          <div className="qb-feature-card">
            <h4>Multi-template support</h4>
            <p>Different quote layouts across products, regions, and business units &mdash; brand-consistent, locale-aware, unlimited.</p>
            <div className="qb-template-stack">
              {templates.map((t, i) => (
                <div className="qb-template-card" style={{ '--tc': t.color, zIndex: i + 1 }} key={t.label} dangerouslySetInnerHTML={{ __html: t.label }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}