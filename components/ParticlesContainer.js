import { Particles } from 'react-tsparticles';
import React from 'react';
import particlesConfig from './particles-config';
import { DiVim } from 'react-icons/di';

const ParticlesContainer = () => {
    return (
        <div>
            <Particles params={particlesConfig}>
            </Particles>
        </div>

    )
}

export default ParticlesContainer