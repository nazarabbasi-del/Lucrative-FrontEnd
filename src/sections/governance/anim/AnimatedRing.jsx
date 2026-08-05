import React from 'react';
import useCountUp from '../../../hooks/useCountUp.js';

export default function AnimatedRing({ to, duration = 1200, delay = 0, suffix = '%', caption }) {
  const [ref, value] = useCountUp(to, { duration, delay });
  return (
    <div ref={ref} className="gov-ring" style={{ '--pct': value }}>
      <span className="gov-ring-pct">{Math.round(value)}{suffix}</span>
      {caption && <span className="gov-ring-caption">{caption}</span>}
    </div>
  );
}