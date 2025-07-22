import React from "react";
import TripTracker from "./TripTracker";
import WeeklyReport from "./WeeklyReport";
import TableDetails from "./TableDetails";
import ChartImage from "../assets/ChartImage.png";
import graph from "../assets/Group572.png";
import Receivables from "../assets/Receivable.png";
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
      <div className="mt-12 grid gap-2 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto ">
        {/* <div clasName="w-full max-w-[320px]"> */}
        <TripTracker />
        {/* </div> */}

        {/* <div className="w-full max-w-[250px]">
          <WeeklyReport />
        </div>

        <div className="w-full max-w-[320px]">
          <TableDetails />
        </div> */}
        <div className="w-full md:col-span-2 rounded-xl border border-gray-300 p-2">
          <img
            src={ChartImage} // replace this with your actual image path or URL
            alt="Report and Table Visual"
            className="w-[670px] h-[250px] rounded-lg shadow-md"
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

      <div className="mt-12 grid gap-2 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto ">
        <TripTracker />

        <div className="w-full md:col-span-2 rounded-xl border border-gray-300 p-2">
          <div class="flex gap-6">
            <div class="rounded-2xl border-2xl border-[#D1D5DB] shadow-md overflow-hidden bg-white">
              <img
                src={graph} // replace this with your actual image path or URL
                alt="Weekly Reports"
                className="w-full h-auto"
              />
            </div>
            <div class="rounded-2xl border-2xl border-[#339DFF] shadow-md overflow-hidden bg-white">
              <img
                src={Receivables} // replace this with your actual image path or URL
                alt="Receivables"
                className="w-[470px] h-[250px] rounded-lg shadow-md"
              />
            </div>
          </div>
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
