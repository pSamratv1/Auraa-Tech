import React from "react";
import HeroSection from "./components/HeroSection";
import SecondPage from "./components/SecondPage";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";
import ThirdPage from "./components/ThirdPage";

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
    <div className="h-screen w-screen relative  text-white">
      <div className="relative z-10 w-full h-full bg-gradient-to-r from-blue-900 to-blue-600">
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
