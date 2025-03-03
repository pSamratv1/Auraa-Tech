import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapNumberCounter = ({ start = 0, end = 50, duration = 2.5 }) => {
  const numberRef = useRef(null);

  useLayoutEffect(() => {
    if (!numberRef.current) return;

    let obj = { count: start };

    let animation = gsap.to(obj, {
      count: end,
      duration,
      ease: "power2.out",
      paused: true, // Start paused, play only on scroll
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = Math.floor(obj.count).toString();
        }
      },
    });

    ScrollTrigger.create({
      trigger: numberRef.current,
      start: "top 80%", // Start animation when the element is 80% in the viewport
      once: true,
      onEnter: () => animation.play(),
    });

    return () => {
      animation.kill();
    };
  }, [start, end, duration]);

  return <h1 ref={numberRef}>{start}</h1>;
};

export default GsapNumberCounter;
