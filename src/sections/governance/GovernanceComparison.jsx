import React from 'react';
import { IconCheck, IconX } from '../../icons.jsx';

const rows = [
  ['Time to result', '2–4 weeks', '5 minutes', '5 minutes'],
  ['Cost', '$2K–$10K', '$25–$500/mo', 'Pay per audit'],
  ['Multi-CRM support', 'no', 'no', 'yes'],
  ['Sees Connected apps', 'partial', 'no', 'yes'],
  ['Prices impact in dollars', 'partial', 'no', 'yes'],
  ['Execute the fix', 'partial', 'no', 'yes'],
  ['Backs up before changes', 'Manual', 'no', 'Automatic'],
  ['Versioned audit history', 'no', 'partial', 'V1 → V2 → V3'],
];

function Cell({ v }) {
  if (v === 'yes') return <span className="chk"><IconCheck /></span>;
  if (v === 'no') return <span className="val-no"><IconX /></span>;
  if (v === 'partial') return <span className="val-partial">~</span>;
  return <span>{v}</span>;
}

export default function GovernanceComparison() {
  return (
    <section className="section section--tight">
      <div className="container">
        <h2 className="section-title reveal">Other tools tell you what&rsquo;s wrong.<br /><span className="text-blue">We tell you what it costs — and fix it.</span></h2>

        <div className="comparison-wrap reveal" style={{ marginTop: 40 }}>
          <table className="comparison">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Agency Audit</th>
                <th>Snapshot Tools</th>
                <th className="lucrative">Lucrative</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b, c]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td><Cell v={a} /></td>
                  <td><Cell v={b} /></td>
                  <td><Cell v={c} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
