import React from 'react';
import { IconCheck, IconX, IconSparkle, IconSend } from '../../icons.jsx';
import personaTriangle from '../../assets/persona-triangle.png';
import CountUp from '../governance/anim/CountUp.jsx';

const chatChecklist = [
  { text: 'Opportunity loaded' },
  { text: 'Pricing calculated', subValue: 38754.75 },
  { text: 'Discount validated', sub: '12% &le; 15% limit' },
  { text: 'Policy', pill: 'Pass' },
  { text: 'Quote generated' },
];

const problems = [
  '40+ minutes spent per quote',
  'Pricing mistakes reduce margins',
  'Discount approvals are inconsistent',
  'Sales reps duplicate work across systems',
  'Quote quality varies between teams',
  'Compliance checks happen too late',
];

export default function QuotebaseChatProblem() {
  return (
    <section className="section">
      <div className="container qb-chat-grid">
        <div className="reveal">
          <div className="qb-chat-card">
            <div className="qb-chat-head">
              <span className="qb-chat-avatar"><IconSparkle /></span>
              <div>
                <b>Quotebase</b>
                <span>Live Session</span>
              </div>
            </div>

            <div className="qb-chat-bubble">Generate quote for ACME Manufacturing.</div>

            <div className="qb-chat-checklist">
              {chatChecklist.map((c) => (
                <div className="check-row" key={c.text}>
                  <span className="qb-check-circle qb-check-circle--sm"><IconCheck /></span>
                  <span dangerouslySetInnerHTML={{ __html: c.text }} />
                  {c.subValue != null && <span style={{ color: 'var(--text-400)', fontSize: 12 }}>&nbsp;&middot; <CountUp to={c.subValue} decimals={2} comma prefix="$" /></span>}
                  {c.sub && <span style={{ color: 'var(--text-400)', fontSize: 12 }}>&nbsp;&middot; <span dangerouslySetInnerHTML={{ __html: c.sub }} /></span>}
                  {c.pill && <span className="tag-pill" style={{ color: 'var(--blue-600)', margin: 0, marginLeft: 'auto' }}>{c.pill}</span>}
                </div>
              ))}
              <a href="#send" className="btn btn-primary qb-chat-ready-btn">Ready to send</a>
            </div>

            <div className="qb-chat-foot">
              <img src={personaTriangle} alt="" />
              <div className="qb-chat-input">
                Ask me anything
                <span className="send"><IconSend /></span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Every sales team eventually runs into the same quoting problems.</h2>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginTop: 24 }}>Manual quoting slows revenue.</h3>
          <p style={{ marginTop: 12, color: 'var(--text-600)', fontSize: 15, lineHeight: 1.7 }}>
            Reps stitch quotes together across spreadsheets, price sheets, and inboxes. Every hand-off is a chance for a wrong number to reach a customer.
          </p>

          <ul className="qb-check-list">
            {problems.map((p) => (
              <li key={p}>
                <span className="qb-x-circle"><IconX /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}