// client/src/hooks/useScrollAnimation.js

import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation - Custom hook to detect if an element is visible in viewport
 * @param {Object} options - IntersectionObserver options
 * @returns [ref, isVisible]
 */
const useScrollAnimation = (options = { threshold: 0.2, rootMargin: '0px' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerInstance.unobserve(entry.target); // One-time animation
        }
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};

export default useScrollAnimation;
