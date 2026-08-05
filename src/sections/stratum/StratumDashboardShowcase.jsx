import React from 'react';
import CountUp from '../governance/anim/CountUp.jsx';
import AnimatedBar from '../governance/anim/AnimatedBar.jsx';
import { IconSparkle } from '../../icons.jsx';
import dashboardIndigo from '../../assets/dashboard-indigo.png';

export default function StratumDashboardShowcase() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Every question, annotated.</h2>
        <p className="section-sub reveal" style={{ textAlign: 'center' }}>Stratum doesn&rsquo;t just answer &mdash; it shows its work. Sources, models, confidence.</p>

        <div className="strat-dash-wrap reveal">
          <img src={dashboardIndigo} alt="Stratum dashboard" className="strat-dash-img" />

          <div className="strat-float-chat" style={{ top: '4%', right: '-2%' }}>
            Which campaigns generated enterprise pipeline last month?
            <time>10:12 AM &middot; Monday</time>
          </div>

          <div className="strat-float-card" style={{ bottom: '8%', left: '-4%' }}>
            <div className="bar-row">
              <div className="top"><span>Founder Story</span><b><CountUp to={412} prefix="$" suffix="K" /></b></div>
              <div className="bar-track"><AnimatedBar to={92} /></div>
            </div>
            <div className="bar-row" style={{ marginBottom: 0 }}>
              <div className="top"><span>Field &middot; NYC</span><b><CountUp to={286} prefix="$" suffix="K" /></b></div>
              <div className="bar-track"><AnimatedBar to={64} delay={150} /></div>
            </div>
            <p style={{ fontSize: 11, color: 'var(--text-400)', marginTop: 10 }}>Stratum &middot; 1.8s &middot; 4 sources</p>
          </div>

          <div className="strat-float-note" style={{ bottom: '-2%', right: '-2%' }}>
            <span className="ic"><IconSparkle /></span>
            <div>
              <b>Stratum note</b>
              <p>Founder Story converts 3.1&times; at enterprise. Consider doubling spend before Q1 pipeline lock.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}