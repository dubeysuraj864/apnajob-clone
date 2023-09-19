import { IoIosArrowDown } from "react-icons/io";
function FAQs() {
  return (
    <>
      <div className="faqs bg-white lg:w-[1050px] p-10 drop-shadow-md border-l-[1px] border-t-[1px] border-r-[1px] border-b-[3px] border-green-500 my-20">
        <h1 className="text-4xl font-bold my-10">Frequently asked questions</h1>
        <div className="faq1 mb-10">
          <div className="faq-title flex justify-between items-center w-full]">
            <span className="text-2xl my-2">
              Where can I find a job via the Apna app?
            </span>
            <span className="bg-green-300 text-xl cursor-pointer p-2 group">
              <IoIosArrowDown className="text-green-700" />
            </span>
          </div>
          <div className="faq1-answer">
            We are live in 74 cities that include Ahmedabad, Bangalore, Chennai,
            Delhi, Hyderabad, Kolkata, Mumbai, and Pune. You can select your
            location and job category in the app, and find all the relevant jobs
            in your city. You will also receive notifications for new job
            updates. With over 10,000 jobs getting added every day, find the
            latest vacancies and apply fast.
          </div>
          <hr className="mt-6" />
        </div>
        <div className="faq1 mb-10">
          <div className="faq-title flex justify-between items-center w-full]">
            <span className="text-2xl my-2">
              Where can I find a job via the Apna app?
            </span>
            <span
              id="faq-drop"
              className="bg-green-300  text-xl cursor-pointer p-2 "
            >
              <IoIosArrowDown className="text-green-700" />
            </span>
          </div>
          <div className="faq1-answer">
            We are live in 74 cities that include Ahmedabad, Bangalore, Chennai,
            Delhi, Hyderabad, Kolkata, Mumbai, and Pune. You can select your
            location and job category in the app, and find all the relevant jobs
            in your city. You will also receive notifications for new job
            updates. With over 10,000 jobs getting added every day, find the
            latest vacancies and apply fast.
          </div>
          <hr className="mt-6" />
        </div>
        <div className="faq1">
          <div className="faq-title flex justify-between items-center w-full]">
            <span className="text-2xl my-2">
              Where can I find a job via the Apna app?
            </span>
            <span className="bg-green-300 text-xl cursor-pointer p-2 ">
              <IoIosArrowDown className="text-green-700" />
            </span>
          </div>
          <div className="faq1-answer">
            We are live in 74 cities that include Ahmedabad, Bangalore, Chennai,
            Delhi, Hyderabad, Kolkata, Mumbai, and Pune. You can select your
            location and job category in the app, and find all the relevant jobs
            in your city. You will also receive notifications for new job
            updates. With over 10,000 jobs getting added every day, find the
            latest vacancies and apply fast.
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
