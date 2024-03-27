import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedBackgroundWithAnimeJS: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      anime({
        targets: animationRef.current.querySelectorAll('.line'),
        translateY: {
          value: () => anime.random(-400, 400), // More range for movement
          duration: 3000, // Quicker movement
        },
        translateX: {
          value: () => anime.random(-400, 400), // More range for movement
          duration: 3000, // Quicker movement
        },
        scale: [
          { value: anime.random(0.5, 1.5), duration: 1500 }, // Quicker and more varied scaling
          { value: 1, duration: 1500 }
        ],
        rotate: {
          value: () => anime.random(0, 360), // Continuous rotation in different directions
          duration: 2500,
        },
        easing: 'easeInOutSine',
        loop: true,
        delay: anime.stagger(50, { start: 250 }), // Faster staggering
        autoplay: true
      });
    }
  }, []);

  return (
    <div ref={animationRef} className="fixed top-0 left-0 w-full h-full z-[-1]">
      {[...Array(100)].map((_, i) => (
        <div key={i} className="line bg-white shadow-lg absolute" style={{
          top: `${anime.random(0, 100)}%`, 
          left: `${anime.random(0, 100)}%`,
          height: `2px`, // Line thickness
          width: `${anime.random(50, 200)}px`, // Line length
          opacity: 0.5, // Less opaque
        }}>
          {/* Additional content */}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackgroundWithAnimeJS;

