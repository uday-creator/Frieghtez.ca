import React from "react";
import TripTracker from "./TripTracker";
import WeeklyReport from "./WeeklyReport";
import TableDetails from "./TableDetails";
import ChartImage from "../assets/ChartImage.png";

const FeaturesKeepMoving = () => {
  return (
    <section className="bg-white pt-[20px] pb-5 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Features That Keep You Moving!
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Smart tools that help you stay organized,
          <br />
          compliant, and always in control.
        </p>
      </div>
      <div className="mt-12 grid gap-2 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto ">
        <div clasName="w-full max-w-[320px]">
          <TripTracker />
        </div>

        {/* <div className="w-full max-w-[250px]">
          <WeeklyReport />
        </div>

        <div className="w-full max-w-[320px]">
          <TableDetails />
        </div> */}
        <div className="w-full rounded-xl border border-gray-300 p-2">
          <img
            src={ChartImage} // replace this with your actual image path or URL
            alt="Report and Table Visual"
            className="w-[570px] h-[250px] rounded-lg shadow-md"
          />
          <div className="mt-5 text-left">
            <p className="font-semibold text-base text-gray-800">
              Get Paid Without the Hassle
            </p>
            <p className="text-sm text-gray-600">
              Generate professional invoices in seconds, track payment status in
              real-time, and stay on top of all billing, without jumping between
              tools or chasing clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesKeepMoving;
