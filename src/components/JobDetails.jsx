import { HiBuildingOffice2, HiMiniCurrencyRupee } from "react-icons/hi2";
import { BiSolidTime } from "react-icons/bi";
import { Link } from "react-router-dom";
function JobDetails() {
  return (
    <>
      <div className="job-details ">
        <div className="job-details-head md:px-40 py-10 bg-rose-950 h-auto w-full text-white ">
          <span className="">
            Jobs {">"} Legal {">"} Delhi-NCR {">"} Ram Chowk Dundahera Gurgaon{" "}
            {">"} Manager - Legal - IPO{" "}
          </span>

          <span className="job-details">
            <h1 className="text-4xl font-semibold mt-10 flex justify-between items-center">
              <span>Manager - Legal - IPO</span>{" "}
              <span>
                {" "}
                <button className="min-w-[240px] max-w-full bg-green-700 text-white py-3 px-4 rounded-md mx-3 text-lg md:mx-0">
                  <Link to="/jobs">Apply Now</Link>
                </button>
              </span>
            </h1>
            <h5 className="mt-2 font-light">Neugene International Inc</h5>
            <div className="flex text-center mt-2">
              <HiBuildingOffice2 className="text-xl mr-2" />
              <span>Ram Chowk Dundahera Gurgaon</span>
            </div>
            <div className="flex items-center mt-1">
              <HiMiniCurrencyRupee className="text-xl mr-2" />
              69,000 - 149,999 per month (Fixed + incentives)
            </div>
            <span className="flex flex-nowrap items-center bg-white w-max px-3 py-1 rounded-full mt-6 text-rose-950">
              <BiSolidTime className="text-xl mr-2 " />
              Full-time
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
