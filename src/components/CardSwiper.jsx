
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Soup } from 'lucide-react';
import {Link} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';

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

      const FoodCard = ({ item }) => (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white w-[250px] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <div className="relative h-48 overflow-hidden">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${item.dishType === "Veg" ? "bg-green-500" : "bg-orange-500"} text-white`}>
              {item.dishType}
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2 truncate">{item.name}</h2>
            <p className="text-gray-600 text-sm mb-2 h-12 overflow-hidden">{item.description}</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">${item.price.toFixed(2)}</p>
            </div>
          </div>
        </motion.div>
      );

  return (
    <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 4 },
        1536: { slidesPerView: 4 }
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true
      }}
      className='gap-28'

    >
      {food.map((item, index) => (
        <SwiperSlide key={index} className='flex flex-col gap-20 items-center justify-center'>
          <AnimatePresence>
                <FoodCard key={item._id} item={item} />
            </AnimatePresence>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSwiper;
