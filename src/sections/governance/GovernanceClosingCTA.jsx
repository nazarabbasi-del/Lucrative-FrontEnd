import React from 'react';
import mascotFlower from '../../assets/mascot-flower-laptop.png';
import padlock from '../../assets/icon-padlock.png';
import foldersWave from '../../assets/deco-folders-wave.png';
import groundBlob from '../../assets/deco-vector-blob.png';

export default function GovernanceClosingCTA() {
  return (
    <section className="section--tight gov-closing">
      <div className="container">
        <div className="closing-cta reveal">
          {/* deco-folders-wave carries the folder stack, the blue wave AND its
              own sparkles, so the standalone deco-sparkles is not used here —
              it would double them up. The mascot is the only in-flow image;
              the other two are positioned against it. */}
          <div className="gov-closing-art">
            <img src={groundBlob} alt="" className="gov-closing-blob" />
            <img src={foldersWave} alt="" className="gov-closing-folders" />
            <img src={padlock} alt="" className="gov-closing-lock" />
            <img src={mascotFlower} alt="" className="gov-closing-mascot floaty" />
          </div>
          <div>
            <h2 className="hero-heading">Run your first audit in the time it takes to read your last one.</h2>
            <p style={{ marginTop: 14, color: 'var(--text-600)', fontSize: 16 }}>Five minutes. Full report. Every issue priced. Every fix reversible.</p>
            <div className="btns">
              <a href="#audit" className="btn btn-primary">Start free audit</a>
              <a href="#demo" className="btn btn-outline">Book a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
