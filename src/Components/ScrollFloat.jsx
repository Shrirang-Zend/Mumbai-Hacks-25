import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  fadeDelay = 0.25
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
  const el = containerRef.current;
  if (!el) return;

  const scroller =
    scrollContainerRef && scrollContainerRef.current
      ? scrollContainerRef.current
      : window;

  const chars = el.querySelectorAll('.char');

  // 1) Start fully hidden
  gsap.set(chars, { opacity: 0 });

  // 2) Simple fade-in after a small delay (not scrubbed)
  const fadeTl = gsap.to(chars, {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.01,
    delay: 0.3, // real wait after the section comes into view
    scrollTrigger: {
      trigger: el,
      scroller,
      start: scrollStart,
      toggleActions: 'play none none reverse'
    }
  });

  // 3) Gentle float tied to scroll
  const floatTl = gsap.fromTo(
    chars,
    {
      yPercent: 30,
      scaleY: 1.05,
      scaleX: 0.97,
      transformOrigin: '50% 100%'
    },
    {
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      ease,
      duration: animationDuration,
      stagger,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        scrub: 1.2
      }
    }
  );

  return () => {
    fadeTl.kill();
    floatTl.kill();
  };
}, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);


  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
