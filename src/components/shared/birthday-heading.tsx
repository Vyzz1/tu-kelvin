import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { splitText } from "@/lib/utils";

import { Confetti } from "./confetti";
import { RainbowButton } from "../ui/rainbow-button";
import { Spotlight } from "../ui/spotlight";
import Lottie from "lottie-react";
import cakeJson from "@/assets/cake.json";

export default function BirthdayHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const audio = new Audio("/firework.mp3");

  useEffect(() => {
    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll(".char");

      gsap.set(chars, {
        opacity: 0,
        scale: 0,
        y: 50,
        rotateX: -90,
      });

      gsap.to(chars, {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(chars, {
            scale: 1.1,
            rotation: 5,
            y: -10,
            color: (i) => ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"][i % 4],
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 1,
            stagger: {
              each: 0.1,
              from: "random",
            },
          });
        },
      });
    }
  }, []);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 15000);
    audio.play();
  };

  const characters = splitText("Happy Birthday Tú Kelvin !");

  return (
    <div className="flex flex-col justify-center items-center pt-16 z-50 min-h-full px-16">
      {showConfetti && <Confetti />}

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#FFB263"
      />
      <h1
        ref={headingRef}
        className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center leading-tight mb-8"
      >
        {characters.map((char, index) => (
          <span key={index} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <div className="w-1/2 md:w-1/3 lg:w-1/5 my-3">
        <Lottie animationData={cakeJson} />
      </div>

      <div className="mt-8 space-x-4">
        <RainbowButton
          className="border border-green-400 !bg-transparent"
          onClick={handleConfetti}
        >
          Celebrate!
        </RainbowButton>
      </div>
    </div>
  );
}
