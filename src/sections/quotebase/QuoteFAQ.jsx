import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Lucrative Quote?',
    a: 'Lucrative Quote is an AI-powered quote and proposal generation platform that automatically converts Salesforce opportunities into accurate, policy-compliant sales quotes. It combines AI-generated content with deterministic pricing, approval workflows, and audit trails to help sales teams generate quotes in seconds.',
  },
  {
    q: 'How is Lucrative Quote different from traditional CPQ software?',
    a: 'Traditional CPQ solutions often require complex configuration and manual processes. Lucrative Quote combines AI-powered document generation, deterministic pricing, policy validation, approval automation, and CRM integration into one streamlined solution that reduces quoting time and improves accuracy.',
  },
  {
    q: 'What is deterministic pricing?',
    a: 'Deterministic pricing means every price, discount, tax, and total is calculated using predefined business rules instead of AI-generated estimates. This ensures every quote is mathematically accurate, policy compliant, and consistent across your organization.',
  },
  {
    q: 'Can Lucrative Quote generate quotes directly from Salesforce?',
    a: 'Yes. Lucrative Quote integrates directly with Salesforce, allowing sales representatives to generate complete quotes from existing opportunities without manually copying customer information, products, or pricing into separate systems.',
  },
  {
    q: 'How does Lucrative Quote ensure pricing compliance?',
    a: 'Lucrative Quote automatically validates pricing, discounts, taxes, approval thresholds, and business policies before a quote is sent to a customer. Quotes that exceed company rules are automatically flagged for review or approval.',
  },
  {
    q: 'Does Lucrative Quote support approval workflows?',
    a: "Yes. Lucrative Quote includes configurable approval workflows with role-based permissions for sales representatives, managers, and administrators. Approval requests are automatically routed according to your organization's pricing and discount policies.",
  },
  {
    q: 'Does Lucrative Quote maintain an audit trail?',
    a: 'Yes. Every quote, pricing calculation, approval, revision, and customer communication is securely recorded in a tamper-evident audit trail, providing complete visibility and compliance for every transaction.',
  },
  {
    q: 'Can Lucrative Quote support multiple brands or business units?',
    a: 'Absolutely. Lucrative Quote supports multiple quote templates, branding standards, languages, regions, and business units, allowing organizations to generate professional, consistent proposals across different markets and product lines.',
  },
  {
    q: 'Who should use Lucrative Quote?',
    a: 'Lucrative Quote is designed for sales teams, revenue operations, finance, and commercial organizations that need to generate accurate quotes faster while maintaining pricing consistency, governance, and compliance across the entire sales process.',
  },
  {
    q: 'Why do businesses choose Lucrative Quote?',
    a: 'Businesses choose Lucrative Quote because it combines AI-powered quote generation, deterministic pricing, Salesforce integration, policy enforcement, automated approvals, and complete auditability in one platform. This reduces manual work, accelerates sales cycles, improves pricing accuracy, and helps teams close deals with confidence.',
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