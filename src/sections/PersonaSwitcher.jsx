import React, { useState } from 'react';

import personaCircle from '../assets/persona-circle-blue.png';
import personaCloud from '../assets/persona-cloud.png';
import personaGhost from '../assets/persona-ghost.png';
import personaFlower from '../assets/persona-flower.png';
import personaTriangle from '../assets/persona-triangle.png';

const personas = [
  {
    key: 'Sales',
    img: personaCircle,
    tag: 'SALES',
    color: '#175FA4',

    title: 'You close deals faster — quotes stop being the bottleneck.',

    desc: 'Every rep gets an AI CRM that logs calls, drafts follow-ups, and generates a policy-compliant quote in seconds. Discovery notes turn into next steps. Pipeline stays clean without asking.',

    quote: '"From discovery call to signed quote in one afternoon."',

    pipeline: {
      label: 'YOUR PIPELINE',
      amount: '$4.2M',
      sub: 'Loft CRM · Acme Corp · Q4',

      rows: [
        ['Discovery call summarized', '#E8615A', '2 min'],
        ['Quote QT-9241 drafted', '#E8A63D', '$257k'],
        ['Follow-up email queued', '#175FA4', 'ready'],
      ],

      foot: 'One CRM. Every rep, quoting like your best rep.',
    },
  },

  {
    key: 'Marketing',
    img: personaCloud,
    tag: 'MARKETING',
    color: '#D6931F',

    title: 'You describe the campaign. Loft launches, scores and optimizes it.',

    desc: "Explain your audience and goal in plain English. Loft builds the journey, scores every lead, launches the landing page and reports back on what's working — continuously.",

    quote: '“Campaigns that write, launch, and improve themselves.”',

    pipeline: {
      label: 'CAMPAIGN · REENGAGE-Q4',
      amount: '147 leads',
      sub: 'Loft Marketing · enrolled today',

      rows: [
        ['Journey drafted from prompt', '#E8A63D', 'live'],
        ['MQL score threshold hit', '#175FA4', '32'],
        ['Handoffs to Sales', '#37A55F', '11'],
      ],

      foot: 'One campaign. Every lead, scored and moving.',
    },
  },

  {
    key: 'Customer Success',
    img: personaGhost,
    tag: 'CUSTOMER SUCCESS',
    color: '#12807F',

    title: 'You see renewal risk weeks before it becomes churn.',

    desc: 'Every touchpoint from Sales, Marketing and Support lands in one customer timeline. AI flags declining engagement, missing QBRs, and open blockers — before the renewal conversation.',

    quote: '“Never surprised by a churn call again.”',

    pipeline: {
      label: 'HEALTH · ACME CORP',
      amount: '87 / 100',
      sub: 'Loft CRM · Renewal in 62 days',

      rows: [
        ['Engagement dropped 40%', '#E8615A', '14D'],
        ['QBR overdue', '#E8A63D', '1'],
        ['Renewal play triggered', '#37A55F', 'AUTO'],
      ],

      foot: 'One timeline. Every risk, before it becomes churn.',
    },
  },

  {
    key: 'Operations',
    img: personaFlower,
    tag: 'OPERATIONS',
    color: '#175FA4',

    title: 'You run governance for the whole team — without hiring another admin.',

    desc: 'Continuous CRM health checks catch stale opps, duplicate accounts, missing owners and policy breaks. AI drafts the fixes; you approve. A quarterly scored audit you can defend at every QBR.',

    quote: '“Governance without hiring another admin.”',

    pipeline: {
      label: 'YOUR FIRST AUDIT',
      amount: '87 / 100',
      sub: 'HubSpot · Marketing Hub Enterprise',

      rows: [
        ['Legacy fields to retire', '#E8615A', '23'],
        ['Orphaned workflows', '#E8A63D', '8'],
        ['Marketing seats freed', '#37A55F', '$4.2k/mo'],
      ],

      foot: 'One workspace. One score to defend at every QBR.',
    },
  },

  {
    key: 'Leadership',
    img: personaTriangle,
    tag: 'LEADERSHIP',
    color: '#D6931F',

    title: 'You ask the question. Stratum answers, in seconds.',

    desc: 'No more waiting three days for a report. Ask Stratum in natural language and it pulls live from 15+ connected platforms — pipeline coverage, forecast, rep performance, EMEA growth — with the audit trail behind it.',

    quote: '“Every board question, answered before the meeting starts.”',

    pipeline: {
      label: 'STRATUM · EXEC BOARD',
      amount: '$18.4M',
      sub: 'Q4 forecast · refreshed 2 min ago',

      rows: [
        ['Pipeline coverage', '#175FA4', '3.2×'],
        ['Reps missing quota', '#E8A63D', '4'],
        ['EMEA growth QoQ', '#37A55F', '+22%'],
      ],

      foot: 'One prompt. Every board answer, ready.',
    },
  },
];

export default function PersonaSwitcher() {
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
          }}
        >
          Use Cases
        </p>

        <h2 className="section-title reveal">
          Why Companies Switch
        </h2>

        <p className="section-sub reveal">
          Pick who sounds like your Monday — see the first thing they'd see.
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
                src={per.img}
                alt=""
              />

              {per.key}
            </button>
          ))}
        </div>

        {/* PERSONA CONTENT */}
        <div
          className="persona-panel"
          key={active}
        >

          {/* LEFT CONTENT */}
          <div>

            {/* PERSONA ICON + LABEL */}
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
                PERSONA 0{active + 1}/05
              </span>

            </div>

            {/* TITLE */}
            <h3>
              {p.title}
            </h3>

            {/* DESCRIPTION */}
            <p>
              {p.desc}
            </p>

            {/* QUOTE */}
            <div className="persona-quote">
              {p.quote}
            </div>

          </div>

          {/* RIGHT PIPELINE CARD */}
          <div className="pipeline-card">

            {/* CARD TOP */}
            <div className="top">

              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: '.08em',
                  color: 'var(--text-400)',
                }}
              >
                {p.pipeline.label}
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

            {/* MAIN NUMBER */}
            <div className="amount">
              {p.pipeline.amount}
            </div>

            {/* SUBTEXT */}
            <div className="sub">
              {p.pipeline.sub}
            </div>

            {/* PIPELINE ROWS */}
            {p.pipeline.rows.map(
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
                    ●
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

            {/* CARD FOOTER */}
            <div className="pipeline-foot">

              <b>
                {p.pipeline.foot.split('.')[0]}.
              </b>{' '}

              {p.pipeline.foot
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