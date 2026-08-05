import React from 'react';
import { VLogo } from '../../icons.jsx';
import logoHighLevel from '../../assets/logo-highlevel.png';
import logoSalesforce from '../../assets/logo-salesforce-full.png';
import logoHubspot from '../../assets/logo-hubspot-full.png';

const LINE = '#1D3A57';

export default function MultiCRMDiagram() {
  return (
    <section className="section--grey section--tight">
      <div className="container">
        <h2 className="section-title reveal">One tool. Every CRM<br />your revenue runs on.</h2>
        <p className="section-sub reveal">Most audit tools are single-vendor. If you run more than one CRM — or you&rsquo;re mid-migration — you either buy two tools or wait. Not anymore.</p>

        <div className="gov-crm-diagram reveal">
          <div className="gov-crm-logos">
            <img src={logoHighLevel} alt="GoHighLevel" />
            <img src={logoSalesforce} alt="Salesforce" />
            <img src={logoHubspot} alt="HubSpot" />
          </div>

          <svg className="gov-crm-svg" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
            <path d="M150 70 V250 Q150 280 180 280 H460 Q490 280 490 310 V350" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".55" />
            <path d="M500 70 V350" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".55" />
            <path d="M850 70 V250 Q850 280 820 280 H540 Q510 280 510 310 V350" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".55" />
            <path d="M500 350 V420" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".3" />
            <circle cx="150" cy="250" r="5" fill={LINE} />
            <circle cx="500" cy="230" r="5" fill={LINE} />
            <circle cx="850" cy="250" r="5" fill={LINE} />
          </svg>

          <div className="gov-crm-vbox"><VLogo size={30} /></div>
        </div>
      </div>
    </section>
  );
}
