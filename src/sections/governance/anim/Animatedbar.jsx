import React from 'react';
import useCountUp from '../../../hooks/useCountUp.js';

/**
 * A .gov-bar-fill that grows from 0% to `to` (a percentage, 0-100) once it
 * scrolls into view, instead of just appearing at its final width.
 */
export default function AnimatedBar({ to, className = '', duration = 1200, delay = 0, style }) {
  const [ref, value] = useCountUp(to, { duration, delay });
  return <div ref={ref} className={`gov-bar-fill ${className}`.trim()} style={{ width: `${value}%`, ...style }} />;
}