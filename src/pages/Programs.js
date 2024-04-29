import React from "react";
import ProgramCard from "../components/ProgramCard";

function Programs() {
  return (
    <>
      <section id="Programs" className="mt-[600px] lg:mt-20">
        <div className="mb-4 flex flex-col items-center justify-center gap-4 text-4xl min-[500px]:text-5xl lg:flex-row lg:gap-6">
          <p
            className="stroke  max-w-sm -translate-x-1/3 text-center font-finlandica font-bold italic text-transparent text-white opacity-10 duration-[3000ms]"
            data-intersection="slide-right"
          >
            EXPLORE OUR
          </p>
          <p
            className="stroke max-w-sm translate-x-1/2 text-center font-finlandica font-bold italic text-transparent text-white opacity-10 duration-[3000ms]"
            data-intersection="slide-left"
          >
            PROGRAMS
          </p>
          <p
            className="stroke max-w-sm -translate-x-1/3 text-center font-finlandica font-bold italic text-transparent text-white opacity-10 duration-[3000ms]"
            data-intersection="slide-right"
          >
            TO SHAPE YOU
          </p>
        </div>
        <ProgramCard />
      </section>
    </>
  );
}

export default Programs;
