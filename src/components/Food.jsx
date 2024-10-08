import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import {Soup} from "lucide-react"

const Food = () => {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]); // For storing filtered foods
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // For search input
  const [suggestions, setSuggestions] = useState([]); // For storing suggestions

  useEffect(() => {
    // Fetch food data
    fetch('https://jsm-contest.onrender.com/getFoods', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setFood(data);
        setFilteredFood(data); // Initially, show all food
        setLoading(false);
      });
  }, []);

  // Debouncing search input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Filter food based on search query
      const filtered = food.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFood(filtered);

      // Set suggestions based on search query
      if (searchQuery.length > 0) {
        setSuggestions(filtered.slice(0, 5)); // Show top 5 suggestions
      } else {
        setSuggestions([]);
      }
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [searchQuery, food]);

  // Skeleton component for loading
  const SkeletonLoader = () => (
    <div className="px-3 py-1 rounded-lg w-72 shadow-lg h-[400px] relative animate-pulse">
      <div className="w-full h-[50%] bg-gray-200"></div>
      <div className="h-6 bg-gray-200 rounded mt-4"></div>
      <div className="h-4 bg-gray-200 rounded mt-2"></div>
      <div className="h-4 bg-gray-200 rounded mt-2 w-20"></div>
      <div className="absolute left-2 bottom-2 h-6 bg-gray-200 w-16 rounded"></div>
    </div>
  );

  return (
    <div className="max-w-[1396px] m-auto">
      {/* Search bar */}
      <div className="px-6 mb-6 mt-4 flex flex-col items-center relative">
        <div className="relative w-full max-w-[1396px]">
          {/* Search icon */}
          <Search className="absolute left-3 top-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search by food name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Search suggestions */}
        {suggestions.length > 0 && (
          <ul className="bg-white border border-gray-300 w-full max-w-md rounded-md mt-2 shadow-md">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setSearchQuery(suggestion.name)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-center">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <SkeletonLoader key={index} /> // Display skeleton loaders while loading
            ))
          : filteredFood.length > 0 ? filteredFood.map((item, index) => (
              <div
                key={index}
                className="px-3 py-3 rounded-lg w-72 shadow-lg h-[400px] relative"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-[50%] object-cover rounded-lg"
                />
                <h2 className="font-bold mt-5 text-xl">{item.name}</h2>
                <p className="font-semibold text-[15px]">${item.price}</p>
                <p className="font-semibold text-[15px] text-red-500 flex items-center"><Soup />{item.dishType}</p>
                <p className="text-[15px]">{item.description}</p>
                <button className="absolute font-bold left-2 bottom-2 px-3 py-1 bg-red-500 text-white rounded">Add to Cart</button>
              </div>
            ))
          : <p>No food found.</p>}
      </div>
    </div>
  );
};

export default Food;
