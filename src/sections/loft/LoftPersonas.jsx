import React, { useState } from 'react';
import CountUp from '../governance/anim/CountUp.jsx';

import avatarBlue from '../../assets/avatar-blue.png';
import avatarCloud from '../../assets/avatar-cloud.png';
import avatarFlower from '../../assets/avatar-flower.png';
import avatarTriangle from '../../assets/avatar-triangle.png';

import personaCloud from '../../assets/persona-cloud.png';
import personaGhost from '../../assets/persona-ghost.png';
import personaFlower from '../../assets/persona-flower.png';

const personas = [
  {
    key: 'Unified Platform',
    avatar: avatarBlue,
    img: avatarBlue,
    tag: 'UNIFIED PLATFORM',
    color: '#175FA4',

    title: 'One unified platform',

    desc: 'Stop asking for headcount you won’t get. Lucrative gives one RevOps person the leverage of a governance team — a scored audit every quarter, quantified findings, and drafted fixes you approve.',

    quote: '“Governance without hiring another admin.”',

    card: {
      label: 'YOUR FIRST AUDIT',
      amount: {
        to: 87,
        suffix: '/100',
      },
      sub: 'HubSpot · Marketing Hub Enterprise',

      rows: [
        ['Legacy fields to retire', '#D5453F', { to: 23 }],
        ['Orphaned workflows', '#D6931F', { to: 8 }],
        [
          'Marketing seats freed',
          '#175FA4',
          { to: 2.4, decimals: 1, prefix: '$', suffix: 'k/month' },
        ],
      ],

      foot: 'One workspace. One score to defend at every QBR.',
    },
  },

  {
    key: 'Cost',
    avatar: avatarCloud,
    img: personaCloud,
    tag: 'COST',
    color: '#2F72C4',

    title: 'Predictable software costs',

    desc: 'Salesforce for the enterprise motion. HubSpot for marketing. GoHighLevel for the acquisitions. Audit each independently in a single workspace and see a unified score you can defend to the board.',

    quote: '“One tool that speaks all three.”',

    card: {
      label: 'UNIFIED WORKSPACE',
      amount: {
        to: 3,
        suffix: ' CRMs · 1 score',
      },
      sub: 'Weighted across portals',

      rows: [
        ['Salesforce · Enterprise', '#175FA4', { to: 91 }],
        ['HubSpot · Marketing', '#D6931F', { to: 84 }],
        ['GoHighLevel · 12 subs', '#12807F', { to: 78 }],
      ],

      foot: 'Composite score: 84 · trending up +6 QoQ.',
    },
  },

  {
    key: 'Customer Engagement',
    avatar: personaGhost,
    img: personaGhost,
    tag: 'CUSTOMER ENGAGEMENT',
    color: '#12807F',

    title: 'Faster customer engagement',

    desc: 'New job, unfamiliar portal, zero documentation, no idea what to touch first. Lucrative gives you a ranked list of every issue on day one — and a defensible remediation plan by day three.',

    quote: '“A defensible plan by day three.”',

    card: {
      label: 'DAY 1 · RANKED FINDINGS',
      amount: {
        to: 142,
        suffix: ' issues',
      },
      sub: 'Ordered by dollar impact',

      rows: [
        ['Duplicate contact merge', '#D5453F', { to: 8.1, decimals: 1, prefix: '$', suffix: 'k' }],
        ['Broken lifecycle mapping', '#D6931F', { to: 5.4, decimals: 1, prefix: '$', suffix: 'k' }],
        ['12 orphaned automations', '#175FA4', { to: 2.7, decimals: 1, prefix: '$', suffix: 'k' }],
      ],

      foot: 'First fix takes 4 minutes. You’ll look competent by noon.',
    },
  },

  {
    key: 'Automation',
    avatar: personaFlower,
    img: personaFlower,
    tag: 'AUTOMATION',
    color: '#D5453F',

    title: 'Built-in automation',

    desc: 'AI models trained on dirty CRM data produce bad output at scale. 63% of organizations lack AI-ready data. Get to AI-ready before your competitors do — with an audit that measures it explicitly.',

    quote: '“Get to AI-ready before your competitors do.”',

    card: {
      label: 'DAY 1 · RANKED FINDINGS',
      amount: {
        to: 62,
        suffix: '/100',
      },
      sub: '12 blockers detected',

      rows: [
        ['Fields with >40% nulls', '#D5453F', { to: 17 }],
        ['Contact records unlabeled', '#D6931F', { to: 31, suffix: '%' }],
        ['ICP Coverage', '#12807F', { to: 94, suffix: '%' }],
      ],

      foot: 'One fix cycle gets you to 84 — most models’ floor.',
    },
  },

  {
    key: 'AI',
    avatar: avatarTriangle,
    img: avatarTriangle,
    tag: 'AI',
    color: '#D6931F',

    title: 'AI throughout the platform',

    desc: 'HubSpot Solution Partners, Salesforce consultants, GoHighLevel operators. Run five-minute diagnostics across every client portal in one workspace. Bill the interpretation, skip the twenty-hour data pulls.',

    quote: '“Bill the strategy, not the data-pulling.”',

    card: {
      label: 'CLIENT PORTFOLIO',
      amount: {
        to: 12,
        suffix: ' client portals',
      },
      sub: '12 audits · 60 min · One admin, one afternoon',

      rows: [
        ['Acme Manufacturing', '#175FA4', { to: 82 }],
        ['Brightline Labs', '#D6931F', { to: 74 }],
        ['+ 10 more portals', '#12807F', { to: 78, suffix: ' avg' }],
      ],

      foot: 'Same 100 credits. Whether it’s one portal or twenty.',
    },
  },
];

