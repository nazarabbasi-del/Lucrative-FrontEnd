import React, { useEffect, useRef, useState } from 'react';
import { IconCheck } from '../../icons.jsx';
import mascotWorkflow from '../../assets/mascot-blue-workflow.png';
import mascotTriangle from '../../assets/mascot-triangle-sparkle.png';

// --- small building blocks for the different visual types used across tabs ---

function CheckCol({ items }) {
  // items: [label, status?] — status renders a right-aligned tag like AUTO/DRAFT/PREP/ALERT
  return (
    <div className="check-card loft-check-card">
      {items.map(([label, status]) => (
        <div className="check-row checked" key={label}>
          <span className="box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><IconCheck /></span>
          <span dangerouslySetInnerHTML={{ __html: label }} />
          {status && <span className="right">{status}</span>}
        </div>
      ))}
    </div>
  );
}

function BulletCol({ items }) {
  return (
    <div className="check-card loft-check-card">
      {items.map((label) => (
        <div className="check-row" key={label}>
          <span style={{ color: 'var(--text-400)' }}>&bull;</span>
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </div>
      ))}
    </div>
  );
}

function StepCol({ items, startAt }) {
  return (
    <div className="check-card loft-check-card">
      {items.map((label, i) => (
        <div className="loft-step-row" key={label}>
          <span className="loft-step-num">{startAt + i}</span>
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </div>
      ))}
    </div>
  );
}

function PillCol({ items }) {
  // items: [label, pillText]
  return (
    <div className="stat-card">
      {items.map(([label, pill]) => (
        <div className="stat-line" key={label}>
          <span>{label}</span>
          <span className="tag-pill" style={{ color: 'var(--teal-500)', margin: 0 }}>{pill}</span>
        </div>
      ))}
    </div>
  );
}

const tabs = [
  {
    label: 'AI Generates',
    title: 'AI Generates',
    visual: (
      <div className="loft-mkt-twocol">
        <CheckCol items={[['Audience', 'AUTO'], ['Customer Segment', 'AUTO'], ['Email Sequence', 'AUTO'], ['Landing Page', 'AUTO'], ['Forms', 'AUTO']]} />
        <CheckCol items={[['CTAs', 'AUTO'], ['Follow Up Journey', 'AUTO'], ['AI Copy', 'AUTO'], ['Reports', 'AUTO']]} />
      </div>
    ),
  },
  {
    label: 'AI Audience intelligence',
    title: 'AI Audience Intelligence',
    desc: 'Marketing that understands buying intent. Loft continuously analyzes customer behavior to automatically identify:',
    visual: (
      <div className="loft-mkt-twocol">
        <BulletCol items={['Buying intent', 'Engagement level', 'Customer interests', 'Industry']} />
        <BulletCol items={['Lifecycle Stage', 'Product Interest', 'Revenue Potential', 'Churn Risk']} />
      </div>
    ),
  },
  {
    label: 'Email Automation',
    title: 'Email Automation',
    desc: 'Intelligent email journeys that adapt automatically. Design sophisticated nurture programs without complicated workflows.',
    visual: (
      <div className="loft-mkt-twocol">
        <CheckCol items={[['Email Sequences', 'DRAFT'], ['Drip Campaigns', 'PREP'], ['Behavioral Triggers', 'ALERT'], ['Dynamic Personalization', 'ALERT']]} />
        <CheckCol items={[['AI Subject Lines', 'DRAFT'], ['Send Time Optimization', 'PREP'], ['Journey Automation', 'ALERT'], ['Re-engagement Campaigns', 'ALERT']]} />
      </div>
    ),
  },
  {
    label: 'Landing Pages',
    title: 'Landing Pages',
    desc: 'Build landing pages in minutes. AI generates complete landing pages from your campaign objective.',
    visual: (
      <div className="stat-card">
        <div className="stat-line"><span>Landing Page Builder</span><span className="badge badge-green">94%</span></div>
        <div className="stat-line"><span>Forms</span><span className="badge badge-gold">68%</span></div>
        <div className="stat-line"><span>Conversion Tracking</span><span className="badge badge-blue">&plusmn;4%</span></div>
      </div>
    ),
  },
  {
    label: 'Webinar & Event Marketing',
    title: 'Webinar & Event Marketing',
    desc: 'Launch and manage webinars from one platform. From registration through follow-up. Everything connected to your CRM.',
    // Note: items 1, 2, 5 and 6 weren't visible in the screenshots you sent
    // (the crop started at "3 Reminder Emails" / "7 Follow-up Automation") —
    // filled in with reasonable placeholders below, swap the label text for
    // your real copy.
    visual: (
      <div className="loft-mkt-twocol">
        <StepCol startAt={1} items={['Registration Page', 'Confirmation Email', 'Reminder Emails', 'Calendar Invites']} />
        <StepCol startAt={5} items={['Live Attendance Tracking', 'Post-Event Survey', 'Follow-up Automation', 'Revenue Attribution']} />
      </div>
    ),
  },
  {
    label: 'Campaign Attribution',
    title: 'Campaign Attribution',
    desc: 'Know which marketing actually generates revenue. Move beyond opens and clicks.',
    visual: (
      <div className="loft-mkt-twocol">
        <PillCol items={[['First Touch', 'enabled'], ['Last Touch', 'enforced'], ['Multi-touch', 'full history'], ['Campaign ROI', 'full history']]} />
        <PillCol items={[['Pipeline Influence', 'enabled'], ['Revenue Generates', 'enforced'], ['Customer Lifetime Value', 'full history']]} />
      </div>
    ),
  },
  {
    label: 'AI Campaign Optimization',
    title: 'AI Campaign Optimization',
    desc: 'Every campaign gets smarter over time. Loft continuously monitors campaign performance and recommends improvements.',
    visual: (
      <div className="loft-mkt-twocol">
        <PillCol items={[['AI Suggestions', 'enabled'], ['Increase budget', 'enforced'], ['Pause low-performing ads', 'full history'], ['Split audience', 'full history']]} />
        <PillCol items={[['Improve subject line', 'enabled'], ['Send follow-up', 'enforced'], ['Launch retargeting', 'full history'], ['Improve CTA', 'full history']]} />
      </div>
    ),
  },
];

