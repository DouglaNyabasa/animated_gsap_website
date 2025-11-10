import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Message from "./components/Message/Message";
import Flavors from "./components/Flavors/Flavors";
import { useGSAP } from "@gsap/react";
import Nutrition from "./components/Nutrition/Nutrition";
import Benefit from "./components/Benefit/Benefit";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

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
          <Nutrition />
          <div className="">
            <Benefit />
            <Testimonial />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
