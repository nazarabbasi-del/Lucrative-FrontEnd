import React from 'react';
import CountUp from '../governance/anim/CountUp.jsx';

export default function StratumFeatureGrid2() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cap-grid reveal">
          <div className="cap-card section--grey">
            <h3>AI GTM Analyst</h3>
            <p style={{ color: 'var(--text-600)', fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>
              Every dashboard answers &ldquo;what happened?&rdquo; The AI Analyst answers &ldquo;What should we do next?&rdquo; Ranked recommendations, confidence scores, and actionable opportunities&mdash;automatically.
            </p>
            <div className="strat-input-mock" style={{ alignItems: 'flex-start' }}>
              <span>Shift 15% of paid budget towards webinar promotion &mdash; projected + $120k pipeline</span>
              <span className="tag-pill" style={{ color: 'var(--blue-600)', margin: 0, flexShrink: 0 }}>High confidence</span>
            </div>
            <div className="strat-input-mock" style={{ alignItems: 'flex-start' }}>
              <span>Enterprise deals stall at legal review &mdash; add a mid-stage touchpoint.</span>
              <span className="tag-pill" style={{ color: 'var(--gold-600)', margin: 0, flexShrink: 0 }}>Review</span>
            </div>
          </div>

          <div className="cap-card section--grey">
            <h3>Prove your strategy</h3>
            <p style={{ color: 'var(--text-600)', fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>
              Run holdout experiments without SQL. Compare two groups. Measure lift. Validate marketing investments with statistical confidence.
            </p>
            <div className="strat-stat-row">
              <div className="strat-stat-box">
                <div className="lbl">Holdout</div>
                <div className="val"><CountUp to={4.1} decimals={1} suffix="%" /></div>
                <div className="lbl" style={{ marginTop: 4 }}>Conversions</div>
              </div>
              <div className="strat-stat-box">
                <div className="lbl">Exposed</div>
                <div className="val"><CountUp to={4.9} decimals={1} suffix="%" /></div>
                <div className="lbl" style={{ marginTop: 4 }}>Conversions</div>
              </div>
            </div>
          </div>

          <div className="cap-card section--grey" style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3 style={{ marginBottom: 6 }}>Built for marketers &mdash; not analysts</h3>
              <p style={{ color: 'var(--text-600)', fontSize: 14 }}>Just connect, ask, understand, and improve</p>
            </div>
            <div className="cap-pills">
              <span className="cap-pill strat-pill-strike">SQL</span>
              <span className="cap-pill strat-pill-strike">Data warehouse</span>
              <span className="cap-pill strat-pill-strike">ETL project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}