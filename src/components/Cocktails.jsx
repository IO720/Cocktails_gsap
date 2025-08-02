import React from "react";
import { cocktailLists, mockTailLists } from "../../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTl
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" id="c-left-leaf" alt="" />
      <img src="/images/cocktail-right-leaf.png" id="c-right-leaf" alt="" />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails</h2>

          <ul>
            {cocktailLists.map(({ drink, name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3> {name} </h3>
                  <p>
                    {" "}
                    {country} | {detail}{" "}
                  </p>
                </div>
                <span> - {price} </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved mocktails</h2>

          <ul>
            {mockTailLists.map(({ drink, name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3> {name} </h3>
                  <p>
                    {" "}
                    {country} | {detail}{" "}
                  </p>
                </div>
                <span> - {price} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
