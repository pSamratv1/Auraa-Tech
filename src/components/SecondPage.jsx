import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapNumberCounter from "./ui/GsapNumberCounter";

import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const SecondPage = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const pageRef = useRef(null);
  const textRef = useRef(null);

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
        markers: true,
        toggleActions: "play reverse play reverse",
      },
    });
    tl.to(boxRef.current, {
      y: "38vh",
      width: "100%",
      height: "120px",
      borderRadius: "0px",
      scrub: 1,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 60%",
        end: "top 50%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });
    tl.to(textRef.current, {
      opacity: 1,

      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 50%",
        end: "top 49%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });
    // tl.to(pageRef.current, {
    //   y: "-50vh",
    //   scrub: 1,
    //   scrollTrigger: {
    //     trigger: boxRef.current,
    //     start: "top 60%",
    //     end: "top 50%",
    //     scrub: 1,

    //     toggleActions: "play reverse play reverse",
    //   },
    // });
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
        className="relative flex h-auto w-full justify-center z-[1] bg-gradient-to-r from-blue-900 to-blue-600"
      >
        <div
          ref={boxRef}
          className="resize-object absolute top-0  grid grid-cols-3 h-40 w-[80vw] md:w-[50vw]
         bg-blue-500 overflow-hidden rounded-2xl text-white opacity-0"
          onMouseEnter={handleRipple} // Trigger ripple effect on mouse click
        >
          <div className="w-full col-span-1 border-r border-slate-300 flex flex-col items-center justify-center space-y-2 ">
            <div className="flex  text-3xl md:text-5xl w-fit space-x-1">
              <GsapNumberCounter start={0} end={50} duration={2} />
              <div>+</div>
            </div>
            <div className="text-sm md:text-md uppercase text-center">
              Numbers of Clients
            </div>
          </div>

          <div className="w-full col-span-1 border-r border-slate-300 flex flex-col items-center justify-center space-y-2">
            <div className="flex  text-3xl md:text-5xl w-fit space-x-1">
              <GsapNumberCounter start={0} end={70} duration={2} />
              <div>+</div>
            </div>
            <div className="text-sm md:text-md uppercase text-center">
              Successfull Projects
            </div>
          </div>

          <div className="w-full col-span-1 flex flex-col items-center justify-center space-y-2">
            <div className="flex  text-3xl md:text-5xl w-fit space-x-1">
              <GsapNumberCounter start={0} end={18} duration={2} />
              <div>%</div>
            </div>
            <div className="text-sm md:text-md uppercase text-center">
              return on investment
            </div>
          </div>
        </div>
      </div>
      <section className="h-full w-full bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="relative flex justify-center items-center w-full h-full ">
          <div
            ref={textRef}
            className="flex flex-col items-center text-center opacity-0"
          >
            <h1 className="flex flex-col w-fit absolute top-0 text-5xl md:text-6xl font-extrabold leading-tight space-y-4 ">
              <div>
                Proven <span className="text-yellow-400">Success</span>,<br />{" "}
                Impactful <span className="text-yellow-400">Results</span>
              </div>
              <p className="font-normal text-lg md:text-xl text-gray-200">
                Unmatched growth for your business
              </p>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondPage;
