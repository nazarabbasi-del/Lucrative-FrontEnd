import React from 'react';
import CountUp from '../governance/anim/CountUp.jsx';
import AnimatedVerticalBar from '../governance/anim/AnimatedVerticalBar.jsx';
import AnimatedBar from '../governance/anim/Animatedbar.jsx';
import { IconCheck } from '../../icons.jsx';

const attribution = [
  { label: 'Markov', color: 'var(--navy-900)', to: 92, value: '$412K' },
  { label: 'Shapley', color: 'var(--blue-600)', to: 83, value: '$374K' },
  { label: 'Last-touch', color: 'var(--text-400)', to: 21, value: '$96K' },
];

const bars = [40, 45, 68, 45, 100];
const barColor = (i) => (i === bars.length - 1 ? 'var(--navy-900)' : i % 2 === 0 ? '#A3C8FA' : '#4E8AD7');

export default function StratumWhatChanges() {
  return (
    <section className="section section--grey">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>What changes when your data can talk.</h2>
        <p className="section-sub reveal" style={{ textAlign: 'center' }}>Five things you stop waiting for &mdash; starting the day you connect.</p>

        <div className="strat-changes-top reveal">
          <div className="strat-mini-card">
            <div className="strat-mini-preview tint-blue">
              <div className="chat-bubble-user" style={{ fontSize: 11.5, marginBottom: 8 }}>Why did MQLs dip last month?<div style={{ opacity: .6, fontSize: 9.5, marginTop: 3 }}>10:00 EST</div></div>
              <div className="chat-reply" style={{ fontSize: 11.5 }}>Two paused campaigns and a form change on Jul 2. Breakdown below &mdash;<div style={{ opacity: .55, fontSize: 9.5, marginTop: 4 }}>Answered in 1.8s &middot; 4 sources &middot; 10:00 EST</div></div>
            </div>
            <span className="tag-pill" style={{ color: 'var(--blue-500)' }}>Self-service analytics</span>
            <h4>Stop waiting for reports. Start asking questions.</h4>
            <div className="cap-pills"><span className="cap-pill">No SQL</span><span className="cap-pill">Answers in seconds</span></div>
          </div>

          <div className="strat-mini-card">
            <div className="strat-mini-preview tint-gold">
              <p style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '.06em', color: 'var(--text-400)', marginBottom: 8 }}>WHAT STRATUM ALREADY KNOWS</p>
              <div className="chat-checklist">
                <div className="row"><span className="check"><IconCheck /></span><span>Your funnel: MQL &rarr; SQL &rarr; Proposal &rarr; Won</span></div>
                <div className="row"><span className="check"><IconCheck /></span><span>&ldquo;Enterprise&rdquo; = deals over $50K</span></div>
                <div className="row"><span className="check"><IconCheck /></span><span>&ldquo;Pipeline&rdquo; = open deals, stage-weighted</span></div>
              </div>
            </div>
            <span className="tag-pill" style={{ color: 'var(--gold-500)' }}>AI that understands revenue</span>
            <h4>Not another chatbot. An analyst trained on your business.</h4>
            <div className="cap-pills"><span className="cap-pill">Semantic layer</span><span className="cap-pill">Your funnel, resolved</span></div>
          </div>
        </div>

        <div className="strat-changes-bottom reveal">
          <div className="strat-mini-card">
            <div className="strat-mini-preview tint-teal">
              <p style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '.06em', color: 'var(--text-400)', marginBottom: 10 }}>CREDITED REVENUE &middot; BY MODEL</p>
              {attribution.map((a, i) => (
                <div className="gov-bar-row" key={a.label}>
                  <div className="gov-bar-top" style={{ fontSize: 12.5 }}><span>{a.label}</span><b style={{ fontSize: 13 }}>{a.value}</b></div>
                  <div className="gov-bar"><AnimatedBar to={a.to} delay={i * 150} style={{ background: a.color }} /></div>
                </div>
              ))}
            </div>
            <span className="tag-pill" style={{ color: 'var(--teal-500)' }}>Attribution you can trust</span>
            <h4>Move beyond first-touch and last-touch.</h4>
            <div className="cap-pills"><span className="cap-pill">Markov + Shapley</span><span className="cap-pill">8 models, one view</span></div>
          </div>

          <div className="strat-mini-card">
            <div className="strat-mini-preview tint-red">
              <div className="strat-holdout-box">
                <p className="strat-holdout-tag">NURTURE SEQUENCE &middot; HOLDOUT</p>
                <div className="strat-holdout-lift"><CountUp to={18} prefix="+" suffix="%" /></div>
                <p className="strat-holdout-sub">lift &middot; 95% confidence</p>
                <div className="strat-holdout-split">
                  <span>Treatment &middot; n=1,240</span>
                  <span>Holdout &middot; n=1,240</span>
                </div>
              </div>
            </div>
            <span className="tag-pill" style={{ color: 'var(--red-500)' }}>Experiments built in</span>
            <h4>Know what works. Stop guessing.</h4>
            <div className="cap-pills"><span className="cap-pill">Randomized holdouts</span><span className="cap-pill">95% confidence</span></div>
          </div>

          <div className="strat-mini-card">
            <div className="strat-mini-preview tint-grey">
              <div className="ph-pipeline-top"><span>Q4 PIPELINE</span><span className="ph-live">&#9679; LIVE</span></div>
              <div className="ph-bars">
                {bars.map((h, i) => (
                  <AnimatedVerticalBar key={i} to={h} className="ph-bar" style={{ background: barColor(i) }} delay={i * 80} />
                ))}
              </div>
            </div>
            <span className="tag-pill" style={{ color: 'var(--blue-500)' }}>Attribution you can trust</span>
            <h4>Describe it once. Stratum creates it.</h4>
            <div className="cap-pills"><span className="cap-pill">Prompt to dashboard</span><span className="cap-pill">Always live</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}