import React from 'react';
import variance from '../assets/var.svg'


const Banner = () => {
  return (
    <section className='mx-auto w-[80%] ' id='home'>
      <div className='flex justify-center items-center flex-col xl1:scale-[70%]'>
        {/* first text */}
        <div className='text-center font-[600] font-primary text-[30px] leading-normal text-[#999] pb-8 pt-6 '>
         We code Ideas, Line by Line
        </div>
        {/* second text  */}
        <div className='flex flex-col group text-center font-[700] font-primary text-[120px] leading-normal text-black pb-8'>
          <div  className='   flex flex-row space-x-2 items-center  '>
          Build<span><img className='w-[120px] h-[120px]  transition-all transform  duration-200 ease-in-out  group-hover:rotate-180 group-hover:scale-110'
          src={variance}/></span> the next 
          </div>
          <div className='flex flex-row'>
          <div className=' transition-all transform  duration-500 group-hover:rotate-45 px-2 py-4 bg-[#B9E901] rounded-[70px] text-white'>
            big</div>
            <div>
           thing with Us
            </div>

          </div>
        </div>
      </div>

    </section>
  )
  
};

export default Banner;
