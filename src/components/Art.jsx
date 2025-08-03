import React from "react";
import { featureLists, goodLists } from "../../Constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskedTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskedTL
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskedPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      }).to("#masked-content",{opacity:1,duration:1, ease:"power1.inOut"})
  });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">THE ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((features, index) => (
              <li key={index} className="flex items-center">
                <img src="/images/check.png" alt="" />
                <p> {features} </p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((features, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="" />
                <p className="md:w-fit w-60"> {features} </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured With</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
