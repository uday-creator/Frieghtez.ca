import React from "react";
import { CheckCircle2, Check } from "lucide-react";

const steps = [
  { label: "Confirmed", status: "done" },
  { label: "Dispatched", status: "current" },
  { label: "In Transit", status: "upcoming" },
  { label: "Delivered", status: "upcoming" },
];

const TripTracker = () => {
  return (
    <div className="rounded-xl border border-gray-300 p-4 w-72 bg-white">
      <div className="flex flex-col gap-5 relative">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className={`flex items-start gap-3 p-2 rounded-lg relative
              ${
                step.status === "current"
                  ? "bg-orange-50 border border-orange-400"
                  : "bg-gray-50"
              }
            `}
          >
            {/* Vertical dashed line */}
            {index !== steps.length - 1 && (
              <div className="absolute left-4 top-7 h-full w-0.5 border-l-2 border-dashed border-orange-400 z-0" />
            )}

            {/* Status circle */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 z-10
                ${
                  step.status === "done"
                    ? "bg-orange-600 text-white"
                    : "border-2 border-dashed border-orange-400 text-orange-600"
                }
              `}
            >
              {step.status === "done" ? (
                <CheckCircle2 size={16} />
              ) : (
                <Check size={16} />
              )}
            </div>
            {/* <div className="w-2 h-2 rounded-full bg-orange-400" /> */}
            {/* Step label */}
            <p className="text-sm text-gray-800">{step.label}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10">
        <p className="font-semibold text-base text-gray-800">
          Real-Time Trip updates!
        </p>
        <p className="text-sm text-gray-600">
          Track every trip as it happens with real-time updates that keep you
          informed and in control.
        </p>
      </div>
    </div>
  );
};

export default TripTracker;
