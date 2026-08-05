import React from 'react';
import { VLogo } from '../../icons.jsx';
import mascotTriangle from '../../assets/mascot-triangle-sparkle.png';
import mascotFlower from '../../assets/mascot-flower-bench.png';

const labels = [
  {
    text: 'Sales & Marketing Aligned',
    top: '0%',
    left: '50%',
    color: 'var(--teal-600)',
  },
  {
    text: 'No Manual Execution',
    top: '24%',
    left: '86%',
    color: 'var(--blue-600)',
  },
  {
    text: 'Revenue Visibility',
    top: '76%',
    left: '86%',
    color: 'var(--blue-600)',
  },
  {
    text: 'No Broken Attributes',
    top: '100%',
    left: '50%',
    color: 'var(--gold-600)',
  },
  {
    text: 'Dynamic List',
    top: '50%',
    left: '2%',
    color: 'var(--red-500)',
  },
];

const dots = [
  // Outer ring
  {
    color: '#1FB6A6',
    r: 320,
    dur: '14s',
    delay: '0s',
  },
  {
    color: '#1FB6A6',
    r: 320,
    dur: '14s',
    delay: '-7s',
  },

  // Middle ring
  {
    color: '#175FA4',
    r: 236,
    dur: '10s',
    delay: '0s',
  },
  {
    color: '#175FA4',
    r: 236,
    dur: '10s',
    delay: '-5s',
  },

  // Inner ring
  {
    color: '#E8A63D',
    r: 148,
    dur: '7s',
    delay: '0s',
  },
  {
    color: '#E8A63D',
    r: 148,
    dur: '7s',
    delay: '-3.5s',
  },
];

export default function LoftMarketingBrain() {
  return (
    <section className="section orbit-section">
      <div className="container">

        <h2 className="section-title reveal">
          Every customer. Every Campaign.
          <br />
          One AI brain.
        </h2>

        <p className="section-sub reveal">
          Every marketing interaction connects back to the same customer record.
          <br />
          No duplicate audiences. &middot; No disconnected campaigns. &middot; No guessing attribution.
        </p>

        <div className="orbit-wrap reveal">

          {/* Left mascot */}
          <img
            src={mascotTriangle}
            alt=""
            className="orbit-mascot left"
          />

          {/* Right mascot */}
          <img
            src={mascotFlower}
            alt=""
            className="orbit-mascot right"
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

          {/* Center */}
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