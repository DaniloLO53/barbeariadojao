/* eslint-disable @next/next/no-sync-scripts */
'use client';

import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';

interface FramerMotionProps {
  children: React.ReactNode;
  className: string;
}

export function FramerMotion({
  children,
  className,
}: FramerMotionProps): React.JSX.Element {
  // const control = useAnimation();
  // const { ref, inView } = useInView();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [xPosition, setXPosition] = React.useState<number | null>(
    window.scrollY
  );

  // const frameVariant = {
  //   visible: { transition: { duration: 0.5 }, x: 0 },
  //   hidden: { x: 300 },
  // };

  // React.useEffect(() => {
  //   console.log('offsetTop', elementRef.current?.offsetTop);
  //   console.log('offsetLeft', elementRef.current?.offsetLeft);

  //   setOffsetTop(elementRef.current?.offsetTop);

  // }, [elementRef.current]);

  const scrollHandler = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const WINDOW_WIDTH = window.innerWidth;
      const WINDOW_HEIGHT = window.innerHeight;

      const topPositionYToStartMoving = (-1 * rect.height) / 2;
      const bottomPositionYToStartMoving = WINDOW_HEIGHT + rect.height / 2;
      const rectCenterYPosition = rect.top + rect.height / 2;

      const totalY = WINDOW_HEIGHT + rect.height;
      const movedY = rectCenterYPosition - topPositionYToStartMoving;

      if (
        movedY > 0 &&
        rectCenterYPosition < bottomPositionYToStartMoving
      ) {
        const completed = movedY / totalY;
        const moveXTo = (rect.width / 2) * (Math.sin(Math.PI * completed) - 1);
        console.log('moveXTo', moveXTo);
        setXPosition(moveXTo);
      }

      // const topOfElementIsShowing =
      //   WINDOW_HEIGHT - rect.top > 0 && rect.top > 0;
      // const buttomOfElementIsShowing =
      //   WINDOW_HEIGHT - rect.bottom > 0 && rect.bottom > 0;

      // console.log('WINDOW_HEIGHT - rect.top', WINDOW_HEIGHT - rect.top - rect.height / 2);
      // console.log('WINDOW_HEIGHT', WINDOW_HEIGHT);
      // console.log('C.M', rect.top + rect.height / 2);
      // console.log('buttomOfElementIsShowing', buttomOfElementIsShowing);
    }
  };

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // console.log('inView', inView);

    if (true) {
      window.addEventListener('scroll', scrollHandler, { signal });
    } else {
    }

    return () => {
      console.log('Cleaning...');
      controller.abort();
    };
  }, []);

  return (
    <div
      ref={(e) => {
        ref.current = e;
      }}
      // initial={'hidden'}
      // animate={control}
      // variants={frameVariant}
      className={`box ${className}`}
      style={{ right: `${xPosition}px` }}
    >
      {children}
    </div>
  );
}
