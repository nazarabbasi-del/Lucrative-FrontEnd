import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid hero-grid--solo">
        <div className="reveal">
          <p className="eyebrow">Start your business growth with world's 1st uniquely</p>
          <h1>
            AI Native Built <span className="text-blue">CRM &amp; Marketing Automation System</span>
          </h1>
          <div className="hero-ctas">
            <a href="/pricing#configurator" className="btn btn-primary">Signup Now</a>
            <a href="/contact" className="btn btn-outline">Watch Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
