import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedBackgroundWithAnimeJS: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      anime({
        targets: animationRef.current.querySelectorAll('.shape'),
        translateY: [
          { value: 200, duration: 5000 },
          { value: 0, duration: 5000 }
        ],
        translateX: [
          { value: anime.random(-100, 100), duration: 5000, delay: anime.stagger(100) },
          { value: anime.random(-100, 100), duration: 5000, delay: anime.stagger(100) }
        ],
        easing: 'easeInOutSine',
        loop: true,
        delay: anime.stagger(200, { start: 1000 }),
        autoplay: true
      });
    }
  }, []);

  return (
    <div ref={animationRef} className="fixed top-0 left-0 w-full h-full z-[-1]">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="shape bg-white p-4 rounded-full shadow-lg absolute" style={{ top: `${anime.random(0, 100)}%`, left: `${anime.random(0, 100)}%` }}>
        {/* Additional content */}
      </div>
    ))}
  </div>
  );
};

export default AnimatedBackgroundWithAnimeJS;