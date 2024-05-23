import React from 'react';

interface CardQuestionProps {
  title: string;
  description: string;
  image: string;
}

const CardQuestion: React.FC<CardQuestionProps> = ({ title, description, image }) => {
  return (
    <div className=" shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover " src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default CardQuestion;
