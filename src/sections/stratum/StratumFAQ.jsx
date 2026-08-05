import React, { useState } from 'react';

const faqs = [
  {
    q: 'Is Stratum another BI dashboard?',
    a: 'No. Dashboards are only one part of Stratum. The platform combines AI analytics, attribution, experimentation, and conversational querying to help you understand not just what happened, but why—and what to do next.',
  },
  {
    q: 'Do I need SQL or a data analyst?',
    a: 'No. Stratum is built for marketers and revenue teams, not analysts. Ask questions in plain English and Stratum handles the querying, joins, and modeling behind the scenes.',
  },
  {
    q: 'How is Stratum different from HubSpot reporting?',
    a: 'Native CRM reporting only sees what happens inside that one platform. Stratum connects every source — CRM, ad platforms, data warehouses — into one resolved data model, so you get cross-platform answers instead of single-tool snapshots.',
  },
  {
    q: 'How trustworthy is the attribution?',
    a: 'Stratum runs multiple attribution models side by side — including Markov chain and Shapley value models — instead of relying on first-touch or last-touch alone, and backs every recommendation with randomized holdout experiments you can validate statistically.',
  },
  {
    q: 'Is AI included?',
    a: 'Yes. The AI GTM Analyst is included on every plan — it surfaces ranked recommendations with confidence scores automatically, on top of the natural-language querying and dashboard generation.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--grey" id="faq">
      <div className="container faq-layout">
        <div className="reveal">
          <h2>FAQ's</h2>
          <p className="sub">Questions? Answered</p>
        </div>

        <div className="reveal">
          {faqs.map((f, i) => (
            <div
              className={`faq-item ${open === i ? 'open' : ''}`}
              key={f.q}
            >
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="icon">
                  {open === i ? '−' : '+'}
                </span>

                <span className="faq-title">
                  {f.q}
                </span>
              </button>

              <div className="faq-a">
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}