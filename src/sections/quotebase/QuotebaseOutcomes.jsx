import React from 'react';

const outcomes = [
  { tag: 'seconds, not minutes', color: 'var(--red-500)', title: 'Complete quote in seconds', desc: 'Turn Salesforce opportunities into finished quotations instantly.' },
  { tag: 'zero hallucinations', color: 'var(--gold-500)', title: 'Never invent a price', desc: 'Every financial figure comes from deterministic pricing logic.' },
  { tag: 'pass &middot; review &middot; block', color: 'var(--blue-500)', title: 'Enforce pricing policies', desc: 'Automatically validate discounts, taxes, and approvals.' },
  { tag: 'append-only', color: 'var(--teal-500)', title: 'Keep every action auditable', desc: 'Every quote, approval, and email is permanently logged.' },
  { tag: 'no added headcount', color: 'var(--text-900)', title: 'Scale without hiring', desc: 'Handle growing sales volumes without more administrative work.' },
  { tag: 'first to reply', color: 'var(--blue-500)', title: 'Faster customer response', desc: 'Deliver accurate quotations while competitors are still preparing theirs.' },
];

export default function QuotebaseOutcomes() {
  return (
    <section className="section">
      <div className="container">
        <div className="loft-problem-head reveal">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>What happens when<br />Quotebase generates<br />your quotes.</h2>
          </div>
          <div className="loft-problem-note">
            <p>Manual quoting taxes every deal with minutes and risk. Quotebase was built to remove both.</p>
            <a href="#demo" className="btn btn-primary">Book a Demo</a>
          </div>
        </div>

        <div className="loft-problem-grid">
          {outcomes.map((o, i) => (
            <div className="loft-problem-card reveal" style={{ transitionDelay: `${(i % 3) * 90}ms` }} key={o.title}>
              <span className="tag-pill" style={{ color: o.color }} dangerouslySetInnerHTML={{ __html: o.tag }} />
              <h4>{o.title}</h4>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}