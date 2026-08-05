import React from 'react';
import useCountUp from '../../../hooks/useCountUp.js';

function formatNumber(n, { decimals = 0, comma = false } = {}) {
  const fixed = decimals > 0 ? n.toFixed(decimals) : String(Math.round(n));
  if (!comma) return fixed;
  const [int, frac] = fixed.split('.');
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return frac ? `${withCommas}.${frac}` : withCommas;
}

export default function CountUp({ to, duration = 1200, decimals = 0, comma = false, prefix = '', suffix = '', delay = 0, as: Tag = 'span', className, style }) {
  const [ref, value] = useCountUp(to, { duration, decimals, delay });
  return (
    <Tag ref={ref} className={className} style={style}>
      {prefix}
      {formatNumber(value, { decimals, comma })}
      {suffix}
    </Tag>
  );
}