import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeroSectionContent from "./HeroSectionContent";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (videoEnded) {
      gsap.to(videoRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.to(contentRef.current, { opacity: 1, duration: 1 });
        },
      });
    }
  }, [videoEnded]);

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {!videoEnded && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          onEnded={() => setVideoEnded(true)}
        >
          <source
            src="src/assets/3626148-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      )}

      <div
        ref={contentRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity"
      >
        <HeroSectionContent />
      </div>
    </div>
  );
};

export default HeroSection;
