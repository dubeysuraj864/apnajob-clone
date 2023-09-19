import MoveCandidate from "../components/MoveCandidate";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <div className="home lg:p-28 sm:p-10 p-10 relative bg-gradient-to-r from-white to-transparent md:h-[90vh] h-[80vh] ">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="object-cover w-full h-[80vh] md:h-[90vh] absolute top-0 left-0 -z-10"
          alt="background"
        />
        <h4 className="highlight font-bold text-xl text-green-700">
          INDIA’S #1 JOB PLATFORM
        </h4>
        <h1 className="py-8 text-4xl md:text-6xl font-bold">
          Your job search ends here
        </h1>
        <h3 className=" text-md md:text-2xl font-semilight">
          Discover 50 lakh+ career opportunities
        </h3>

        <Search />

        <div className="moving flex items-center gap-14 animate-marquee absolute bottom-4">
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
          <MoveCandidate className="break-words" />
        </div>
      </div>
    </>
  );
}

export default Home;
