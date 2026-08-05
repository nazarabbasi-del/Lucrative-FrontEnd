import React, { useState } from 'react';
import { LogoRow } from './BrandLogos.jsx';
import { IconArrowLeft, IconArrowRight } from '../icons.jsx';

const testimonials = [
  { tag: 'ENTERPRISE SAAS · 800+ EMPLOYEES', quote: 'Our sales reps generate quotes in seconds instead of spending 40 minutes on every opportunity.', name: 'Ravi Shankar', role: 'Head of Revenue Operations · Northlake' },
  { tag: 'INSURANCE · 250+ EMPLOYEES', quote: 'We caught 312 duplicate accounts in our first audit. That was $1.4M in leaked revenue we never knew about.', name: 'Dana Reyes', role: 'VP of RevOps · Cornerstone Insurance' },
  { tag: 'FINANCIAL SERVICES · 500+ EMPLOYEES', quote: 'Executives get answers about pipeline in seconds now, not three days of waiting on a report.', name: 'Marcus Webb', role: 'CRO · Heritage Life' },
  { tag: 'B2B SAAS · 120+ EMPLOYEES', quote: 'Stratum replaced four dashboards we were maintaining by hand. One prompt does what took a full day.', name: 'Priya Anand', role: 'Director of Analytics · Meridian Agency' },
  { tag: 'AGENCY · 60+ EMPLOYEES', quote: "Marketing campaigns go from brief to live in under an hour. It's the fastest our team has ever moved.", name: 'Tom Okafor', role: 'Head of Growth · Silver Oak Partners' },
];

export default function Testimonial() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section section--grey">
      <div className="container">
        <div className="testimonial-grid">
          <div className="reveal">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why companies switch.<br />Trusted by modern revenue teams.</h2>
            <p style={{ marginTop: 16, color: 'var(--text-400)', fontSize: 13, fontWeight: 700 }}>Our Trusted Customers</p>
            <p style={{ marginTop: 24, marginBottom: 12, color: 'var(--text-400)', fontSize: 12, fontWeight: 700, letterSpacing: '.04em' }}>TRUSTED BY TEAMS AT</p>
            <div className="brand-row">
              <LogoRow h={26} />
            </div>
          </div>

          <div className="reveal">
            <div className="testimonial-card" key={i}>
              <span className="tag-pill">{t.tag}</span>
              <h3>"{t.quote}"</h3>
              <div className="testimonial-foot">
                <span className="avatar" />
                <div><b>{t.name}</b><span>{t.role}</span></div>
                <span className="testimonial-index">0{i + 1}/{`0${testimonials.length}`}</span>
              </div>
            </div>
            <div className="testimonial-nav">
              <button onClick={prev} aria-label="Previous testimonial"><IconArrowLeft /></button>
              <button onClick={next} aria-label="Next testimonial"><IconArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
