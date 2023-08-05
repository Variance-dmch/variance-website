import React from 'react';
import {offer2} from '../assets/offer2.svg'
import {BsArrowUpRight} from 'react-icons/bs'


const Work = () => {
  return (
    <section className=" mx-auto w-[80%] p-8">
      <div>
        <div className="flex xl:flex-row flex-col w-full space-x-[200px] justify-center   ">
          {/* first */}
          <div className="flex justify-start flex-col items-start space-y-6 xl:pb-64  pb-1">
            {/* card1 */}
            <div className="flex  flex-col group items-center space-y-8 bg-gray-300 p-4">
              {/* img */}
              <div className=" transition-all duration-200 relative bg-netflix bg-center saturate-0 group-hover:saturate-200 bg-no-repeat xxxl:p-[400px] p-[250px] bg-cover  rounded-[80px] group-hover:rounded-tr-[300px]  ">
                <div className='absolute flex justify-center items-center top-0 right-0 h-[180px] w-[180px] border-gray-300  border-[10px]  rounded-full bg-[#B9E901]  invisible group-hover:visible
                transition-all duration-200 transform group-hover:translate-x-4 group-hover:-translate-y-4 '>
                  <BsArrowUpRight className='w-[75px] h-[75px]   text-[#601FEB]'></BsArrowUpRight>

                </div>
              </div>
              <div className='flex flex-col  space-y-3 '>
                {/* card-heading */}
                <div className="flex  justify-start  ">
                  <p className="work-head">RedBull GmbH</p>
                  <p></p>
                </div>
                {/* card-desc */}
                <div className='work-desc'>
                  American mass media company based in Washington,
                  <br />
                  D.C., and New York City
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="flex flex-col group  items-center space-y-8 bg-gray-300 p-4">
              {/* img */}
              <div className=" transition-all duration-200 rounded-[80px] relative bg-redbull saturate-0 group-hover:saturate-200   bg-center bg-no-repeat xxxl:p-[400px] p-[250px] bg-cover  group-hover:rounded-tr-[300px] ">
                                <div className='absolute flex justify-center items-center top-0 right-0 h-[180px] w-[180px] border-gray-300  border-[10px]  rounded-full bg-[#B9E901]  invisible group-hover:visible 
                                transition-all duration-200 transform group-hover:translate-x-4 group-hover:-translate-y-4'>
                  <BsArrowUpRight className='w-[75px] h-[75px]   text-[#601FEB]'></BsArrowUpRight>

                </div>
              </div>
              <div className='flex flex-col space-y-3 '>
                {/* card-heading */}
                <div className="flex  justify-start  ">
                  <p className="work-head">Netflix Inc</p>
                  <p></p>
                </div>
                {/* card-desc */}
                <div className='work-desc'>
                  American mass media company based in Washington,
                  <br />
                  D.C., and New York City
                </div>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col justify-start items-end space-y-6 pt-64">
            {/* card1 */}
            <div className="flex flex-col group  items-center space-y-8 bg-gray-300 p-4">
              {/* img */}
              <div className=" transition-all duration-200 bg-cola relative saturate-0 group-hover:saturate-200  group-hover:rounded-tr-[300px]  rounded-[80px] bg-center bg-no-repeat xxxl:p-[400px] p-[250px] bg-cover">
                                <div className='absolute flex justify-center items-center top-0 right-0 h-[180px] w-[180px] border-gray-300  border-[10px]  rounded-full bg-[#B9E901]  invisible group-hover:visible 
                                transition-all duration-200 transform group-hover:translate-x-4 group-hover:-translate-y-4'>
                  <BsArrowUpRight className='w-[75px] h-[75px]   text-[#601FEB]'></BsArrowUpRight>

                </div>
              </div>
              <div className='flex flex-col space-y-3 '>
                {/* card-heading */}
                <div className="flex  justify-start  ">
                  <p className="work-head">The Coca-cola Company</p>
                  <p></p>
                </div>
                {/* card-desc */}
                <div className='work-desc'>
                  American mass media company based in Washington,
                  <br />
                  D.C., and New York City
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="flex flex-col group items-center space-y-8 bg-gray-300 p-4">
              {/* img */}
              <div className=" transition-all duration-200 bg-benz relative saturate-0 group-hover:saturate-200  group-hover:rounded-tr-[300px]  rounded-[80px] bg-center bg-no-repeat xxxl:p-[400px] p-[250px] bg-cover">
                                <div className='absolute flex justify-center items-center top-0 right-0 h-[180px] w-[180px] border-gray-300  border-[10px]  rounded-full bg-[#B9E901]  invisible group-hover:visible 
                                transition-all duration-200 transform group-hover:translate-x-4 group-hover:-translate-y-4'>
                  <BsArrowUpRight className='w-[75px] h-[75px]   text-[#601FEB]'></BsArrowUpRight>

                </div>
              </div>
              <div className='flex flex-col space-y-3 '>
                {/* card-heading */}
                <div className="flex  justify-start  ">
                  <p className="work-head">Mercedes AMG</p>
                  <p></p>
                </div>
                {/* card-desc */}
                <div className='work-desc'>
                  American mass media company based in Washington,
                  <br />
                  D.C., and New York City
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
