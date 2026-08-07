import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Lucrative Marketing?',
    a: 'Lucrative Marketing is an AI-native marketing automation platform that combines CRM data, customer intelligence, campaign management, email automation, landing pages, webinar marketing, and revenue attribution in one workspace. It helps marketers build campaigns that drive measurable business growth instead of just engagement.',
  },
  {
    q: 'How is Lucrative Marketing different from traditional marketing automation platforms?',
    a: 'Traditional marketing platforms automate workflows and emails. Lucrative Marketing goes further by using AI to understand customer behavior, buying intent, CRM data, and campaign performance, allowing it to build, optimize, and improve marketing campaigns automatically.',
  },
  {
    q: 'How does AI create marketing campaigns?',
    a: "Simply describe your marketing objective in natural language — for example, targeting prospects who haven't booked a demo in 30 days. Lucrative Marketing automatically generates the audience, email sequence, landing page, forms, CTAs, follow-up journeys, and performance reports.",
  },
  {
    q: 'What is AI Audience Intelligence?',
    a: 'AI Audience Intelligence continuously analyzes CRM data, customer behavior, engagement history, buying intent, lifecycle stage, industry, product interest, revenue potential, and churn risk to automatically build dynamic audience segments that stay up to date as customer behavior changes.',
  },
  {
    q: 'Does Lucrative Marketing include email marketing automation?',
    a: 'Yes. Lucrative Marketing includes AI-powered email automation with personalized email sequences, drip campaigns, behavioral triggers, dynamic content, AI-generated subject lines, send-time optimization, nurture journeys, and re-engagement campaigns.',
  },
  {
    q: 'Can Lucrative Marketing build landing pages and webinar campaigns?',
    a: 'Yes. Lucrative Marketing uses AI to generate landing pages, forms, registration pages, webinar workflows, reminder emails, follow-up automation, surveys, and event campaigns from a single campaign objective, keeping everything connected to your CRM.',
  },
  {
    q: 'How does Lucrative Marketing measure campaign success?',
    a: 'Lucrative Marketing goes beyond opens and clicks by providing first-touch, last-touch, and multi-touch attribution, campaign ROI, pipeline influence, revenue attribution, and customer lifetime value, helping marketers understand which campaigns actually generate revenue.',
  },
  {
    q: 'Can Lucrative Marketing optimize campaigns automatically?',
    a: 'Yes. Lucrative Marketing continuously monitors campaign performance and uses AI to recommend improvements such as adjusting budgets, pausing low-performing campaigns, improving subject lines, refining audience segments, launching retargeting campaigns, and optimizing calls-to-action.',
  },
  {
    q: 'Which teams benefit from Lucrative Marketing?',
    a: 'Lucrative Marketing is designed for Marketing, Sales, Customer Success, Revenue Operations, and Executive Leadership. Because every campaign shares the same customer data and AI intelligence, teams work together with complete visibility into customer journeys and revenue impact.',
  },
  {
    q: 'Why are businesses switching from HubSpot, Marketo, or ActiveCampaign to Lucrative Marketing?',
    a: 'Businesses choose Lucrative Marketing because it combines AI-powered audience intelligence, CRM-native marketing automation, dynamic segmentation, landing pages, webinar management, revenue attribution, and natural language campaign creation in one platform. Instead of managing disconnected tools, marketing teams can launch smarter campaigns, improve conversion rates, and directly measure their contribution to revenue.',
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