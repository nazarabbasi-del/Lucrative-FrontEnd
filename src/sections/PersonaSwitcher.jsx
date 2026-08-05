import React, { useState } from 'react';
import personaCircle from '../assets/persona-circle-blue.png';
import personaCloud from '../assets/persona-cloud.png';
import personaGhost from '../assets/persona-ghost.png';
import personaFlower from '../assets/persona-flower.png';
import personaTriangle from '../assets/persona-triangle.png';

const personas = [
  {
    key: 'Sales', img: personaCircle, tag: 'SALES', color: '#175FA4',
    title: 'You close deals faster — quotes stop being the bottleneck.',
    desc: 'Every rep gets an AI CRM that logs calls, drafts follow-ups, and generates a policy-compliant quote in seconds. Discovery notes turn into next steps. Pipeline stays clean without asking.',
    quote: '"From discovery call to signed quote in one afternoon."',
    pipeline: {
      label: 'YOUR PIPELINE', amount: '$4.2M', sub: 'Loft CRM · Acme Corp · Q4',
      rows: [
        ['Discovery call summarized', '#E8615A', '2 min'],
        ['Quote QT-9241 drafted', '#E8A63D', '$257k'],
        ['Follow-up email queued', '#175FA4', 'ready'],
      ],
      foot: 'One CRM. Every rep, quoting like your best rep.',
    },
  },
  {
    key: 'Marketing', img: personaCloud, tag: 'MARKETING', color: '#D6931F',
    title: 'Campaigns launch themselves — from brief to live in one prompt.',
    desc: 'Describe the audience, the pain point, and the goal in plain language. Loft builds the journey, drafts the copy, and keeps optimizing while your team focuses on strategy.',
    quote: '"We described the audience once. The campaign was live an hour later."',
    pipeline: {
      label: 'ACTIVE CAMPAIGNS', amount: '12', sub: 'Loft for Marketing · This month',
      rows: [
        ['Landing page generated', '#E8A63D', 'live'],
        ['Journey optimized', '#175FA4', '+18% CTR'],
        ['A/B test concluded', '#37A55F', 'winner'],
      ],
      foot: 'One campaign brief. Every channel, in sync.',
    },
  },
  {
    key: 'Customer Success', img: personaGhost, tag: 'CUSTOMER SUCCESS', color: '#12807F',
    title: 'Every renewal risk surfaces before the call, not after.',
    desc: 'Support tickets, usage data, and CRM notes merge into one health score. AI flags accounts going quiet and drafts the save-play before churn happens.',
    quote: '"Support tickets and CRM data finally talk to each other."',
    pipeline: {
      label: 'ACCOUNT HEALTH', amount: '94%', sub: 'Governance · Renewal book',
      rows: [
        ['Health score updated', '#175FA4', 'live'],
        ['At-risk account flagged', '#E8615A', 'Acme Co'],
        ['Save-play drafted', '#37A55F', 'ready'],
      ],
      foot: 'One customer record. Every signal, connected.',
    },
  },
  {
    key: 'Operations', img: personaFlower, tag: 'OPERATIONS', color: '#175FA4',
    title: 'Reports rebuild themselves — no more Friday afternoon exports.',
    desc: 'Ask Stratum AI what you want to know, in plain language. It queries every connected platform, builds the chart, and keeps it live — no dashboards to maintain by hand.',
    quote: '"Our ops team asks Stratum instead of building another spreadsheet."',
    pipeline: {
      label: 'DATA HEALTH', amount: '15+', sub: 'Stratum AI · Connected sources',
      rows: [
        ['Cross-platform report built', '#175FA4', '9s'],
        ['Duplicate records merged', '#E8A63D', '312'],
        ['Attribution model synced', '#37A55F', 'live'],
      ],
      foot: 'One prompt. Every platform, queried at once.',
    },
  },
  {
    key: 'Leadership', img: personaTriangle, tag: 'LEADERSHIP', color: '#D6931F',
    title: 'Pipeline questions get answered in seconds, not days.',
    desc: "Ask about EMEA forecast, quota attainment, or revenue leak — Stratum answers immediately, backed by your live customer record, not a stale export.",
    quote: '"I ask for EMEA forecast and I have it before I\'ve finished the sentence."',
    pipeline: {
      label: 'EXECUTIVE SUMMARY', amount: '$21.4M', sub: 'Company-wide · Q4 forecast',
      rows: [
        ['Pipeline coverage checked', '#175FA4', '3.2x'],
        ['Quota attainment reviewed', '#E8A63D', '78%'],
        ['Revenue leak estimated', '#E8615A', '$1.4M'],
      ],
      foot: 'One question. Every number, governed.',
    },
  },
];

export default function PersonaSwitcher() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow" style={{ textAlign: 'center', width: '100%' }}>Use Cases</p>
        <h2 className="section-title reveal">Why Companies Switch</h2>
        <p className="section-sub reveal">Pick who sounds like your Monday — see the first thing they'd see.</p>

        <div className="persona-tabs reveal">
          {personas.map((per, i) => (
            <button key={per.key} className={`persona-tab ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
              <img src={per.img} alt="" />
              {per.key}
            </button>
          ))}
        </div>

        <div className="persona-panel reveal" key={active}>
          <div>
            <div className="avatar-row">
              <img src={p.img} alt="" />
              <span className="tag-pill" style={{ color: p.color }}>{p.tag}</span>
              <span className="index">PERSONA 0{active + 1}/05</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="persona-quote">{p.quote}</div>
          </div>
          <div className="pipeline-card">
            <div className="top">
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', color: 'var(--text-400)' }}>{p.pipeline.label}</span>
              <span className="dots"><span style={{ background: '#E8615A' }} /><span style={{ background: '#E8A63D' }} /><span style={{ background: '#37A55F' }} /></span>
            </div>
            <div className="amount">{p.pipeline.amount}</div>
            <div className="sub">{p.pipeline.sub}</div>
            {p.pipeline.rows.map(([label, color, val]) => (
              <div className="pipeline-row" key={label}>
                <span className="ic" style={{ background: color }}>●</span>
                <span>{label}</span>
                <span className="right">{val}</span>
              </div>
            ))}
            <div className="pipeline-foot">
              <b>{p.pipeline.foot.split('.')[0]}.</b> {p.pipeline.foot.split('.').slice(1).join('.').trim()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
