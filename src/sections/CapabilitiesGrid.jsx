import React from 'react';

const cards = [
  {
    tag: 'LOFT CRM & MARKETING AUTOMATION', variant: 'dark',
    title: <>AI CRM + Marketing Automation<br />in one workspace.</>,
    pills: ['Pipeline management', 'Lead scoring', 'Campaign journeys', 'Email automation', 'Customer timeline', 'Support integration', 'AI content assist', '+7 more'],
  },
  {
    tag: 'STRATUM INSIGHTS', variant: 'light',
    title: <>Ask any business question.<br /><span className="text-blue">Answer in seconds.</span></>,
    pills: ['Natural-language analytics', 'Forecasting', 'Attribution', 'Executive dashboards', '+4 more'],
  },
  {
    tag: 'QUOTEBASE', variant: 'light',
    title: <>Quotes in seconds.</>,
    pills: ['Salesforce native', 'CPQ', 'Deterministic pricing', 'Policy guardrails', 'Contract drafting', 'Approval workflows'],
  },
  {
    tag: 'GOVERNANCE', variant: 'teal',
    title: <>Health, quantified.</>,
    pills: ['Quarterly audit', 'Duplicate detection', 'Field hygiene', 'Policy monitoring', 'Audit logs'],
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="section section--grey">
      <div className="container">
        <h2 className="section-title reveal">Everything revenue teams need.<br />Nothing they don't.</h2>
        <p className="section-sub reveal">30+ capabilities across four products — grouped so you can see the whole picture at once.</p>

        <div className="cap-grid">
          {cards.map((c) => (
            <div className={`cap-card ${c.variant} reveal`} key={c.tag}>
              <span className="tag-pill">{c.tag}</span>
              <span className="count">14 CAPABILITIES</span>
              <h3>{c.title}</h3>
              <div className="cap-pills">
                {c.pills.map((p) => <span className="cap-pill" key={p}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
