import { Link } from "react-router-dom";
function EmployerLogin() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="employer-login flex flex-col bg-gray-100 h-screen">
        <div className="flex items-center justify-around my-20">
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
          <div className="right-emp-login border bg-white p-10 rounded-3xl">
            <form>
              <h1 className="text-2xl font-bold">Employer Login/Sign Up</h1>

              <div className="flex items-center my-4">
                {" "}
                <label className=" p-4 bg-slate-200 border text-md rounded-xl mr-4">
                  +91
                </label>
                <input
                  className=" p-4  border rounded-xl w-[400px] bg-slate-200"
                  type="tel"
                  name="mobile-number"
                  id="mobile-number"
                  placeholder="Mobile number"
                />
              </div>
              <Link onClick={scrollToTop} to="/jobs">
                <button className="min-w-full max-w-full bg-green-700 text-white py-4 px-4 rounded-xl mx-3 md:mx-0 text-xl mb-3">
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

        <div className="companies flex justify-center ">
          <div className="companies-heading">COMPANIES THAT HIRE FROM US</div>
          <div className="companies-logo"></div>
        </div>
      </div>
    </>
  );
}

export default EmployerLogin;
