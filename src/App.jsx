import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Jobs from "./pages/Jobs"
import JobDetails from "./components/JobDetails";

function App() {
 
  return (
    <div className="App overflow-hidden">
    
      <BrowserRouter>
        <Routes>
    
          <Route path="/" element={<Navbar/>} >
            <Route index element={<Home/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/job-details" element={<JobDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
