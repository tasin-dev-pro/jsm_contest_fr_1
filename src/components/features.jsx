import React, { useRef } from 'react';
import FeatureCard from './FeatureCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const features = [
  {
    image: 'https://imgs.search.brave.com/rakilKI1tlOHSs57LZ_JLT4znojbVIprvc_CphIQGsw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVj/NjM0NGNlYWIxYTYy/MWQ5NTRmNmExMy8w/MmJiZmRlMi00ZGQ1/LTQxZWQtOTYyMC1i/YWQzNzZhY2IwZjkv/b3JhbmdlLWNvdW50/eS1pdGFsaWFuLWZv/b2QtcGl6emEtZ2Fy/bGljLWtub3RzLTUu/anBn',
    title: 'Order Online',
    description: 'Stay home and order to your doorstep',
    link: '/foods'
  },
  {
    image: 'https://imgs.search.brave.com/zKprb3oGYn_C_-RORWrTxQnkRnq_unHCBSO5A5tPouw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/MTYxNDM2Ny9waG90/by9kaW5pbmctdGFi/bGUtaW4tdGhlLWx1/eHVyeS1yZXN0YXVy/YW50LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1rUTRxb0R1/MHN3cUFUcHg2X21Q/eU1aM2dyNmJZUnJx/QVN2UEg2alN2ZU9N/PQ',
    title: 'Dining',
    description: 'View the city\'s favorite dining venues',
    link: '/restaurants'
  },
  {
    image: '/offer.png',
    title: 'Offers',
    description: 'Get exclusive offers and discounts',
    link: '/foods'
  },
];

const FeatureCards = () => {

  return (
    <div className="flex justify-center flex-wrap max-md:gap-10 md:gap-20">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureCards;
