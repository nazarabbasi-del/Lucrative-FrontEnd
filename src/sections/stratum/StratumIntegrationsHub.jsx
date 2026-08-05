import React from 'react';
import integrationsHub from '../../assets/deco-integrations-hub.png';

export default function StratumIntegrationsHub() {
  return (
    <section className="section section--navy section--tight">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Two ways to run a Monday.</h2>
        <p className="section-sub reveal" style={{ textAlign: 'center', color: 'rgba(255,255,255,.7)' }}>You&rsquo;re already doing one of them. The other is Stratum.</p>

        <div className="strat-hub-wrap reveal">
          <img src={integrationsHub} alt="Stratum connects HubSpot, Meta, Salesforce, Google Analytics, LinkedIn, and Google Ads" />
        </div>
      </div>
    </section>
  );
}