import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react'; // Import useGSAP from @gsap/react
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const FeatureCard = ({ image, title, description, link }) => {

  return (
    <Link
      to={link}
      className="w-[300px] rounded overflow-hidden shadow-lg transition-all duration-300"
    >
      <img className="w-full h-44 object-cover" src={image} alt={`${title} image`} />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 underline text-orange-400">{title}</h1>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default FeatureCard;
