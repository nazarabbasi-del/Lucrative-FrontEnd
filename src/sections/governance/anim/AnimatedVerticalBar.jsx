import React from 'react';
import useCountUp from '../../../hooks/useCountUp.js';

/**
 * Same idea as AnimatedBar, but grows a bar's *height* (0 -> to%) instead of
 * its width — for vertical bar charts like PowerHouse's Q4 Pipeline card.
 */
export default function AnimatedVerticalBar({ to, className = '', style = {}, duration = 1200, delay = 0 }) {
  const [ref, value] = useCountUp(to, { duration, delay });
  return <div ref={ref} className={className} style={{ ...style, height: `${value}%` }} />;
}