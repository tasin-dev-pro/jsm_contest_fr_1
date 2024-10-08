import HeroSection from '../components/HeroSection'
import CTA from '../components/CTA'
import FeatureCards from '../components/features'
import Faqs from '../components/Faqs'
import FoodSwiper from '../components/FoodSwiper'
import BigTextSection from '../components/animatedText'
import AnimatedAboutSection from '../components/AboutSec'

const Home = () => {
  return (
    <div >
        <HeroSection />
        <BigTextSection />
        <h1 className='text-3xl font-extrabold text-red-500 text-center mt-10 mb-6'>Options</h1>
        <FeatureCards />
        <FoodSwiper />
        <AnimatedAboutSection />
        <CTA />
    </div>
  )
}

export default Home
