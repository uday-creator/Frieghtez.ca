import Navbar from "./Navbar"; // if in same folder

function UpperSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#000101] to-[#103A4C] text-white px-4 pt-6 pb-40 overflow-hidden">
      {/* Navbar inside section to preserve background gradient */}
      <div className="mb-10">
        <Navbar />
      </div>
      {/* Decorative Arcs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] border-t-2 border-orange-500 rounded-full transform -translate-x-1/2 -rotate-[60deg]"></div>
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] border-t-2 border-[#335C6F] rounded-full transform -translate-x-1/2 -rotate-[45deg]"></div>
      </div>
      {/* Arc 1 - rotating rainbow border */}
      {/* Animations related some things added need to check later - comment out and check */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">       
        <div
          className="absolute top-[20%] left-1/2 w-[500px] h-[500px] rounded-full border-t-[3px] border-transparent animate-spin-slow"
          style={{
            borderImage:
              "linear-gradient(to right, orange, yellow, green, cyan, blue, violet) 1",
            transform: "translateX(-50%) rotate(-60deg)",
          }}
        ></div>

        {/* Arc 2 - static bluish border 
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full border-t-2 border-[#335C6F] transform -translate-x-1/2 -rotate-[45deg]"></div>
      </div> */}
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
      {/* App Screenshot */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 z-10 w-[90%] max-w-5xl shadow-xl rounded-md overflow-hidden">
        <img src="/freightez-app-screenshot.png" alt="App Screenshot" />
      </div>
    </section>
  );
}

export default UpperSection;
