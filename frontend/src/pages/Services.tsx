import React from 'react';
import Header from '../components/Header';
import CardServices from '../components/CardServices';

function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <h1 className='hero-subtitle'>Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20">
        <CardServices
          title="Course"
          description="OPTIMUS WEB DESIGN FIXED - APRIL 21, 2023"
          image="../assets/Imagen1.png"
        />
        <CardServices
          title="Course"
          description="OPTIMUS WEB DESIGN FIXED - APRIL 21, 2023"
          image="path/to/Imagen1.jpg"
        />
        <CardServices
          title="Course"
          description="OPTIMUS WEB DESIGN FIXED - APRIL 21, 2023"
          image="path/to/Imagen1.jpg"
        />
        {/* Add more CardQuestion components as needed */}
      </div>
    </div>
  );
}

export default Services;
