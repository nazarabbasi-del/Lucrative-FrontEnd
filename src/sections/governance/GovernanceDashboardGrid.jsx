import React from 'react';
import { IconAlert, IconCheck } from '../../icons.jsx';
import CountUp from './anim/CountUp.jsx';
import AnimatedBar from './anim/Animatedbar.jsx';
import AnimatedRing from './anim/AnimatedRing.jsx';

const IconHierarchy = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="6" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="18" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M12 7.3V11M12 11L6 15.7M12 11l6 4.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);
const IconDatabase = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}>
    <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" stroke="currentColor" strokeWidth="1.7" />
    <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);
const IconCheckCircle = (p) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const auditSteps = [
  { icon: <IconAlert />, title: 'Find issues', sub: '8 governance dimensions' },
  { icon: <IconHierarchy />, title: 'Review & fix', sub: 'You approve every step' },
  { icon: <IconDatabase />, title: 'Backup first', sub: 'Automatic restore points' },
  { icon: <IconCheckCircle />, title: 'Track versions', sub: 'V1 → V2 → V3 trending' },
];

function CardFoot() {
  return (
    <>
      <h5>Governance Audit</h5>
      <span className="gov-card-sub">HubSpot &middot; Acme Revenue</span>
    </>
  );
}

export default function GovernanceDashboardGrid() {
  return (
    <section className="section section--tight gov-dashboard-section">
      <div className="container">
        <h2 className="section-title reveal">This is what five minutes buys you.</h2>
        <p className="section-sub-ii reveal">Real screens from the product. Connect a CRM, and this is your dashboard before your coffee cools.</p>

        <div className="gov-dash-grid reveal">
          <div className="gov-dash-panel">
            <h5>Governance Audit</h5>
            <span className="gov-card-sub">HubSpot &middot; Acme Revenue</span>
            <div className="gov-audit-steps-wrap">
              <div className="gov-audit-steps">
                {auditSteps.map((s) => (
                  <div className="gov-audit-step" key={s.title}>
                    <span className="ic">{s.icon}</span>
                    <span className="txt"><b>{s.title}</b><span>{s.sub}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="gov-dash-card">
            <div className="gov-card-inner gov-card-inner--bleed">
              <span className="gov-card-label">Overall Score</span>
              <div className="gov-card-big"><CountUp to={87} /><span className="gov-card-unit">/100</span></div>
              <span className="gov-card-sub">Good health &middot; +13 since V2</span>
            </div>
            <CardFoot />
          </div>

          <div className="gov-dash-card gov-dash-card--ring">
            <div className="gov-ring-row">
              <AnimatedRing to={67} caption="At Risk" />
              <p className="gov-ring-desc">Contacts moving from Valid to Dormant/Invalid</p>
            </div>
            <CardFoot />
          </div>

          <div className="gov-dash-card">
            <div className="gov-card-inner gov-card-inner--bleed">
              <span className="gov-card-label">Issues Found</span>
              <div className="gov-card-big"><CountUp to={12} /></div>
              <span className="gov-card-sub">3 critical, 9 minor</span>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <span className="badge badge-red">Critical</span>
                <span className="badge badge-gold">Warning</span>
              </div>
            </div>
            <CardFoot />
          </div>

          <div className="gov-dash-card">
            <div className="gov-card-inner">
              <div className="gov-bar-row">
                <div className="gov-bar-top"><span>Invalid contacts</span><b><CountUp to={1200} comma /></b></div>
                <div className="gov-bar"><AnimatedBar to={10} /></div>
              </div>
              <div className="gov-bar-row gov-bar-row--muted">
                <div className="gov-bar-top"><span>Bounced Contacts</span><b><CountUp to={900} /></b></div>
                <div className="gov-bar"><AnimatedBar to={8} className="gov-bar-fill--muted" /></div>
              </div>
            </div>
            <CardFoot />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 34 }} className="reveal">
          <a href="#demo" className="btn btn-outline">Watch the 2-minute demo</a>
        </div>
      </div>
    </section>
  );
}