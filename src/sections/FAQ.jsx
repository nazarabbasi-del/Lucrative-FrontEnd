import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Lucrative AI?',
    a: "Lucrative AI is the world's first AI-native CRM and marketing automation platform designed to unify sales, marketing, analytics, quoting, and revenue governance in a single AI-powered workspace. Unlike traditional CRM systems, Lucrative AI helps teams automate work, make decisions faster, and maintain healthy CRM data through built-in AI.",
  },
  {
    q: 'What makes Lucrative AI different from traditional CRM software?',
    a: 'Traditional CRM platforms primarily store customer data. Lucrative AI turns customer data into intelligent actions by combining CRM, marketing automation, AI analytics, CPQ, and governance into one platform powered by an AI-native architecture.',
  },
  {
    q: 'What does AI-native CRM mean?',
    a: 'An AI-native CRM is built around artificial intelligence from the ground up rather than adding AI as an afterthought. Every workflow — from lead scoring and forecasting to reporting, quoting, and CRM governance — is powered by AI that understands your business context.',
  },
  {
    q: 'Can I use Lucrative AI with Claude or ChatGPT?',
    a: 'Yes. Lucrative AI is completely headless and allows you to connect your preferred AI models, including Claude and OpenAI GPT models. You can interact with your CRM, analytics, marketing, and revenue operations using natural language.',
  },
  {
    q: 'What products are included in Lucrative AI?',
    a: 'The Lucrative Suite includes Lucrative Sales, Lucrative Marketing, Lucrative Analytics, Lucrative Quote, and Lucrative Governance. Each product can be deployed independently or together as a unified platform.',
  },
  {
    q: 'Does Lucrative AI include CRM and marketing automation?',
    a: 'Yes. Lucrative AI includes a built-in AI-powered CRM together with advanced marketing automation, customer journey management, email campaigns, landing pages, webinar management, attribution reporting, and revenue intelligence.',
  },
  {
    q: 'How does Lucrative AI improve CRM data quality?',
    a: 'Lucrative Governance continuously monitors CRM health by identifying duplicate records, unused fields, broken workflows, missing data, integration issues, and policy violations. It recommends AI-driven fixes before data problems affect revenue.',
  },
  {
    q: 'Can Lucrative AI generate sales quotes automatically?',
    a: 'Yes. Lucrative Quote generates policy-compliant quotes, proposals, and contracts in seconds using deterministic pricing, approval workflows, and built-in governance. It helps sales teams close deals faster while reducing manual work.',
  },
  {
    q: 'Which CRM platforms can I migrate from?',
    a: 'Lucrative AI supports assisted migration from platforms including Salesforce, HubSpot, HighLevel, and other popular CRM systems. The migration process is designed to minimize downtime while preserving your customer data.',
  },
  {
    q: 'Does Lucrative AI integrate with other business platforms?',
    a: 'Yes. Lucrative AI connects with Salesforce, HubSpot, Mailchimp, Snowflake, Google Ads, and more than 15 business platforms. Additional integrations can be developed based on your business requirements.',
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
