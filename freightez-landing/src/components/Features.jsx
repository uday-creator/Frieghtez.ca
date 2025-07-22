import React from "react";
import Im1 from "../assets/Group583.png";
import Im2 from "../assets/Group592.png";
const Features = () => {
  return (
    <div className="flex justify-center mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-3/5 lg:w-3/4">
        {/* Left Card */}
        <div
          className="flex items-center p-3 bg-white rounded-2xl shadow-sm border
        border-[#D1D5DB] bg-gradient-to-b from-white to-[#F6F7F9]"
        >
          {/* Icon */}
          <div className="w-45 mr-6">
            <img src={Im2} alt="Smart App Graphic" />
          </div>
          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              A Smart App for Smarter Trips
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Let drivers view assigned loads, upload
              <br /> documents, track trip progress, and get <br /> updates,
              everything from a mobile app that’s <br />
              <span className="text-orange-500 font-medium">
                simple, fast, and built for the road.
              </span>
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="flex items-center p-6 bg-white rounded-2xl shadow-sm border
        border-[#D1D5DB] bg-gradient-to-b from-white to-[#F6F7F9]"
        >
          {/* Icon */}
          <div className="w-45 mr-6">
            <img src={Im1} alt="Fleet Data" />
          </div>
          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Your Fleet, Backed by Data
            </h3>
            <p className="text-sm text-gray-600">
              Monitor trends, improve efficiency, and stay <br />
              ahead of costly issues with insights built right into your TMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
