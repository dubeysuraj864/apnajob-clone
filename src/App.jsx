import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Jobs from "./pages/Jobs";
import JobDetails from "./components/JobDetails";
import EmployerLogin from "./pages/EmployerLogin";
import CandidateLogin from "./pages/CandidateLogin";
import data from "./csvjson.json";
import Loader from "./components/Loader";

const Jobs = React.lazy(()=> import("./pages/Jobs"))

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/candidate-login" element={<CandidateLogin />} />
          <Route path="/" element={<Navbar />}>
           
              <Route index element={<Home />} />
             
              <Route path="/jobs" element={ <Suspense fallback={<Loader/>}><Jobs />   </Suspense>} />
           
              <Route
                path="/job-details/:FIELD1"
                element={<JobDetails data={data} />}
              />
              <Route path="/employer-login" element={<EmployerLogin />} />
      
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
