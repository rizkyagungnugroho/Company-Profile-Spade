"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  target: number;
  duration?: number; // ms
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2000,
  className,
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const start = 0;
    const end = target;
    const increment = end / (duration / 16); // roughly 60fps
    let current = start;

    const step = () => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    step();
  }, [inView, target, duration]);

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString("id-ID")}
    </div>
  );
};

export default AnimatedCounter;
