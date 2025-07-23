import { useState, useEffect } from "react";

interface CountUpProps {
  counting: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ counting, duration = 900 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (counting - start) + start));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [counting, duration]);

  return <span>{count}</span>;
};

export default CountUp;
