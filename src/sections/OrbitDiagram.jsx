import React from 'react';
import { VLogo } from '../icons.jsx';
import mascotBee from '../assets/mascot-triangle-bee.png';
import mascotBench from '../assets/mascot-blue-bench.png';
import squiggle from '../assets/icon-squiggle.png';

// `slug` gives each pill its own CSS class (.orbit-label--support etc).
// top/left positioning now lives entirely in styles.css under that class
// (not as inline style here) specifically so a mobile media query can
// override just "Support" (left: 2%) and "Marketing"/"Sales" (left: 86%) —
// those run past the edge of the diagram once the ring shrinks small
// enough on phones that the pill's own width no longer fits in the
// leftover margin. (Inline style would always beat an external override,
// even one written for a narrower media query, so it can't live here.)
const labels = [
  { text: 'CRM', slug: 'crm', color: 'var(--teal-600)' },
  { text: 'Marketing', slug: 'marketing', color: 'var(--blue-600)' },
  { text: 'Sales', slug: 'sales', color: 'var(--blue-600)' },
  { text: 'Finance', slug: 'finance', color: 'var(--gold-600)' },
  { text: 'Support', slug: 'support', color: 'var(--red-500)' },
];

// `ring` picks which .orbit-ring (r1/r2/r3) each dot travels on. The dot no
// longer carries its own pixel radius (see the old `r: 320` etc) — it's
// wrapped in an .orbit-orbiter sized as a percentage of .orbit-wrap that
// matches the ring exactly, so the orbit radius scales with the diagram at
// any viewport width instead of being locked to the 640px desktop size.
const dots = [
  // Outer ring
  { color: '#1FB6A6', ring: 'r1', dur: '14s', delay: '0s' },
  { color: '#1FB6A6', ring: 'r1', dur: '14s', delay: '-7s' },

  // Middle ring
  { color: '#175FA4', ring: 'r2', dur: '10s', delay: '0s' },
  { color: '#175FA4', ring: 'r2', dur: '10s', delay: '-5s' },

  // Inner ring
  { color: '#E8A63D', ring: 'r3', dur: '7s', delay: '0s' },
  { color: '#E8A63D', ring: 'r3', dur: '7s', delay: '-3.5s' },
];

export default function OrbitDiagram() {
  return (
    <section className="section orbit-section">
      <div className="container">

        <h2 className="section-title reveal">
          Every customer. Every workflow.
          <br />
          Driven by RevOps AI Brain.
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
              className={`orbit-label orbit-label--${l.slug}`}
              key={l.text}
              style={{
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

          {/* Moving dots — each .orbit-orbiter is sized as a % of .orbit-wrap
              matching its ring (see .orbit-orbiter.r1/.r2/.r3 in styles.css),
              and rotates as a whole; the dot sits pinned to its right edge,
              so the sweep radius is always exactly the ring's radius at
              whatever size the diagram is currently rendered at. */}
          {dots.map((d, i) => (
            <div
              className={`orbit-orbiter ${d.ring}`}
              key={i}
              style={{ animationDuration: d.dur, animationDelay: d.delay }}
            >
              <span className="orbit-dot" style={{ background: d.color, color: d.color }} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}