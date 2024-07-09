import React from 'react';
import easyIntegrationsIcon from '../../public/integration.png';
import expertSupportIcon from '../../public/support.png';
import continuouslyImprovedIcon from '../../public/improve.png';
import flexibleDeploymentIcon from '../../public/flexible.png';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const WhyChooseWyseTime: React.FC = () => {
    const [animationRef, animationInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="why-wyse-container">
            <h2>Why Choose <span className="highlight">WyseTime</span></h2>
            <div className="why-wyse-features">
                <div className="why-wyse-row">
                    <div className="why-wyse-feature">
                        <Image src={easyIntegrationsIcon} alt="Easy Integrations" width={125} height={125} />
                        <div className="feature-text">
                            <h3>Easy Integrations</h3>
                            <p>Easy Installations<br />Deployment Flexibility<br />Continuous Improve</p>
                        </div>
                    </div>
                    <div className="why-wyse-feature">
                        <Image src={expertSupportIcon} alt="Expert Support" width={150} height={150} />
                        <div className="feature-text">
                            <h3>Expert Support</h3>
                            <p>Our team are highly specialized in the industry and matters they are dealing with.</p>
                        </div>
                    </div>
                </div>
                <div className="why-wyse-row">
                    <div className="why-wyse-feature">
                        <Image src={continuouslyImprovedIcon} alt="Continuously Improved" width={150} height={150} />
                        <div className="feature-text">
                            <h3>Continuously Improved</h3>
                            <p>Get your hand on the latest Artificial Intelligence technology without worry, we do it for you.</p>
                        </div>
                    </div>
                    <div className="why-wyse-feature">
                        <Image src={flexibleDeploymentIcon} alt="Flexible Deployment" width={150} height={150} />
                        <div className="feature-text">
                            <h3>Flexible Deployment</h3>
                            <p>Our platform is adaptable to several camera types and brands. No need to change or replace your CCTV, as long as it meets our minimum specifications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseWyseTime;
