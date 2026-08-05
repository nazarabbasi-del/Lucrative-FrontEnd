import React from 'react';
import { VLogo } from '../icons.jsx';

const cols = [
  { title: 'Product', links: ['How it works', 'CRMs', 'Pricing', 'Security', 'Changelog'] },
  { title: 'Solutions', links: ['RevOps leaders', 'CRM admins', 'AI readiness', 'Agencies'] },
  { title: 'Company', links: ['Docs', 'Contact', 'Privacy', 'Terms'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">LUCRAT<VLogo size={18} />E&nbsp;AI</a>
            <p>Revenue governance for HubSpot, Salesforce, and GoHighLevel.</p>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.title}>
              <h6>{c.title}</h6>
              {c.links.map((l) => <a href="#" key={l}>{l}</a>)}
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
