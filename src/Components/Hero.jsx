// used swiper for corousel  
// auto play need to be adjut 




 import { Banner } from '../assets/images';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';              
import 'swiper/css/navigation';    
import 'swiper/css/pagination';


const Hero = () => {
  const carouselItems = [
    { text: "Welcome to our site!" },
    { text: "Our products are amazing!" },
    { text: "Check out our latest collections!" },
    { text: "Enjoy shopping with us!" },
  ];

  return (
    <div className='w-full h-full '>
      {/* Carousel Section */}
      <div className='w-full bg-greenDark flex items-center justify-center h-9' style={{ height: '' }}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }} 
          loop={true}
          pagination={{ clickable: true }}  
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-center justify-center h-full'>
                <p className='text-gold font-montserrat font-bold text-lg'>
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Banner Section */}
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className='bg-contain bg-center h-60 w-full'
      >
      </div>

      <div className='w-full h-32 flex justify-center items-center  '>
        <h1 className='text-center text-bold text-black w-[80%]  text-6xl font-palanquin font-bold  ' >NEW ARRIVALS COLLECTION</h1>

      </div>



    </div>
  );
};

export default Hero;
