import Lottie from "lottie-react";
import hero from "../animations/home.json"

const HeroSection = () => {
  return (
        <div className="flex flex-col md:flex-row items-center justify-center  w-full py-10 px-10">
          {/* Image Section */}
          <div className="w-[45%] max-md:w-full mb-6 md:mb-0">
            <Lottie animationData={hero} loop={true} />
          </div>

          {/* Text Section */}
          <div className="w-[45%]  md:pl-8 max-md:w-full">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-4">Get your tasty food now</h1>
            <p className="mb-6">fastest delivery and tastes best</p>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              try now
            </button>
          </div>
        </div>
  );
};

export default HeroSection;
