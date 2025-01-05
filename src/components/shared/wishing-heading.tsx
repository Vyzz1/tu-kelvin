import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { splitText } from "@/lib/utils";

export default function WishingHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (headingRef.current && subHeadingRef.current) {
      const headingChars = headingRef.current.querySelectorAll(".char");
      const subHeadingChars = subHeadingRef.current.querySelectorAll(".char");

      gsap.set([headingChars, subHeadingChars], {
        opacity: 0,
        y: 20,
        rotateX: -90,
      });

      gsap.to(headingChars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      gsap.to(subHeadingChars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.05,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      gsap.to([headingChars, subHeadingChars], {
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
        stagger: {
          each: 0.1,
          from: "random",
        },
      });
    }
  }, []);

  const mainText = "Chúc Bro";
  const subText = "Sớm có Người Yêu";

  return (
    <div className=" flex items-center justify-center ">
      <h1 className="text-center font-bold text-transparent  ">
        <span
          ref={headingRef}
          className="block text-4xl sm:text-5xl md:text-6xl mb-4 text-white"
        >
          {splitText(mainText).map((char, index) => (
            <span key={index} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span
          ref={subHeadingRef}
          className="block text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-tight text-sky-400"
        >
          {splitText(subText).map((char, index) => (
            <span key={index} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}
