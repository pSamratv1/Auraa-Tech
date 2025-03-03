import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHome } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation
    tl.fromTo(
      logoRef.current,
      { scale: 1, opacity: 1 },
      {
        y: "10px",
        scale: 0.4,
        opacity: 0,
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 45%",
          end: "top 15%",
          scrub: 2,
          pin: true,
          toggleActions: "play none play play",
        },
      }
    );
  }, []);

  return (
    <div className="flex w-screen h-screen items-center justify-center"></div>
  );
};

export default HeroSection;
