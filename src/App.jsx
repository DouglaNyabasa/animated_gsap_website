import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Message from "./components/Message/Message";
import Flavors from "./components/Flavors/Flavors";
import { useGSAP } from "@gsap/react";
import Nutrition from "./components/Nutrition/Nutrition";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
      <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavors />
          <Nutrition/>
         <div className="h-dvh border border-amber-500"></div>


        </div>
      </div>
    </main>
  );
};

export default App;
