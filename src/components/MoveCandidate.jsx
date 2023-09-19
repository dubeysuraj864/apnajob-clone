function MoveCandidate() {
  return (
    <>
      <div className="moving-candidates bg-white rounded-full p-4 w-[300px] break-words flex items-center ">
        <div className="left">
          <img
            src="https://cpr.pt/wp-content/uploads/2019/01/16176889_112685309244626_578204711_n.jpg"
            className="w-[50px] h-[50px] rounded-full mr-5"
            alt="person"
          />
        </div>
        <div className="right w-[250px] break-words">
          <h2 className=" flex flex-wrap">
            Mark has fixed an interview with Elon.
          </h2>
        </div>
      </div>
    </>
  );
}

export default MoveCandidate;
