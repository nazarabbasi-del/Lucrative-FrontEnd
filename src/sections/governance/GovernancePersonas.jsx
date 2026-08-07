import React, { useState } from 'react';

import avatarBlue from '../../assets/avatar-blue.png';
import avatarCloud from '../../assets/avatar-cloud.png';
import avatarFlower from '../../assets/avatar-flower.png';
import avatarTriangle from '../../assets/avatar-triangle.png';

import personaCircle from '../../assets/persona-circle-blue.png';
import personaCloud from '../../assets/persona-cloud.png';
import personaGhost from '../../assets/persona-ghost.png';
import personaFlower from '../../assets/persona-flower.png';
import personaTriangle from '../../assets/persona-triangle.png';

const personas = [
  {
    key: 'Single CRM',
    avatar: avatarBlue,
    img: personaCircle,
    tag: 'SINGLE CRM',
    color: '#175FA4',

    title: 'You run one CRM. You still can’t get another admin.',

    desc: 'Stop asking for headcount you won’t get. Lucrative gives one RevOps person the leverage of a governance team — a scored audit every quarter, quantified findings, and drafted fixes you approve.',

    quote: '"Governance without hiring another admin."',

    card: {
      label: 'YOUR FIRST AUDIT',
      amount: '87/100',
      sub: 'HubSpot · Marketing Hub Enterprise',

      rows: [
        ['Legacy fields to retire', '#E8615A','23'],
        ['Orphaned workflows', '#E8A63D','8'],
        ['Marketing seats freed', '#2F72C4','$4.2k/mo'],
      ],

      foot: 'One workspace. One score to defend at every QBR.',
    },
  },

  {
    key: 'Multi CRM',
    avatar: avatarCloud,
    img: personaCloud,
    tag: 'MULTI CRM',
    color: '#175FA4',

    title: 'You run HubSpot and Salesforce. One score, not two reports.',

    desc: 'Most audit tools are single-vendor — you’d need two subscriptions and two dashboards just to compare. Lucrative scores every connected CRM the same way, so migrations and dual-stack teams get one number to trust.',

    quote: '"One governance score across both CRMs, finally."',

    card: {
      label: 'CROSS-CRM AUDIT',
      amount: '81/100',
      sub: 'HubSpot + Salesforce · Combined',

      rows: [
        ['Duplicate accounts across CRMs', '#E8615A','96'],
        ['Fields unmapped in migration', '#E8A63D','14'],
        ['Records reconciled', '#2F72C4','2,310'],
      ],

      foot: 'One workspace. Every CRM, one governance score.',
    },
  },

  {
    key: 'New Admin',
    avatar: personaGhost,
    img: personaGhost,
    tag: 'NEW ADMIN',
    color: '#12807F',

    title: 'You just inherited a CRM nobody documented.',

    desc: 'No handoff notes, no field dictionary, three years of workflows built by people who’ve left. Lucrative maps what’s actually there in five minutes, so you’re not guessing what’s safe to touch.',

    quote: '"I finally know what I’m allowed to delete."',

    card: {
      label: 'INHERITED WORKSPACE',
      amount: '58/100',
      sub: 'HubSpot · Unowned for 14 months',

      rows: [
        ['Undocumented workflows', '#E8615A','41'],
        ['Fields with no owner', '#E8A63D','118'],
        ['Safe-to-archive flagged', '#2F72C4','63'],
      ],

      foot: 'One audit. Every landmine, mapped before you touch it.',
    },
  },

  {
    key: 'AI Prep',
    avatar: avatarFlower,
    img: personaFlower,
    tag: 'AI PREP',
    color: '#D5453F',

    title: 'Your AI initiative is only as good as your CRM data.',

    desc: 'Feeding a forecasting model or an AI SDR dirty, duplicated, half-filled records guarantees bad output. Lucrative’s governance score is the readiness check most AI rollouts skip.',

    quote: '"We ran the audit before we ran the AI pilot."',

    card: {
      label: 'AI READINESS',
      amount: '74/100',
      sub: 'Salesforce · Pre-deployment check',

      rows: [
        ['Missing required fields', '#E8615A','29'],
        ['Duplicate contact records', '#E8A63D','312'],
        ['Records ready for training', '#2F72C4','91%'],
      ],

      foot: 'One score. Every model, trained on clean data.',
    },
  },

  {
    key: 'Agency',
    avatar: avatarTriangle,
    img: personaTriangle,
    tag: 'AGENCY',
    color: '#D6931F',

    title: 'You manage twelve client CRMs. Governance shouldn’t take twelve tools.',

    desc: 'Run the same eight-dimension audit across every client workspace, price the findings in dollars they’ll understand, and hand them a fix plan instead of a forty-page PDF.',

    quote: '"It’s the deliverable that actually gets us renewed."',

    card: {
      label: 'CLIENT PORTFOLIO',
      amount: '12',
      sub: 'Active governance audits',

      rows: [
        ['Avg. score across clients', '#2F72C4','79'],
        ['Critical issues this quarter', '#E8615A','17'],
        ['Client hours saved', '#E8A63D','214'],
      ],

      foot: 'One dashboard. Every client, audited on schedule.',
    },
  },
];

// Keyed by colour rather than row index: the Agency persona lists its rows in
// a different order (blue first), so an index-based lookup would pair the
// alert glyph with the positive-blue chip.
const GLYPH_BY_TONE = {
  '#E8615A': '!',
  '#E8A63D': '–',
  '#2F72C4': '$',
};

export default function GovernancePersonas() {
  const [active, setActive] = useState(0);

  const p = personas[active];

  return (
    <section className="section--grey section--tight gov-personas">
      <div className="container">

        {/* SECTION HEADER */}
        <p
          className="eyebrow"
          style={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          Use Cases
        </p>

        <h2 className="section-title reveal">
          Who runs governance audits?
        </h2>

        <p className="section-sub reveal">
          Pick who sounds like your Monday — see the first thing they’d see.
        </p>

        {/* PERSONA TABS */}
        <div className="persona-tabs reveal">
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
        {/* No `reveal` here: key={active} remounts this node on every tab
            change, and useReveal only observes the elements that existed when
            it first ran — so a fresh node would keep .reveal's opacity:0 and
            vanish the moment its fade-in animation finished. The panel has its
            own fade-in, which replays on each switch. */}
        <div className="persona-panel" key={active}>

          {/* LEFT SIDE */}
          <div>

            <div className="avatar-row">

              <img
                src={p.img}
                alt=""
              />

              {/* Tag pill stacks above the index rather than sitting beside it. */}
              <div className="avatar-meta">

                <span
                  className="tag-pill"
                  style={{
                    color: p.color,
                  }}
                >
                  {p.tag}
                </span>

                <span className="index">
                  PERSONA 0{active + 1} / 05
                </span>

              </div>

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

          {/* RIGHT SIDE */}
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

            {/* Score, sub-line and rows sit on a white panel inside the card. */}
            <div className="pipeline-inner">

              <div className="amount">
                {p.card.amount}
              </div>

              <div className="sub">
                {p.card.sub}
              </div>

              {p.card.rows.map(
                ([label, color, val]) => (
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
                      {GLYPH_BY_TONE[color]}
                    </span>

                    <span>
                      {label}
                    </span>

                    <span className="right">
                      {val}
                    </span>

                  </div>
                )
              )}

            </div>

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