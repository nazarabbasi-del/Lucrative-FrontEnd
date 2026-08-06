import React, { useState } from 'react';
import CountUp from '../governance/anim/CountUp.jsx';

import avatarBlue from '../../assets/avatar-blue.png';
import avatarTriangle from '../../assets/avatar-triangle.png';
import personaCircle from '../../assets/persona-circle-blue.png';
import personaGhost from '../../assets/persona-ghost.png';
import personaFlower from '../../assets/persona-flower.png';

const personas = [
  {
    key: 'Marketing',
    avatar: avatarBlue,
    img: personaCircle,
    tag: 'MARKETING',
    color: '#175FA4',

    title: 'You own the number. Now own the why.',

    desc: 'Every Monday, know which campaigns are working, which are stalling, and where the next dollar goes — before the standup starts. No tickets, no CSV stitching.',

    quote: '"Which campaigns generated pipeline last week?"',

    card: {
      label: 'YOUR WEEKLY BRIEF',

      amount: {
        to: 412,
        prefix: '$',
        suffix: 'K',
      },

      sub: 'Founder Story · attributed pipeline',

      rows: [
        [
          'Scale Founder Story',
          '#175FA4',
          {
            to: 3.1,
            decimals: 1,
            suffix: '×',
          },
        ],

        [
          'Q4 nurture stalling',
          '#D5453F',
          {
            to: -18,
            suffix: '%',
          },
        ],

        [
          'Retest paid search geo',
          '#175FA4',
          null,
          'next',
        ],
      ],

      foot: 'One brief. Every channel, ranked by dollars.',
    },
  },

  {
    key: 'Founder',
    avatar: avatarTriangle,
    img: avatarTriangle,
    tag: 'FOUNDER',
    color: '#D6931F',

    title: 'Board-grade answers, without asking three people.',

    desc: "Pipeline by source, revenue by motion, growth efficiency — answered in seconds, not in next week's ops review. Ask before you sleep, present in the morning.",

    quote: '"Where is revenue coming from this quarter?"',

    card: {
      label: 'YOUR BOARD VIEW',

      amount: {
        to: 3.5,
        decimals: 1,
        prefix: '$',
        suffix: 'M',
      },

      sub: 'Q1 pipeline · pace vs. $4.0M target',

      rows: [
        [
          'Outbound motion',
          '#37A55F',
          {
            to: 1.9,
            decimals: 1,
            prefix: '$',
            suffix: 'M',
          },
        ],

        [
          'Product-led signups',
          '#37A55F',
          {
            to: 1.1,
            decimals: 1,
            prefix: '$',
            suffix: 'M',
          },
        ],

        [
          'Partner channel gap',
          '#E8615A',
          {
            to: 500,
            prefix: '$',
            suffix: 'K',
            comma: true,
          },
        ],
      ],

      foot: 'One view. Every investor question, pre-answered.',
    },
  },

  {
    key: 'RevOps',
    avatar: personaGhost,
    img: personaGhost,
    tag: 'REVOPS',
    color: '#12807F',

    title: 'Retire 40 dashboards. Keep one analyst.',

    desc: 'Skip the warehouse project and the BI seat sprawl. The semantic layer already understands your objects, owners, and stages — every stakeholder self-serves.',

    quote: '"Deals stuck at Proposal over 30 days, by owner."',

    card: {
      label: 'YOUR PIPELINE AUDIT',

      amount: {
        to: 23,
      },

      sub: 'Deals stalled at Proposal · 30+ days',

      rows: [
        [
          'Enterprise · West',
          '#E8615A',
          {
            to: 9,
            suffix: ' deals',
          },
        ],

        [
          'Mid-market · East',
          '#E8615A',
          {
            to: 8,
            suffix: ' deals',
          },
        ],

        [
          'Suggested reassignment',
          '#175FA4',
          null,
          'draft',
        ],
      ],

      foot: 'One layer. Every team asking its own questions.',
    },
  },

  {
    key: 'Agency',
    avatar: personaFlower,
    img: personaFlower,
    tag: 'AGENCY',
    color: '#D5453F',

    title: 'Analyst-grade reporting on every retainer.',

    desc: 'Every client account gets AI-analyst reporting from one workspace. Bill the strategy, drop the data-pull hours, and walk into reviews with the why.',

    quote: '"Compare all clients by campaign efficiency."',

    card: {
      label: 'YOUR CLIENT ROSTER',

      amount: {
        to: 10,
        suffix: '×',
      },

      sub: 'Reporting throughput · per account manager',

      rows: [
        [
          'Acme Co · monthly report',
          '#37A55F',
          null,
          'ready',
        ],

        [
          'Northwind · QBR deck',
          '#37A55F',
          null,
          'ready',
        ],

        [
          'Globex · channel review',
          '#E8615A',
          null,
          'flagged',
        ],
      ],

      foot: 'One workspace. Every client, white-labeled.',
    },
  },
];

export default function StratumPersonas() {
  const [active, setActive] = useState(0);

  const p = personas[active];

  return (
    <section className="section">
      <div className="container">

        {/* SECTION HEADER */}
        <p
          className="eyebrow"
          style={{
            textAlign: 'center',
            width: '100%',
            fontSize: 13,
          }}
        >
          Whose Monday gets better?
        </p>

        <h2 className="section-title">
          Four seats. Same table.
        </h2>

        <p className="section-sub">
          Pick who sounds like your Monday — see the first thing they’d see.
        </p>

        {/* PERSONA TABS */}
        <div className="persona-tabs">
          {personas.map((per, i) => (
            <button
              key={per.key}
              type="button"
              className={`persona-tab ${
                i === active ? 'active' : ''
              }`}
              onClick={() => setActive(i)}
            >
              <img
                src={per.avatar}
                alt=""
              />

              {per.tag}
            </button>
          ))}
        </div>

        {/* PERSONA PANEL */}
        <div
          className="persona-panel"
          key={active}
        >

          {/* LEFT CONTENT */}
          <div>

            <div className="avatar-row">

              <img
                src={p.img}
                alt=""
              />

              <span
                className="tag-pill"
                style={{
                  color: p.color,
                }}
              >
                {p.tag}
              </span>

              <span className="index">
                PERSONA 0{active + 1}/04
              </span>

            </div>

            <h3>
              {p.title}
            </h3>

            <p>
              {p.desc}
            </p>

            <div className="persona-quote">
              {p.quote}
            </div>

          </div>

          {/* RIGHT CARD */}
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

                <span
                  style={{
                    background: '#E8615A',
                  }}
                />

                <span
                  style={{
                    background: '#E8A63D',
                  }}
                />

                <span
                  style={{
                    background: '#37A55F',
                  }}
                />

              </span>

            </div>

            {/* MAIN CARD VALUE */}
            <div className="amount">
              <CountUp
                to={p.card.amount.to}
                decimals={p.card.amount.decimals}
                prefix={p.card.amount.prefix}
                suffix={p.card.amount.suffix}
                comma={p.card.amount.comma}
              />
            </div>

            {/* CARD SUBTEXT */}
            <div className="sub">
              {p.card.sub}
            </div>

            {/* CARD ROWS */}
            {p.card.rows.map(
              ([label, color, val, fallback]) => (
                <div
                  className="pipeline-row"
                  key={label}
                >

                  <span
                    className="ic"
                    style={{
                      background: color,
                    }}
                  >
                    &bull;
                  </span>

                  <span>
                    {label}
                  </span>

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
                      fallback || 'next'
                    )}

                  </span>

                </div>
              )
            )}

            {/* CARD FOOTER */}
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