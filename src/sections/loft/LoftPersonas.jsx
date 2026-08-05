import React, { useState } from 'react';
import CountUp from '../governance/anim/CountUp.jsx';
import avatarBlue from '../../assets/avatar-blue.png';
import avatarTriangle from '../../assets/avatar-triangle.png';
import personaCloud from '../../assets/persona-cloud.png';
import personaGhost from '../../assets/persona-ghost.png';
import personaFlower from '../../assets/persona-flower.png';

const personas = [
  {
    key: 'Unified Platform', avatar: avatarBlue, img: avatarBlue, tag: 'UNIFIED PLATFORM', color: '#175FA4',
    title: 'One unified platform',
    desc: 'Stop asking for headcount you won&rsquo;t get. Lucrative gives one RevOps person the leverage of a governance team &mdash; a scored audit every quarter, quantified findings, and drafted fixes you approve.',
    quote: '&ldquo;Governance without hiring another admin.&rdquo;',
    card: {
      label: 'YOUR WEEKLY BRIEF', amount: { to: 412, prefix: '$', suffix: 'K' }, sub: 'HubSpot &middot; Marketing Hub Enterprise',
      rows: [
        ['Scale Founder Story', '#D5453F', { to: 3.1, decimals: 1, suffix: 'x' }],
        ['Q4 nurture stalling', '#D6931F', { to: -18, suffix: '%' }],
        ['Retest paid search geo', '#175FA4', null],
      ],
      foot: 'On brief. One brief. Every channel, ranked by dollars.',
    },
  },
  {
    key: 'Cost', avatar: personaCloud, img: personaCloud, tag: 'COST', color: '#2F72C4',
    title: 'Pay for what you use. Nothing else.',
    desc: 'No seat fees, no feature-tier billing event every time you grow. Credits don&rsquo;t expire and every plan gets the same AI &mdash; not a stripped-down version.',
    quote: '&ldquo;What would switching actually save us this quarter?&rdquo;',
    card: {
      label: 'YOUR WEEKLY BRIEF', amount: { to: 38, suffix: '%' }, sub: 'Cost &middot; vs. current stack',
      rows: [
        ['Seats consolidated', '#175FA4', { to: 6 }],
        ['Tools retired', '#D6931F', { to: 3 }],
        ['Monthly savings', '#12807F', { to: 4.2, decimals: 1, prefix: '$', suffix: 'k' }],
      ],
      foot: 'One bill. Every seat, accounted for.',
    },
  },
  {
    key: 'Automation', avatar: personaGhost, img: personaGhost, tag: 'AUTOMATION', color: '#0F2D4D',
    title: 'Workflows that run themselves.',
    desc: 'Handoffs, renewals, and escalations move on rails &mdash; no admin babysitting a workflow builder to keep records current.',
    quote: '&ldquo;Show me every automation that touched this deal.&rdquo;',
    card: {
      label: 'YOUR WEEKLY BRIEF', amount: { to: 19, suffix: '+' }, sub: 'Automation &middot; Active workflows',
      rows: [
        ['Deal handoffs completed', '#175FA4', { to: 42 }],
        ['Escalations routed', '#D5453F', { to: 6 }],
        ['Manual steps removed', '#12807F', { to: 128 }],
      ],
      foot: 'One rulebook. Every handoff, on time.',
    },
  },
  {
    key: 'Customer Engagement', avatar: personaFlower, img: personaFlower, tag: 'CUSTOMER ENGAGEMENT', color: '#D5453F',
    title: 'Know who&rsquo;s warming and who&rsquo;s going quiet.',
    desc: 'Relationship intelligence flags at-risk accounts before renewal instead of after the churn email arrives.',
    quote: '&ldquo;Which accounts have gone quiet this month?&rdquo;',
    card: {
      label: 'YOUR WEEKLY BRIEF', amount: { to: 94, suffix: '%' }, sub: 'Engagement &middot; Renewal book health',
      rows: [
        ['Accounts warming', '#12807F', { to: 24 }],
        ['Accounts at risk', '#D5453F', { to: 7 }],
        ['Save-plays drafted', '#175FA4', null],
      ],
      foot: 'One signal. Every account, watched.',
    },
  },
  {
    key: 'AI', avatar: avatarTriangle, img: avatarTriangle, tag: 'AI', color: '#D6931F',
    title: 'An analyst trained on your business.',
    desc: 'Not a chatbot bolted onto the sidebar &mdash; AI that already knows your funnel, your pipeline definitions, and your deal stages.',
    quote: '&ldquo;Why did MQLs dip last month?&rdquo;',
    card: {
      label: 'YOUR WEEKLY BRIEF', amount: { to: 1.8, decimals: 1, suffix: 's' }, sub: 'AI &middot; Median answer time',
      rows: [
        ['Questions answered', '#175FA4', { to: 312 }],
        ['Recommendations shipped', '#D6931F', { to: 46 }],
        ['Sources cited', '#12807F', { to: 4 }],
      ],
      foot: 'One prompt. Every answer, sourced.',
    },
  },
];

export default function LoftPersonas() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow" style={{ textAlign: 'center', width: '100%', fontSize: 13 }}>Use Cases</p>
        <h2 className="section-title reveal">Why Companies Switch</h2>
        <p className="section-sub reveal">Pick who sounds like your Monday &mdash; see the first thing they&rsquo;d see.</p>

        <div className="persona-tabs reveal">
          {personas.map((per, i) => (
            <button key={per.key} className={`persona-tab ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
              <img src={per.avatar} alt="" />
              {per.tag}
            </button>
          ))}
        </div>

        <div className="persona-panel reveal" key={active}>
          <div>
            <div className="avatar-row">
              <img src={p.img} alt="" />
              <span className="tag-pill" style={{ color: p.color }}>{p.tag}</span>
              <span className="index">PERSONA 0{active + 1}/0{personas.length}</span>
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: p.title }} />
            <p dangerouslySetInnerHTML={{ __html: p.desc }} />
            <div className="persona-quote" dangerouslySetInnerHTML={{ __html: p.quote }} />
          </div>
          <div className="pipeline-card">
            <div className="top">
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', color: 'var(--text-400)' }}>{p.card.label}</span>
              <span className="dots"><span style={{ background: '#E8615A' }} /><span style={{ background: '#E8A63D' }} /><span style={{ background: '#37A55F' }} /></span>
            </div>
            <div className="amount"><CountUp to={p.card.amount.to} decimals={p.card.amount.decimals} prefix={p.card.amount.prefix} suffix={p.card.amount.suffix} /></div>
            <div className="sub" dangerouslySetInnerHTML={{ __html: p.card.sub }} />
            {p.card.rows.map(([label, color, val]) => (
              <div className="pipeline-row" key={label}>
                <span className="ic" style={{ background: color }}>&bull;</span>
                <span>{label}</span>
                <span className="right">
                  {val ? <CountUp to={val.to} suffix={val.suffix} prefix={val.prefix} decimals={val.decimals} comma={val.comma} /> : 'next'}
                </span>
              </div>
            ))}
            <div className="pipeline-foot">
              <b>{p.card.foot.split('.')[0]}.</b> {p.card.foot.split('.').slice(1).join('.').trim()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}