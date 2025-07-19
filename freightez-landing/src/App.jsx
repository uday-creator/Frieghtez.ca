// import "./App.css";
import Features from "./components/Features";
import FeaturesKeepMoving from "./components/FeaturesKeepMoving";
import UpperSection from "./components/UpperSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

function App() {
  return (
    <>
      {/* <div className="bg-red-500 text-white p-4">
        If you see a red box, Tailwind is working!
      </div> */}

      <UpperSection />
      <WhyChooseUsSection />
      <FeaturesKeepMoving />
      <Features />
    </>
  );
}

export default App;
