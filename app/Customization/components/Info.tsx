import React from 'react';
import Image from 'next/image';
import customizationImage from '../../../public/customization.png'; // Adjust the path if necessary

const Custom: React.FC = () => {
    return (
        <section className="customization-section">
            <div className="customization-content">
                <h2 className="customization-title">
                    Customization
                </h2>
                <h1>Tailored AI & Computer Vision Technologies</h1>
                <p>
                Our specialized AI and computer vision technologies are designed to meet the unique needs of multiple sectors. We enabled companies in healthcare, manufacturing, logistics, waste management, and retail to leverage the transformative capabilities of AI and computer vision.                </p>
            </div>
            <div className="customization-image-container">
                <Image src={customizationImage} alt="customization" className="customization-image" layout="responsive" objectFit="contain" objectPosition="center" />
            </div>
        </section>
    );
}

export default Custom;

