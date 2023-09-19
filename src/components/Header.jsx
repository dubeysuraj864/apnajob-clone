import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
function Header() {
  return (
    <>
      <div className="header bg-yellow-100 flex flex-col md:flex-row justify-center items-center border-b-2 border-yellow-700 p-2">
        <span className="px-3"> Apna launches International jobs 🎉</span>
        <a
          href="http://"
          className="flex items-center text-green-700 font-medium"
          target="_blank"
          rel="noreferrer"
        >
          Check out now <BsArrowRight className="mx-2 font-bold" />
        </a>
        <button className="text-green-700 absolute float-right right-96">
          <AiOutlineCloseCircle />
        </button>
      </div>
    </>
  );
}

export default Header;
