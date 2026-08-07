import React from 'react';
import logo from '../assets/Lucarative-Logo.png';
import { VLogo } from '../icons.jsx';

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Lucrative Sales', href: '/loft' },
      { label: 'Lucrative Marketing', href: '/loft-marketing' },
      { label: 'Lucrative Analytics', href: '/stratum' },
      { label: 'Lucrative Quote', href: '/quotebase' },
      { label: 'Lucrative Governance', href: '/governance' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Partners', href: '/partners' },
      { label: 'Investor', href: '/investors' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', columnGap: 64, rowGap: 32 }}
        >
          <div className="footer-brand">
            <a href="#top" className="logo">
              <a href="#top" className="logo">LUCRAT<VLogo size={18} />E&nbsp;AI</a>
            </a>
            <p>Revenue governance for HubSpot, Salesforce, and GoHighLevel.</p>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.title}>
              <h6>{c.title}</h6>
              {c.links.map((l) => <a href={l.href} key={l.label}>{l.label}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Lucrative, Inc.</span>
          <span>help@lucrative.ai · +1-601-340-4666</span>
        </div>
      </div>
    </footer>
  );
}