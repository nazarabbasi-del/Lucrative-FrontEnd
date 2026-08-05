import React from 'react';
import { IconCheck } from '../../icons.jsx';
import dashboardLoftMarketing from '../../assets/dashboard-loft.png';
const checklist = ['No manual data entry', 'AI-native from day one', 'Enterprise ready'];

const navItems = ['Dashboard', 'Contacts', 'Companies', 'Lists', 'Import', 'Campaigns', 'Templates', 'Team', 'Settings'];

const campaigns = [
  { name: 'Test Dmarc', sub: 'Single Send', status: 'done' },
  { name: 'Untitled campaign', sub: 'Single Send', status: 'draft' },
  { name: '9Jul Webinar ninth batch', sub: 'Single Send', status: 'done' },
];

// Recreated in HTML/CSS rather than a screenshot image, so it's editable —
// swap in a real product screenshot at any time by replacing this block with
// an <img>, same as LoftHero.jsx does with dashboard-loft.png.
function DashboardMock() {
  return (
    <div className="loft-mkt-dash floaty">
      <div className="loft-mkt-dash-sidebar">
        <div className="loft-mkt-dash-logo">
          IVY Loft
          <span style={{ marginLeft: 0 }} />
        </div>
        <span className="loft-mkt-dash-logo-sub">by Mountainise</span>

        <div className="loft-mkt-dash-workspace">
          <span className="sq" />
          Mountainise Technology
        </div>

        <ul className="loft-mkt-dash-nav">
          {navItems.map((n, i) => (
            <li className={i === 0 ? 'active' : ''} key={n}>{n}</li>
          ))}
        </ul>

        <div className="loft-mkt-dash-user">
          Agency Overview
          <br />
          <b>Najeed Ahmad</b>
          <br />
          n.ahmad@mountaini&hellip;
        </div>
      </div>

      <div className="loft-mkt-dash-main">
        <h4>Mountainise</h4>
        <p className="sub">Overview of your email marketing activity</p>

        <div className="loft-mkt-dash-stats">
          <div className="loft-mkt-dash-stat">
            <span className="lbl">TOTAL CONTACTS</span>
            <div className="val">8,498</div>
            <span className="cap">7,371 subscribed</span>
          </div>
          <div className="loft-mkt-dash-stat">
            <span className="lbl">ACTIVE CAMPAIGNS</span>
            <div className="val">0</div>
            <span className="cap">Sending or scheduled</span>
          </div>
        </div>

        <div className="loft-mkt-dash-panel">
          <h5>Engagement Overview</h5>
          <svg viewBox="0 0 300 70" width="100%" height="70" preserveAspectRatio="none">
            <polyline points="0,55 40,52 80,40 120,30 160,26 200,24 240,22 300,20" fill="none" stroke="#37A55F" strokeWidth="2" />
            <polyline points="0,60 40,58 80,55 120,50 160,46 200,44 240,42 300,40" fill="none" stroke="#9AC8FF" strokeWidth="2" />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: 'var(--text-400)', marginTop: 4 }}>
            <span>Jun 28</span><span>Jun 30</span><span>Jul 1</span><span>Jul 3</span>
          </div>
        </div>

        <div className="loft-mkt-dash-panel" style={{ marginBottom: 0 }}>
          <h5>Recent Campaigns</h5>
          {campaigns.map((c) => (
            <div className="loft-mkt-dash-campaign-row" key={c.name}>
              <span className="name">{c.name}<span>{c.sub}</span></span>
              <span className={`loft-mkt-dash-pill loft-mkt-dash-pill--${c.status === 'done' ? 'done' : 'draft'}`}>
                {c.status === 'done' ? 'Completed' : 'Draft'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LoftMarketingHero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="reveal">
          <p className="eyebrow">Loft for Marketing</p>
          <h1>
            <span className="text-blue">AI Marketing<br />Workspace</span>
          </h1>
          <p style={{ fontSize: 22, fontWeight: 500, color: 'var(--text-900)', marginTop: 8 }}>
            Turn CRM data into revenue-generating campaigns.
          </p>
          <p className="lead">
            Loft unifies CRM, customer behavior, campaign execution, and AI into one marketing workspace&mdash;so every campaign starts with customer intelligence instead of guesswork.
          </p>
          <div className="hero-ctas">
            <a href="#audit" className="btn btn-primary">Start free audit</a>
            <a href="#video" className="btn btn-outline">Watch the video</a>
          </div>
          <div className="gov-trust-row" style={{ marginTop: 24 }}>
            {checklist.map((c) => (
              <span key={c}><IconCheck />{c}</span>
            ))}
          </div>
        </div>
 
        <div className="hero-visual reveal">
          <img src={dashboardLoftMarketing} alt="Loft Marketing dashboard" className="floaty" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
        </div>
      </div>
    </section>
  );
}