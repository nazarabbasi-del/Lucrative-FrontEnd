import React from 'react';
import { IconCheck } from '../../icons.jsx';
import dashboardLoft from '../../assets/dashboard-loft.png';

const checklist = ['No manual data entry', 'AI-native from day one', 'Enterprise ready'];

export default function LoftHero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="reveal">
          <p className="eyebrow">Loft for Sales</p>
          <h1>
            The CRM that grows with your business,<br /><span className="text-blue">not against it.</span>
          </h1>
          <p className="lead">
            Loft unifies Marketing, Sales, Customer Success, Automation, AI, and Operations in one platform designed for scale &mdash; built to run your revenue, not just record it.
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
          <img src={dashboardLoft} alt="Loft CRM dashboard" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} className="floaty" />
        </div>
      </div>
    </section>
  );
}