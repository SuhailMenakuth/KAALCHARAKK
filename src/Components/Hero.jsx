// used swiper for corousel  
// auto play need to be adjut 


// need resolve now the banner is using from dierctly  



// import  Banner  from 'public/assets/images/Banner.webp';
import React from 'react';

import { loginImage } from '../../public/assets/images';


const Hero = () => {
 

  return (
    <div className='w-full h-auto relative  '>
     



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
