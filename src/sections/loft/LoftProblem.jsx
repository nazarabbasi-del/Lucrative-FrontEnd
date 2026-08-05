import React from 'react';

const problems = [
  { tag: 'costs compound', color: 'var(--red-500)', title: 'Increasing cost', desc: 'Every seat, every feature, every report tier costs more. Growth becomes a billing event.' },
  { tag: 'hours lost weekly', color: 'var(--gold-500)', title: 'Manual work', desc: 'Reps spend hours updating fields and logging activity instead of selling.' },
  { tag: 'no single truth', color: 'var(--blue-500)', title: 'Disconnected data', desc: 'The customer story scatters across tools, tabs, and inboxes &mdash; no one sees all of it.' },
  { tag: 'just another tab', color: 'var(--teal-500)', title: 'AI that doesn&rsquo;t help', desc: 'A chatbot bolted onto the sidebar isn&rsquo;t intelligence. It&rsquo;s another tab to ignore.' },
  { tag: 'what, never why', color: 'var(--text-600)', title: 'Reports without answers', desc: 'Numbers on dashboards, but never the why &mdash; or what to do about it.' },
  { tag: 'insights unused', color: 'var(--blue-500)', title: 'AI indecision', desc: 'Insights pile up in reports that never become action anywhere it matters.' },
];

export default function LoftProblem() {
  return (
    <section className="section section--grey">
      <div className="container">
        <div className="loft-problem-head reveal">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Businesses Outgrow<br />Traditional CRMs</h2>
            <p className="section-sub" style={{ textAlign: 'left', margin: '14px 0 0' }}>
              Growing companies eventually face the same challenges.<br />The more successful they become; the more expensive their CRM becomes.
            </p>
          </div>
          <div className="loft-problem-note">
            <p>Instead of enabling growth, many CRMs begin charging a premium for it. Loft was built to change that.</p>
            <a href="#how-it-works" className="btn btn-primary">Learn More</a>
          </div>
        </div>

        <div className="loft-problem-grid reveal">
          {problems.map((p) => (
            <div className="loft-problem-card" key={p.title}>
              <span className="tag-pill" style={{ color: p.color }}>{p.tag}</span>
              <h4 dangerouslySetInnerHTML={{ __html: p.title }} />
              <p dangerouslySetInnerHTML={{ __html: p.desc }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}