import React from 'react';

const problems = [
  { tag: 'Lists', color: 'var(--red-500)', title: 'Static Lists', desc: 'Campaigns start with lists&mdash;not customer intelligence. Static segments quickly become outdated as customers change.' },
  { tag: 'Silos', color: 'var(--gold-500)', title: 'Disconnected', desc: 'Sales and marketing operate in different systems. Lead context disappears after handoff.' },
  { tag: 'Attribution', color: 'var(--blue-500)', title: 'Broken Attribution', desc: 'Attribution stops at the click. You know who opened an email. You don&rsquo;t know what actually generated revenue.' },
  { tag: 'Automation', color: 'var(--teal-500)', title: 'Manual Execution', desc: 'Every campaign requires manual work. Building emails, journeys, audiences, forms and reports wastes valuable time.' },
  { tag: 'Intelligence', color: 'var(--blue-500)', title: 'Generic AI', desc: 'AI writes content&mdash;but doesn&rsquo;t understand your business. Generic AI tools don&rsquo;t know your CRM, customers or buying signals.' },
  { tag: 'Reporting', color: 'var(--blue-500)', title: 'Revenue Visibility', desc: 'Marketing reports don&rsquo;t answer executive questions. Leadership needs revenue attribution&mdash;not email metrics.' },
];

export default function LoftMarketingProblem() {
  return (
    <section className="section section--grey">
      <div className="container">
        <div className="loft-problem-head reveal">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Businesses Outgrow<br />Traditional Marketing<br />Platforms</h2>
            <p className="section-sub" style={{ textAlign: 'left', margin: '14px 0 0' }}>
              Traditional marketing tools automate campaigns.<br />Loft automates revenue growth.
            </p>
          </div>
          <div className="loft-problem-note">
            <p>Instead of enabling growth, many CRMs begin charging a premium for it. Loft was built to change that.</p>
            <a href="#how-it-works" className="btn btn-primary">Learn More</a>
          </div>
        </div>

        <div className="loft-problem-grid">
          {problems.map((p, i) => (
            <div className="loft-problem-card reveal" style={{ transitionDelay: `${(i % 3) * 90}ms` }} key={p.title}>
              <span className="tag-pill" style={{ color: p.color }}>{p.tag}</span>
              <h4 dangerouslySetInnerHTML={{ __html: p.title }} />
              <p dangerouslySetInnerHTML={{ __html: p.desc }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}