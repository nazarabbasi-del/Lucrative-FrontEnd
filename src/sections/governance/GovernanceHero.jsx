import React from 'react';
import { IconCheck } from '../../icons.jsx';

const floatPills = [
  {
    text: 'Set Preferences',
    step: 'step1',
    top: '18%',
    left: '40px',
    transform: 'translate(-50%, -50%)'
  },
  {
    text: 'Fix issues',
    step: 'step4',
    top: '18%',
    right: '40px',
    transform: 'translate(50%, -50%)'
  },
  {
    text: 'Start Audit',
    step: 'step2',
    top: '50%',
    left: '40px',
    transform: 'translate(-50%, -50%)'
  },
  {
    text: 'AI Suggestions',
    dark: true,
    step: 'step5',
    top: '50%',
    right: '40px',
    transform: 'translate(50%, -50%)'
  },
  {
    text: 'Get Report',
    step: 'step3',
    bottom: '30px',
    left: '50%',
    transform: 'translate(-50%, 50%)'
  }
];

export default function GovernanceHero() {
  return (
    <section className="hero gov-hero" id="top">
      <div className="container">
        <div className="gov-hero-frame reveal">

          {floatPills.map((p) => (
            <span
              key={p.text}
              className={`gov-float-pill ${p.step}${p.dark ? ' dark' : ''}`}
              style={{
                top: p.top,
                left: p.left,
                right: p.right,
                bottom: p.bottom,
                transform: p.transform
              }}
            >
              {p.text}

              <span className="pill-icon">
                <span className="spinner"></span>
                <IconCheck className="tick" />
              </span>

            </span>
          ))}

          <div className="gov-hero-copy">
            <p
              className="eyebrow"
              style={{ fontSize: 13 }}
            >
              Lucrative Governance · HubSpot · Salesforce · GoHighLevel
            </p>

            <h1 className="gov-hero-h1">
              CRM audits that
              <br />
              <span className="text-blue">
                actually fix things.
              </span>
            </h1>

            <p className="gov-hero-lead">
              Lucrative scans your CRM and every connected app in five minutes,
              prices every issue in dollars, then drafts the fix — and runs it
              once you approve. Your data gets healthier. Your team keeps the
              credit.
            </p>

            <div
              className="hero-ctas"
              style={{ justifyContent: 'center' }}
            >
              <a href="#audit" className="btn btn-primary">
                Start free audit
              </a>

              <a href="#video" className="btn btn-outline">
                Watch the video
              </a>
            </div>

            <div className="gov-trust-row">
              <span>
                <IconCheck />
                OAuth-secure
              </span>

              <span>
                <IconCheck />
                Backup before every change
              </span>

              <span>
                <IconCheck />
                Nothing runs without approval
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}