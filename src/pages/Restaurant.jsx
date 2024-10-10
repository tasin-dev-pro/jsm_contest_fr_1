import React, { useEffect, useState } from 'react';

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('https://jsm-contest.onrender.com/getRetaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={restaurant.image_url}
              alt={restaurant.description}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold ">{restaurant.address}</h2>
              <p className="text-gray-600 mt-2">{restaurant.description}</p>
              <div className="mt-4">
                <p className="text-gray-800">
                  <strong className='text-green-600'>Phone:</strong> {restaurant.contact.phone}
                </p>
                <p className="text-gray-800">
                  <strong className='text-orange-600'>Email:</strong> {restaurant.contact.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
