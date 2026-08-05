import React from 'react';
// Same dashboard screenshot already used on the Loft for Marketing hero —
// your screenshots show the identical graphic here, so it's reused rather
// than duplicated.
import dashboardLoftMarketing from '../../assets/dashboard-loft-marketing.png';

export default function QuotebaseHero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="reveal">
          <p className="eyebroww">Quotebase for Contracting</p>
          <h1>
            Generate sales quotes in seconds with <span className="text-blue">Quotebase</span>
          </h1>
          <p style={{ fontSize: 22, fontWeight: 500, color: 'var(--text-900)', marginTop: 8 }}>
            With numbers your AI cannot invent.
          </p>
          <p className="lead">
            Turn every Salesforce opportunity into a complete, priced, policy-checked quotation automatically. Quotebase combines an AI agent with deterministic pricing, policy enforcement, and Salesforce integration to produce quotes that are fast to create and safe to send.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn btn-primary">Request Demo</a>
            <a href="#walkthrough" className="btn btn-outline">Watch Product Walkthrough</a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <img src={dashboardLoftMarketing} alt="Quotebase dashboard" className="floaty" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
        </div>
      </div>
    </section>
  );
}