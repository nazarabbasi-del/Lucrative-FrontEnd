import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Lucrative Analytics?',
    a: 'Lucrative Analytics is an AI-powered business intelligence platform that connects your sales, marketing, CRM, and business systems into one analytics workspace. It allows you to ask questions in plain English and instantly receive reports, dashboards, forecasts, and actionable insights without technical expertise.',
  },
  {
    q: 'How is Lucrative Analytics different from traditional business intelligence tools?',
    a: 'Traditional BI platforms require dashboards, SQL queries, and technical specialists to build reports. Lucrative Analytics lets anyone ask questions in natural language, automatically creates dashboards, explains business trends, and recommends actions based on your data.',
  },
  {
    q: 'Which platforms can Lucrative Analytics connect to?',
    a: 'Lucrative Analytics integrates with leading CRM, marketing, advertising, and data platforms, including Salesforce, HubSpot, Google Analytics, Google Ads, Meta Ads, LinkedIn Ads, Mailchimp, Marketo, Snowflake, Amazon Redshift, and many other business applications.',
  },
  {
    q: 'Can I create reports without SQL or coding?',
    a: 'Yes. Lucrative Analytics is designed for business users, not data analysts. Simply ask questions in plain English, and the platform automatically generates reports, dashboards, charts, and insights without requiring SQL, coding, or a data warehouse.',
  },
  {
    q: 'How does AI help with business analytics?',
    a: 'Lucrative Analytics uses AI to analyze your connected business data, identify trends, explain why performance changed, uncover revenue opportunities, recommend next actions, and generate executive-ready insights that support faster decision-making.',
  },
  {
    q: 'Does Lucrative Analytics support marketing attribution?',
    a: 'Yes. Lucrative Analytics supports advanced attribution models, including first-touch, last-touch, multi-touch, Markov, and Shapley attribution. This helps businesses understand which marketing activities truly influence pipeline, revenue, and customer acquisition.',
  },
  {
    q: 'Can Lucrative Analytics automatically build dashboards?',
    a: 'Absolutely. Instead of manually configuring charts and widgets, you simply describe the dashboard you need in natural language. Lucrative Analytics automatically builds interactive dashboards that stay updated as your business data changes.',
  },
  {
    q: 'Who is Lucrative Analytics designed for?',
    a: 'Lucrative Analytics is built for marketing teams, sales leaders, Revenue Operations, executives, founders, agencies, and business analysts who need faster answers, reliable reporting, and complete visibility into business performance without relying on technical teams.',
  },
  {
    q: 'Can Lucrative Analytics help improve business decisions?',
    a: 'Yes. Lucrative Analytics goes beyond reporting by identifying trends, highlighting risks, measuring campaign performance, forecasting revenue, validating marketing investments, and recommending actions that help teams improve business outcomes with confidence.',
  },
  {
    q: 'Why should businesses choose Lucrative Analytics?',
    a: 'Businesses choose Lucrative Analytics because it combines AI-powered business intelligence, conversational analytics, automated dashboard creation, advanced attribution, forecasting, and cross-platform reporting in one solution. Instead of waiting days for reports, teams get accurate answers and actionable insights in seconds.',
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