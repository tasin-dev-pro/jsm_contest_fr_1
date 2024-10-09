import Lottie from "lottie-react";
import hero from "../animations/home.json"
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

const HeroSection = () => {
    const {setUserInfo, userInfo} = useContext(UserContext)
    const email = userInfo?.email;
  return (
        <div className="flex flex-col md:flex-row items-center justify-center  w-full py-10 px-10">
          {/* Image Section */}
          <div className="w-[45%] max-md:w-full mb-6 md:mb-0">
            <Lottie animationData={hero} loop={true} />
          </div>

          {/* Text Section */}
          <div className="w-[40%]  md:pl-8 max-md:w-full">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-4">Get your tasty food <span className="text-red-500 under">now</span></h1>
            <p className="mb-6">fastest delivery and tastes best</p>
            <Link to="/login" className="relative inline-block text-lg group">
            {!email ?
            <Link to="/login">

            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative" >Get Started</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </Link>
            :
            <Link to="/foods">

            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative" >Explore Foods</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </Link>
        }

</Link>
          </div>
        </div>
  );
};

export default HeroSection;
