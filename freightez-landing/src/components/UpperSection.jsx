import Navbar from "./Navbar"; // if in same folder
import dashboardImage from "../assets/dashboard-app.png";

function UpperSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#000101] to-[#103A4C] text-white px-4 pt-6 pb-56 overflow-hidden">
      <div className="mb-10">
        <Navbar />
      </div>

      {/* Decorative Arcs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-2/3 w-[500px] h-[500px] border-t-2 border-orange-500 rounded-full transform -translate-x-1/2 -rotate-[45deg]"></div>
        <div className="absolute top-1/5 left-1/3 w-[700px] h-[700px] border-t-2 border-[#335C6F] rounded-full transform -translate-x-1/2 -rotate-[45deg]"></div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mt-50">
        <h1 className="text-4xl font-bold mb-4">
          Helping Smaller Fleets Grow!
        </h1>
        <p className="text-lg mb-6 text-slate-200">
          From load assignments to invoice automation, FreightEZ replaces
          spreadsheets with smart tools specifically designed for{" "}
          <span className="text-orange-400 font-semibold">small teams</span>.
        </p>
        <button className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-200 transition">
          Schedule a Demo
        </button>
      </div>
      <div className="relative w-full h-[300px] flex justify-center items-start z-10 mt-10">
        <div
          className="absolute w-[600px] h-[600px] rounded-full animate-spin-slow"
          style={{
            borderImage: `conic-gradient(#ff7a18, #af002d 33%, #319197, #ff7a18) 1`,
            borderImageSlice: 1,
            borderWidth: "3px",
            borderStyle: "solid",
            maskImage: "radial-gradient(transparent 45%, black 55%)",
            WebkitMaskImage: "radial-gradient(transparent 45%, black 55%)",
            top: "-300px", // Adjust to position the arc around the image
            zIndex: 1,
          }}
        ></div>
      </div>
      {/* App Screenshot */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 z-10 w-[90%] max-w-5xl shadow-xl rounded-md overflow-hidden">
        <img src={dashboardImage} alt="App Screenshot" />
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" /> */}
      </div>
    </section>
  );
}

export default UpperSection;
