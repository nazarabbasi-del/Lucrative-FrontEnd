import React from 'react';

const teams = [
  { name: 'Sales', desc: 'Sell more, type less. Deals keep themselves current.', tag: '4 hrs/wk back' },
  { name: 'Marketing', desc: 'Campaigns tied to revenue, not just clicks.', tag: 'revenue attribution' },
  { name: 'Customer Success', desc: 'Risk surfaces before renewal, not after churn.', tag: 'early risk flags' },
  { name: 'Operations', desc: 'One clean system instead of five stitched ones.', tag: 'zero sync debt' },
  { name: 'Executive Leadership', desc: 'A forecast you can defend to the board.', tag: 'board-ready numbers' },
];

export default function LoftTeams() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Built for every revenue team.</h2>
        <p className="section-sub reveal" style={{ textAlign: 'center' }}>Because tools are only valuable if your whole revenue team can use them &mdash; not just the one who set it up.</p>

        <div className="loft-team-list reveal">
          {teams.map((t) => (
            <div className="loft-team-row" key={t.name}>
              <span className="loft-team-name">{t.name}</span>
              <span className="loft-team-desc">{t.desc}</span>
              <span className="tag-pill" style={{ color: 'var(--blue-500)', margin: 0 }}>{t.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}