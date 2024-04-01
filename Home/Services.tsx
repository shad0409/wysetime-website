// Services.tsx

import React from 'react';
import Service from './Service';

import serviceImage1 from '../../public/Services_1.jpeg'; // Ensure the correct path
import serviceImage2 from '../../public/Services_2.jpeg'; // Ensure the correct path

const ServicesWyseTime: React.FC = () => {
  return (
    <div className="services-container">
      <h2 className='service-heading'>Our <span className="text-red-600">Services</span></h2>
      <Service 
        image={serviceImage1}
        title="Comprehensive In-store Insights"
        description="For businesses looking to not only survive but thrive, understanding the minutiae of customer behavior, preferences, 
        and trends within the physical store environment is paramount. Our cutting-edge solutions are designed to bridge the gap between data and action, 
        providing our corporate clients with unparalleled visibility into their retail operations. Through a combination of AI-powered analytics, 
        real-time tracking technologies, and predictive modeling, we empower companies to make informed decisions, enhance customer experiences, 
        and ultimately drive sales. By leveraging these insights, our clients can optimize store layouts, tailor product placements, 
        and fine-tune marketing strategies to align with consumer demand, setting a new standard for retail excellence. 
        Engage with us, and transform your in-store data into your most valuable asset."
        reverse={true}
      />
      <Service 
        image={serviceImage2}
        title="Video Analytic Technology"
        description="This cutting-edge technology offers an unparalleled depth of insights, transforming standard video footage into a rich source of actionable intelligence. 
        Designed for businesses seeking to enhance security, optimize operations, and deliver personalized customer experiences, 
        our Video Analytic Technology harnesses the power of AI and machine learning to analyze video streams in real-time. 
        From facial recognition to traffic pattern analysis, it provides a comprehensive suite of tools that empower companies to anticipate needs, 
        detect anomalies, and make data-driven decisions with unprecedented precision. As we continue to push the boundaries of what's possible, 
        embracing Video Analytic Technology is not just an upgrade; it's a leap into the future of business intelligence."
        reverse={false}
      />
    </div>
  );
};

export default ServicesWyseTime;