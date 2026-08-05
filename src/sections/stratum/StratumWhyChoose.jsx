import React from 'react';
import tagCloud from '../../assets/deco-tag-cloud.png';

export default function StratumWhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <div className="strat-why-wrap reveal">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(30px,3vw,36px)' }}>Why companies<br />choose Stratum.</h2>
            <p className="section-sub" style={{ textAlign: 'left', margin: '14px 0 26px' }}>
              Ten reasons, no asterisks. If your team has questions and your data has answers, this is the shortest path between the two.
            </p>
            <div className="hero-ctas">
              <a href="#audit" className="btn btn-primary">Start free audit</a>
              <a href="#video" className="btn btn-outline">Watch the video</a>
            </div>
          </div>
          <div className="strat-why-cloud">
            <img src={tagCloud} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}