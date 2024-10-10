import { useState, useEffect, useContext } from "react";
import { Search } from "lucide-react";
import { Soup } from "lucide-react";
import { UserContext } from "../UserContext";

const Food = () => {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const {userInfo} = useContext(UserContext)

  useEffect(() => {
    fetch('https://jsm-contest.onrender.com/getFoods', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setFood(data);
        setFilteredFood(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = food.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFood(filtered);

      if (searchQuery.length > 0) {
        setSuggestions(filtered.slice(0, 5));
      } else {
        setSuggestions([]);
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, food]);

  const addToCart = async (productId) => {
    const email = userInfo?.email; // Replace with actual user's email or get it from your context/store
    const quantity = 1; // Default quantity, adjust as needed

    try {
      const response = await fetch('https://jsm-contest.onrender.com/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, productId, quantity }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result.message); // Show success message or update cart state
      } else {
        console.error(result.message); // Show error message
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

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
      <div className="px-6 mb-6 mt-4 flex flex-col items-center relative">
        <div className="relative w-full max-w-[1396px]">
          <Search className="absolute left-3 top-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search by food name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

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
              <SkeletonLoader key={index} />
            ))
          : filteredFood.length > 0 ? filteredFood.map((item) => (
              <div
                key={item._id}
                className="px-3 py-3 rounded-lg w-72 shadow-lg h-[400px] relative"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-[50%] object-cover rounded-lg"
                />
                <h2 className="font-bold my-1">{item.name}</h2>
                <p className="font-semibold text-[15px]">${item.price}</p>
                <p className={`font-semibold text-[15px] ${item.dishType === "Veg" ? "text-green-500" : "text-red-500"} flex items-center`}><Soup />{item.dishType}</p>
                <p className="text-[15px]">{item.description}</p>
                <button
                  className="absolute font-bold left-3 bottom-3 px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => addToCart(item._id)} // Call addToCart function with the product ID
                >
                  Order now
                </button>
              </div>
            ))
          : <p>No food found.</p>}
      </div>
    </div>
  );
};

export default Food;
