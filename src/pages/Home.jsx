import HeroSection from '../components/HeroSection'
import CTA from '../components/CTA'
import FeatureCards from '../components/features'
import Faqs from '../components/Faqs'
import FoodSwiper from '../components/FoodSwiper'
import BigTextSection from '../components/animatedText'


const Home = () => {
  return (
    <div >
        <HeroSection />
        <BigTextSection />
        <h1 className='text-3xl font-extrabold text-orange-500 text-center mt-10 mb-6'>Options</h1>
        <FeatureCards />
        <FoodSwiper />
        <CTA />
        <Faqs />
    </div>
  )
}

export default Home
