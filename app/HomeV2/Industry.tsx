import Image from 'next/image';
import React from 'react';

import Retails from '../../public/retail.jpg';
import ShoppingMall from '../../public/mall.webp';
import SmartTraffic from '../../public/smarttraffic.jpg';
import Warehousing from '../../public/warehouse.png';
import Manufacturing from '../../public/manufacturing.jpg';
import SmartCities from '../../public/smartcity.jpg';
import { useInView } from 'react-intersection-observer';

const industries = [
    { image: Retails, title: 'Retails' },
    { image: ShoppingMall, title: 'Shopping Mall' },
    { image: SmartTraffic, title: 'Smart Traffic' },
    { image: Warehousing, title: 'Warehousing & Logistics' },
    { image: Manufacturing, title: 'Manufacturing' },
    { image: SmartCities, title: 'Smart Cities' }
];

const IndustriesSection: React.FC = () => {
    const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="industries-section">
            <h2 className="section-title">Industries We Serve</h2>
            <div className={` industries-grid ${animationInView ? 'fadeInUp' : ''}`} ref={animationRef}>
                {industries.map((industry, index) => (
                    <div key={index} className="industry-card">
                        <div className="industry-title">{industry.title}</div>
                        <div className="image-container">
                            <Image src={industry.image} alt={industry.title} layout="fill" objectFit="cover" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustriesSection;
