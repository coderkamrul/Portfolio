import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PortfolioCard from "./PortfolioCard";
import TechItem from "./TechItem";
import CTA from "./CTA";
import TempCTA from "./TempCTA";

// Imgs
import crypto from "../img/crypto.png";
import mdp from "../img/mdp.webp";
import zai from "../img/zai.webp";
import tsot from "../img/tsot.webp";
// import pyalee from "../img/pyalee.webp";
import pmc from "../img/pmc.webp";
import my from "../img/my.png";
import portfolioDoodle from "../img/portfolioDoodle.svg";
import ctaDoodle2 from "../img/ctaDoodle2.svg";
import axios from "axios";

const Portfolio = () => {
  const [userData, setUserData]=useState([]);
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });
  

    const fetchAllUser=async()=>{
        const res =await axios.get("https://portfolio-apis.up.railway.app/readalluser");
        setUserData(res.data)
        
    }


    useEffect(()=>{
        fetchAllUser();

    },[])

  return (
    <div id="showcase" className="py-12 text-secondary">
      <section className="max-w-screen-xl mx-auto">
        <TempCTA
          head="New Plan"
          text="Unlock the full potential of your business with our new online presence solution. Starting at just $699"
          tags="#OnlinePresence #BusinessGrowth"
        />
      </section>
      <section
        id="portfolio"
        className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-32"
      >
        <article className="space-y-24 md:space-y-0 md:grid grid-cols-2">
          <div id="header" className="">
            <div
              ref={myRef}
              className={`fade-in md:sticky top-36 space-y-8 bgportfolio-bg bg-contain bg-no-repeat text-center md:text-left ${
                myElementIsVisible ? "appear" : ""
              }`}
            >
              <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                My Clients
              </h2>
              <p className="font-jost font-regular text-base lg:text-lg sm:w-5/6 mx-auto md:mx-0">
                I’ve worked with some great clients, but I won’t blab about them
                all. Here are a few best bits.
              </p>

              <img
                src={portfolioDoodle}
                alt="doodle"
                className="mx-auto md:mx-0 -scale-x-100"
              />
              <div className="hidden md:block sm:w-5/6 mx-auto md:mx-0">
                <h2 className="font-light text-lg lg:text-xl xl:text-2xl">
                  All the sites on your right are built from scratch in the
                  following stack:
                </h2>
                <TechItem item="Wordpress" />
                <TechItem item="React Js" />
                <TechItem item="Node Js" />
                <TechItem item="Tailwind CSS" />
                <TechItem item="HTML" />
                <TechItem item="CSS" />
                <TechItem item="JavaScript" />
              </div>
            </div>
          </div>

          <div className="space-y-20 lg:px-4">
          {userData.map((item,i)=>(
            <PortfolioCard
              head={item.name}
              para={item.desc}
              href={item.link}
              mockup={`https://portfolio-apis.up.railway.app/images/${item.photo}`}
              build={item.tag}
            />
          ))}
          </div>

          <div className="md:hidden sm:w-5/6 mx-auto md:mx-0">
            <h2 className="font-light text-lg">
              All the above sites are built from scratch in the following stack:
            </h2>
            <TechItem item="React Js" />
            <TechItem item="Node Js" />
            <TechItem item="Tailwind CSS" />
            <TechItem item="HTML" />
            <TechItem item="CSS" />
            <TechItem item="JavaScript" />
          </div>
        </article>

        <CTA
          img={ctaDoodle2}
          head="Redesign your existing website?"
          text="Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals."
        />
      </section>
    </div>
  );
};

export default Portfolio;
