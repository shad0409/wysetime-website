// Adjusted JSX component structure
import React from 'react';
import Image from 'next/image';

import AISolution from '../../../public/AiSoftware.png';
import Insights from '../../../public/Insights.png';
import Data from '../../../public/Accuracy.png';
import Scalability from '../../../public/Scalability.png';

const SolutionHeader = () => {
  return (
    <>
      <div className="solution-items-container">
        <div className='solution-item-container'>
            <Image src={AISolution} height={100} width={100} alt="Ai-Driven Solutions" objectFit='contain' />
            <h2>AI-Driven Solutions</h2>
            <p>Utilizing AI algorithms to analyze customer behavior, and personalize marketing strategies.</p>
        </div>

        <div className="solution-item-container">
          <Image src={Insights} height={100} width={100} alt="RTI" objectFit='contain' />
          <h2>Real-Time Insights</h2>
          <p>Providing real-time insights into customer preferences, helping retailers make decisions promptly.</p>
        </div>

        <div className="solution-item-container">
          <Image src={Data} height={100} width={100} alt="ADE" objectFit='contain' />
          <h2>Accurate Data Extraction</h2>
          <p>Offering high accuracy in extracting data  using Optical Character Recognition (OCR) technology.</p>
        </div>
        <div className="solution-item-container">
          <Image src={Scalability} height={100} width={100} alt="Scalability" objectFit='contain' />
          <h2>Scalability</h2>
          <p>Scaling to accommodate varying numbers of guests and ensuring smooth operations during peak periods.</p>
        </div>
      </div>
    </>
  );
};

export default SolutionHeader;
