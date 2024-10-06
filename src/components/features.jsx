;
import FeatureCard from './FeatureCard';



const features = [
  {
    image: '/download.jpeg',
    title: 'Order Online',
    description: 'Stay home and order to your doorstep',
  },
  {
    image: 'download.jpeg',
    title: 'Dining',
    description: 'View the city\'s favorite dining venues',
  },
  {
    image: 'download.jpeg',
    title: 'Nightlife and Clubs',
    description: 'Explore the city\'s top nightlife outlets',
  },
];

const FeatureCards = () => {
  return (
    <div className="flex justify-center flex-wrap gap-10">
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
