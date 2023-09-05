import React from "react";
import { Link } from "react-scroll";
import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav className="  fixed  top-0 bg-gray-300 overflow-hidden w-full z-50">
      <div className="flex flex-row justify-between">

      {/* first */}
      <div className="">
        <Link to="home">
        <div className="p-2 ">
        <img src={logo}/>

        </div>
        </Link>
      </div>
      {/* second */}
      <div className="flex px-2 flex-row justify-between space-x-4 items-center text-[16px] text-black font-primary">

       <Link to="home"
       smooth={true}
      //  spy={true}
       className=" hover:cursor-pointer"
       >
        Home</Link>
       <Link to="services"
       smooth={true}
      //  spy={true}
       className=" hover:cursor-pointer"
       >
        Services</Link>
       <Link to="work"
       smooth={true}
      //  spy={true}
       className=" hover:cursor-pointer"
       >
        Work</Link>
       <Link
        className=" hover:cursor-pointer"
       >
        Business</Link>


      </div>
      </div>
    </nav>
  );
};

export default Nav;
