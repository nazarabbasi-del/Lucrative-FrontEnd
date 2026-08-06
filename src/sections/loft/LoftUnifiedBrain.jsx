import React from 'react';
import { VLogo } from '../../icons.jsx';
import mascotTriangle from '../../assets/mascot-triangle-sparkle.png';
import mascotFlower from '../../assets/mascot-flower-bench.png';

// Outer ring (r1): evenly spaced 120° apart, same "Mercedes logo" split as
// the home page's CRM/Marketing/Finance. Inner ring (r2): mirrored left
// (triangle mascot side) / right (flower mascot side), same as the home
// page's Support/Sales. Positions live in styles.css as .orbit-label--<slug>.
const labels = [
  { text: 'One customer timeline', slug: 'customer-timeline', color: 'var(--teal-600)' },
  { text: 'No duplicate contacts', slug: 'duplicate-contacts', color: 'var(--blue-600)' },
  { text: 'AI insights everywhere', slug: 'ai-insights', color: 'var(--gold-600)' },
  { text: 'No manual updates', slug: 'manual-updates', color: 'var(--red-500)' },
  { text: 'No syncing issues', slug: 'syncing-issues', color: 'var(--blue-600)' },
];

// Two dots per ring, offset by half a lap (delay = -dur/2) so each ring
// always shows a dot roughly opposite its twin — same pattern as the home
// page orbit and the Loft Marketing orbit.
const dots = [
  { color: '#1FB6A6', ring: 'r1', dur: '14s', delay: '0s' },
  { color: '#1FB6A6', ring: 'r1', dur: '14s', delay: '-7s' },
  { color: '#175FA4', ring: 'r2', dur: '10s', delay: '0s' },
  { color: '#175FA4', ring: 'r2', dur: '10s', delay: '-5s' },
  { color: '#E8A63D', ring: 'r3', dur: '7s', delay: '0s' },
  { color: '#E8A63D', ring: 'r3', dur: '7s', delay: '-3.5s' },
];

export default function LoftUnifiedBrain() {
  return (
    <section className="section orbit-section">
      <div className="container">

        <h2 className="section-title reveal">
          Every customer. Every conversation.
          <br />
          One AI brain.
        </h2>

        <p className="section-sub reveal">
          Loft unifies your whole revenue stack into one intelligent platform
          that automatically updates and gives you visibility
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
              className={`orbit-label orbit-label--${l.slug}`}
              key={l.text}
              style={{ transform: 'translate(-50%, -50%)', color: l.color }}
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

          {/* Moving dots — each dot lives inside a ring-sized .orbit-orbiter
              box that rotates around its own center; the dot is pinned to
              the orbiter's right edge, so it sweeps a circle whose radius
              is always exactly that ring's current radius (desktop or
              mobile alike) instead of a fixed-pixel radius. */}
          {dots.map((d, i) => (
            <div
              className={`orbit-orbiter ${d.ring}`}
              key={i}
              style={{
                animationDuration: d.dur,
                animationDelay: d.delay,
              }}
            >
              <span
                className="orbit-dot"
                style={{ background: d.color, color: d.color }}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}