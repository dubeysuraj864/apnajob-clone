import { HiBuildingOffice } from "react-icons/hi2";
import { FaLocationDot, FaWallet, FaSquareParking } from "react-icons/fa6";
// import {GiNotebook} from "react-icons/gi"
// import {MdOutlineWork} from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io";

function JobsCard(props) {
  return (
    <>
      <div className="job-card border  p-4 rounded-lg text-gray-500 m-4 cursor-pointer w-[400px] md:w-[500px] relative">
        <IoIosArrowForward className="text-xl text-green-700 absolute right-2 cursor-pointer" />
        {/* job title */}
        <div className="job-card-title flex items-start mb-4">
          <div className="job-icon mr-3">
            <HiBuildingOffice className="text-5xl p-1 border rounded-lg" />
          </div>
          <div className="job-card-title">
            <div className="card-title font-medium text-black">
              {props.job_titel}
            </div>
            <div className="company-name font-light text-sm">
              {props.company_name}
            </div>
          </div>
        </div>
        {/* Venue */}
        <div className="job-venue flex items-center my-2">
          <span className="venue-icon mr-4">
            <FaLocationDot />
          </span>
          <span className="venue-name">{props.Location}</span>
        </div>
        {/* pay */}
        <div className="job-pay flex items-center my-2">
          <span className="pay-icon mr-4">
            <FaWallet className="" />
          </span>
          <span className="how-much-pay text-sm"> {props.salery}</span>
        </div>
        {/* other */}
        <div className="jpb-others flex items-center flex-wrap font-light gap-2">
          <span className="partime flex items-center mr-3 bg-gray-200 p-1">
            <FaSquareParking className="mr-2" />
            {props.other_role}
          </span>
          {/* <span className="job-test flex items-center mr-3 bg-gray-200 p-1"><GiNotebook className="mr-2"/>No test required</span>
            <span className="job-who flex items-center mr-3 bg-gray-200 p-1"><MdOutlineWork className="mr-2"/>Freshers can apply</span> */}
        </div>
      </div>
    </>
  );
}

export default JobsCard;
