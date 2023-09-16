import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";

import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <div className="search flex justify-start">
        <div className="hero-search my-20">
          <div className="search-input px-10 py-5 drop-shadow-xl bg-white flex flex-col  md:flex-row justify-around items-center rounded-2xl border gap-3 relative md:w-[750px]">
            <input
              type="text"
              className="border-0 outline-none pl-4  w-[200px]"
              placeholder="Search jobs by 'skills'"
            />{" "}
            <BiSearch className="text-3xl absolute left-12 top-5 md:top-7 md:left-8 text-gray-500" />
            <RxDividerVertical className="text-gray-500 text-4xl absolute left-[225px] hidden md:block" />
            <input
              type="text"
              className="border-0 outline-none pl-3 my-3 md:my-0 md:w-[140px]"
              placeholder="All cities 'Delhi' "
            />
            <MdOutlineLocationOn className="text-3xl absolute left-12 top-16 md:top-7 md:left-[260px] text-gray-500 " />
            <button className="min-w-[240px] max-w-full bg-green-700 text-white py-3 px-4 rounded-md mx-3 md:mx-0">
              <Link to="/jobs">Search jobs</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
