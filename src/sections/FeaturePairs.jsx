import React, { useEffect, useRef, useState } from 'react';
import { IconCheck, IconSend } from '../icons.jsx';
import { LogoRow } from './BrandLogos.jsx';

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });

    if (ref.current) io.observe(ref.current);

    return () => io.disconnect();
  }, []);

  return [ref, inView];
}

function MarketingContactsGap() {
  const [ref, inView] = useInView();

  const rows = [
    { label: 'Total Contacts', value: '15,200', pct: 100, total: true },
    { label: 'Marketing Contacts', value: '4,200', pct: 27 },
    { label: 'Non-marketing contacts', value: '3,100', pct: 20 },
    { label: 'Invalid contacts', value: '1,200', pct: 8 },
    { label: 'Bounced Contacts', value: '900', pct: 6 },
    { label: 'Engaged Contacts', value: '5,800', pct: 38 },
  ];

  return (
    <div className="visual-card" ref={ref}>
      <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>
        Marketing Contacts Gap
      </h4>

      {rows.map((r) => (
        <div
          className={`bar-row ${r.total ? 'total' : ''}`}
          key={r.label}
        >
          <div className="top">
            <span>{r.label}</span>
            <b>{r.value}</b>
          </div>

          <div className="bar-track">
            <div
              className="bar-fill"
              style={{
                width: inView ? `${r.pct}%` : 0,
              }}
            />
          </div>
        </div>
      ))}

      <div
        className="bar-row"
        style={{
          marginTop: 18,
          borderTop: '1px solid var(--border-soft)',
          paddingTop: 14,
        }}
      >
        <div className="top">
          <span>
            Cost Waste · 6,800 unused marketing contact slots
          </span>
          <b style={{ color: 'var(--blue-600)' }}>
            $4250/month
          </b>
        </div>
      </div>
    </div>
  );
}

function RevenueIntelligence() {
  return (
    <div className="visual-card">
      <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
        Revenue intelligence
      </h4>

      <div className="rev-row">
        <span>Commit</span>
        <span>
          <b>$1.8M</b>
          <span className="chip chip-up">14%</span>
        </span>
      </div>

      <div className="rev-row">
        <span>Best case</span>
        <span>
          <b>$2.4M</b>
          <span className="chip chip-warn">6%</span>
        </span>
      </div>

      <div className="rev-row">
        <span>AI forecast</span>
        <span>
          <b>$2.1M</b>
          <span className="chip chip-up">9%</span>
        </span>
      </div>

      <h4
        style={{
          fontSize: 14,
          fontWeight: 700,
          margin: '18px 0 4px',
        }}
      >
        AI sales assistant
      </h4>

      <div className="ai-assist-list">
        <div className="ai-assist-item">
          <span className="tool-row-x" />
          <IconCheck style={{ color: 'var(--blue-600)' }} />
          <span>Follow-up drafted · Dana Reyes</span>
          <span className="status">Draft</span>
        </div>

        <div className="ai-assist-item">
          <IconCheck style={{ color: 'var(--blue-600)' }} />
          <span>Call prep ready · 9:30 demo</span>
          <span className="status">Prep</span>
        </div>

        <div className="ai-assist-item alert">
          <IconCheck style={{ color: 'var(--red-500)' }} />
          <span>Still flagged · Inreach · 14 days quiet</span>
          <span className="status">Alert</span>
        </div>
      </div>

      <div className="chat-cta">
        Review and send
      </div>
    </div>
  );
}

