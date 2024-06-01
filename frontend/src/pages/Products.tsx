import React from 'react';
import Header from '../components/Header';
import Image1 from '../assets/products1.png';
import Image2 from '../assets/products2.png';
import Image3 from '../assets/products3.png';
import Image4 from '../assets/products4.png';

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <Header />
      <h1 className="text-center text-4xl font-bold text-purple-300 mt-12 mb-2">Our Products</h1>
      <div className="flex justify-center items-center space-x-[-4rem]">
        <div className="flex flex-col items-center">
          <div className="hexagon relative mb-6" style={{ top: '0' }}>
            <img src={Image1} alt="Product 1" className="hexagon-image" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-bold text-white">Course</h2>
            <p className="text-xs text-gray-400">OPTIMUS WEB DESIGN FIXED - APRIL 21, 2023</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="hexagon relative mb-6" style={{ top: '8vw' }}>
            <img src={Image2} alt="Product 2" className="hexagon-image" />
          </div>
          <div className="text-center mt-20">
            <h2 className="text-sm font-bold text-white">Course</h2>
            <p className="text-xs text-gray-400">OPTIMUS WEB DESIGN FIXED - APRIL 21, 2023</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="hexagon relative mb-6" style={{ top: '0' }}>
            <img src={Image3} alt="Product 3" className="hexagon-image" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-bold text-white">Course</h2>
            <p className="text-xs text-gray-400">OPTIMUS WEB DESIGN FIXED - APRIL 21, 2023</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="hexagon relative mb-6" style={{ top: '8vw' }}>
            <img src={Image4} alt="Product 4" className="hexagon-image" />
          </div>
          <div className="text-center mt-20">
            <h2 className="text-sm font-bold text-white">Course</h2>
            <p className="text-xs text-gray-400">OPTIMUS WEB DESIGN FIXED - APRIL 21, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;


