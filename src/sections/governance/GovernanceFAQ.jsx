import React, { useState } from 'react';

const faqs = [
  {
    q: 'What does a Revenue Governance Audit include?',
    a: 'Eight governance dimensions: field proliferation, orphaned automations, contact stagnation, workflow health, object integrity, integration integrity across connected apps, ICP alignment, and revenue hygiene. You get an overall score, a categorized list of every issue, dollar impact on each, and a review-and-fix workflow for the ones you want to remediate.',
  },
  {
    q: 'Which CRMs do you support?',
    a: 'Lucrative natively supports HubSpot, Salesforce, and GoHighLevel today, with the same governance engine and AI layer running underneath each — more integrations are on the roadmap.',
  },
  {
    q: 'How long does the audit take?',
    a: "Most audits complete in under 10 minutes once your CRM is connected. Larger workspaces with 100k+ contacts may take a little longer, but you'll get a live progress view the whole time.",
  },
  {
    q: 'How are credits used?',
    a: 'Each connected app or automation you run — like a HubSpot audit or an email deliverability check — draws from your credit balance. Pricing per action is shown before you run it, so there are no surprises.',
  },
  {
    q: 'Can Lucrative actually fix things, or just report them?',
    a: 'Both. Every issue we surface comes with a review-and-fix workflow — you approve the change and Lucrative applies it directly in your connected CRM, with a full audit log of what changed.',
  },
  {
    q: 'Can I audit multiple CRMs in one workspace?',
    a: 'Yes. Governance runs across every connected app in your workspace at once, so you get one unified score instead of juggling separate reports per platform.',
  },
  {
    q: 'How often should I run an audit?',
    a: 'Most teams run a full audit quarterly and let continuous monitoring flag new issues in between — so nothing quietly drifts out of policy between audits.',
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