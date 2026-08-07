import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Lucrative Sales?',
    a: 'Lucrative Sales is an AI-native CRM designed to help sales, marketing, customer success, operations, and leadership work from one intelligent platform. It automates manual CRM tasks, provides AI-powered sales insights, and helps teams close more deals while maintaining accurate customer data.',
  },
  {
    q: 'How is Lucrative Sales different from traditional CRM software?',
    a: 'Unlike traditional CRM systems that primarily store customer information, Lucrative Sales automatically updates records, identifies relationship opportunities, predicts deal risks, recommends next actions, and provides AI-powered revenue intelligence &mdash; all without requiring constant manual updates.',
  },
  {
    q: 'What is an Autonomous CRM?',
    a: 'An Autonomous CRM is a CRM that manages itself. Lucrative Sales automatically logs calls, captures emails, enriches customer records, detects duplicates, updates pipelines, and keeps your CRM accurate with minimal manual effort from your team.',
  },
  {
    q: 'How does the AI Sales Assistant help sales teams?',
    a: 'The AI Sales Assistant prepares meeting briefs, drafts follow-up emails, summarizes customer conversations, identifies stalled opportunities, recommends next steps, and helps sales representatives spend more time selling instead of updating CRM records.',
  },
  {
    q: 'What is AI Relationship Intelligence?',
    a: 'AI Relationship Intelligence continuously analyzes customer interactions, engagement history, communication patterns, and buying signals to identify which relationships are growing stronger, which accounts are at risk, and where your team should focus next.',
  },
  {
    q: 'Can Lucrative Sales forecast revenue more accurately?',
    a: 'Yes. Lucrative Sales uses AI-powered revenue intelligence to forecast sales based on customer engagement, deal activity, historical performance, and pipeline health rather than relying solely on manual estimates or sales rep intuition.',
  },
  {
    q: 'Does Lucrative Sales support workflow automation?',
    a: 'Yes. Lucrative Sales includes no-code workflow automation that allows organizations to automate approvals, lead routing, customer handoffs, renewals, follow-ups, notifications, and cross-functional business processes without complex development.',
  },
  {
    q: 'Is Lucrative Sales suitable for enterprise organizations?',
    a: 'Absolutely. Lucrative Sales includes enterprise-grade capabilities such as Single Sign-On (SSO), SAML authentication, granular user permissions, audit logs, scalable architecture, and governance controls to support growing organizations.',
  },
  {
    q: 'Which teams can use Lucrative Sales?',
    a: 'Lucrative Sales is designed for the entire revenue organization, including Sales, Marketing, Customer Success, Revenue Operations, Executive Leadership, and Operations teams. Every department works from the same customer record and shared AI intelligence.',
  },
  {
    q: 'Why are companies switching from HubSpot, Salesforce, or Pipedrive to Lucrative Sales?',
    a: 'Companies switch to Lucrative Sales because it combines AI-native CRM, autonomous data management, relationship intelligence, workflow automation, revenue forecasting, and a unified customer timeline into one platform. This reduces manual work, improves forecasting accuracy, and helps teams scale without increasing CRM complexity or costs.',
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