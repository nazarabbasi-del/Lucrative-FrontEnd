import React from 'react';
import mascotFlower from '../../assets/mascot-flower-laptop.png';
import padlock from '../../assets/icon-padlock.png';
import sparkles from '../../assets/deco-sparkles.png';

export default function GovernanceClosingCTA() {
  return (
    <section className="section--tight">
      <div className="container">
        <div className="closing-cta reveal">
          <div style={{ position: 'relative' }}>
            <img src={mascotFlower} alt="" className="floaty" />
            <img src={padlock} alt="" style={{ position: 'absolute', width: 46, top: -6, right: 30 }} />
            <img src={sparkles} alt="" style={{ position: 'absolute', width: 60, top: -30, left: -10, opacity: .9 }} />
          </div>
          <div>
            <h2 className="hero-heading">Run your first audit in the time it takes to read your last one.</h2>
            <p style={{ marginTop: 14, color: 'var(--text-600)', fontSize: 17 }}>Five minutes. Full report. Every issue priced. Every fix reversible.</p>
            <div className="btns">
              <a href="#audit" className="btn btn-primary">Start free audit</a>
              <a href="#demo" className="btn btn-outline">Book a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
