import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Imgs
import footer_me from "../img/footer_me.jpg";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";

const Footer = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== year) {
        setYear(newYear);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [year]);

  return (
    <div id="showcase" className="text-primary">
      <section className="bg-secondary">
        <article className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24">
          <section
            ref={myRef}
            className={`fadein py-20 ${myElementIsVisible ? "appear" : ""}`}
          >
            <article className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
              <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                <img
                  src={footer_me}
                  alt="Sexy Pants!"
                  className="w-16 h-16 rounded-full object-cover object-center border-2 border-primary grayscale hover:grayscale-0"
                />
                <h2 className="font-light">
                  Designed & Developed with 💚 & ☕ by{" "}
                  <span className="md:block font-semibold">Md Shahin</span>
                </h2>
              </div>
              <div className="flex gap-6">
                <a href="https://twitter.com/VBhabhra" target="__blank">
                  <img
                    src={twitter}
                    alt="vector"
                    className="w-10 lg:w-10 hover:-translate-y-2 transition-all"
                  />
                </a>
                <a
                  href="https://www.instagram.com/developedbyvarun/"
                  target="__blank"
                >
                  <img
                    src={instagram}
                    alt="vector"
                    className="w-10 lg:w-10 hover:-translate-y-2 transition-all"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/varun-bhabhra-845777210/"
                  target="__blank"
                >
                  <img
                    src={linkedin}
                    alt="vector"
                    className="w-10 lg:w-10 hover:-translate-y-2 transition-all"
                  />
                </a>
                <a href="https://github.com/Varun-Bhabhra" target="__blank">
                  <img
                    src={github}
                    alt="vector"
                    className="w-10 lg:w-10 hover:-translate-y-2 transition-all"
                  />
                </a>
              </div>
            </article>

            <hr className="border-primary rounded-full my-10" />

            <p className="text-center">
              All rights reserved | Copyright © {year} Md Shahin
            </p>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Footer;
