import { useEffect, useRef, useState } from 'react';

export const useIsSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: '-3px 0px 0px 0px',
      },
    );

    observer.observe(cachedRef);

    // unmount
    return () => {
      observer.unobserve(cachedRef);
    };
  }, []);

  return [isSticky, ref];
};
