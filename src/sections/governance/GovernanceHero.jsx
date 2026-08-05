import React from 'react';
import { IconCheck } from '../../icons.jsx';

const floatPills = [
  { text: 'Set Preferences', check: true, top: '18%', left: '-2%' },
  { text: 'Fix issues', check: false, top: '18%', right: '-2%' },
  { text: 'Start Audit', check: true, top: '46%', left: '-8%' },
  { text: 'AI Suggestions', check: false, dark: true, top: '46%', right: '-8%' },
  { text: 'Get Report', check: true, bottom: '-4%', left: '50%', transform: 'translateX(-50%)' },
];

export default function GovernanceHero() {
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
            <p className="eyebrow" style={{ fontSize: 13 }}>Revenue Governance &middot; HubSpot &middot; Salesforce &middot; GoHighLevel</p>
            <h1 className="gov-hero-h1">
              CRM audits that<br /><span className="text-blue">actually fix things.</span>
            </h1>
            <p className="gov-hero-lead">
              Lucrative scans your CRM and every connected app in five minutes, prices every issue in dollars, then drafts the fix — and runs it once you approve. Your data gets healthier. Your team keeps the credit.
            </p>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <a href="#audit" className="btn btn-primary">Start free audit</a>
              <a href="#video" className="btn btn-outline">Watch the video</a>
            </div>
            <div className="gov-trust-row">
              <span><IconCheck />OAuth-secure</span>
              <span><IconCheck />Backup before every change</span>
              <span><IconCheck />Nothing runs without approval</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
