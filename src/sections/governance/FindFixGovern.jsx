import React, { useEffect, useRef, useState } from 'react';
import { IconCheck } from '../../icons.jsx';
import CountUp from './anim/CountUp.jsx';

const panels = [
  {
    key: 'Audit it your self',
    title: 'Audit it yourself',
    desc: 'Of a senior RevOps person, every quarter — if you know exactly where to look. Most people don’t.',
    rows: [
      ['Field Proliferation', { to: 30, suffix: ' redundant' }, 'badge-red'],
      ['Orphaned Workflows', { to: 8, suffix: ' found' }, 'badge-gold'],
      ['Integration Integrity', { to: 1, suffix: ' mapping error' }, 'badge-red'],
      // Left as static text — it's a range ("+12–18%"), not a single value to count up to.
      ['Contact Stagnation', '+12–18% recovery', 'link'],
    ],
  },
  {
    key: 'Fix',
    title: 'Fix',
    desc: 'Every issue opens a step-by-step execution plan. Remove steps you don’t want, chat to add what it missed, then approve. We create a restore point before anything runs. Nothing executes without your sign-off.',
    checklist: [
      ['Create restore point', 'BACKUP'],
      ['Archive Lead Nurture Q1 2024', 'AI'],
      ['Reassign 12 enrolled contacts', 'AI'],
      ['Log to audit trail', 'AI'],
    ],
  },
  {
    key: 'Govern',
    title: 'Govern',
    desc: 'Every audit is versioned — V1 baseline 74, V2 at 82, V3 at 87. Health scores trend over time, technical debt measured quarter-over-quarter, benchmarked against industry. An audit becomes a practice, not a project.',
    versions: [
      ['V3', 'Mar 2026', 87, '+5'],
      ['V2', 'Dec 2025', 82, '+8'],
      ['V1', 'Sep 2025', 74, 'base'],
    ],
  },
];

// Kept in sync with the sticky offsets in CSS (.gov-ff-list, .gov-ff-card) so
// scroll-driven "active" detection lines up with where a card actually
// clamps into its stuck position — mirrors the approach used by ProblemTabs.
const STICKY_OFFSET = 100;

export default function FindFixGovern() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    let raf = null;

    function computeActive() {
      raf = null;
      let idx = 0;
      for (let i = 0; i < cardRefs.current.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= STICKY_OFFSET + 2) idx = i;
      }
      setActive((prev) => (prev === idx ? prev : idx));
    }

    function onScroll() {
      if (raf == null) raf = requestAnimationFrame(computeActive);
    }

    computeActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  function scrollToCard(i) {
    const el = itemRefs.current[i];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - STICKY_OFFSET - 8;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="gov-ff-layout reveal">
          <div className="gov-ff-nav-col">
            <div className="gov-ff-sticky">
              <h2 className="gov-ff-title">Find it. Fix it. Govern it.</h2>
              <p className="gov-ff-sub">That&rsquo;s the difference between an audit you avoid and a practice you actually run.</p>
              <div className="gov-ff-list">
                {panels.map((p, i) => (
                  <button key={p.key} className={i === active ? 'active' : ''} onClick={() => scrollToCard(i)}>
                    {p.key}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="gov-ff-stack">
            {panels.map((p, i) => (
              <div className="gov-ff-item" key={p.key} ref={(el) => (itemRefs.current[i] = el)}>
                <div className="gov-ff-card" style={{ zIndex: i + 1 }} ref={(el) => (cardRefs.current[i] = el)}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  {p.rows && (
                    <div className="gov-ff-panel-card">
                      {p.rows.map(([label, val, cls]) => (
                        <div className="gov-ff-row" key={label}>
                          <span>{label}</span>
                          {cls === 'link' ? (
                            <span className="text-blue" style={{ fontWeight: 700, fontSize: 13 }}>{val}</span>
                          ) : (
                            <span className={`badge ${cls}`}>
                              {typeof val === 'object' ? <CountUp to={val.to} suffix={val.suffix} /> : val}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {p.checklist && (
                    <div className="gov-ff-panel-card">
                      {p.checklist.map(([label, tag]) => (
                        <div className="gov-ff-check-row" key={label}>
                          <span className="gov-ff-check-box"><IconCheck /></span>
                          <span>{label}</span>
                          <span className="tag">{tag}</span>
                        </div>
                      ))}
                      <a href="#audit" className="btn btn--primary" style={{ width: '100%', marginTop: 14 }}>Approve &amp; execute</a>
                    </div>
                  )}

                  {p.versions && (
                    <div className="gov-ff-panel-card">
                      {p.versions.map(([v, date, score, delta]) => (
                        <div className="gov-ff-version-row" key={v}>
                          <span className="v">{v}</span>
                          <span className="date">{date}</span>
                          <span className="score"><CountUp to={score} /></span>
                          <span className={`badge ${delta === 'base' ? 'badge-grey' : 'badge-blue'}`}>{delta === 'base' ? 'base' : `+${delta.replace('+', '')}`}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}