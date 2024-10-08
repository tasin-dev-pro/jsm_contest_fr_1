
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Soup } from 'lucide-react';

function CardSwiper() {
    const [food, setFood] = useState([]);
    useEffect(() => {
        // Fetch food data
        fetch('https://jsm-contest.onrender.com/getFoods', { method: 'GET' })
          .then((response) => response.json())
          .then((data) => {
            setFood(data);
          });
      }, []);

  return (
    <Swiper slidesPerView={Math.floor(window.innerWidth / 400)}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true
      }}

    >
      {food.map((item, index) => (
        <SwiperSlide key={index} className='flex flex-col items-center justify-center'>
          <div
                key={index}
                className="bg-white px-3 py-3 rounded-lg w-72 shadow-lg h-[350px] relative"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-[50%] object-cover rounded-lg"
                />
                <h2 className="font-bold">{item.name}</h2>
                <p className="font-semibold text-[15px]">${item.price}</p>
                <p className="font-semibold text-[15px] text-red-500 flex items-center"><Soup />{item.dishType}</p>
                <p className="text-[15px]">{item.description}</p>
                <button className="absolute font-bold left-2 bottom-2 px-3 py-1 bg-red-500 text-white rounded">Add to Cart</button>
              </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSwiper;
