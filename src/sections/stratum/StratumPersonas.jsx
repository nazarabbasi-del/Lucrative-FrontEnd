import React, { useState } from 'react';
import CountUp from '../governance/anim/CountUp.jsx';
import avatarBlue from '../../assets/avatar-blue.png';
import avatarTriangle from '../../assets/avatar-triangle.png';
import personaCircle from '../../assets/persona-circle-blue.png';
import personaGhost from '../../assets/persona-ghost.png';
import personaFlower from '../../assets/persona-flower.png';

const personas = [
  {
    key: 'Marketing', avatar: avatarBlue, img: personaCircle, tag: 'MARKETING', color: '#175FA4',
    title: 'You own the number. Now own the why.',
    desc: 'Every Monday, know which campaigns are working, which are stalling, and where the next dollar goes &mdash; before the standup starts. No tickets, no CSV stitching.',
    quote: '&ldquo;Which campaigns generated pipeline last week?&rdquo;',
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
    key: 'Founders', avatar: avatarTriangle, img: avatarTriangle, tag: 'FOUNDERS', color: '#D6931F',
    title: 'You don&rsquo;t need a data team. You need an answer.',
    desc: 'Ask the board question in plain English before the board meeting starts. Stratum pulls from every connected platform and shows its work.',
    quote: '&ldquo;What&rsquo;s our real blended CAC this quarter?&rdquo;',
    card: {
      label: 'YOUR WEEKLY BRIEF', amount: { to: 21.4, decimals: 1, prefix: '$', suffix: 'M' }, sub: 'Company-wide &middot; Q4 forecast',
      rows: [
        ['Pipeline coverage checked', '#175FA4', { to: 3.2, decimals: 1, suffix: 'x' }],
        ['Quota attainment reviewed', '#D6931F', { to: 78, suffix: '%' }],
        ['Revenue leak estimated', '#D5453F', { to: 1.4, decimals: 1, prefix: '$', suffix: 'M' }],
      ],
      foot: 'One question. Every number, governed.',
    },
  },
  {
    key: 'RevOps', avatar: personaGhost, img: personaGhost, tag: 'REVOPS', color: '#12807F',
    title: 'You stop being the human export button.',
    desc: 'No more hand-stitching four CSVs into an attribution model every Friday. Stratum keeps the model live and lets anyone ask it a question.',
    quote: '&ldquo;Show deals stuck over 30 days.&rdquo;',
    card: {
      label: 'YOUR WEEKLY BRIEF', amount: { to: 94, suffix: '%' }, sub: 'Governance &middot; Renewal book',
      rows: [
        ['Health score updated', '#175FA4', null],
        ['At-risk account flagged', '#D5453F', null],
        ['Save-play drafted', '#12807F', null],
      ],
      foot: 'One customer record. Every signal, connected.',
    },
  },
  {
    key: 'Engineering', avatar: personaFlower, img: personaFlower, tag: 'ENGINEERING', color: '#D5453F',
    title: 'You stop fielding one-off analytics tickets.',
    desc: 'Marketing and sales get self-serve answers instead of filing a ticket for every new question &mdash; so your sprint stays your sprint.',
    quote: '&ldquo;Can you pull last month&rsquo;s funnel by source?&rdquo; (not anymore)',
    card: {
      label: 'YOUR WEEKLY BRIEF', amount: { to: 15, suffix: '+' }, sub: 'Stratum AI &middot; Connected sources',
      rows: [
        ['Cross-platform report built', '#175FA4', null],
        ['Duplicate records merged', '#D6931F', { to: 312 }],
        ['Attribution model synced', '#12807F', null],
      ],
      foot: 'One prompt. Every platform, queried at once.',
    },
  },
];

export default function StratumPersonas() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow" style={{ textAlign: 'center', width: '100%', fontSize: 13 }}>Whose Monday gets better?</p>
        <h2 className="section-title reveal">Four seats. Same table.</h2>
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
              <span className="index">PERSONA 0{active + 1}/04</span>
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