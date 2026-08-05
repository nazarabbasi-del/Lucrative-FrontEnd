import React, { useEffect, useRef, useState } from 'react';
import { IconCheck, IconAlert } from '../../icons.jsx';
import CountUp from '../governance/anim/CountUp.jsx';
import AnimatedBar from '../governance/anim/AnimatedBar.jsx';
import mascotWorkflow from '../../assets/mascot-blue-workflow.png';

const tabs = [
  {
    label: 'Autonomous CRM',
    title: 'Autonomous CRM',
    desc: 'Keeps itself updated &mdash; logs calls, files emails, enriches contacts, and dedupes records without being asked.',
    visual: (
      <div className="check-card loft-check-card">
        {[
          ['Call logged & summarized · 22 min'],
          ['Pricing email filed to Northwind record'],
          ['Duplicate merged · &ldquo;D. Reyes&rdquo; = &ldquo;Dana R.&rdquo;'],
        ].map(([a]) => (
          <div className="check-row checked" key={a}>
            <span className="box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><IconCheck /></span>
            <span dangerouslySetInnerHTML={{ __html: a }} />
            <span className="right">AUTO</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'AI relationship intelligence',
    title: 'AI relationship intelligence',
    desc: 'Knows which relationships are warming, which are at risk, and who should reach out next.',
    visual: (
      <div className="check-card">
        {[
          ['Call logged & summarized · 22 min', 'warming ↑', 'teal'],
          ['Pricing email filed to Northwind record', 'at risk', 'red'],
          ['Duplicate merged · &ldquo;D. Reyes&rdquo; = &ldquo;Dana R.&rdquo;', 'cooling · 21 days quiet', 'gold'],
        ].map(([a, s, c]) => (
          <div className="loft-status-row" key={a}>
            <span dangerouslySetInnerHTML={{ __html: a }} />
            <span className={`loft-status-pill loft-status-pill--${c}`}>{s}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'AI sales assistant',
    title: 'AI sales assistant',
    desc: 'Drafts follow-ups, preps your calls, and flags stalling deals before they slip a quarter.',
    visual: (
      <div className="check-card loft-check-card">
        <div className="check-row checked">
          <span className="box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><IconCheck /></span>
          <span>Follow-up drafted · Dana Reyes</span>
          <span className="right">DRAFT</span>
        </div>
        <div className="check-row checked">
          <span className="box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><IconCheck /></span>
          <span>Call prep ready · 9:30 demo</span>
          <span className="right">PREP</span>
        </div>
        <div className="check-row alert">
          <span className="box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><IconAlert /></span>
          <span>Stall flagged · Initech · 14 days quiet</span>
          <span className="right" style={{ color: 'var(--red-600)' }}>ALERT</span>
        </div>
        <a href="#audit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 14 }}>Review and send</a>
      </div>
    ),
  },
  {
    label: 'Revenue intelligence',
    title: 'Revenue intelligence',
    desc: 'Forecasts grounded in every deal&rsquo;s real signals &mdash; activity, engagement, and history, not gut feel.',
    visual: (
      <div className="stat-card">
        <div className="stat-line"><span>Commit</span><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><b><CountUp to={1.8} decimals={1} prefix="$" suffix="M" /></b><span className="badge badge-green">94%</span></span></div>
        <div className="stat-line"><span>Best case</span><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><b><CountUp to={2.4} decimals={1} prefix="$" suffix="M" /></b><span className="badge badge-gold">68%</span></span></div>
        <div className="stat-line"><span>AI forecast</span><span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><b><CountUp to={2.1} decimals={1} prefix="$" suffix="M" /></b><span className="badge badge-blue">&plusmn;4%</span></span></div>
      </div>
    ),
  },
  {
    label: 'Workflow automation',
    title: 'Workflow automation',
    desc: 'No-code flows across every department &mdash; handoffs, renewals, escalations, and nurture on rails.',
    visual: (
      <div className="check-card">
        {[
          ['1', 'Trigger · deal enters Proposal', 'DRAFT'],
          ['2', 'Action · legal review scheduled', 'PREP'],
          ['3', 'Handoff · CS notified at Closed-Won', 'ALERT'],
        ].map(([n, a, s]) => (
          <div className="loft-step-row" key={a}>
            <span className="loft-step-num">{n}</span>
            <span>{a}</span>
            <span className="right">{s}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Enterprise ready',
    title: 'Enterprise ready',
    desc: 'SSO, granular permissions, audit logs, and an architecture that doesn&rsquo;t flinch at scale.',
    visual: (
      <div className="stat-card">
        {[['SSO / SAML', 'enabled'], ['Granular permissions', 'enforced'], ['Audit log', 'full history']].map(([a, s]) => (
          <div className="stat-line" key={a}><span>{a}</span><span className="tag-pill" style={{ color: 'var(--teal-500)', margin: 0 }}>{s}</span></div>
        ))}
      </div>
    ),
  },
];

const STICKY_OFFSET = 100;

export default function LoftWhyChoose() {
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
    <section className="section section--grey">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: 'left' }}>Why growing<br />businesses choose Loft.</h2>
        <p className="section-sub reveal" style={{ textAlign: 'left', margin: '14px 0 0' }}>Six things a CRM should have done all along.</p>

        <div className="tabs-layout reveal" style={{ marginTop: 40 }}>
          <div className="tabs-nav-col">
            <div className="tabs-list">
              {tabs.map((t, i) => (
                <button key={t.label} className={i === active ? 'active' : ''} onClick={() => scrollToCard(i)}>
                  <span className="tabs-list-dot" aria-hidden="true" />
                  {t.label}
                </button>
              ))}
              <img src={mascotWorkflow} alt="" className="floaty" style={{ width: 170, marginTop: 28, alignSelf: 'flex-start' }} />
            </div>
          </div>

          <div className="tabs-stack">
            {tabs.map((t, i) => (
              <div className="tabs-stack-item" key={t.label} ref={(el) => (itemRefs.current[i] = el)}>
                <div className="tabs-stack-card tabs-stack-card--plain" style={{ zIndex: i + 1 }} ref={(el) => (cardRefs.current[i] = el)}>
                  <div className="tab-panel tab-panel--stacked">
                    <div className="copy">
                      <h3>{t.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: t.desc }} />
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