function StratumChat() {
  return (
    <div className="chat-window">
      <div className="chat-head">
        <div className="ic">S</div>

        <div>
          <b>Stratum</b>
          <span>Edit this execution plan with natural language</span>
        </div>
      </div>

      <div className="chat-body">
        <div className="chat-bubble-user">
          Compare my Google Ads spend last month against the actual
          closed-won revenue in HubSpot for those same campaigns.
          Which campaign had the highest actual ROI?
        </div>

        <div className="chat-reply">
          <span className="tagline">
            Stratum Connected: HubSpot + Google Ads
          </span>

          <div>
            Cross-Platform Performance Analysis (Last Month):
          </div>

          <div style={{ marginTop: 6 }}>
            • Total Google Ads Spend: $42,900
            <br />
            • HubSpot Closed-Won Revenue: $188,000
            <br />
            • Overall Blended ROI: 4.42x
          </div>

          <div
            style={{
              marginTop: 8,
              fontWeight: 700,
            }}
          >
            Top Performing Campaign:
          </div>

          <div>
            "Q2 Enterprise Search - Competitor A" · Google Ads
            Spend: $8,200 (24,300 Clicks) · HubSpot Deals Created:
            18 SQLs · HubSpot Closed-Won: $56,000 (3 Deals) ·
            Campaign ROI: 6.83x
          </div>
        </div>
      </div>

      <div className="chat-input">
        Ask me anything

        <IconSend
          style={{
            marginLeft: 'auto',
            color: 'var(--teal-600)',
          }}
        />
      </div>
    </div>
  );
}