const STICKY_OFFSET = 100;

export default function LoftMarketingWorkspace() {
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
        <div className="tabs-layout tabs-layout--wide reveal" style={{ marginTop: 0 }}>
          <div className="tabs-nav-col">
            <div className="loft-mkt-intro">
              <h2 style={{ fontSize: 44, fontWeight: 500, marginBottom: 14 }}>Marketing Workspace</h2>
              <p>Build campaigns by describing your objective.<br />Instead of configuring dozens of workflows manually&hellip;</p>
              <p>Simply tell Loft:</p>
              <p className="example">Launch a nurture campaign for manufacturing companies evaluating ERP systems that haven&rsquo;t booked a demo in 30 days.</p>
              <p>Loft builds everything automatically.</p>
            </div>

            <div className="tabs-list">
              {tabs.map((t, i) => (
                <button key={t.label} className={i === active ? 'active' : ''} onClick={() => scrollToCard(i)}>
                  <span className="tabs-list-dot" aria-hidden="true" />
                  {t.label}
                </button>
              ))}
              <img
                src={active % 2 === 0 ? mascotWorkflow : mascotTriangle}
                alt=""
                className="loft-mkt-graphic floaty"
              />
            </div>
          </div>

          <div className="tabs-stack">
            {tabs.map((t, i) => (
              <div className="tabs-stack-item" key={t.label} ref={(el) => (itemRefs.current[i] = el)}>
                <div className="tabs-stack-card tabs-stack-card--plain" style={{ zIndex: i + 1 }} ref={(el) => (cardRefs.current[i] = el)}>
                  <div className="tab-panel tab-panel--stacked">
                    <div className="copy">
                      <h3>{t.title}</h3>
                      {t.desc && <p dangerouslySetInnerHTML={{ __html: t.desc }} />}
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