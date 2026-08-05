import React from 'react';
import { IconSend } from '../../icons.jsx';
import mascotBench from '../../assets/mascot-cloud-bench.png';

const problems = [
  'Every report requires someone technical.',
  'Our dashboards show numbers—but not why.',
  'We still don&rsquo;t know which channels deserve credit.',
  'We&rsquo;re making decisions based on correlation.',
  'Hiring a data team isn&rsquo;t realistic.',
];

export default function StratumProblem() {
  return (
    <section className="section section--grey section--tight">
      <div className="container">
        <div className="strat-problem-layout">
          <div className="reveal">
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(44px,3vw,38px)', fontWeight: 500 }}>Every marketing team eventually runs into the same problems</h2>
            <p className="section-sub" style={{ textAlign: 'left', margin: '14px 0 0' }}>
              Your company has more data than ever before.<br />Getting useful answers has never been harder.
            </p>

            <div className="strat-problem-list" style={{ marginTop: 28 }}>
              <p className="lead">Our data is everywhere.</p>
              {problems.map((p) => (
                <p key={p} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <div className="strat-mascot-wrap">
              <img src={mascotBench} alt="" className="floaty" style={{ maxWidth: 240 }} />
            </div>
          </div>

          <div className="chat-window reveal">
            <div className="chat-head">
              <div className="ic">S</div>
              <div><b>Stratum</b><span>Edit this execution plan with natural language</span></div>
            </div>
            <div className="chat-body">
              <div className="chat-bubble-user">
                Compare my Google Ads spend last month against the actual closed-won revenue in HubSpot for those same campaigns. Which campaign had the highest actual ROI?
              </div>
              <div className="chat-reply">
                <span className="tagline">Stratum Connected: HubSpot + Google Ads</span>
                <div>Cross-Platform Performance Analysis (Last Month):</div>
                <div style={{ marginTop: 6 }}>
                  &bull; Total Google Ads Spend: $42,500<br />
                  &bull; HubSpot Closed-Won Revenue: $188,000<br />
                  &bull; Overall Blended ROI: 4.42x
                </div>
                <div style={{ marginTop: 8, fontWeight: 700 }}>Top Performing Campaign:</div>
                <div>&ldquo;Q2 Enterprise Search - Competitor Alt&rdquo; &middot; Google Ads Spend: $8,200 (24,100 Clicks) &middot; HubSpot Deals Created: 18 SQLs &middot; HubSpot Closed-Won: $56,000 (3 Deals) &middot; Campaign ROI: 6.83x</div>
              </div>
            </div>
            <div className="chat-input">Ask me anything <IconSend style={{ marginLeft: 'auto', color: 'var(--teal-600)' }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}