import React, { useEffect, useRef, useState } from 'react';
import { IconX, IconAlert, IconCheck } from '../icons.jsx';
import mascotWorkflow from '../assets/mascot-blue-workflow.png';
import mascotBench from '../assets/mascot-blue-bench.png';

const tabs = [
  {
    label: 'Too many disconnected tools',
    title: 'Too many disconnected tools',
    desc: 'CRM, spreadsheets, BI tools, quoting software and marketing automation never truly work together.',
    visual: (
      <div className="tool-card">
        {[['CRM', 'Marketing tool'], ['Spreadsheets', 'BI tool'], ['Quoting tool', 'Salesforce']].map(([a, b]) => (
          <div className="tool-row" key={a} style={{ padding: '10px 0' }}>
            <span className="x"><IconX /></span>
            <span className="label">{a} ↔ {b}</span>
            <span className="tag">NO SYNC</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Teams waste hours on manual work',
    title: 'Teams waste hours on manual work',
    desc: 'Updating CRM records, preparing quotes, reviewing dashboards and checking compliance consumes valuable selling time.',
    visual: (
      <div className="stat-card">
        <div className="stat-line"><span>CRM data entry</span><b>6.4h</b><span className="badge badge-red">/rep/wk</span></div>
        <div className="stat-line"><span>Quote preparation</span><b>40 min</b><span className="badge badge-gold">per quote</span></div>
        <div className="stat-line"><span>Dashboard maintenance</span><b>3.1h</b><span className="badge badge-red">/ops/wk</span></div>
      </div>
    ),
  },
  {
    label: 'Data exists everywhere',
    title: 'Data exists everywhere',
    desc: 'Customer information is scattered across platforms, making it difficult to trust reports or make confident decisions.',
    visual: (
      <div className="stat-card">
        <div className="stat-line"><span>Salesforce</span><span className="badge badge-gold">4,281 records</span></div>
        <div className="stat-line"><span>HubSpot</span><span className="badge badge-gold">3,914 records</span></div>
        <div className="stat-line"><span>Support desk</span><span className="badge badge-gold">1,208 tickets</span></div>
        <div className="stat-line"><span>Spreadsheets</span><span className="badge badge-red">who knows</span></div>
      </div>
    ),
  },
  {
    label: 'AI without guardrails',
    title: 'AI without guardrails',
    desc: 'Generic AI tools generate text — but cannot guarantee pricing, governance or business accuracy.',
    visual: (
      <div className="check-card">
        {[['"Discount at 22% for enterprise"', 'HALLUCINATION'], ['Total quoted: $187,50', 'MATH ERROR'], ['Approved Net 90 - policy says Net 45', 'POLICY BREAK']].map(([a, b]) => (
          <div className="check-row alert" key={a}>
            <span className="box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><IconAlert /></span>
            <span>{a}</span>
            <span className="right" style={{ color: 'var(--red-600)' }}>{b}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'No executive visibility',
    title: 'No executive visibility',
    desc: 'Leadership waits days for reports instead of getting answers immediately.',
    visual: (
      <div className="check-card">
        {[['"What\'s Q3 pipeline coverage?"', '3 DAYS WAITING'], ['"Which reps miss quota?"', '2 DAYS WAITING'], ['"EMEA forecast this quarter?"', '4 DAYS WAITING']].map(([a, b]) => (
          <div className="check-row checked" key={a}>
            <span className="box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><IconCheck /></span>
            <span>{a}</span>
            <span className="right">{b}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Revenue leaks go unnoticed',
    title: 'Revenue leaks go unnoticed',
    desc: "Bad CRM data, inconsistent pricing and poor governance quietly reduce growth.",
    visual: (
      <div className="stat-card">
        <div className="stat-big"><span>Duplicate accounts</span><b style={{ color: 'var(--red-600)' }}>312</b><span className="badge badge-red">unmerged</span></div>
        <div className="stat-big"><span>Missing close dates</span><b style={{ color: 'var(--gold-600)' }}>42</b><span className="badge badge-gold">opps</span></div>
        <div className="stat-big"><span>Est. revenue leak</span><b style={{ color: 'var(--red-600)' }}>$1.4M</b><span className="badge badge-red">per year</span></div>
      </div>
    ),
  },
  {
    label: 'Bloated Fields',
    title: 'Bloated Fields',
    desc: 'Too many fields slow adoption, reduce data quality, and make your CRM harder to manage.',
    visual: (
      <div className="stat-card">
        <div className="stat-line"><span>Unused custom fields</span><b>287</b><span className="badge badge-red">unused</span></div>
        <div className="stat-line"><span>Duplicate properties</span><b>64</b><span className="badge badge-gold">duplicates</span></div>
        <div className="stat-line"><span>Estimated admin hours</span><b>32 hrs</b><span className="badge badge-red">per year</span></div>
      </div>
    ),
  },
];

// Sticky top offset used by both the left nav (.tabs-list) and the right
// stacking cards (.tabs-stack-card) in CSS — kept in one place so the
// scroll-driven "active" detection below lines up with where a card
// actually clamps into its stuck position.
const STICKY_OFFSET = 100;

export default function ProblemTabs() {
  const [active, setActive] = useState(0);
  const mascots = [mascotWorkflow, mascotWorkflow, mascotBench, mascotWorkflow, mascotBench, mascotWorkflow, mascotBench];
  const cardRefs = useRef([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    let raf = null;

    function computeActive() {
      raf = null;
      let idx = 0;
      // Cards are stacked with rising z-index, so whichever card has reached
      // (or passed) the sticky clamp line is visually on top. Pick the
      // highest-index card that has reached it — that's the one currently
      // covering the others.
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
    <section className="section section--grey">
      <div className="container">
        <h2 className="section-title reveal">Why Businesses Outgrow<br />Traditional CRMs</h2>
        <p className="section-sub reveal">Traditional CRMs store data. Lucrative AI turns data into action.</p>

        <div className="tabs-layout reveal">
          <div className="tabs-nav-col">
            <div className="tabs-list">
              {tabs.map((t, i) => (
                <button key={t.label} className={i === active ? 'active' : ''} onClick={() => scrollToCard(i)}>
                  <span className="tabs-list-dot" aria-hidden="true" />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="tabs-stack">
            {tabs.map((t, i) => (
              <div
                className="tabs-stack-item"
                key={t.label}
                ref={(el) => (itemRefs.current[i] = el)}
              >
                <div
                  className="tabs-stack-card"
                  style={{ zIndex: i + 1 }}
                  ref={(el) => (cardRefs.current[i] = el)}
                >
                  <div className="tab-panel">
                    <div className="copy">
                      <h3>{t.title}</h3>
                      <p>{t.desc}</p>
                      {i >= 3 && (
                        <img src={mascots[i]} alt="" style={{ width: 110, marginTop: 24, opacity: .9 }} />
                      )}
                    </div>
                    <div className="tab-visual">{t.visual}</div>
                  </div>
                </div>
                {i !== tabs.length - 1 && <div className="tabs-stack-spacer" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
