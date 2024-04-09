import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/Attendance.jpeg';

const AttendanceComponent = () => {
  return (
    <div>
        <div className="solution-comp-container">
            <Image src={heroImage} alt="Empower Your Business" layout='fill' objectFit='cover' />
            <div className="solution-comp-content">
                <h1>Work Attendance</h1>
            </div>
        </div>
        <div className='solution-about-content'>
          <h2>About</h2>
          <a href="/Solution/Attendance" className="solution-learn-more">Learn More</a>
        </div>
    </div>

  );
};

export default AttendanceComponent;