import React from 'react';
import mascotFlower from '../../assets/mascot-flower-laptop.png';
import padlock from '../../assets/icon-padlock.png';
import sparkles from '../../assets/deco-sparkles.png';

export default function StratumClosingCTA() {
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
            <h2 className="closing-cta-h2">Stop waiting for reports. Start asking your data questions.</h2>
            <p style={{ marginTop: 14, color: 'var(--text-600)', fontSize: 17 }}>Stratum gives every marketing and revenue team the power of an analyst&mdash;without hiring one.</p>
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