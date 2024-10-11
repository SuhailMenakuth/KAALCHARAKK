// used swiper for corousel  
// auto play need to be adjut 


// need resolve now the banner is using from dierctly  



// import  Banner  from 'public/assets/images/Banner.webp';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';              
import 'swiper/css/navigation';    
import 'swiper/css/pagination';
import { loginImage } from '../../public/assets/images';


const Hero = () => {
  const carouselItems = [
    { text: "Welcome to our site!" },
    { text: "Our products are amazing!" },
    { text: "Check out our latest collections!" },
    { text: "Enjoy shopping with us!" },
  ];

  return (
    <div className='w-full h-full   '>
      {/* Carousel Section */}

      
      <div className='w-full bg-greenDark flex items-center justify-center h-12  lg:h-8  ' >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }} 
          loop={true}
          pagination={{ clickable: true }}  
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-center justify-center h-full z-0'>
                <p className='text-gold font-montserrat font-bold text-md'>
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



      {/* Banner Section */}
      <div
        style={{ backgroundImage: 'url("/assets/images/Banner.webp")'}}
        className='bg-contain lg:bg-cover bg-center h-60 w-full'
      >
      </div>

      <div className='w-full h-32 flex flex-col justify-center items-center   '>
        <h1 className='text-center text-bold text-black w-[80%]   text-2xl  lg:text-6xl font-palanquin font-bold  ' >NEW ARRIVALS COLLECTION</h1>
        <hr className='border border-gray-200 text-center w-[90%] mt-10' />
      </div>
     



    </div>
  );
};

export default Hero;
