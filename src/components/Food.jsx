import { useState } from "react";

const Food = () => {
    const [food, setFood] = useState([])
    const response = fetch('https://jsm-contest.onrender.com/getFoods', { method: 'GET', })
  .then(response => response.json())
  .then(data => setFood(data));


  return (
    <div>
        <div className="flex flex-wrap gap-4 justify-center items-center">

        {food.map((food, index) => (
            <div key={index} className="px-3 py-1 rounded-lg w-72 shadow-lg h-[400px] relative">
                <img src={food.imageUrl} alt="" className="w-full h-[50%] object-contain"/>
                <h2 className="font-bold">{food.name}</h2>
                <p className="text-[15px]">{food.description}</p>
                <p className="absolute font-bold left-2 bottom-2">${food.price}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Food
