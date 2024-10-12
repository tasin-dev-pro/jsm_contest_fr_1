import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedAboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const bgImageRef = useRef(null);



  return (
    <div ref={sectionRef} className="h-[100vh] overflow-hidden relative mt-20">
      <div
        ref={bgImageRef}
        className="absolute inset-0 bg-cover bg-center h-[60vh] w-full"
        style={{
          backgroundImage: 'url("/about.webp")', // Replace with your actual image URL
          width: '120%', // Make the image wider than the container
          left: '-20%' // Start the image off-screen to the left
        }}
      ></div>
      <div className="relative z-10 h-[60vh] flex items-center justify-center">
        <div ref={textRef} className="md:text-3xl sm:text-2xl max-sm:text-xl font-bold text-white absolute w-[80vw] ml-20">
          About Us: We are passionate about creating amazing web experiences.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nemo temporibus sunt tenetur exercitationem deserunt nulla! Numquam vel consectetur culpa quibusdam ipsam accusamus, eius at ex quod, sequi voluptate aliquam?
        </div>
      </div>
    </div>
  );
};

export default AnimatedAboutSection;
