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
  // Outer ring
  { color: '#1FB6A6', r: 320, dur: '14s', delay: '0s' },
  { color: '#1FB6A6', r: 320, dur: '14s', delay: '-7s' },

  // Middle ring
  { color: '#175FA4', r: 236, dur: '10s', delay: '0s' },
  { color: '#175FA4', r: 236, dur: '10s', delay: '-5s' },

  // Inner ring
  { color: '#E8A63D', r: 148, dur: '7s', delay: '0s' },
  { color: '#E8A63D', r: 148, dur: '7s', delay: '-3.5s' },
];

export default function OrbitDiagram() {
  return (
    <section className="section orbit-section">
      <div className="container">

        <h2 className="section-title reveal">
          Every customer. Every workflow.
          <br />
          One AI brain.
        </h2>

        <p className="section-sub reveal">
          Every module shares the same customer record, governance engine, and AI intelligence.
          <br />
          No silos. No duplicated work.
        </p>

        <div className="orbit-wrap reveal">

          {/* Left mascot */}
          <img
            src={mascotBee}
            alt=""
            className="orbit-mascot left"
          />

          {/* Right mascot */}
          <img
            src={mascotBench}
            alt=""
            className="orbit-mascot right"
          />

          {/* Decorative squiggle */}
          <img
            src={squiggle}
            alt=""
            className="orbit-mascot-squiggle"
          />

          {/* Orbit rings */}
          <div className="orbit-ring r1" />
          <div className="orbit-ring r2" />
          <div className="orbit-ring r3" />

          {/* Orbit labels */}
          {labels.map((l) => (
            <span
              className="orbit-label"
              key={l.text}
              style={{
                top: l.top,
                left: l.left,
                transform: 'translate(-50%, -50%)',
                color: l.color,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {l.text}
            </span>
          ))}

          {/* Center AI brain */}
          <div className="orbit-center">
            <VLogo size={40} />
          </div>

          {/* Moving dots */}
          {dots.map((d, i) => (
            <div
              className="orbit-dot"
              key={i}
              style={{
                '--r': `${d.r}px`,
                width: '10px',
                height: '10px',
                marginTop: '-5px',
                marginLeft: '-5px',
                background: d.color,
                color: d.color,
                animation: `orbit-cw ${d.dur} linear infinite`,
                animationDelay: d.delay,
              }}
            />
          ))}

        </div>
      </div>
    </section>
  );
}