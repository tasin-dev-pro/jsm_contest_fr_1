import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg">
      <img className="w-full h-44" src={image} alt={title} />
      <div className="px-6 py-4">
        <a className="font-bold text-xl mb-2 underline text-red-400" href={title === 'Dining' ? '/restaurants' : '/foods'}>{title}</a>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
