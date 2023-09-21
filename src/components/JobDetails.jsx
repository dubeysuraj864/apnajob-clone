/* eslint-disable eqeqeq */
import {
  HiBuildingOffice2,
  HiMiniCurrencyRupee,
  HiUserGroup,
  HiOutlineBookOpen,
} from "react-icons/hi2";
import { BiSolidTime, BiMaleFemale } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsChatRightText, BsStars } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { useParams } from "react-router-dom";

function JobDetails({ data }) {
  const { FIELD1 } = useParams();
  return (
    <>
    
      <div className="job-details ">
        
        {data && data.filter((x) => x.FIELD1 == FIELD1)
          .map((x, index) => {
            return (
              <div key={index}>
              <div className="job-details-head p-2 md:px-40 py-10 bg-[#3e273f] h-auto w-full text-white ">
          <span className="">
            Jobs {">"} Legal {">"} Delhi-NCR {">"} {x.Loction}{" "}
            {">"} {x.job_titel}{" "}
          </span>

          <span className="job-details">
            <h1 className="text-4xl font-semibold mt-10 flex flex-col md:flex-row justify-between  md:items-center">
              <span>{x.job_titel}</span>{" "}
              <span>
                {" "}
                <button className="min-w-[240px] max-w-full bg-green-700 text-white py-3 px-4 rounded-md my-4 md:my-0 text-lg md:mx-0">
                  <Link to="/jobs">Apply Now</Link>
                </button>
              </span>
            </h1>
            <h5 className="mt-2 font-light">{x.company_name}</h5>
            <div className="flex items-center mt-2 font-light">
              <HiBuildingOffice2 className="text-xl mr-2" />
              <span>{x.Loction}</span>
            </div>
            <div className="flex items-center mt-1 font-light">
              <HiMiniCurrencyRupee className="text-xl mr-2" />
              {x.salery} per month (Fixed + incentives)
            </div>
            <span className="flex font-light flex-nowrap items-center bg-white w-max px-3 py-1 rounded-full mt-6 text-rose-950">
              <BiSolidTime className="text-xl mr-2 " />
              {x.other_role}
            </span>
          </span>
        </div>
        {/* interested */}
        <div className="interested bg-gray-100 flex justify-start md:justify-center items-center py-4 p-2">
          <span className="interested-icon"></span>{" "}
          <span className="how-many-interested flex flex-col md:flex-row md:items-center gap-4">
            <HiUserGroup className="text-2xl mr-2" />
            <div>184 people interested in this job </div>{" "}
            <span className="hidden md:block">●</span>{" "}
            <div>Posted on : 09-Sep-2023 </div>{" "}
            <span className="hidden md:block">●</span>
            <div>Expires on : 25-Sep-2023</div>
          </span>
        </div>
        {/* job details description */}
        <div className="job-details-description flex flex-col p-2 md:px-40">
          <h3 className="text-3xl my-6">Job Details</h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {/* education */}
            <div className="flex">
              <HiOutlineBookOpen className="mr-2 text-xl" />
              <div>
                <div className="flex items-center text-sm">Education</div>
                <div>
                  Graduate <span className="text-sm">(Bachelor Degree)</span>
                </div>
              </div>
            </div>
            {/* English level */}
            <div className="flex">
              <BsChatRightText className="mr-2 text-md" />
              <div>
                <div className="flex items-center text-sm">English Level</div>
                <div>Good English</div>
              </div>
            </div>
            {/* Experience */}
            <div className="flex">
              <BsStars className="mr-2 text-xl" />
              <div>
                <div className="flex items-center text-sm">Experience</div>
                <div>Min. 1 Years</div>
              </div>
            </div>
            {/* Gender */}
            <div className="flex">
              <BiMaleFemale className="mr-2 text-xl" />
              <div>
                <div className="flex items-center text-sm">Gender</div>
                <div>Both</div>
              </div>
            </div>
            {/* Address */}
            <div className="flex">
              <GrMapLocation className="mr-2 text-xl" />
              <div>
                <div className="flex items-center text-sm">Address</div>
                <div className="w-[300px]">
                  Sector 20, Gurugram, Haryana, India, Ram Chowk Dundahera
                  Gurgaon, Delhi-NCR, Delhi - 110001
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* job - full description */}
        <div className="description md:px-40 p-2">
          <h3 className="text-3xl my-6">Job Description</h3>
          <block className="leading-7 break-keep">
            Greetings from Ganapathy SP, HR Consulting Division, Neugene
            International Inc. Please find the JD for the role of IPO our
            esteemed Client’ M/s MSIL. · Name of the Position: Manager – Legal –
            IPO. · Qualification: BL / ML / LLB and along with Engineering added
            advantage. · Skill Sets: Legal with Trademark, copyright and patent
            experience · Level: Manager · Experience: –8 to 10 years at Manager
            Level · Location: Gurgaon. · Interviews: Candidates will receive a
            call directly from the client if shortlisted. There will be three
            interview rounds 1) Basic HR Round 2) Online Test 3) Technical Round
            · Role and Responsibilities: 1. To educate, motivate on creation and
            protection of intellectual property to various business functions 2.
            To conduct ideation workshops and coordinate for new idea
            generation/ submission 3. To perform relevant patent study with
            respect to patentability, Freedom to operate, Invalidation, State of
            art search and infringement on different technologies 4. To work
            closely with Marketing team and conducting trademark searches,
            giving opinion on trademark usage/ infringement, filing and
            prosecution of trademark applications 5. To advise business
            functions on copyrights protection; handling copyright filings and
            prosecution Note: Kindly Fill up the attached Formats. Resume should
            in MS Word Format. (Other types you can send for references and
            carry at the time of interview) Any quires, feel free to call the
            below signed. Ganapathy SP Neugene International Inc. HR Consulting
            Division
          </block>

          <div className="know-someone flex items-center my-10  bg-gray-100 w-max px-2 md:px-12 py-4">
            <span className="mr-2">
              Know someone who will be fit for this job?
            </span>
            <span className="flex items-center text-green-600 cursor-pointer">
              <GoShareAndroid className="mr-2 text-green-600" />
              Share
            </span>
          </div>
        </div>
              </div>
            );
          })}
        
      </div>
    </>
  );
}

export default JobDetails;
