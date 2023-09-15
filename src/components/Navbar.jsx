import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import {RiArrowDropDownLine} from "react-icons/ri"
function Navbar() {
  return (
    <>
      <div className="navbar">
        <Header />
        <nav className="w-full flex flex-col md:flex-row justify-between items-center sm: px-6 lg:px-28 font-semibold">
          {/* ---Left Nav */}
          <div className="md:w-1/2 left-nav flex justify-start items-center ">
            <div className="logo">
              <img
                src="https://blogs.apna.co/content/images/2023/07/apna-logo--1---1-.png"
                className="w-[70px] h-[70px]"
                alt="apna-job"
              />
            </div>
            <div className="nav-link-dropdown mx-20 flex items-center gap-1/2">Jobs <RiArrowDropDownLine className="text-2xl"/></div>
            <div className="nav-link">Blog</div>
          </div>
          {/* --Right Nav */}
          <div className="md:w-1/2 right-nav flex justify-between md:justify-end items-center py-4 md:py-0">
            <button className="md:mx-20 mx-3 text-green-700">Employer Login</button>
            <button className="bg-green-700 text-white py-2 px-4 rounded-md mx-3 md:mx-0">Candidate Login</button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
