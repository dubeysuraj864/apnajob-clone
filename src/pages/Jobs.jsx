import FAQs from "../components/FAQs";
import FilterCategory from "../components/FilterCategory";
import JobsCard from "../components/JobsCard";
import Search from "../components/Search";
import { HiFilter } from "react-icons/hi";

function Jobs() {
  return (
    <>
      <div className="Jobs flex flex-col items-center text-gray-700">
        {/* search */}
        <div className="jobs-search flex justify-start">
          <Search />
        </div>
        <div className="category w-[90%] lg:w-[54%]">
          <h2 className="text-2xl font-medium">Showing all jobs</h2>
          {/* filter */}
          <div className="jobs-categories flex justify-center items-center gap-3">
            <button>
              <HiFilter className="text-4xl border rounded-full p-2" />
            </button>
            <div className="scrollable flex justify-start items-center overflow-auto">
              <FilterCategory category="Department" />
              <FilterCategory category="Salary" />
              <FilterCategory category="Experience" />
              <FilterCategory category="Education" />
              <FilterCategory category="Work mode" />
              <FilterCategory category="Work type" />
              <FilterCategory category="work shift" />
              <FilterCategory category="Posted in" />
              <FilterCategory category="Company" />
              <FilterCategory category="Sort by" />
              <FilterCategory category="Others" />
            </div>
          </div>
        </div>
        {/* Job Cards */}
        <div className="jobs-cards grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2">
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard /> <JobsCard />
          <JobsCard />
        </div>
        <div className="bg-gray-100 w-full flex justify-center">
          <FAQs />
        </div>
      </div>
    </>
  );
}

export default Jobs;
