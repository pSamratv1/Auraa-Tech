import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation
    tl.fromTo(
      logoRef.current,
      { x: "40vw", y: "45vh" },
      {
        x: "-40px",
        y: "-10px",
        scale: 0.4,
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 45%",
          end: "top 15%",
          scrub: 2,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <div className=" w-screen h-screen">
      <div ref={logoRef} className="w-fit nunito text-8xl font-bold text-white">
        Auraa
      </div>
    </div>
  );
};

export default HeroSection;
