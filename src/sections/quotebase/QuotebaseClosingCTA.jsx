import React from 'react';
import mascotFlower from '../../assets/mascot-flower-laptop.png';
import sparkles from '../../assets/deco-sparkles.png';

function IconPadlock() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2.5" fill="var(--gold-500)" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" stroke="var(--gold-500)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="1.6" fill="#fff" />
    </svg>
  );
}

export default function QuotebaseClosingCTA() {
  return (
    <section className="section--tight">
      <div className="container">
        <div className="closing-cta reveal">
          <div style={{ position: 'relative' }}>
            <img src={mascotFlower} alt="" className="floaty" />
            <span style={{ position: 'absolute', top: -6, right: 30, background: '#fff', borderRadius: '50%', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}><IconPadlock /></span>
            <img src={sparkles} alt="" style={{ position: 'absolute', width: 60, top: -30, left: -10, opacity: .9 }} />
          </div>
          <div>
            <h2 className="closing-cta-h2">Stop building quotes manually.<br />Start sending trusted quotations in seconds.</h2>
            <p style={{ marginTop: 14, color: 'var(--text-600)', fontSize: 17 }}>Generate complete, policy-compliant quotes from Salesforce with AI coordination and deterministic pricing your finance team can trust.</p>
            <div className="btns">
              <a href="#demo" className="btn btn-primary">Book a Live Demo</a>
              <a href="#sales" className="btn btn-outline">Talk to Sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}