import React from "react";
import HeroSection from "./components/HeroSection";
import SecondPage from "./components/SecondPage";

const App = () => {
  return (
    // <div className="relative z-10 w-screen h-screen">
    //   <HeroSection />
    //   <SecondPage />
    // </div>
    <div className="h-screen w-screen relative">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="src/assets/3626148-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 w-full h-full">
        <HeroSection />
        <SecondPage />
      </div>
    </div>
  );
};

export default App;
