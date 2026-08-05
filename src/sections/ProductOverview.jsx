import React from 'react';

const products = [
  { tag: 'SALES', color: 'var(--blue-600)', title: 'Lucrative Sales', desc: 'Sales intelligence built on the communication and DNA pattern to provide behavioral psychographic analysis.' },
  { tag: 'MARKETING', color: 'var(--gold-600)', title: 'Lucrative Marketing', desc: 'Beyond boring Marketing System. AI Driven Marketing Mission Control. Teach your marketing system with painpoint and objective in simple language.' },
  { tag: 'ANALYTICS', color: 'var(--teal-600)', title: 'Lucrative Analytics', desc: "Industr's most innovative way of building reports and dashboard. It has the only unique way to build attribution. Want a robust platform like Tableau & Power BI but better. Choice is yours — connected to 15+ platforms." },
  { tag: 'CPQ', color: 'var(--text-600)', title: ' Lucrative Quote', desc: 'Natively AI built to make quoting and contracting samples to close Deals Faster.' },
  { tag: 'GOVERNANCE', color: 'var(--gold-600)', title: 'Lucrative Governance', desc: 'AI monitors CRM health before problems become expensive.', wide: true },
];

export default function ProductOverview() {
  return (
    <section className="section" id="crms">
      <h2 className="section-title reveal">Solution Designed for Teams</h2>
      <p className="section-sub reveal">Real screens from the product. Connect a CRM, and this is your dashboard before your coffee cools.</p>

      <div className="container">
        <div className="overview-grid">
          {products.map((p) => (
            <div
              className={`overview-card reveal ${p.wide ? 'overview-card--wide' : ''}`}
              style={{ '--tagc': p.color }}
              key={p.title}
            >
              <span className="tag-pill" style={{ color: p.color }}>{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
