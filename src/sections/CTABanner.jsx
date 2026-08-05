import React from 'react';
import { IconCheck } from '../icons.jsx';

const items = [
  'Every module deployable independently or as one suite',
  'Flexible plans for every team size',
  'Bring your own Claude or OpenAI keys',
  'Assisted migration from your current stack',
];

export default function CTABanner() {
  return (
    <section className="add-on section section--navy" id="pricing">
      <div className="container">
        <div className="cta-banner-grid">
          <div className="reveal">
            <h2>Start with one product.<br />Grow into the complete platform.</h2>
            <p>Whether you need an AI CRM, governance, business intelligence, or intelligent quoting — Lucrative Suite grows with your business.</p>
            <div className="btns">
              <a href="#demo" className="btn btn-white">Book a Demo</a>
              <a href="#pricing-detail" className="btn btn-outline-light">See Pricing</a>
            </div>
          </div>
          <div className="cta-check-list reveal">
            {items.map((it) => (
              <div className="cta-check-item" key={it}>
                <span className="ic"><IconCheck /></span>{it}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
