import React from 'react';
import personaFlower from '../../assets/persona-flower.png';

const labels = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

const oldWay = [
  'Opens the CRM, copies products into a spreadsheet. Two tabs, one typo.',
  'Calculates pricing by hand, checks the discount sheet. Was it 12% or 15%?',
  'Writes the quote, emails a manager for approval. Waits.',
  'Reviews it once more, fixes formatting, attaches the PDF. Rebuilds the total.',
  'Sends it &mdash; 40+ minutes in. Nothing logged anywhere.',
];

const quotebaseWay = [
  'Clicks Generate. The agent reads the opportunity straight from Salesforce.',
  'The pricing engine calculates totals &mdash; deterministic, to the cent.',
  'Policy validation runs automatically &mdash; 12% &le; 15% limit, PASS.',
  'The branded document generates itself &mdash; wording by AI, numbers by code.',
  'Email delivered, tracked, and logged to the audit trail. Seconds, total.',
];

export default function QuotebaseMondayTimeline() {
  return (
    <section className="section section--tight">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Two ways to run a Monday.</h2>

        <div className="strat-timeline-wrap reveal">
          <div className="strat-timeline-header left">
            <p className="strat-timeline-eyebrow">The old way</p>
            <h3 className="strat-timeline-heading">Manual process</h3>
          </div>

          <div className="strat-timeline-header-center" />

          <div className="strat-timeline-header right">
            <p className="strat-timeline-eyebrow">The Quotebase way</p>
            <h3 className="strat-timeline-heading">Click Generate</h3>
          </div>

          {oldWay.map((t, i) => (
            <React.Fragment key={i}>
              <div className="strat-timeline-card" style={{ textAlign: 'right' }} dangerouslySetInnerHTML={{ __html: t }} />
              <div className="strat-timeline-time">
                <span className="strat-timeline-dot">{labels[i]}</span>
              </div>
              <div className="strat-timeline-card dark" dangerouslySetInnerHTML={{ __html: quotebaseWay[i] }} />
            </React.Fragment>
          ))}
        </div>

        <div className="strat-timeline-foot">
          <span className="strat-footer-pending">40+ minutes &middot; human errors</span>
          <img src={personaFlower} alt="" className="strat-footer-flower" />
          <span className="strat-footer-win">Priced, checked, sent &mdash; <span className="text-blue">fully auditable</span></span>
        </div>
      </div>
    </section>
  );
}