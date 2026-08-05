import React from 'react';
import { IconCheck, IconX } from '../../icons.jsx';

const rows = [
  ['Automatic Data Updates', 'no', 'no', 'no', 'yes'],
  ['AI Relationship Intelligence', 'no', 'no', 'partial', 'yes'],
  ['Predict Deal Risk', 'no', 'partial', 'no', 'yes'],
  ['AI Recommendations', 'partial', 'partial', 'no', 'yes'],
  ['Built-in Automations', 'partial', 'partial', 'partial', 'yes'],
  ['Unified customer timeline', 'no', 'partial', 'partial', 'yes'],
  ['Easy Setup', 'no', 'partial', 'partial', 'yes'],
  ['Revenue Intelligence', 'partial', 'partial', 'no', 'yes'],
];

function Cell({ v }) {
  if (v === 'yes') return <span className="chk"><IconCheck /></span>;
  if (v === 'no') return <span className="chk chk-no"><IconX /></span>;
  if (v === 'partial') return <span className="chk chk-partial">&ndash;</span>;
  return <span>{v}</span>;
}

export default function LoftComparison() {
  return (
    <section className="section section--grey section--tight">
      <div className="container">
        <h2 className="section-title reveal">Other tools tell you what&rsquo;s wrong.<br /><span className="text-blue">We tell you what it costs &mdash; and fix it.</span></h2>

        <div className="comparison-wrap reveal" style={{ marginTop: 40 }}>
          <table className="comparison">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Agency Audit</th>
                <th>HubSpot</th>
                <th>Pipedrive</th>
                <th className="lucrative">Loft</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b, c, d]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td><Cell v={a} /></td>
                  <td><Cell v={b} /></td>
                  <td><Cell v={c} /></td>
                  <td><Cell v={d} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}