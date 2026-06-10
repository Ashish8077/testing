import React, { useCallback, useEffect, useState } from 'react'
import { SLIDES } from '../../data/homepage'
import BackgroundRings from './BackgroundRings'
import HeroContent from './HeroContent'
import SlideCounter from './SlideCounter'
import BottomStrip from './BottomStrip'
import DecorativeShapes from './DecorativeShapes'

import { AUTOPLAY_DELAY } from '../../constants/homepage'

const HeroSlider = () => {

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const [highest, setHighest] = useState(0);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      const next = (index + SLIDES.length) % SLIDES.length;
      setAnimating(true);
      setCurrent(next);
      setHighest((h) => Math.max(h, next));
      setTimeout(() => setAnimating(false), 500);
    },
    [animating],
  );

  const goPrev = () => goTo(current - 1);
  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

  /* Auto-play — only pauses when mouse is over the strip */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [goNext, paused]);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  const slide = SLIDES[current];
  return (
      <section className="relative h-[calc(100vh-88px)] min-h-[500px] overflow-hidden bg-gradient-to-b from-[#f3f4f8] to-[#c7eef0] flex flex-col">
          <BackgroundRings />
          <DecorativeShapes current={current} slide={SLIDES} />
          <SlideCounter current={current} slide={SLIDES} />
          <HeroContent slide={slide} />
          <BottomStrip
            current={current}
            goTo={goTo}
            setPaused={setPaused}
            paused={paused}
            highest={highest}
            AUTOPLAY_DELAY={AUTOPLAY_DELAY}
            SLIDES={SLIDES}
            goNext={goNext}
            goPrev={goPrev}
          />

      </section>
  )
}

export default HeroSlider