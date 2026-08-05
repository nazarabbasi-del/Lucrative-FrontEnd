import React from 'react';

const options = [
  {
    n: '01', title: 'Hire an agency', badge: '$2,000–$10,000', badgeClass: 'badge-red',
    desc: 'Two to four weeks. Twenty hours pulling data, four hours interpreting it. You get a PDF with a prioritized list. Fixing it is still your job.',
  },
  {
    n: '02', title: 'Audit it yourself', badge: '30 hours', badgeClass: 'badge-gold',
    desc: 'Of a senior RevOps person, every quarter — if you know exactly where to look. Most people don’t.',
  },
  {
    n: '03', title: 'Ignore it', badge: '$???', badgeClass: 'badge-outline',
    desc: 'Watch your forecast drift, your reps keep side spreadsheets, and your AI initiatives quietly fail on dirty data.',
  },
];

export default function GovernanceProblem() {
  return (
    <section className="section section--grey section--tight">
      <div className="container">
        <h2 className="section-title reveal">Your CRM has been decaying quietly.</h2>
        <p className="section-sub reveal">
          A rep added a field for a pet project. Marketing plugged in a Zapier fix. Someone left, and their workflow kept running.
          Two years later, nobody wants to touch anything — because nobody remembers what it does. So you&rsquo;re left with <b>three bad options.</b>
        </p>

        <div className="gov-options reveal">
          {options.map((o) => (
            <div className="gov-option-card" key={o.n}>
              <span className="gov-option-n">Option {o.n}</span>
              <div className="gov-option-top">
                <h4>{o.title}</h4>
                <span className={`badge ${o.badgeClass}`}>{o.badge}</span>
              </div>
              <p>{o.desc}</p>
            </div>
          ))}
        </div>

        <p className="gov-fourth-option reveal">
          There&rsquo;s a fourth option now. <a href="#audit" className="text-blue">It takes five minutes.</a>
        </p>
      </div>
    </section>
  );
}
