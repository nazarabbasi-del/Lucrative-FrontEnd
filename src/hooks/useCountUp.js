import { useEffect, useRef, useState } from 'react';

export default function useCountUp(target, { duration = 1200, decimals = 0, delay = 0 } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  const targetRef = useRef(target);
  targetRef.current = target;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(targetRef.current);
      return undefined;
    }

    let rafId = null;
    let timeoutId = null;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          io.disconnect();

          const run = () => {
            const start = performance.now();
            const from = 0;
            const to = targetRef.current;
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(from + (to - from) * eased);
              if (p < 1) {
                rafId = requestAnimationFrame(tick);
              } else {
                setValue(to);
              }
            };
            rafId = requestAnimationFrame(tick);
          };

          if (delay > 0) timeoutId = setTimeout(run, delay);
          else run();
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [duration, delay]);

  const rounded = decimals > 0 ? Number(value.toFixed(decimals)) : Math.round(value);
  return [ref, rounded];
}