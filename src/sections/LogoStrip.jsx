import React from 'react';

const names = [
  'NorthPoint Financial',
  'Heritage Life',
  'meridian/agency',
  'SILVER OAK PARTNERS',
  'Cornerstone Insurance',
  'Bluewater Advisors',
  'Vantage Underwriters',
];

export default function LogoStrip() {
  const items = [...names, ...names];
  return (
    <section className="logo-strip">
      <p className="tag">Trusted by carriers, agencies &amp; independent producers nationwide</p>
      <div className="marquee-track" style={{ overflow: 'hidden' }}>
        <div className="marquee">
          {items.map((n, i) => (
            <span key={i}><span className="dot" />{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
