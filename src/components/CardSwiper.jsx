
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Soup } from 'lucide-react';
import {Link} from 'react-router-dom'

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
          <Link
          to={"/foods"}
                key={index}
                className="bg-white px-3 py-3 rounded-lg w-72 shadow-lg h-[330px] relative"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-[50%] object-cover rounded-lg"
                />
                <h2 className="font-bold my-1">{item.name}</h2>
                <p className="font-semibold text-[15px] mb-1">${item.price}</p>
                <p className={`font-semibold text-[15px] mb-1 ${item.dishType === "Veg" ? "text-green-500" : "text-red-500"} flex items-center mb-1`}><Soup />{item.dishType}</p>
                <p className="text-[15px]">{item.description}</p>
              </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSwiper;
