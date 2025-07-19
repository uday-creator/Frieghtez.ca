import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", receivable: 2400, payable: 2200 },
  { day: "Tues", receivable: 1398, payable: 1200 },
  { day: "Wed", receivable: 1800, payable: 1600 },
  { day: "Thur", receivable: 2000, payable: 1900 },
  { day: "Fri", receivable: 3200, payable: 2600 },
];

const WeeklyReport = () => (
  <div className="bg-white rounded-xl border border-gray-300 shadow-md p-5">
    <h2 className="text-lg font-semibold mb-4">Weekly Reports</h2>
    <div className="w-full h-60">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="receivable"
            stroke="#f97316"
            strokeWidth={3}
            animationDuration={1000}
          />
          <Line
            type="monotone"
            dataKey="payable"
            stroke="#3b82f6"
            strokeWidth={3}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default WeeklyReport;
