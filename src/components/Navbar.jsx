import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { RiArrowDropDownLine } from "react-icons/ri";
function Navbar() {
  return (
    <>
      <div className="navbar ">
        <Header />
        <nav className="w-full flex flex-col md:flex-row justify-between items-center sm: px-6 lg:px-28 font-semibold md:px-44">
          {/* ---Left Nav */}
          <div className="md:w-1/2 left-nav flex justify-start items-center ">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://blogs.apna.co/content/images/2023/07/apna-logo--1---1-.png"
                  className="w-[70px] h-[70px]"
                  alt="apna-job"
                />
              </Link>
            </div>
            <div className="nav-link-dropdown mx-20 flex items-center gap-1/2 group cursor-pointer transition-all">
              <span>Jobs</span> <RiArrowDropDownLine className="text-2xl" />
              <div className="absolute z-10 top-24 bg-white px-4 rounded-lg drop-shadow group-hover:block hover:block hidden ">
                <div className="flex items-start">
                  <ul className="font-light text-sm">
                    <li className="my-3 pr-6">Work From Home Jobs</li>
                    <li className="my-3 pr-6">Part Time Jobs</li>
                    <li className="my-3 pr-6">Jobs for Women</li>
                    <li className="my-3 pr-6">Full Time Jobs</li>
                    <li className="my-3 pr-6">Night Shift Jobs</li>
                    <li className="my-3 pr-6">International Jobs</li>
                  </ul>
                  <ul className="font-light text-sm border-l-2 pl-4">
                    <li className="my-3 pr-6">Jobs by City</li>
                    <li className="my-3 pr-6">Jobs by Departments</li>
                    <li className="my-3 pr-6">Jobs by Company</li>
                    <li className="my-3 pr-6">Jobs by Qualification</li>
                    <li className="my-3 pr-6">Others</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-link">Blog</div>
          </div>
          {/* --Right Nav */}
          <div className="md:w-1/2 right-nav flex justify-between md:justify-end items-center py-4 md:py-0">
           <Link to="/employer-login"> <button className="md:mx-20 mx-3 text-green-700">
              Employer Login
            </button></Link>
          <Link to="/candidate-login">
          <button className="bg-green-700 text-white py-2 px-4 rounded-md mx-3 md:mx-0">
              Candidate Login
            </button>
          </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
