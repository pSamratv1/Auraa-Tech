import React from "react";
import HeroSection from "./components/HeroSection";
import SecondPage from "./components/SecondPage";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const navItems = [
    {
      link: "/",
      icon: <FaHome />,
      name: "Home",
    },
    {
      link: "/about",
      icon: <FaHome />,
      name: "About",
    },
    {
      link: "/portfolio",
      icon: <FaHome />,
      name: "Protfolio",
    },
    {
      link: "/service",
      icon: <FaHome />,
      name: "Service",
    },
    {
      link: "/contact",
      icon: <FaHome />,
      name: "Conatct",
    },
  ];
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
        <Router>
          <FloatingNav navItems={navItems} />
          <HeroSection />
          <SecondPage />
        </Router>
      </div>
    </div>
  );
};

export default App;
