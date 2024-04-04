import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/CrossPlatform.jpeg'; 

const CrossPlatform: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>Cross <span className="text-red-600">Platform</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="Cross Platform"
        description="Cross-Platform technology refers to software solutions designed to operate across multiple hardware platforms and operating systems with minimal to no modification. 
        This approach enables developers to write a single codebase that can be deployed across various environments, including Windows, macOS, Linux, iOS, and Android, 
        thereby significantly increasing efficiency and reducing development time and costs. Cross-Platform technologies utilize frameworks such as Xamarin, React Native, and Flutter, 
        which provide tools and libraries to facilitate seamless operation across diverse systems. This is especially crucial in today’s digital landscape, 
        where users access applications from a multitude of devices with differing operating systems. By adopting a Cross-Platform approach, developers can ensure a consistent user experience, wider market reach, and improved maintainability of their applications. 
        However, it's important to balance the convenience of cross-platform development with considerations for performance and native functionality, ensuring that applications meet the specific needs and expectations of their target audiences."
        reverse={false}
      />
    </div>
  );
};

export default CrossPlatform;