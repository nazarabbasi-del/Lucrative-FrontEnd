import React from 'react';
import CountUp from '../governance/anim/CountUp.jsx';
import AnimatedBar from '../governance/anim/Animatedbar.jsx';
import { IconSend } from '../../icons.jsx';

const integrations = ['HubSpot', 'Salesforce', 'Snowflake', 'Amazon Redshift', 'Marketo', 'Google Ads', 'Google Analytics 4', 'Meta Ads', 'LinkedIn Ads', 'Mailchimp', 'Klaviyo', 'Pardot', 'Marketing Cloud', 'GoHighLevel'];
const questions = ['Which campaign generated the highest close rate?', 'Show deals stuck over 30 days.', 'What changed this week?'];
const attribution = [
  { label: 'Webinars', to: 34 },
  { label: 'Paid search', to: 26 },
  { label: 'Email nurture', to: 18 },
];

export default function StratumFeatureGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Everything you need to understand your revenue</h2>
        <p className="section-sub reveal" style={{ textAlign: 'center' }}>Stratum doesn&rsquo;t just answer &mdash; it shows its work. Sources, models, confidence.</p>

        <div className="cap-grid reveal" style={{ marginTop: 48 }}>
          <div className="cap-card section--light-grey">
            <h3>Connect everything</h3>
            <p style={{ color: 'var(--text-600)', fontSize: 15.5, fontWeight: 400, lineHeight: 1.65, marginBottom: 16 }}>
              Your GTM data automatically becomes readable&mdash;with owners, pipelines, stage history, and relationships already resolved. No cryptic IDs. No manual modeling.
            </p>
            <div className="cap-pills">
              {integrations.map((i) => <span className="cap-pill" key={i}>{i}</span>)}
            </div>
          </div>

          <div className="cap-card section--light-grey">
            <h3>Ask your data anything</h3>
            <p style={{ color: 'var(--text-600)', fontSize: 15.5, fontWeight: 400, lineHeight: 1.65, marginBottom: 16 }}>
              Type questions naturally. HDQ (Humanized Data Querying) returns answers instantly.
            </p>
            {questions.map((q) => (
              <div className="strat-input-mock" key={q}><span>&ldquo;{q}&rdquo;</span><IconSend /></div>
            ))}
          </div>

          <div className="cap-card section--light-grey">
            <h3>Build dashboards from a sentence</h3>
            <p style={{ color: 'var(--text-600)', fontSize: 15.5, fontWeight: 400, lineHeight: 1.65 }}>
              Describe what you want. Stratum builds the dashboard automatically. No widgets. No drag-and-drop. No configuration.
            </p>
            <div className="strat-input-mock"><span>Pipeline by owner</span><IconSend /></div>
            <div className="strat-stat-row">
              <div className="strat-stat-box">
                <div className="lbl">Pipeline</div>
                <div className="val"><CountUp to={2.4} decimals={1} prefix="$" suffix="M" /></div>
              </div>
              <div className="strat-stat-box">
                <div className="lbl">Contacts Analyzed</div>
                <div className="val"><CountUp to={15.2} decimals={1} suffix="k" /></div>
              </div>
            </div>
          </div>

          <div className="cap-card section--light-grey">
            <h3>Attribution that learns</h3>
            <p style={{ color: 'var(--text-600)', fontSize: 15.5, fontWeight: 400, lineHeight: 1.65, marginBottom: 16 }}>
              Traditional attribution guesses. Stratum learns. Markov and Shapley models&mdash;alongside every major-touch model&mdash;discover what truly influences revenue across your customer journeys.
            </p>
            {attribution.map((a) => (
              <div className="gov-bar-row" key={a.label}>
                <div className="gov-bar-top"><span>{a.label}</span><b><CountUp to={a.to} suffix="%" /></b></div>
                <div className="gov-bar"><AnimatedBar to={a.to} /></div>
              </div>
            ))}
          </div>

          <div className="cap-card section--light-grey">
            <h3>AI GTM Analyst</h3>
            <p style={{ color: 'var(--text-600)', fontSize: 15.5, fontWeight: 400, lineHeight: 1.65, marginBottom: 16 }}>
              Every dashboard answers &ldquo;what happened?&rdquo; The AI Analyst answers &ldquo;What should we do next?&rdquo; Ranked recommendations, confidence scores, and actionable opportunities&mdash;automatically.
            </p>
            <div className="strat-input-mock" style={{ alignItems: 'flex-start' }}>
              <span>Shift 15% of paid budget towards webinar promotion &mdash; projected + $120k pipeline</span>
              <span className="tag-pill" style={{ color: 'var(--blue-600)', margin: 0, flexShrink: 0 }}>High confidence</span>
            </div>
            <div className="strat-input-mock" style={{ alignItems: 'flex-start' }}>
              <span>Enterprise deals stall at legal review &mdash; add a mid-stage touchpoint.</span>
              <span className="tag-pill" style={{ color: 'var(--gold-600)', margin: 0, flexShrink: 0 }}>Review</span>
            </div>
          </div>

          <div className="cap-card section--light-grey">
            <h3>Prove your strategy</h3>
            <p style={{ color: 'var(--text-600)', fontSize: 15.5, fontWeight: 400, lineHeight: 1.65, marginBottom: 16 }}>
              Run holdout experiments without SQL. Compare two groups. Measure lift. Validate marketing investments with statistical confidence.
            </p>
            <div className="strat-stat-row">
              <div className="strat-stat-box">
                <div className="lbl">Holdout</div>
                <div className="val"><CountUp to={4.1} decimals={1} suffix="%" /></div>
                <div className="lbl" style={{ marginTop: 4 }}>Conversions</div>
              </div>
              <div className="strat-stat-box">
                <div className="lbl">Exposed</div>
                <div className="val"><CountUp to={4.9} decimals={1} suffix="%" /></div>
                <div className="lbl" style={{ marginTop: 4 }}>Conversions</div>
              </div>
            </div>
          </div>

          <div className="cap-card section--light-grey" style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3 style={{ marginBottom: 6 }}>Built for marketers &mdash; not analysts</h3>
              <p style={{ color: 'var(--text-600)', fontSize: 15.5, fontWeight: 400 }}>Just connect, ask, understand, and improve</p>
            </div>
            <div className="cap-pills">
              <span className="cap-pill strat-pill-strike">SQL</span>
              <span className="cap-pill strat-pill-strike">Data warehouse</span>
              <span className="cap-pill strat-pill-strike">ETL project</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}