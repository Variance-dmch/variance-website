import React, { useState } from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import offer1 from '../assets/offer1.svg'
import offer2 from '../assets/offer2.svg'
import offer2after from '../assets/offer2after.svg'
import { hover } from '@testing-library/user-event/dist/hover';

const Services = () => {
const[isHovering,setHovering] = useState(false)

  return <section className=' mx-auto w-[80%] pb-10'>
    <div className=''>
      <div className='flex flex-col justify-center p-8  border-white rounded-3xl bg-black'>
        {/* first */}
        <div className='flex flex-row justify-between text-center border-b-2 border-gray-700 pb-4 pt-6 mx-8'>
          <p className='font-primary  text-[48px]'
          >What we offer</p>
          <p className='text-right font-primary text-[#737373] leading-tight pb-4'>American Mass Media Company <br/>
          based in Washington D.C
          </p>
        </div>
        {/* second */}
        <div className='flex flex-row py-16 justify-center space-x-20 items-center text-center border-b-2 border-gray-700'>
          {/* first card */}
          <div className='p-4 group bg-secondary mx-2 rounded-3xl flex flex-col justify-start hover:bg-[#601FEB] hover:rounded-bl-[275px]' id='card1'>
            <div className='px-6 justify-center '>
              <div className='p-2 flex flex-row border-b-2 border-secondary_1 justify-between items-start text-white py-8'>
                <div className='card-head pb-4'>
                Cook <br/> Mobile App
                
                </div>
                <div className='flex items-center justify-center w-[120px] h-[120px] p-4 rounded-full bg-secondary_1 cursor-pointer visible group-hover:invisible'>
                  <BsArrowUpRight className='w-[50px] h-[50px] ' 
                  ></BsArrowUpRight>
                  </div>
              </div>
              <div className='p-2 py-4'>
                <p className='card-mid pb-4'>American mass media company based in <br/>
                   Washington, D.C., and New York City</p>
              </div>

            </div>
            <div className=' relative bg-app bg-center bg-cover bg-no-repeat px-[350px] py-[225px] rounded-[80px] group-hover:rounded-bl-[275px] saturate-0 group-hover:saturate-200'>
            <div className=' absolute flex items-center justify-center bottom-0 left-0 w-[190px] h-[190px] p-4 rounded-full bg-[#B9E901] border-[20px] border-black cursor-pointer invisible group-hover:visible'>
                  <BsArrowUpRight className='w-[80px] h-[80px] text-[#601FEB]  ' 
                  ></BsArrowUpRight>
                  </div>

              </div>
              
          </div>

          {/* second card */}
          <div className='p-4 group bg-secondary mx-2 rounded-3xl flex flex-col justify-start hover:bg-[#601FEB] hover:rounded-bl-[275px]' id='card2'>
            <div className='px-6 justify-center '>
              <div className='p-2 flex flex-row border-b-2 border-secondary_1 justify-between items-start text-white py-8'>
                <div className='card-head pb-4'>
                Cook <br/> Blockchain
                
                </div>
                <div className='flex items-center justify-center w-[120px] h-[120px] p-4 rounded-full bg-secondary_1 cursor-pointer visible group-hover:invisible'>
                  <BsArrowUpRight className='w-[50px] h-[50px] ' 
                  ></BsArrowUpRight>
                  </div>
              </div>
              <div className='p-2 py-4'>
                <p className='card-mid pb-4'>American mass media company based in <br/>
                   Washington, D.C., and New York City</p>
              </div>

            </div>
            <div className=' relative bg-blockchain bg-center bg-cover bg-no-repeat px-[350px] py-[225px] rounded-[80px] group-hover:rounded-bl-[275px] saturate-0 group-hover:saturate-200'>
            <div className=' absolute flex items-center justify-center bottom-0 left-0 w-[190px] h-[190px] p-4 rounded-full bg-[#B9E901] border-[20px] border-black cursor-pointer invisible group-hover:visible'>
                  <BsArrowUpRight className='w-[80px] h-[80px] text-[#601FEB] ' 
                  ></BsArrowUpRight>
                  </div>

              </div>
              
          </div>
          

          {/* third card  */}
          <div className='p-4 group bg-secondary mx-2 rounded-3xl flex flex-col justify-start hover:bg-[#601FEB] hover:rounded-bl-[275px]' id='card2'>
            <div className='px-6 justify-center '>
              <div className='p-2 flex flex-row border-b-2 border-secondary_1 justify-between items-start text-white py-8'>
                <div className='card-head pb-4'>
                Cook <br/> Websites
                
                </div>
                <div className='flex items-center justify-center w-[120px] h-[120px] p-4 rounded-full bg-secondary_1 cursor-pointer visible group-hover:invisible'>
                  <BsArrowUpRight className='w-[50px] h-[50px] ' 
                  ></BsArrowUpRight>
                  </div>
              </div>
              <div className='p-2 py-4'>
                <p className='card-mid pb-4'>American mass media company based in <br/>
                   Washington, D.C., and New York City</p>
              </div>

            </div>
            <div className=' relative bg-web bg-center bg-cover bg-no-repeat px-[350px] py-[225px] rounded-[80px] group-hover:rounded-bl-[275px] saturate-0 group-hover:saturate-200'>
            <div className=' absolute flex items-center justify-center bottom-0 left-0 w-[190px] h-[190px] p-4 rounded-full bg-[#B9E901] border-[20px] border-black cursor-pointer invisible group-hover:visible'>
                  <BsArrowUpRight className='w-[80px] h-[80px]  text-[#601FEB] ' 
                  ></BsArrowUpRight>
                  </div>

              </div>
              
          </div>

  
        </div>
        {/* third */}
        <div className='flex flex-row  py-10 justify-evenly text-center border-b-2 border-gray-700'>
          <div className=' flex p-4 items-end'>
            <p className='font-[800] font-primary text-[80px] leading-tight text-[#B9E901] text-start tracking-normal uppercase'>
            American mass <br/>media company<br/> 
            based in<br/>
             Washington, D.C.,<br/>
             And New York City
            </p>
          </div>
          <div className='flex pb-8 items-end '>
            <p className='text-right font-[500] font-primary text-[24px] leading-tight text-[#737373] tracking-normal '>
            American mass media company based in <br/>Washington, D.C., jksaxb qwjhbsd hb<br/> jbhwsqjbs ijqwdh jbwqdb jiwqbdjqwbd ijbwd<br/> jbdqijbd jqwdbiwqbd and New York City
            </p>
          </div>
        </div>

      </div>
    </div>

  </section>
};

export default Services;
