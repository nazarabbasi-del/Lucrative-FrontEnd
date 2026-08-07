import React from 'react';
import { IconCheck } from '../../icons.jsx';

const floatPills = [
  { text: 'Ask' },
  { text: 'Approve', dark: true },
  { text: 'Understand' },
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
          {floatPills.map((p, index) => (
            <span
              key={p.text}
              className={`gov-float-pill pill-${index + 1}${p.dark ? ' dark' : ''}`}
            >
              {p.text}
              <span className="pill-icon">
              <span className="spinner"></span>
              <IconCheck className="tick" />
              </span>
            </span>
          ))}

          <div className="gov-hero-copy">
            <p className="eyebrow" style={{ fontSize: 13 }}>Lucrative Analytics</p>
            <h1 className="gov-hero-h1">
              <span className="text-blue">Lucrative Analytics</span> turn all your business data into instant answers.
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