export default function LoftPersonas() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <section className="section">
      <div className="container">

        <p
          className="eyebrow"
          style={{
            textAlign: 'center',
            width: '100%',
            fontSize: 13,
          }}
        >
          Use Cases
        </p>

        <h2 className="section-title reveal">
          Why Companies Switch
        </h2>

        <p className="section-sub reveal">
          Pick who sounds like your Monday — see the first thing they’d see.
        </p>

        <div className="persona-tabs reveal">
          {personas.map((per, i) => (
            <button
              key={per.key}
              type="button"
              className={`persona-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={per.avatar} alt="" />
              {per.tag}
            </button>
          ))}
        </div>

        <div className="persona-panel reveal">
          <div>
            <div className="avatar-row">
              <img src={p.img} alt="" />

              <span
                className="tag-pill"
                style={{ color: p.color }}
              >
                {p.tag}
              </span>

              <span className="index">
                PERSONA 0{active + 1}/0{personas.length}
              </span>
            </div>

            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <div className="persona-quote">
              {p.quote}
            </div>
          </div>

          <div className="pipeline-card">

            <div className="top">
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: '.08em',
                  color: 'var(--text-400)',
                }}
              >
                {p.card.label}
              </span>

              <span className="dots">
                <span style={{ background: '#E8615A' }} />
                <span style={{ background: '#E8A63D' }} />
                <span style={{ background: '#37A55F' }} />
              </span>
            </div>

            <div className="amount">
              <CountUp
                to={p.card.amount.to}
                decimals={p.card.amount.decimals}
                prefix={p.card.amount.prefix}
                suffix={p.card.amount.suffix}
              />
            </div>

            <div className="sub">
              {p.card.sub}
            </div>

            {p.card.rows.map(([label, color, val]) => (
              <div
                className="pipeline-row"
                key={label}
              >
                <span
                  className="ic"
                  style={{ background: color }}
                >
                  &bull;
                </span>

                <span>{label}</span>

                <span className="right">
                  {val ? (
                    <CountUp
                      to={val.to}
                      suffix={val.suffix}
                      prefix={val.prefix}
                      decimals={val.decimals}
                      comma={val.comma}
                    />
                  ) : (
                    'next'
                  )}
                </span>
              </div>
            ))}

            <div className="pipeline-foot">
              <b>
                {p.card.foot.split('.')[0]}.
              </b>{' '}
              {p.card.foot
                .split('.')
                .slice(1)
                .join('.')
                .trim()}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}