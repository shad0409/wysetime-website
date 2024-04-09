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
          <h2>Work attendance systems, augmented by AI image and video processing prowess, are transforming traditional timekeeping methods into highly efficient, contactless solutions for managing employee attendance. 
            By leveraging facial recognition technology, these systems offer a swift, accurate means of recording entry and exit times, eliminating the need for physical badges or timecards. 
            This not only streamlines administrative processes but also enhances security by ensuring that only authorized personnel access the premises. AI-driven attendance systems can also detect patterns in absenteeism, 
            enabling proactive management of workforce productivity. Additionally, integrating these systems with HR software facilitates real-time monitoring and analysis of staff attendance, 
            greatly improving operational efficiency and reducing the potential for timekeeping fraud. This leap in technology signifies a move towards more secure, efficient, and user-friendly workplace management practices.</h2>
            <div className='py-5'>
              <a href="/Solution/Attendance" className="solution-learn-more">Learn More</a>
            </div>
        </div>
    </div>

  );
};

export default AttendanceComponent;