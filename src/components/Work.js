import React from 'react';
import {offer2} from '../assets/offer2.svg'

const Work = () => {
  return (
    <section className=" mx-auto w-80%">
      <div>
        <div className="flex flex-row w-full justify-evenly  border-2 border-[#bada55]">
          {/* first */}
          <div className="flex justify-start flex-col items-start space-y-6 pb-64">
            {/* card1 */}
            <div className="flex flex-col group items-center space-y-8 bg-gray-300 p-4">
              {/* img */}
              <div className="  bg-netflix bg-center saturate-0 group-hover:saturate-200 bg-no-repeat p-[300px] bg-cover transition delay-150 duration-1000 rounded-[80px] group-hover:rounded-tr-[300px]  "></div>
              <div className='flex flex-col '>
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
              <div className=" rounded-[80px] bg-redbull saturate-0 group-hover:saturate-200   bg-center bg-no-repeat p-[300px] bg-cover transition delay-150 duration-1000 group-hover:rounded-tr-[300px] "></div>
              <div className='flex flex-col '>
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
          </div>
          {/* second */}
          <div className="flex flex-col justify-start items-end space-y-6 pt-64">
            {/* card1 */}
            <div className="flex flex-col group  items-center space-y-8 bg-gray-300 p-4">
              {/* img */}
              <div className="bg-cola saturate-0 group-hover:saturate-200 transition delay-150 duration-1000 group-hover:rounded-tr-[300px]  rounded-[80px] bg-center bg-no-repeat p-[300px] bg-cover"></div>
              <div className='flex flex-col '>
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
            <div className="flex flex-col group items-center space-y-8 bg-gray-300 p-4">
              {/* img */}
              <div className="bg-benz saturate-0 group-hover:saturate-200 transition delay-150 duration-1000 group-hover:rounded-tr-[300px]  rounded-[80px] bg-center bg-no-repeat p-[300px] bg-cover"></div>
              <div className='flex flex-col '>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
