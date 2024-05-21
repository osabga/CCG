import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/CardComponent';
import Image1 from '../assets/Imagen1.png';
import Image2 from '../assets/Imagen2.png';
import Image3 from '../assets/Imagen3.png';

const Products: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <h1 className="hero-subtitle ml-20 mt-12 mb-12">Our Products</h1>
      
      {/* First row of products */}
      <div className="flex flex-row overflow-x-auto no-scrollbar space-x-4 p-4 ml-10 mr-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCard
            key={index}
            title="Course"
            date="Optimus Web Design Fixed - April 21, 2023"
            imgSrc={[Image1, Image2, Image3][index % 3]} // Correctly alternate between three images
          />
        ))}
      </div>

      {/* Second row of products */}
      <div className="flex flex-row overflow-x-auto no-scrollbar space-x-4 p-4 ml-10 mr-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCard
            key={index + 3} // Ensure unique keys for each product card
            title="Course"
            date="Optimus Web Design Fixed - April 21, 2023"
            imgSrc={index % 2 === 0 ? Image2 : Image1} // Alternates between the two images
          />
        ))}
      </div>

    </div>
  );
}

export default Products;
