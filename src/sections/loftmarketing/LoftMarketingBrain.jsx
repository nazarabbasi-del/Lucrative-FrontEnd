import React from 'react';
import { VLogo } from '../../icons.jsx';
import mascotTriangle from '../../assets/mascot-triangle-sparkle.png';
import mascotFlower from '../../assets/mascot-flower-bench.png';

// `slug` gives each pill its own CSS class (.orbit-label--dynamic-list
// etc). top/left positioning lives entirely in styles.css under that
// class, not as inline style here, specifically so a mobile media query
// can override individual labels that would otherwise clip the screen
// edge — inline style always beats an external stylesheet override, even
// one written for a narrower media query, so it can't live here. (Same
// pattern as the homepage's "Every customer / One AI brain" diagram.)
const labels = [
  { text: 'Sales & Marketing Aligned', slug: 'sales-marketing', color: 'var(--teal-600)' },
  { text: 'No Manual Execution', slug: 'no-manual', color: 'var(--blue-600)' },
  { text: 'Revenue Visibility', slug: 'revenue-visibility', color: 'var(--blue-600)' },
  { text: 'No Broken Attributes', slug: 'no-broken', color: 'var(--gold-600)' },
  { text: 'Dynamic List', slug: 'dynamic-list', color: 'var(--red-500)' },
];

// `ring` picks which .orbit-ring (r1/r2/r3) each dot travels on. The dot
// no longer carries its own pixel radius (the old `r: 320` etc) — it's
// wrapped in an .orbit-orbiter sized as a percentage of .orbit-wrap that
// matches the ring exactly, so the orbit radius scales with the diagram
// at any viewport width instead of being locked to one fixed desktop
// size (that fixed-radius approach is what sent the dots flying outside
// their rings on mobile before this fix, on the homepage version).
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

export default function LoftMarketingBrain() {
  return (
    <section className="section orbit-section">
      <div className="container">
        <h2 className="section-title reveal">Every customer. Every Campaign.<br />One AI brain.</h2>
        <p className="section-sub reveal">Every marketing interaction connects back to the same customer record.<br />No duplicate audiences. &middot; No disconnected campaigns. &middot; No guessing attribution.</p>

        <div className="orbit-wrap reveal">
          <img src={mascotTriangle} alt="" className="orbit-mascot left" />
          <img src={mascotFlower} alt="" className="orbit-mascot right" />

          <div className="orbit-ring r1" />
          <div className="orbit-ring r2" />
          <div className="orbit-ring r3" />

          {labels.map((l) => (
            <span className={`orbit-label orbit-label--${l.slug}`} key={l.text} style={{ transform: 'translate(-50%,-50%)', color: l.color }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {l.text}
            </span>
          ))}

          <div className="orbit-center"><VLogo size={40} /></div>

          {/* Moving dots — each .orbit-orbiter is sized as a % of
              .orbit-wrap matching its ring (see .orbit-orbiter.r1/.r2/.r3
              in styles.css), and rotates as a whole; the dot sits pinned
              to its right edge, so the sweep radius is always exactly
              the ring's radius at whatever size the diagram currently
              renders at. */}
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