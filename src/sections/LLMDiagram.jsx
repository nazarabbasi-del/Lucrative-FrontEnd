import React from 'react';
import { VLogo } from '../icons.jsx';

const ClaudeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <g fill="#D97757">
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={i}
          d="M12 12 L10.6 3.2 Q12 1.4 13.4 3.2 Z"
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
    </g>
  </svg>
);
const OpenAIIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#10A37F" /><path d="M8 12a4 4 0 118 0 4 4 0 01-8 0z" stroke="#fff" strokeWidth="1.4" /></svg>
);

const suite = [
  { name: 'Lucrative Sales', n: 14, color: '#E8A63D', y: 65 },
  { name: 'Lucrative Marketing', n: 14, color: '#4A8FD6', y: 105 },
  { name: 'Lucrative Analytics', n: 8, color: '#1FB6A6', y: 145 },
  { name: 'Lucrative Quote', n: 6, color: '#E8615A', y: 185 },
  { name: 'Lucrative Governance', n: 5, color: '#4A8FD6', y: 225 },
];

export default function LLMDiagram() {
  return (
    <section className="section section--navy">
      <div className="container">
        <h2 className="section-title reveal">Completely Headless</h2>
        <p className="section-sub reveal" style={{ color: '#B9C7D9' }}>
          Run your Sales, Marketing &amp; all other RevOps from your favorite AI Claude and ChatGPT
        </p>

        <div className="llm-diagram reveal">
          <div className="llm-row">
            <div className="llm-card">
              <div className="tag"><span className="dot" />YOUR MODEL</div>
              <div className="llm-model-row"><span className="l"><ClaudeIcon />Claude Sonnet</span><span className="status active">Active</span></div>
              <div className="llm-model-row"><span className="l"><OpenAIIcon />OpenAI GPT-5</span><span className="status ready">Ready</span></div>
              <p className="foot">YOUR KEY · TOKENS BILLED TO YOU</p>
            </div>

            <span className="llm-flow-label" style={{ left: '40%',  top: '38%' }}>CONTEXT →</span>
            {/* Mobile-only stand-in for the CONTEXT flow: the SVG paths below
                are coordinate-locked to the horizontal desktop layout, so on
                a stacked mobile column we swap them for simple vertical
                connectors with their own flowing dot (see .llm-connector in
                styles.css, scoped to the same max-width:900px breakpoint). */}
            <div className="llm-connector llm-connector--context" aria-hidden="true"><span className="llm-connector-dot" /></div>

            <div className="llm-bridge-col">
              <div className="llm-bridge"><VLogo size={40} /></div>
              <div className="llm-bridge-label"><b>Lucrative Bridge</b><span>MCP · REST · SDK</span></div>
            </div>

            <span className="llm-flow-label" style={{ left: '58%', top: '38%' }}>ACTION →</span>
            <div className="llm-connector llm-connector--action" aria-hidden="true"><span className="llm-connector-dot" /></div>

            <div className="llm-card">
              <div className="tag"><span className="dot" />LUCRATIVE SUITE</div>
              {suite.map((s) => (
                <div className="llm-suite-row" key={s.name}>{s.name}<span>{s.n}</span></div>
              ))}
              <p className="foot">33 TOOLS EXPOSED</p>
            </div>

            <svg className="llm-svg" viewBox="0 0 1180 300" preserveAspectRatio="none">
              <path id="p-in" className="llm-path" d="M270,145 C400,145 470,145 542,145" stroke="#E8A63D" strokeOpacity="0.4" strokeDasharray="2 8" />
              {suite.map((s) => (
                <path
                  key={s.name}
                  id={`p-${s.name}`}
                  className="llm-path"
                  d={`M638,145 C740,145 800,${s.y} 910,${s.y}`}
                  stroke={s.color}
                  strokeOpacity="0.35"
                />
              ))}

              <circle r="4" fill="#E8A63D" className="llm-glow-dot" style={{ color: '#E8A63D' }}>
                <animateMotion dur="2.6s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#p-in" />
                </animateMotion>
              </circle>
              {suite.map((s, i) => (
                <circle key={s.name} r="4" fill={s.color} className="llm-glow-dot" style={{ color: s.color }}>
                  <animateMotion dur="3.2s" begin={`${i * 0.5 + 0.4}s`} repeatCount="indefinite">
                    <mpath href={`#p-${s.name}`} />
                  </animateMotion>
                </circle>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}