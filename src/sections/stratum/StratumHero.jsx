import React from 'react';
import { IconCheck } from '../../icons.jsx';

const floatPills = [
  { text: 'Ask', check: true, top: '20%', left: '-4%' },
  { text: 'Approve', check: false, dark: true, top: '20%', right: '-4%' },
  { text: 'Understand', check: true, bottom: '-4%', left: '50%', transform: 'translateX(-50%)' },
];

const checklist = [
  'Connect in under 5 minutes',
  '16+ integrations available',
  'No coding required',
  'More platforms added regularly',
];

export default function StratumHero() {
  return (
    <section className="hero gov-hero" id="top">
      <div className="container">
        <div className="gov-hero-frame reveal">
          {floatPills.map((p) => (
            <span
              key={p.text}
              className={`gov-float-pill${p.dark ? ' dark' : ''}`}
              style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom, transform: p.transform }}
            >
              {p.text}
              {p.check ? <IconCheck /> : <span className="gov-float-pill-ring" />}
            </span>
          ))}

          <div className="gov-hero-copy">
            <p className="eyebrow" style={{ fontSize: 13 }}>Stratum for Insights</p>
            <h1 className="gov-hero-h1">
              <span className="text-blue">Stratum</span> turn all your business data into instant answers.
            </h1>
            <p className="gov-hero-lead">
              Connect your marketing, sales, and business platforms in minutes&mdash;without technical setup. Ask questions in plain English and get accurate answers, reports, and insights from all your data in one place.
            </p>
            <div className="strat-check-grid">
              {checklist.map((c) => (
                <span key={c}><IconCheck style={{ color: 'var(--blue-600)' }} />{c}</span>
              ))}
            </div>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <a href="#audit" className="btn btn-primary">Start free audit</a>
              <a href="#video" className="btn btn-outline">Watch the video</a>
            </div>
            <p style={{ marginTop: 22, fontSize: 18, color: 'var(--text-400)', fontWeight: 400 }}>Trusted by 200+ growth teams, from seed to Series C.</p>
          </div>
        </div>
      </div>
    </section>
  );
}