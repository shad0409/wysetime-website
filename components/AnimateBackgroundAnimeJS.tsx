import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedBackgroundWithAnimeJS: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      anime({
        targets: animationRef.current.querySelectorAll('.shape'),
        translateY: [
          { value: 200, duration: 2500 }, // Reduced duration for faster movement
          { value: 0, duration: 2500 }
        ],
        translateX: [
          {
            value: anime.random(-150, 150),
            duration: 2500, // Reduced duration for faster movement
            delay: anime.stagger(50)
          },
          {
            value: anime.random(-150, 150),
            duration: 2500, // Reduced duration for faster movement
            delay: anime.stagger(50)
          }
        ],
        easing: 'easeInOutSine',
        loop: true,
        delay: anime.stagger(50, { start: 500 }), // Reduced start delay
        autoplay: true
      });
    }
  }, []);

  return (
    <div ref={animationRef} className="fixed top-0 left-0 w-full h-full z-[-1]">
    {[...Array(100)].map((_, i) => ( // Increase the number of shapes
      <div key={i} className="shape bg-white p-2 rounded-full shadow-lg absolute" style={{ top: `${anime.random(0, 100)}%`, left: `${anime.random(0, 100)}%` }}> {/* Make circles smaller */}
        {/* Additional content */}
      </div>
    ))}
  </div>
  );
};

export default AnimatedBackgroundWithAnimeJS;
