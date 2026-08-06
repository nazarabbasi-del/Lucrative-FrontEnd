import React from 'react';
import { IconCheck } from '../icons.jsx';
import { SalesforceLogo, HubSpotLogo } from './BrandLogos.jsx';
import CountUp from './governance/anim/CountUp.jsx';
import AnimatedVerticalBar from './governance/anim/AnimatedVerticalBar.jsx';

function ScoreCard() {
  return (
    <div className="ph-visual ph-visual--blue">
      <div className="ph-score"><CountUp to={87} className="ph-score-value" /><span>/100</span></div>
      <div className="ph-score-sub">HubSpot · Marketing Hub Enterprise</div>
      <div className="stat-card" style={{ marginTop: 14 }}>
        <div className="stat-line"><span className="ph-dot ph-dot--red">!</span>Legacy fields to retire<b style={{ marginLeft: 'auto' }}><CountUp to={23} /></b></div>
        <div className="stat-line"><span className="ph-dot ph-dot--gold">–</span>Orphaned workflows<b style={{ marginLeft: 'auto' }}><CountUp to={8} /></b></div>
        <div className="stat-line"><span className="ph-dot ph-dot--blue">$</span>Marketing seats freed<b style={{ marginLeft: 'auto', color: 'var(--blue-600)' }}><CountUp to={4.2} decimals={1} prefix="$" suffix="k/mo" /></b></div>
      </div>
    </div>
  );
}

function GovernanceCard() {
  const rows = ['Archive Lead Nurture Q1 2024', 'Reassign 12 enrolled contacts', 'Log to audit trail'];
  return (
    <div className="ph-visual ph-visual--gold">
      <div className="check-card">
        {rows.map((r) => (
          <div className="check-row checked" key={r}>
            <span className="box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><IconCheck /></span>
            <span>{r}</span>
            <span className="right">AI</span>
          </div>
        ))}
      </div>
      <div className="chat-cta" style={{ margin: '14px 0 0' }}>Approve &amp; execute</div>
    </div>
  );
}

function MigrationCard() {
  return (
    <div className="ph-visual ph-visual--teal ph-migration">
      <div className="ph-migration-row">
        <span className="ph-mig-chip">HighLevel</span>
        <SalesforceLogo h={16} />
        <HubSpotLogo h={16} />
      </div>
      <div className="ph-migration-lines" />
      <div className="ph-migration-hub"><span>V</span></div>
    </div>
  );
}

function HoldoutCard() {
  return (
    <div className="ph-visual ph-visual--red">
      <div className="ph-holdout-tag">NURTURE SEQUENCE · HOLDOUT</div>
      <div className="ph-holdout-lift"><CountUp to={18} prefix="+" suffix="%" /></div>
      <div className="ph-holdout-sub">lift · 95% confidence</div>
      <div className="ph-holdout-split">
        <span>Treatment · n=1,240</span>
        <span>Holdout · n=1,240</span>
      </div>
    </div>
  );
}

function PipelineBarsCard() {
  const bars = [40, 55, 48, 65, 100];
  return (
    <div className="ph-visual ph-visual--grey">
      <div className="ph-pipeline-top"><span>Q4 PIPELINE</span><span className="ph-live">● LIVE</span></div>
      <div className="ph-bars">
        {bars.map((h, i) => (
          <AnimatedVerticalBar
            key={i}
            to={h}
            className="ph-bar"
            style={{ background: i === bars.length - 1 ? 'var(--navy-900)' : undefined }}
            delay={i * 80}
          />
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    tag: 'Revenue Operations',
    tagColor: '#185FA5',
    tagBg: '#185FA51A',
    title: 'Zero bloated sales que',
    pills: ['No SQL', 'Answers in seconds'],
    visual: <ScoreCard />,
    size: 'lg'
  },

  {
    tag: 'Lead View',
    tagColor: '#EDB23E',
    tagBg: '#EDB23E1A',
    title: 'AI Based Data Governance & hygiene',
    pills: ['Semantic layer', 'Your funnel, resolved'],
    visual: <GovernanceCard />,
    size: 'lg'
  },

  {
    tag: 'Marketing Mission Control',
    tagColor: '#12AFAE',
    tagBg: '#12AFAE1A',
    title: 'One Click Migration from your old system',
    pills: ['Markov + Shapley', '8 models, one view'],
    visual: <MigrationCard />,
    size: 'sm'
  },

  {
    tag: 'Sales',
    tagColor: '#EC736E',
    tagBg: '#EC736E1A',
    title: 'AI Native Sales Coach',
    pills: ['Randomized holdouts', '95% confidence'],
    visual: <HoldoutCard />,
    size: 'sm'
  },

  {
    tag: 'AI Lead scoring based on your preferences',
    tagColor: '#0F2E4D',
    tagBg: '#0F2E4D1A',
    title: 'AI Scoring for Leads and Accounts',
    pills: ['Prompt to dashboard', 'Always live'],
    visual: <PipelineBarsCard />,
    size: 'sm'
  },
];

export default function PowerHouse() {
  return (
    <section className="section section--grey">
      <div className="container">
        <h2 className="section-title reveal">Lucrative AI is built by a power house</h2>
        <p className="section-sub reveal">
          Lucrative AI transforms complex sales and marketing operations into simple, AI-powered workflows.
          Unlike traditional CRM and marketing platforms, it adapts to your business—not the other way around.
        </p>
        <div className="ph-checklist reveal">
          {['Built natively on AI Infrastructure', 'Still capable to run simply but better', 'No Partner or Consultation needed'].map((c) => (
            <span key={c}><IconCheck style={{ color: 'var(--blue-600)' }} />{c}</span>
          ))}
        </div>

        <div className="ph-grid-top">
          {cards.filter((c) => c.size === 'lg').map((c) => (
            <div className="ph-card reveal" style={{ '--tagc': c.tagColor }} key={c.title}>
              {c.visual}
              <span className="tag-pill" style={{ color: c.tagColor, marginTop: 20,backgroundColor: c.tagBg }}>{c.tag}</span>
              <h3>{c.title}</h3>
              <div className="ph-pills">{c.pills.map((p) => <span className="cap-pill" key={p}>{p}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="ph-grid-bottom">
          {cards.filter((c) => c.size === 'sm').map((c) => (
            <div className="ph-card reveal" style={{ '--tagc': c.tagColor }} key={c.title}>
              {c.visual}
              <span className="tag-pill" style={{ color: c.tagColor, marginTop: 20, backgroundColor: c.tagBg }}>{c.tag}</span>
              <h3>{c.title}</h3>
              <div className="ph-pills">{c.pills.map((p) => <span className="cap-pill" key={p}>{p}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}