import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import React, { Suspense } from "react";
import Loader from "./Loader"

import { Link } from "react-router-dom";

function Search() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="search flex justify-start">
        <div className="hero-search my-20">
          <div className="search-input px-10 py-5 drop-shadow-xl bg-white flex flex-col  md:flex-row justify-around items-center rounded-2xl border gap-3 relative md:w-[1040px]">
            <input
              type="text"
              className="border-0 outline-none pl-4  md:w-[400px]"
              placeholder="Search jobs by 'skills'"
            />{" "}
            <BiSearch className="text-3xl absolute left-12 top-5 md:top-7 md:left-8 text-gray-500" />
            <RxDividerVertical className="text-gray-100 text-4xl absolute left-[455px] hidden md:block font-light" />
            <input
              type="text"
              className="border-0 outline-none pl-3 my-3 md:my-0 md:w-[140px]"
              placeholder="All cities 'Delhi' "
            />
            <MdOutlineLocationOn className="text-3xl absolute left-12 top-16 md:top-7 md:left-[500px] text-gray-500 " />
            <Link onClick={scrollToTop} to="/jobs">
           
              <Suspense fallback={<Loader />}>
              <button className="min-w-[240px] max-w-full bg-green-700 text-white py-3 px-4 rounded-md mx-3 md:mx-0">
                Search jobs
              </button>
    </Suspense>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
