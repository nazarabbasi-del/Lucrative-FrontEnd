import React from 'react';
import { IconCheck } from '../icons.jsx';
import { VLogo } from '../icons.jsx';

const rows = [
  ['AI-native platform', 'yes', 'Partial', 'Partial', 'No'],
  ['Built-in CRM', 'yes', 'muted-yes', 'muted-yes', 'No'],
  ['AI business intelligence', 'yes', 'Limited', 'Limited', 'No'],
  ['CRM governance', 'yes', 'Add-ons', 'No', 'No'],
  ['AI quote generation', 'yes', 'CPQ required', 'No', 'No'],
  ['Deterministic pricing', 'yes', 'Add-on', 'No', 'No'],
  ['Unified customer intelligence', 'yes', 'Partial', 'Partial', 'No'],
  ['Natural-language analytics', 'yes', 'Limited', 'No', 'No'],
  ['Bring your own LLM', 'yes', 'No', 'No', 'No'],
  ['Prompt-driven suite control', 'yes', 'No', 'No', 'No'],
];

function Cell({ v }) {
  if (v === 'yes') return <span className="chk"><IconCheck /></span>;
  if (v === 'muted-yes') return <span className="chk chk-muted"><IconCheck /></span>;
  if (v === 'No') return <span className="val-no">No</span>;
  return <span className="val-partial">{v}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="section section--grey">
      <div className="container">
        <h2 className="section-title reveal">Small teams deserve enterprise automation for<br /><span className="text-blue">CRM and Marketing Automation</span></h2>
        <p className="section-sub reveal text-blue" style={{ color: 'var(--blue-600)' }}>Lucrative AI plans, builds, reviews, and deploys it for you.</p>
        <div className="ph-checklist reveal" style={{ marginTop: 14 }}>
          {['No technical setup', 'No consultants', 'Just explain your use case.'].map((c) => (
            <span key={c}><IconCheck style={{ color: 'var(--blue-600)' }} />{c}</span>
          ))}
        </div>

        <div className="comparison--wrap reveal">
          <table className="comparison">
            <thead>
              <tr>
                <th>Capabilities</th>
                <th className="lucrative">Lucrative</th>
                <th>Salesforce</th>
                <th>HubSpot</th>
                <th>Marketo</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, l, sf, hs, mk]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td><Cell v={l} /></td>
                  <td><Cell v={sf} /></td>
                  <td><Cell v={hs} /></td>
                  <td><Cell v={mk} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mini-cta reveal">
          <p className="mini-cta-tag">Truly built to scale your business work with AI hands to hands</p>
          <div className="mini-cta-btns">
            <a href="#audit" className="btn btn-primary">Signup Now</a>
            <a href="#video" className="btn btn-outline">Watch Demo</a>
          </div>
          <a href="#top" className="logo mini-cta-logo">LUCRAT<VLogo size={20} />E&nbsp;AI</a>
        </div>
      </div>
    </section>
  );
}
