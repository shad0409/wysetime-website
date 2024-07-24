import React from 'react';
import Queue from '../../../public/queue_management.jpeg';
import Image from 'next/image';

const QueueManagement: React.FC = () => {
    return (
      <section className="product-right-section">
        <div className="product-right-image">
          <Image src={Queue} alt="Queue Management" layout="contain" width={250} height={200} />
        </div>
        <div className="product-right-content">
          <h2 className="product-right-title">Queue Management</h2>
          <p className="product-right-description">
          Queue Management efficiently reduces waiting times at checkout points, enhancing customer satisfaction and minimizing potential sales losses. This system adjusts staffing in real-time based on traffic patterns, ensuring a smooth checkout experience and boosting overall store efficiency.          </p>
        </div>
      </section>
    );
  }
  
  export default QueueManagement;