function QuoteForgeChat() {
  const items = [
    ['Opportunity loaded', null],
    ['Pricing calculated', '$38,754.75'],
    ['Discount validated', '12% ≤ 15% limit'],
    ['Policy', 'Yes'],
    ['Quote generated', null],
  ];

  return (
    <div className="chat-window">
      <div className="chat-head">
        <div
          className="ic"
          style={{
            background: 'var(--navy-900)',
          }}
        >
          Q
        </div>

        <div>
          <b>Quotebase</b>
          <span>Live Session</span>
        </div>
      </div>

      <div className="chat-body">
        <div className="chat-bubble-user">
          Generate quote for ACME Manufacturing.
        </div>

        <div className="chat-checklist">
          {items.map(([label, val]) => (
            <div className="row" key={label}>
              <span className="check">
                <IconCheck />
              </span>

              <span>{label}</span>

              {val && (
                <span className="pill">
                  {val}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="chat-cta">
        Ready to send
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE ROW
   ========================================================= */

function Row({
  tag,
  tagColor,
  tagBg,
  tagHoverBg,
  title,
  sub,
  boldSub,
  groups,
  list,
  meta,
  brands,
  visual,
  visualBg,
  reverse,
}) {
  return (
    <div
      className={`feature-row reveal ${reverse ? 'reverse' : ''}`}
      style={{
        '--tagc': tagColor,
      }}
    >
      <div className="feature-text">

        {/* TAG PILL */}
        <span
          className="tag-pill"
          style={{
            color: tagColor,
            backgroundColor: tagBg,
            '--tag-hover-bg': tagHoverBg,
          }}
        >
          {tag}
        </span>

        <h3>{title}</h3>

        {sub && (
          <p
            style={{
              fontWeight: boldSub ? 700 : 400,
              color: boldSub
                ? 'var(--text-900)'
                : undefined,
              marginTop: -6,
            }}
          >
            {sub}
          </p>
        )}

        {groups &&
          groups.map((g, gi) => (
            <div
              key={gi}
              style={{
                marginBottom:
                  gi === groups.length - 1 ? 0 : 16,
              }}
            >
              {g.map((line) => (
                <p
                  key={line}
                  style={{ margin: 0 }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}

        {list && (
          <div className="feature-list">
            {list.map((item) => (
              <p
                key={item}
                style={{ margin: 0 }}
              >
                {item}
              </p>
            ))}
          </div>
        )}

        {brands && (
          <div className="brand-row">
            <LogoRow h={26} />
          </div>
        )}

        <p className="meta">
          {meta}
        </p>
      </div>

      {/* CARD VISUAL */}
      <div
        className="feature-visual"
        style={{
          background: visualBg,
        }}
      >
        {visual}
      </div>
    </div>
  );
}

/* =========================================================
   CARDS
   ========================================================= */

const cards = [
  {
    tag: 'Sales & Marketing',
    tagColor: 'var(--blue-600)',
    tagBg: '#E8F1FA',
    tagHoverBg: '#D6E6F7',
    visualBg: 'var(--blue-100)',

    title: 'Lucrative Sales',
    sub: 'For Sales, Marketing & Revenue Managment',

    list: [
      'AI-powered CRM for sales teams',
      'Marketing automation & customer journeys',
      'Revenue forecasting & pipeline intelligence',
      'AI lead scoring & buying intent detection',
      'Campaign attribution & ROI measurement',
      'Email sequences, landing pages & webinars',
      'Customer lifecycle & revenue management',
      'Built-in AI automation, reporting & insights',
    ],

    meta:
      'CRM Intelligence · Buyer Insights · AI Recommendations',

    visual: <MarketingContactsGap />,
  },

  {
    tag: 'CONTRACTING',
    tagColor: 'var(--text-600)',
    tagBg: '#EEF1F4',
    tagHoverBg: '#DDE4EA',
    visualBg: 'var(--grey-50)',

    title: 'Lucrative Quote',

    list: [
      'AI quote & proposal generation',
      'Contract lifecycle management',
      'Deterministic pricing engine',
      'Approval workflows & governance',
      'Policy-compliant contract generation',
      'Salesforce, HubSpot & Lucrative integration',
      'Version control & audit history',
    ],

    meta:
      'Salesforce native · Deterministic pricing · Policy guardrails',

    visual: <QuoteForgeChat />,
  },

  {
    tag: 'DATA GOVERNANCE',
    tagColor: 'var(--gold-600)',
    tagBg: '#FFF5DF',
    tagHoverBg: '#FFE9B8',
    visualBg: 'var(--gold-100)',

    title: 'Lucrative Governance',

    groups: [
      [
        'Uniquely capable of maintaining your data and system health without operational and technical knowledge',
      ],
      [
        'AI driven yet controlled by human before any execution',
      ],
    ],

    meta:
      'Marketing Automation · AI Experiments · Campaign Intelligence',

    visual: <RevenueIntelligence />,
  },

  {
    tag: 'ANALYTICS & INSIGHTS',
    tagColor: 'var(--teal-600)',
    tagBg: '#E4F8F7',
    tagHoverBg: '#CDEFEF',
    visualBg: 'var(--teal-100)',

    title: 'Lucrative Analytics',

    sub: 'Most Intelligent analytic tool',
    boldSub: true,

    groups: [
      [
        'Build your reports and dashboard with just human data',
        'Query true attribution building',
      ],
      [
        'Build data models with AI Ability to run without your own data warehouse',
        'Natively integrate with Salesforce, HubSpot and any other external source',
      ],
      [
        "Still don't find your connector – Request for Feature – Guaranteed 7-10 days delivery",
      ],
    ],

    meta:
      'Natural language analytics · 15+ platform integrations',

    brands: true,
    visual: <StratumChat />,
  },
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function FeaturePairs() {
  const stackRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    const stage = stageRef.current;

    if (!stack || !stage) return;

    const updateCards = () => {
      const rect = stack.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollDistance =
        stack.offsetHeight - viewportHeight;

      const travelled = Math.max(
        0,
        Math.min(scrollDistance, -rect.top)
      );

      const progress =
        scrollDistance > 0
          ? (travelled / scrollDistance) *
            (cards.length - 1)
          : 0;

      const cardElements =
        stage.querySelectorAll('.lsc26-card');

      cardElements.forEach((card, index) => {
        const distance = Math.max(
          index - progress,
          0
        );

        card.style.transform =
          `translate3d(0, ${distance * 100}%, 0)`;

        card.style.zIndex = index + 1;
      });
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCards();
          ticking = false;
        });

        ticking = true;
      }
    };

    updateCards();

    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      updateCards
    );

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      );

      window.removeEventListener(
        'resize',
        updateCards
      );
    };
  }, []);

  return (
    <section
      className="section"
      id="how-it-works"
    >
      <div className="container">

        <div
          className="lsc26-stack"
          ref={stackRef}
        >
          <div
            className="lsc26-stage"
            ref={stageRef}
          >
            {cards.map((c) => (
              <div
                className="lsc26-card"
                key={c.title}
              >
                <Row {...c} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}