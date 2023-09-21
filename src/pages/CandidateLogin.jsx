/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { IoIosCloudDone, IoIosArrowBack } from "react-icons/io";
function CandidateLogin() {
  return (
    <>
      <div className="candidate-login flex flex-col-reverse  md:flex-row">
        <div className="candidate-left px-10 py-10 flex flex-col items-start justify-between md:h-screen h-auto md:w-[45%] text-white bg-[#3e273f]">
          <div className="welcome">
            <div className="logo my-4">
              <Link to="/">
                <img
                  src="https://blogs.apna.co/content/images/2023/07/apna-logo--1---1-.png"
                  className="w-[40px] h-[40px]"
                  alt="apna-job"
                />
              </Link>
            </div>
            <h2 className="text-4xl my-2">Complete your profile! 👋</h2>
            <h4 className="my-2">
              Unlock 500+ jobs from top companies and receive direct calls from
              HRs
            </h4>
            <ul className="my-6">
              <li className="flex items-center my-4">
                {" "}
                <IoIosCloudDone className="mr-2 text-xl" />{" "}
                <span>Takes only 4 steps</span>
              </li>
              <li className="flex items-center my-4">
                {" "}
                <IoIosCloudDone className="mr-2 text-xl" />{" "}
                <span>TStand out among other candidates</span>
              </li>
              <li className="flex items-center my-4">
                {" "}
                <IoIosCloudDone className="mr-2 text-xl" />{" "}
                <span>Direct calls from top company HRs</span>
              </li>
            </ul>
          </div>
          <div className="candidate-other">
            <h4>Trusted by over 2 lakhs+ companies</h4>
            <div className="companies-logo items-center grid grid-cols-4 grid-rows-2 gap-2 mt-6 md:pr-20 ">
              <img
                src="https://cdn.apna.co/cloudinary/home_page_images/zomato-logo.png"
                alt="FIELD1"
              />

              <img
                className="invert"
                src="https://cdn.apna.co/cloudinary/home_page_images/Uber.png"
                alt="FIELD1"
              />

              <img
                src="https://cdn.apna.co/cloudinary/home_page_images/Licious.png"
                alt="FIELD1"
              />

              <img
                src="https://cdn.apna.co/cloudinary/home_page_images/Paytm.png"
                alt="FIELD1"
              />

              <img
                src="https://cdn.apna.co/cloudinary/home_page_images/Indiamart.png"
                alt="FIELD1"
              />
              <img
                className="invert"
                src="https://cdn.apna.co/cloudinary/home_page_images/Delhivery.png"
                alt="FIELD1"
              />
              <img
                className="ml-10"
                src="https://cdn.apna.co/cloudinary/home_page_images/Zepto.png"
                alt="FIELD1"
              />
            </div>
          </div>
        </div>
        <div className="candidate-right flex justify-between flex-col md:ml-24 text-black px-10 py-10">
          <div>
            <Link className="flex items-center" to="/">
              <IoIosArrowBack className="text-2xl" /> Back
            </Link>
            <form className="mt-10">
              <h2 className="my-4 text-2xl font-bold">
                Enter your mobile number
              </h2>
              <input
                className=" p-4  border rounded-xl w-[350px] md:w-[400px] bg-slate-50 focus:outline-green-700"
                type="tel"
                name="tel"
                id="tel"
                placeholder="+91 Eg: 9999555123"
              />
            </form>
          </div>
          <div className="tandc flex flex-col mt-8 md:mt-0 md:items-center ">
            By continuing, you agree to the Apna’s <br />
            <div className="flex">
              {" "}
              <a href="#" className="text-green-700" target="_blank">
                Terms of service 
              </a>
              {" "} &nbsp; and &nbsp; {  " "}
              <a className="text-green-700" href="#" target="_blank">
                Privacy Policy 
              </a>
            </div>
            <div className="flex items-center mt-10">
              <input
                className="mr-2 bg-green-700 text-2xl focus:bg-green-700 active:bg-green-700"
                type="checkbox"
                name="accept"
                id="FIELD1"
              />
              <span>I would like to get latest job updates on Whatsapp</span>
            </div>
            <hr className="border-b-[.5px] mt-2 border w-full" />
            <Link to="/jobs">
              <button className="md:min-w-[400px] w-[350px] my-4 max-w-full bg-[#493949a5] text-xl text-white py-3 px-4 rounded-md mx-0 md:mx-0">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateLogin;
