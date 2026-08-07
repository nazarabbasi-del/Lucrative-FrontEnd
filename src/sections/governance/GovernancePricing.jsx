import React from 'react';
import { IconCheck } from '../../icons.jsx';
import CountUp from './anim/CountUp.jsx';
import pricingMascot from '../../assets/deco-pricing-mascot.png';

const points = [
  'Same price for HubSpot, Salesforce, or GoHighLevel',
  'Credits don’t expire',
  'No subscription, no seat fees',
  'Run one this quarter, one a week during a migration, or one before your next AI deployment',
];

export default function GovernancePricing() {
  return (
    <section className="section section--tight gov-pricing">
      <div className="container">
        <div className="gov-pricing-card reveal">
          <div className="gov-pricing-panel">
            <h2 className="closing-cta-h2">Pay for the audits you run. Nothing else.</h2>
            <p style={{ color: 'var(--text-600)', fontSize: 17, marginTop: 12, lineHeight: 1.7 }}>
              Credits don&rsquo;t expire. No subscription. No seat fees. No &ldquo;call for pricing&rdquo; tier that means you can&rsquo;t afford it.
            </p>
            <div className="gov-pricing-number"><CountUp to={100} className="gov-pricing-number-value" /><span>credits per full audit</span></div>
            <ul className="gov-pricing-list">
              {points.map((pt) => (
                <li key={pt}><IconCheck />{pt}</li>
              ))}
            </ul>
            <div className="hero-ctas" style={{ marginTop: 26 }}>
              <a href="#audit" className="btn btn-primary">Start free audit</a>
              <a href="#demo" className="btn btn-outline">Book a Demo</a>
            </div>
          </div>
          <img src={pricingMascot} alt="" className="gov-pricing-mascot floaty" />
        </div>
      </div>
    </section>
  );
}
