import {BiSearch} from "react-icons/bi"
import {MdOutlineLocationOn} from "react-icons/md"
import {RxDividerVertical} from "react-icons/rx"
import MoveCandidate from "../components/MoveCandidate";

function Home() {
  return (
    <>
      <div className="home lg:p-28 sm:p-10 p-10 relative bg-gradient-to-r from-white to-transparent md:h-[90vh] h-[80vh] ">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="object-cover w-full h-[80vh] md:h-[90vh] absolute top-0 left-0 -z-10" alt="background" />
        <h4 className="highlight font-bold text-xl text-green-700">INDIA’S #1 JOB PLATFORM</h4>
        <h1 className="py-8 text-4xl md:text-6xl font-bold">Your job search ends here</h1>
        <h3 className=" text-md md:text-2xl font-semilight">Discover 50 lakh+ career opportunities</h3>

        <div className="hero-search my-20">
            <div className="search-input px-10 py-5  bg-white flex flex-col  md:flex-row justify-around items-center rounded-2xl border gap-3 relative md:w-[750px]">
              <input type="text" className="border-0 outline-none pl-4  w-[200px]"  placeholder="Search jobs by 'skills'" /> <BiSearch className="text-3xl absolute left-12 top-5 md:top-7 md:left-8 text-gray-500"/>
              <RxDividerVertical className="text-gray-500 text-4xl absolute left-[225px] hidden md:block"/>
              <input type="text" className="border-0 outline-none pl-3 my-3 md:my-0 md:w-[100px]" placeholder="All cities 'Delhi' " /><MdOutlineLocationOn className="text-3xl absolute left-12 top-16 md:top-7 md:left-[260px] text-gray-500 "/>
              <button className="min-w-[240px] max-w-full bg-green-700 text-white py-3 px-4 rounded-md mx-3 md:mx-0">Search jobs</button>
            </div>
        </div>
          

    <div className="moving flex items-center gap-14 animate-marquee absolute bottom-20">
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>
    <MoveCandidate className="break-words"/>

    </div>

       
      </div>
    </>
  );
}

export default Home;
