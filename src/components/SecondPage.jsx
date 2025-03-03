import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapNumberCounter from "./ui/GsapNumberCounter";
import { HiSparkles } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const SecondPage = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(boxRef.current, {
      opacity: 1,
      ease: "slow(0.7,0.7,false)",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 100%",
        end: "top 60%",
        scrub: 1,

        toggleActions: "play reverse play reverse",
      },
    });
    tl.to(boxRef.current, {
      y: "38vh",
      width: "100%",
      height: "120px",
      boderRadius: "0px",
      scrub: 1,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 60%",
        end: "top 50%",
        scrub: 1,
        markers: true,
        toggleActions: "play reverse play reverse",
      },
    });

   
  }, []);

  const handleRipple = (e) => {
    const ripple = document.createElement("div");
    const size = Math.max(
      e.currentTarget.clientWidth,
      e.currentTarget.clientHeight
    );
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    e.currentTarget.appendChild(ripple);

    // Remove the ripple after animation ends (600ms)
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex h-full w-full justify-center z-[1]"
      >
        <div
          ref={boxRef}
          className="resize-object absolute top-0  grid grid-cols-3 h-40 w-[50vw]
         bg-blue-400 overflow-hidden rounded-2xl text-white opacity-0"
          onMouseEnter={handleRipple} // Trigger ripple effect on mouse click
        >
          <div className="w-full col-span-1 border-r border-slate-300 flex flex-col items-center justify-center space-y-2 ">
            <div className="flex text-5xl w-fit space-x-1">
              <GsapNumberCounter start={0} end={50} duration={2} />
              <div>+</div>
            </div>
            <div className="text-md uppercase">Numbers of Clients</div>
          </div>

          <div className="w-full col-span-1 border-r border-slate-300 flex flex-col items-center justify-center space-y-2">
            <div className="flex text-5xl w-fit space-x-1">
              <GsapNumberCounter start={0} end={70} duration={2} />
              <div>+</div>
            </div>
            <div className="text-md uppercase">Successfull Projects</div>
          </div>

          <div className="w-full col-span-1 flex flex-col items-center justify-center space-y-2">
            <div className="flex text-5xl w-fit space-x-1">
              <GsapNumberCounter start={0} end={18} duration={2} />
              <div>%</div>
            </div>
            <div className="text-md uppercase">return on investment</div>
          </div>
        </div>
      </div>
      <div ref={pageRef} className="w-full h-full bg-blue-500 opacity-1">
        s
      </div>
    </>
  );
};

export default SecondPage;
