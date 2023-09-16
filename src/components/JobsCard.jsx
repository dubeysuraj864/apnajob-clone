import {HiBuildingOffice} from "react-icons/hi2";
import {FaLocationDot,FaWallet} from "react-icons/fa6";

function JobsCard() {
  return (
    <>
      <div className="job-card border p-4 text-gray-500">
        {/* job title */}
        <div className="job-card-title flex items-start mb-4">
          <div className="job-icon mr-3"><HiBuildingOffice className="text-5xl p-1 border rounded-lg"/></div>
          <div className="job-card-title">
            <div className="card-title font-medium text-black">Mean Stack Developer</div>
            <div className="company-name font-light text-sm">Amazon India Limited</div>
          </div>
        </div>
        {/* Venue */}
        <div className="job-venue flex items-center my-2">
            <span className="venue-icon mr-4"><FaLocationDot/></span>
            <span className="venue-name">Bangalore</span>
        </div>
        <div className="pay flex items-center my-2">
            <span className="pay-icon mr-4"><FaWallet/></span>
            <span className="how-much-pay text-sm"> ₹1,30,000 - ₹1,49,999</span>
        </div>
      </div>
    </>
  );
}

export default JobsCard;
