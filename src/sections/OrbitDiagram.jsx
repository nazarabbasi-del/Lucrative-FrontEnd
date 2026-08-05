import React from 'react';
import { VLogo } from '../icons.jsx';
import mascotBee from '../assets/mascot-triangle-bee.png';
import mascotBench from '../assets/mascot-blue-bench.png';
import squiggle from '../assets/icon-squiggle.png';

const labels = [
  { text: 'CRM', top: '0%', left: '50%', color: 'var(--teal-600)' },
  { text: 'Marketing', top: '24%', left: '86%', color: 'var(--blue-600)' },
  { text: 'Sales', top: '76%', left: '86%', color: 'var(--blue-600)' },
  { text: 'Finance', top: '100%', left: '50%', color: 'var(--gold-600)' },
  { text: 'Support', top: '50%', left: '2%', color: 'var(--red-500)' },
];

const dots = [
  { color: '#1FB6A6', r: 320, dur: '14s', size: 46 },
  { color: '#175FA4', r: 236, dur: '10s', size: 34 },
  { color: '#E8A63D', r: 148, dur: '7s', size: 20 },
];

export default function OrbitDiagram() {
  return (
    <section className="section orbit-section">
      <div className="container">
        <h2 className="section-title reveal">Every customer. Every workflow.<br />One AI brain.</h2>
        <p className="section-sub reveal">Every module shares the same customer record, governance engine, and AI intelligence.<br />No silos. No duplicated work.</p>

        <div className="orbit-wrap reveal">
          <img src={mascotBee} alt="" className="orbit-mascot left" />
          <div style={{ position: 'relative' }}>
            <img src={mascotBench} alt="" className="orbit-mascot right" />
            <img src={squiggle} alt="" className="squiggle" style={{ position: 'absolute', width: 34, top: -160, right: -70, opacity: .85 }} />
          </div>

          <div className="orbit-ring r1" />
          <div className="orbit-ring r2" />
          <div className="orbit-ring r3" />

          {labels.map((l) => (
            <span className="orbit-label" key={l.text} style={{ top: l.top, left: l.left, transform: 'translate(-50%,-50%)', color: l.color }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {l.text}
            </span>
          ))}

          <div className="orbit-center"><VLogo size={40} /></div>

          {dots.map((d, i) => (
            <div
              className="orbit-dot"
              key={i}
              style={{
                '--r': `${d.r / 2}px`,
                width: 10,
                height: 10,
                marginTop: -5,
                marginLeft: -5,
                background: d.color,
                color: d.color,
                animation: `orbit-cw ${d.dur} linear infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
