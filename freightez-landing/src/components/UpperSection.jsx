import Navbar from "./Navbar"; // if in same folder
import dashboardImage from "../assets/dashboard-app.png";

function UpperSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#000101] to-[#103A4C] text-white px-2 pt-6 pb-56">
      <div className="mb-10">
        <Navbar />
      </div>

      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Arc 1 *
        <div
          className="absolute"
          style={{
            top: "10%",
            left: "50%",
            width: "1100px",
            height: "1100px",
            borderTop: "6px solid #d8781d",
            borderRadius: "50%",
            transform: "translateX(-50%) rotate(-10deg)",
            opacity: 0.8,
          }}
        />
        {/* Arc 2 */}
      {/* <div
          className="absolute"
          style={{
            top: "18%",
            left: "50%",
            width: "900px",
            height: "900px",
            borderTop: "4px solid #335C6F",
            borderRadius: "50%",
            transform: "translateX(-50%) rotate(-8deg)",
            opacity: 0.5,
          }}
        /> */}
      {/* Arc 3 *
        <div
          className="absolute"
          style={{
            top: "28%",
            left: "50%",
            width: "700px",
            height: "700px",
            borderTop: "3px solid #fff",
            borderRadius: "50%",
            transform: "translateX(-50%) rotate(-6deg)",
            opacity: 0.2,
          }}
        />
      </div> */}

      {/* Hero Text */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mt-60">
        <h1 className="text-4xl font-bold mb-4">
          Helping Smaller Fleets Grow!
        </h1>
        <p className="text-lg mb-6 text-slate-200">
          From load assignments to invoice automation, FreightEZ replaces
          spreadsheets with smart tools specifically designed for{" "}
          <span className="text-orange-400 font-semibold">small teams</span>.
        </p>
        <button
          className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-200 transition"
          onClick={() => {
            window.open("hello@freightez.ca");
          }}
        >
          Schedule a Demo
        </button>
      </div>
      <div className="relative w-full h-[350px] flex justify-center items-start z-11 mt-10">
        {/* <div
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
        ></div> */}
      </div>
      {/* App Screenshot */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 z-12 w-[90%] max-w-5xl shadow-xl rounded-md ">
        <div class="rounded-2xl border-10 border-[#2F4858] shadow-xl overflow-hidden bg-white inline-block">
          {/* <GradientBorderCard> */}
          <img
            src={dashboardImage}
            alt="App Screenshot"
            class="block w-full h-auto"
          />
          {/* </GradientBorderCard> */}

          {/* <img src="your-image.jpg" alt="..." class="block w-full h-auto" /> */}
        </div>

        <div
          className="absolute left-0 right-0 bottom-0 h-62 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, white 70%)",
          }}
        ></div>
      </div>
    </section>
  );
}

// function GradientBorderCard({ children }) {
//   return (
//     <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-[#2F4858] via-white to-[#d8781d] shadow-lg">
//       <div className="rounded-2xl bg-white h-full w-full overflow-hidden">
//         {children}
//       </div>
//     </div>
//   );
// }
export default UpperSection;
