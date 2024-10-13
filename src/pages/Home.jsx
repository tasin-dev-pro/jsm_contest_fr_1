import HeroSection from '../components/HeroSection'
import CTA from '../components/CTA'
import FeatureCards from '../components/features'
import Faqs from '../components/Faqs'
import FoodSwiper from '../components/FoodSwiper'
import BigTextSection from '../components/animatedText'
import Burger from '../components/cheeseburger.jsx'


const Home = () => {
  return (
    <div >
        <HeroSection />
        <BigTextSection />
        <h1 className='text-5xl font-extrabold text-orange-500 text-center mt-10 mb-10 underline'>OPTIONS</h1>
        <FeatureCards />
        <FoodSwiper />
        <CTA />
        <div className='relative flex items-center justify-center h-screen bg-orange-500 mt-10 -z-10'>
            <h1 className='absolute text-center text-[100px] text-white font-bold z-20'>Taste Our exclusive foods</h1>
        <Burger />
        </div>
        <Faqs />
    </div>
  )
}

export default Home
