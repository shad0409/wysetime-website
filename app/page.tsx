'use client'
import {getProjects} from '@/sanity/sanity-utils'
import { Image } from 'next-sanity/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {

  return (
    <div>
      <Parallax pages={5} className="animation">
        {/* Page 1 */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>

        {/* Page 2 */}
        <ParallaxLayer offset={1} speed={0.5}>
          <h1 className='text-black text-7xl font-extrabold'>WyseTime</h1>
        </ParallaxLayer>

        {/* Page 3 */}
        <ParallaxLayer offset={2} speed={0.5}>
          <h1 className='text-black text-7xl font-extrabold'>Technologies</h1>
        </ParallaxLayer>

        {/* Page 4 */}
        <ParallaxLayer offset={3} speed={0.5}>
          <h1 className='text-black text-7xl font-extrabold'>Test</h1>
        </ParallaxLayer>

        {/* Page 5 */}
        <ParallaxLayer offset={4} speed={0.5}>
          <h1 className='text-black'>Test</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}