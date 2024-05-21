import React from 'react';

interface ProductCardProps {
    title: string;
    date: string;
    imgSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, date, imgSrc }) => {
  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto">
      <img src={imgSrc} alt="Product" className="w-full h-56 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-300">{date}</p>
      </div>
    </div>
  );
}

export default ProductCard;
