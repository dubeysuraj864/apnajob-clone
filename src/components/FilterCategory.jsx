import { RiArrowDropDownLine } from "react-icons/ri";
function FilterCategory(props) {
  return (
    <>
      <div className="filter-category my-6 flex justify-start items-center ">
        <div className="categories-name min-w-[140px] w-auto flex justify-center">
          <button className="border rounded-full p-2 flex justify-center items-center">
            <span className="pl-3 flex flex-nowrap">{props.category}</span>
            <RiArrowDropDownLine className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterCategory;
