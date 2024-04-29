import React, { useEffect } from "react";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Plans from "./pages/Plans";
import Programs from "./pages/Programs";
import Testimonial from "./pages/Testimonial";
import Why from "./pages/Why";

function App() {
  useEffect(() => {
    // Getting All Node DOM
    const elementSlide = document.querySelectorAll(
      "[data-intersection='slide-right'], [data-intersection='slide-left'], [data-intersection='slide-up'], [data-intersection='slide-down'], [data-intersection='fade-in']"
    );
    console.log(elementSlide);
    // Setting up the intersection option,callback, and init the intersection API
    const intersectionOptions = {
      threshold: 1.0,
    };
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Hello");
          entry.target.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "opacity-10",
            "opacity-0",
            "-translate-x-1/2",
            "translate-x-1/2",
            "-translate-x-1/3",
            "translate-y-1/2",
            "-translate-y-full",
            "lg:translate-y-1/2",
            "lg:-translate-y-1/2"
          );
          entry.target.classList.add(
            "translate-x-0",
            "translate-y-0",
            "opacity-100"
          );
          setInterval(() => {
            entry.target.classList.remove(
              "duration-[3000ms]",
              "duration-[1000ms]",
              "delay-500"
            );
            entry.target.classList.add("duration-700");
          }, 3000);
        }
      });
    };
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    // Add the DOM to the intersection observer
    elementSlide.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-gray-700">
        <Navbar />
        <Home />
        <Programs />
        <Why />
        <Plans />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
