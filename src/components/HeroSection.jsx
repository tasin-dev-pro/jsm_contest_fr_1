import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white-800 text-black p-8">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="bg-gray-600 flex items-center justify-center h-48 w-full">
              <span className="text-white text-3xl">img</span>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">Text</h1>
            <p className="mb-6">This is a sample description for the hero section.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              try now
            </button>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default HeroSection;