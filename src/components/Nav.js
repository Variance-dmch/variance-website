import React from "react";
import { Link } from "react-scroll";
import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between  mx-0 p-0 rounded-xl bg-slate-500 ">
      {/* first */}
      <div className="">
        <Link>
        <div className="p-2 ">
        <img src={logo}/>

        </div>
        </Link>
      </div>
      {/* second */}
      <div className="flex  flex-row justify-between space-x-4 items-center text-[16px]">

       <Link>Features</Link>
       <Link>Privacy</Link>
       <Link>Help center</Link>
       <Link>For Business</Link>


      </div>
    </nav>
  );
};

export default Nav;
