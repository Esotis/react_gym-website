import React from "react";
import TestimonialSlide from "../components/TestimonialSlide";

function Testimonial() {
  return (
    <>
      <section className="mt-16" id="Testimonial">
        <div className="mb-10 text-center">
          <h2 className="mb-6 text-2xl font-bold text-orange-600">
            TESTIMONIAL
          </h2>
          <h1 className="font-finlandica text-3xl font-bold italic text-white">
            WHAT THEY SAY ABOUT US
          </h1>
        </div>
        <TestimonialSlide />
      </section>
    </>
  );
}

export default Testimonial;
