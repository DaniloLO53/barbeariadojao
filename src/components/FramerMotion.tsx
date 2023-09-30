/* eslint-disable @next/next/no-sync-scripts */
'use client';

import * as React from 'react';

interface FramerMotionProps {
  children: React.ReactNode;
  className: string;
}

export function FramerMotion({
  children,
  className,
}: FramerMotionProps): React.JSX.Element {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [xPosition, setXPosition] = React.useState<number | null>(0);

  const scrollHandler = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const totalY = window.innerHeight + rect.height;
      const movedY = rect.top + rect.height;

      if (movedY > 0 && rect.top - window.innerHeight < 0) {
        const completed = movedY / totalY;
        const moveXTo = (rect.width / 2) * (Math.sin(Math.PI * completed) - 1);
        setXPosition(moveXTo);
      }
    }
  };

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    window.addEventListener('scroll', scrollHandler, { signal });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div
      ref={(e) => { ref.current = e }}
      className={`${className}`}
      style={{ right: `${xPosition}px` }}
    >
      {children}
    </div>
  );
}
