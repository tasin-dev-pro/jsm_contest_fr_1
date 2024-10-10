import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react'; // Import useGSAP from @gsap/react
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const FeatureCard = ({ image, title, description, link }) => {
  const cardRef = useRef(null); // Create a ref for the card

  // Using useGSAP to create animations
  useGSAP(() => {
    // Scroll animation (fade in and slide up)
    const scrollAnimation = gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%", // Trigger when the card enters 80% of the viewport
        toggleActions: "play none none none", // Play the animation once
      },
    });

    // Add hover animation
    const handleMouseEnter = () => {
      gsap.to(cardRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = () => {
      gsap.to(cardRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    // Add event listeners for hover effects
    const cardElement = cardRef.current;
    cardElement.addEventListener('mouseenter', handleMouseEnter);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      cardElement.removeEventListener('mouseenter', handleMouseEnter);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  });

  return (
    <Link
      to={link}
      className="w-[300px] rounded overflow-hidden shadow-lg transition-all duration-300"
      ref={cardRef} // Add ref to the card
    >
      <img className="w-full h-44 object-cover" src={image} alt={`${title} image`} />
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
