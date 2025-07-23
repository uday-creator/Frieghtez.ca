import { ChevronDown, Mail } from "lucide-react";

const BalanceSummary = () => {
  return (
    <div className="flex justify-between items-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm mb-4 w-full max-w-3xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-col space-x-6">
        <div className="flex items-center space-x-1">
          <span className="h-5 w-0.5 bg-orange-600 mr-1" />
          <p className="text-sm font-semibold text-black">Receivable</p>
        </div>
        <p className="text-sm text-gray-500">Payable</p>
      </div>

      {/* Balance Label */}
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <div className="bg-gray-100 p-1 rounded">
          <ChevronDown size={12} className="text-gray-500" />
        </div>
        <span>Receivable Balance</span>
      </div>

      {/* Main Values */}
      <div className="flex items-center space-x-8">
        <p className="text-orange-600 font-bold text-2xl">C$36.5K</p>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 p-1 rounded">
            <Mail size={12} className="text-gray-500" />
            {/* <span>Invoices</span> */}
          </div>
          <span>Invoices</span>
          <span className="text-lg font-semibold text-black">26</span>
        </div>
      </div>
    </div>
  );
};
export default BalanceSummary;
