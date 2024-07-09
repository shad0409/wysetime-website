import React from 'react';
import Image from 'next/image';
import securityImage from '../../public/privacy.gif';
import { useInView } from 'react-intersection-observer';

const SecuritySection: React.FC = () => {
    const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="security-section">
            <div className="security-content">
                <h2 className="security-title">
                    Privacy & Security
                </h2>
                <h1>Alignment with global standards</h1>
                <p>
                    Our operations comply with international security and privacy protocols, avoiding the collection of personal data. We perform yearly audits of our policies, systems, and procedures to maintain their relevance and accuracy.
                </p>
            </div>
            <div className="security-image-container">
                <Image src={securityImage} alt="Security" className="security-image" layout="fill" objectFit="cover" objectPosition="center" />
            </div>
        </section>
    );
}

export default SecuritySection;
