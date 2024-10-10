import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedAboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const progress = progressRef.current;

    gsap.to(text, {
      x: '-100%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

    gsap.to(progress, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className="h-screen overflow-hidden relative">
      <div ref={textRef} className="text-4xl font-bold absolute top-1/2 left-full w-full transform -translate-y-1/2">
        About Us: We are passionate about creating amazing web experiences.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, unde, aut rem modi eos nihil necessitatibus quis recusandae maiores quisquam eligendi? Modi nisi vitae reprehenderit, tempora ipsum quis rem consectetur.
      </div>
      <div ref={progressRef} className="h-2 bg-blue-500 absolute bottom-0 left-0 w-0"></div>
    </div>
  );
};

export default AnimatedAboutSection;
