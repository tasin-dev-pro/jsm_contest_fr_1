import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ image, title, description }) => {
  return (
    <Link to={title === 'Dining' ? '/restaurants' : '/foods'}  className="w-[300px] rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <img className="w-full h-44" src={image} alt={title} />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 underline text-red-400">{title}</h1>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default FeatureCard;
