import { useState, useEffect } from "react";

function useThrottle(value: unknown, limit = 2000) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, limit);

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}
