import React from 'react';
import { IconCheck } from '../icons.jsx';
import { VLogo } from '../icons.jsx';

const rows = [
  ['AI-native platform', 'yes', 'Add-ons', 'Partial', 'No'],
  ['Built-in CRM', 'yes', 'muted-yes', 'muted-yes', 'No'],
  ['AI business intelligence', 'yes', 'Limited', 'Limited', 'No'],
  ['CRM governance', 'yes', 'No', 'No', 'No'],
  ['AI quote generation', 'yes', 'CPQ required', 'Limited', 'No'],
  ['Deterministic pricing', 'yes', 'Add-on', 'No', 'No'],
  ['Unified customer intelligence', 'yes', 'Partial', 'Partial', 'No'],
  ['Conversational Analytics analytics', 'yes', 'Limited', 'No', 'No'],
  ['30 days unused seat waiver', 'yes', 'No', 'No', 'No'],
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
        <div className="mini-cta">
          <div className="mini-cta-btns">
            <button href="/pricing#configurator" className="btn btn-primary">Signup Now</button>
            <button href="/contact" className="btn btn-outline">Watch Demo</button>
          </div>
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

        
      </div>
    </section>
  );
}
