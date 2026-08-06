import React from 'react';
import mascotFlower from '../assets/mascot-flower-laptop.png';
import padlock from '../assets/icon-padlock.png';

export default function ClosingCTA() {
  return (
    <section className="section--tight">
      <div className="container">
        <div className="closing-cta reveal">
          <div style={{ position: 'relative' }}>
            <img src={mascotFlower} alt="" className="floaty" />
            <img src={padlock} alt="" style={{ position: 'absolute', width: 46, top: -6, right: 30 }} />
          </div>
          <div>
            <h2 className="hero-heading">Meet the AI revenue platform your team already wishes they had.</h2>
            <p style={{ marginTop: 14, color: 'var(--text-600)', fontSize: 17}}>Start with one product. Grow into the complete suite. Bring your own AI.</p>
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