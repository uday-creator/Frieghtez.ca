// export default WhyChooseUsSection;
import { Truck, FileText, Mail } from "lucide-react";

function WhyChooseUsSection() {
  return (
    <section className="bg-white pt-[180px] pb-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Why choose us?</h2>
        <p className="mt-4 text-lg text-gray-500">
          Everything you need. Nothing you don’t.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-[#041F29] text-white p-6 rounded-xl shadow-lg text-left">
          <div className="mb-4">
            <span className="inline-block bg-white text-black p-2 rounded">
              <Truck className="w-6 h-6" />
            </span>
          </div>
          <h3 className="text-lg">Streamlined Dispatch</h3>
          <p className="mt-1 font-bold">Manage loads with zero confusion</p>
          <p className="mt-2 text-sm">
            Easily assign drivers, track progress, and reduce delays in real
            time.
          </p>
        </div>

        {/* Feature 2 */}
        <div
          className="bg-white border p-6 rounded-xl shadow-sm text-left
        border-[#D1D5DB] bg-gradient-to-b from-white to-[#F6F7F9]"
        >
          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-black p-2 rounded">
              <FileText className="w-6 h-6" />
            </span>
          </div>
          <h3 className="text-lg">Centralized Documents</h3>
          <p className="mt-1 font-bold">All your documents in one place</p>
        </div>

        {/* Feature 3 */}
        <div
          className="bg-white border p-6 rounded-xl shadow-sm text-left
        border-[#D1D5DB] bg-gradient-to-b from-white to-[#F6F7F9]"
        >
          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-black p-2 rounded">
              <Mail className="w-6 h-6" />
            </span>
          </div>
          <h3 className="text-lg">Automatic Invoicing</h3>
          <p className="mt-1 font-bold">
            Generate and send invoices in seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUsSection;
