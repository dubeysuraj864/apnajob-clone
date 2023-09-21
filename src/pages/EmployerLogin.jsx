import { Link } from "react-router-dom";
function EmployerLogin() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="employer-login flex flex-col bg-gray-100 md:h-auto">
        <div className="flex md:flex-row  flex-col items-center justify-around my-20">
          <div className="left-emp-login">
            {" "}
            <h4 className="highlight font-bold text-xl text-green-700">
              INDIA’S #1 JOB PLATFORM
            </h4>
            <h1 className="py-8 text-4xl md:text-6xl font-bold">
              Find the right <br /> candidate. Fast.
            </h1>
            <h3 className=" text-md md:text-xl font-light">
              Trusted by 5 Cr+ Candidates | 4 Lakh+ Employers
            </h3>
          </div>
          <div className="right-emp-login border bg-white mt-10 p-10 rounded-3xl">
            <form className="flex flex-col">
              <h1 className="text-2xl font-bold">Employer Login/Sign Up</h1>

              <div className="flex md:flex-row   items-center my-4">
                {" "}
                <label className=" p-4  bg-slate-200 border text-md rounded-xl mr-4">
                  +91
                </label>
                <input
                  className=" p-4  border rounded-xl w-[240px] md:w-[400px] bg-slate-200"
                  type="tel"
                  name="mobile-number"
                  id="mobile-number"
                  placeholder="Mobile number"
                />
              </div>
              <Link onClick={scrollToTop} to="/jobs">
                <button className="md:min-w-full md:max-w-full w-[300px] bg-green-700 text-white py-4 px-4 rounded-xl mx-3 md:mx-0 text-xl mb-3">
                  Search jobs
                </button>
              </Link>
              <Link to="*" className="underline ">
                <span className="pt-4">🚀 Click here for Enterprise login</span>
              </Link>
            </form>
          </div>
        </div>

        {/* COMPANIES THAT HIRE FROM US */}

        <div className="companies flex flex-col items-center justify-center mx-5 pb-10 md:pb-0 md:mx-20">
          <div className="companies-heading text-2xl font-bold my-10">COMPANIES THAT HIRE FROM US</div>
          <div className="companies-logo items-center grid  grid-cols-4 grid-rows-4 md:grid-cols-7   md:grid-rows-2   gap-4 md:gap-10">
            <img
            className="w-["
              src="https://cdn.apna.co/cloudinary/home_page_images/flipkart.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Swiggy.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/zomato-logo.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/rapido.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Uber.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/PharmEasy.png"
              alt="FIELD1"
            />

            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Licious.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Byjus.png"
              alt="FIELD1"
            />

            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Paytm.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Jubliant.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Shaadi.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Indiamart.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Delhivery.png"
              alt="FIELD1"
            />
            <img
              src="https://cdn.apna.co/cloudinary/home_page_images/Zepto.png"
              alt="FIELD1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployerLogin;
