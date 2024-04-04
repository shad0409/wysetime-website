import React from 'react';
import CoreTech from './CoreConfigs';

import ProductsImage1 from '../../../public/OCRFeature.jpeg'; 

const OCRFeature: React.FC = () => {
  return (
    <div className="core-container">
      <h2 className='core-heading'>OCR <span className="text-red-600">Feature</span></h2>
      <CoreTech 
        image={ProductsImage1}
        title="OCR Feature"
        description="Optical Character Recognition (OCR) is a transformative technology that enables the conversion of different types of documents, 
        such as scanned paper documents, PDF files, or images captured by a digital camera, into editable and searchable data. At its core, 
        OCR software analyzes the structure of a document image, identifying and extracting alphanumeric characters and symbols, 
        thereby digitizing the printed text contained within. This feature is particularly beneficial in various sectors including legal, educational, 
        and financial, where it significantly reduces manual data entry and enhances information accessibility. OCR facilitates efficient document archiving, 
        streamlines business processes, and supports the digitization of historical archives, making it a crucial tool in the digital transformation era. 
        Its integration into mobile applications and cloud services has further expanded its utility, allowing users to effortlessly capture information on-the-go and access converted data across multiple platforms, 
        thereby revolutionizing information management and accessibility."
        reverse={false}
      />
    </div>
  );
};

export default OCRFeature;