import React from 'react';
import { VLogo } from '../../icons.jsx';
import logoHighLevel from '../../assets/logo-highlevel.png';
import logoSalesforce from '../../assets/logo-salesforce-full.png';
import logoHubspot from '../../assets/logo-hubspot-full.png';

const LINE = '#1D3A57';
const DOT = '#175FA4';

export default function MultiCRMDiagram() {
  return (
    <section className="section--grey section--tight">
      <div className="container">
        <h2 className="section-title reveal">One tool. Every CRM<br />your revenue runs on.</h2>
        <p className="section-sub reveal">Most audit tools are single-vendor. If you run more than one CRM — or you&rsquo;re mid-migration — you either buy two tools or wait. Not anymore.</p>

        <div className="gov-crm-diagram reveal">
          <div className="gov-crm-logos">
            <img src={logoHighLevel} alt="GoHighLevel" />
            {/* The Salesforce cloud is close to square, so a uniform height
                leaves it reading far smaller than the two wordmarks — the
                design sizes it up to compensate. */}
            <img src={logoSalesforce} alt="Salesforce" className="gov-crm-logo--cloud" />
            <img src={logoHubspot} alt="HubSpot" />
          </div>

          {/* preserveAspectRatio="none" stretches this viewBox onto the
              container, so every coordinate below is tuned against the
              container's 600px height (factor 600/420 = 1.43): branches start
              at 95 (=136px, clear of the 128px cloud logo) and stop at 264
              (=377px, just above the V box, which spans 380–500px). The tail
              resumes at 350 (=500px) below the box. */}
          <svg className="gov-crm-svg" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
            <path d="M150 95 V190 Q150 220 180 220 H460 Q490 220 490 245 V264" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" opacity=".55" />
            <path d="M500 95 V264" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" opacity=".55" />
            <path d="M850 95 V190 Q850 220 820 220 H540 Q510 220 510 245 V264" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" opacity=".55" />
            <path d="M500 350 V413" fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round" opacity=".3" />
            <circle cx="320" cy="220" r="5" fill={DOT} />
            <circle cx="500" cy="160" r="5" fill={DOT} />
            <circle cx="680" cy="220" r="5" fill={DOT} />
          </svg>

          <div className="gov-crm-vbox"><VLogo size={56} /></div>
        </div>
      </div>
    </section>
  );
}
