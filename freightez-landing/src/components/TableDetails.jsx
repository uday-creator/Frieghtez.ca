import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./commonComponents/table";
import { Badge } from "./commonComponents/Badge";
import { ChevronDown, Mail } from "lucide-react";
import BalanceSummary from "./commonComponents/BalanceSummary";

const trips = Array(3)
  .fill(null)
  .map((_, i) => ({
    id: `AEOW1003`,
    date: "03/12/2024",
    status: "Completed",
    customer: "Costco Vancouver",
    rate: 2100,
  }));

const TableDetails = () => {
  return (
    <div className="lg:col-span-2 h-[15rem] mx-auto">
      <BalanceSummary />
      <div className="border-gray-200">
        <div className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {/* <TableHead className="text-xs font-medium">Trip #</TableHead>
                   */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {trips.map((trip, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-xs text-[#E2742B]">
                      {trip.id}
                    </TableCell>
                    <TableCell className="text-xs">{trip.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-600 border-green-200 text-[10px] font-normal px-1.0 py-0.5"
                      >
                        <span className="mr-0.5 inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {trip.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs">{trip.customer}</TableCell>
                    <TableCell className="text-xs">
                      ${trip.rate.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <button className="text-[#E2742B]">
                        {index % 2 === 0 ? "Send Invoice" : "Send Reminder"}
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
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

export default TableDetails;
