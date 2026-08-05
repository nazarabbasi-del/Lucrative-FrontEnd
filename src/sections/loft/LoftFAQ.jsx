import React, { useState } from 'react';

const faqs = [
  {
    q: 'What does a Revenue Governance Audit include?',
    a: 'Eight governance dimensions: field proliferation, orphaned automations, contact stagnation, workflow health, object integrity, integration integrity across connected apps, ICP alignment, and revenue hygiene. You get an overall score, a categorized list of every issue, dollar impact on each, and a review-and-fix workflow for the ones you want to remediate.',
  },
  {
    q: 'Which CRMs do you support?',
    a: 'HubSpot, Salesforce, and GoHighLevel today, with the same audit depth on every platform &mdash; more connectors are added regularly based on customer demand.',
  },
  {
    q: 'How long does the audit take?',
    a: 'About five minutes for a full scan of your CRM and connected apps. You get a scored report the moment it finishes, not a queued ticket you wait days on.',
  },
  {
    q: 'How are credits used?',
    a: 'Each full audit costs 100 credits, regardless of which CRM you connect. Credits don&rsquo;t expire, and there&rsquo;s no subscription or per-seat fee sitting on top of them.',
  },
  {
    q: 'Can Lucrative actually fix things, or just report them?',
    a: 'Both. Every issue comes with a drafted fix you review and approve &mdash; Lucrative backs up your data first, then executes the change. Nothing runs without your sign-off.',
  },
  {
    q: 'Can I audit multiple CRMs in one workspace?',
    a: 'Yes. Connect HubSpot, Salesforce, and GoHighLevel side by side in the same workspace and run audits independently or together.',
  },
  {
    q: 'How often should I run an audit?',
    a: 'Most teams run one per quarter, weekly during a migration, or right before a major AI or automation rollout &mdash; whenever you want a clean, priced baseline of your data.',
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