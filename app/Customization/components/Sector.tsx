import React from 'react';
import Image from 'next/image';
import factoryImage from '../../../public/factory.png';
import retailImage from '../../../public/shopping.png';
import securityImage from '../../../public/Safety.png';
import oilGasImage from '../../../public/oil.png';
import hospitalImage from '../../../public/hospital.png';
import safetyImage from '../../../public/safe.png';

const Section: React.FC = () => {
    return (
        <section className="customization-industry-section">
            <div className="customization-industry-item">
                <Image src={factoryImage} alt="Factory" width={164} height={164} />
                <p>Factory</p>
            </div>
            <div className="customization-industry-item">
                <Image src={retailImage} alt="Retail" width={164} height={164} />
                <p>Retail</p>
            </div>
            <div className="customization-industry-item">
                <Image src={securityImage} alt="Security" width={164} height={164} />
                <p>Security</p>
            </div>
            <div className="customization-industry-item">
                <Image src={oilGasImage} alt="Oil & Gas" width={164} height={164} />
                <p>Oil & Gas</p>
            </div>
            <div className="customization-industry-item">
                <Image src={hospitalImage} alt="Hospital" width={164} height={164} />
                <p>Hospital</p>
            </div>
            <div className="customization-industry-item">
                <Image src={safetyImage} alt="Safety" width={164} height={164} />
                <p>Safety</p>
            </div>
        </section>
    );
}

export default Section;
