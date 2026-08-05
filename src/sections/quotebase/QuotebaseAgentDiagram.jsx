import React from 'react';
import { VLogo, IconEnvelope, IconCheck } from '../../icons.jsx';

function IconCloud(p) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M7 18a4.5 4.5 0 01-.5-8.97A5.5 5.5 0 0117.2 8.06 4 4 0 0117 16H7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>;
}
function IconDoc(p) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}
function IconClock(p) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /><path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}
function IconBox(p) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M4 8l8-4 8 4-8 4-8-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M4 8v9l8 4 8-4V8M12 12v9" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>;
}
function IconShield(p) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l7 3v6c0 4.5-2.8 7.9-7 9-4.2-1.1-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>;
}

const left = [
  { icon: <IconCloud />, title: 'Salesforce', sub: 'OPPORTUNITY &middot; OAUTH 2.0' },
  { icon: <IconDoc />, title: 'Templates', sub: 'MULTI-BRAND' },
  { icon: <IconClock />, title: 'Audit Log', sub: 'APPEND-ONLY' },
];
const right = [
  { icon: <IconShield />, title: 'Policy Rules', sub: 'PASS &middot; REVIEW &middot; BLOCK' },
  { icon: <IconEnvelope />, title: 'Email', sub: 'DELIVERY &middot; TRACKED' },
  { icon: <IconCheck />, title: 'Approvals', sub: 'ROLE-BASED' },
];

function Node({ n }) {
  return (
    <div className="qb-agent-node">
      <span className="ic">{n.icon}</span>
      <span>
        <b>{n.title}</b>
        <span className="sub" dangerouslySetInnerHTML={{ __html: n.sub }} />
      </span>
    </div>
  );
}

export default function QuotebaseAgentDiagram() {
  return (
    <section className="section section--navy section--tight">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>One AI Agent. Every Business System</h2>
        <p className="section-sub reveal" style={{ textAlign: 'center', color: 'rgba(255,255,255,.7)' }}>
          Your sales team keeps working where they already sell. Quotebase handles the coordination behind the scenes.
        </p>

        <div className="qb-agent-wrap reveal">
          <div className="qb-agent-col qb-agent-col--left">
            {left.map((n) => <Node n={n} key={n.title} />)}
          </div>

          <div className="qb-agent-center">
            <div className="qb-agent-node qb-agent-node--vert">
              <span className="ic"><IconBox /></span>
              <span><b>Pricing Engine</b><span className="sub">DETERMINISTIC</span></span>
            </div>
            <div className="qb-agent-logo"><VLogo size={30} /></div>
            <div className="qb-agent-node qb-agent-node--vert">
              <span className="ic"><IconDoc /></span>
              <span><b>Document Gen</b><span className="sub">PDF &middot; BRANDED</span></span>
            </div>
          </div>

          <div className="qb-agent-col qb-agent-col--right">
            {right.map((n) => <Node n={n} key={n.title} />)}
          </div>
        </div>
      </div>
    </section>
  );
}