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

  useGSAP(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const progress = progressRef.current;
    const bgImage = bgImageRef.current;

    gsap.from(text, {
      x: 200,
      ease: 'linear',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // gsap.to(bgImage, {
    //   x: '20%', // Adjust this value to control how far the image moves
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: section,
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: true
    //   }
    // });

    gsap.to(progress, {
      width: '100%',
      ease: 'linear',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className="h-[100vh] overflow-hidden relative mt-20">
      <div
        ref={bgImageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/about.webp")', // Replace with your actual image URL
          width: '120%', // Make the image wider than the container
          left: '-20%' // Start the image off-screen to the left
        }}
      ></div>
      <div className="relative z-10 h-full flex items-center justify-center bg-black bg-opacity-50">
        <div ref={textRef} className="text-3xl font-bold text-white absolute w-[80vw] ml-20">
          About Us: We are passionate about creating amazing web experiences.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nemo temporibus sunt tenetur exercitationem deserunt nulla! Numquam vel consectetur culpa quibusdam ipsam accusamus, eius at ex quod, sequi voluptate aliquam?
        </div>
      </div>
      <div ref={progressRef} className="h-2 bg-blue-500 absolute bottom-0 left-0 w-0 z-20"></div>
    </div>
  );
};

export default AnimatedAboutSection;
