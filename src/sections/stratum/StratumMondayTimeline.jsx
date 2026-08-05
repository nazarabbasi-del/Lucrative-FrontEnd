import React from 'react';
import personaFlower from '../../assets/persona-flower.png';

const times = ['9:00', '9:30', '11:00', '2:00', '5:00'];

const oldWay = [
  '&ldquo;Why did pipeline dip?&rdquo; &mdash; files a ticket with RevOps. Position in queue: 7.',
  'Standup. Reads last week&rsquo;s dashboard aloud. Nobody knows the why.',
  'Exports 4 CSVs to hand-stitch attribution in a spreadsheet. Last-touch, again.',
  'Budget meeting. Gut-feel debate. Loudest voice wins.',
  'Ticket status: still in queue. Answer expected in 2&ndash;3 weeks.',
];

const stratumWay = [
  'Asks Stratum the same question. Answer in 1.8s &mdash; pricing objections in mid-market, NYC field paused.',
  'Standup. Walks in with the cause and a ranked fix list from the weekly brief.',
  'Compares Markov vs. Shapley in one click. Founder Story leads on both.',
  'Budget meeting. Shows the holdout test: +18% lift, 95% confidence. Decision takes four minutes.',
  'Budget already shifted. Retest scheduled. Logs off.',
];

export default function StratumMondayTimeline() {
  return (
    <section className="section section--grey section--tight">
      <div className="container">

        <h2
          className="section-title reveal"
          style={{ textAlign: 'center' }}
        >
          Two ways to run a Monday.
        </h2>

        <p
          className="section-sub reveal"
          style={{ textAlign: 'center' }}
        >
          You&rsquo;re already doing one of them. The other is Stratum.
        </p>

        <div className="strat-timeline-wrap reveal">

          {/* HEADERS */}
          <div className="strat-timeline-header left">
            <p className="strat-timeline-eyebrow">
              The old way
            </p>

            <h3 className="strat-timeline-heading">
              Dashboards &amp; tickets
            </h3>
          </div>

          <div className="strat-timeline-header-center" />

          <div className="strat-timeline-header right">
            <p className="strat-timeline-eyebrow">
              The Stratum way
            </p>

            <h3 className="strat-timeline-heading">
              Ask, understand, prove
            </h3>
          </div>


          {/* TIMELINE ROWS */}
          {oldWay.map((t, i) => (
            <React.Fragment key={i}>

              {/* OLD WAY */}
              <div
                className="strat-timeline-card"
                style={{ textAlign: 'right' }}
                dangerouslySetInnerHTML={{ __html: t }}
              />

              {/* TIME */}
              <div className="strat-timeline-time">
                <span className="strat-timeline-dot">
                  {times[i]}
                </span>
              </div>

              {/* STRATUM WAY */}
              <div
                className="strat-timeline-card dark"
                dangerouslySetInnerHTML={{
                  __html: stratumWay[i]
                }}
              />

            </React.Fragment>
          ))}

        </div>


        {/* FOOTER */}
        <div className="strat-timeline-foot">
          <span className="strat-footer-pending">
            Answer: pending
          </span>

          <img
            src={personaFlower}
            alt=""
            className="strat-footer-flower"
          />

          <span className="strat-footer-win">
            Answered, proven, shipped &mdash; same Monday
          </span>
        </div>

      </div>
    </section>
  );
}