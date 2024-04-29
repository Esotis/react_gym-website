import NumberCounter from "number-counter";
import React from "react";

function HomeCount() {
  return (
    <>
      <div className="mt-12 flex">
        <div className="mr-12 flex flex-col text-white">
          <span className="text-xl font-bold">
            <NumberCounter end={140} start={50} delay="4" preFix="+" />
          </span>
          <span>Coaches</span>
        </div>
        <div className="mr-12 flex flex-col text-white">
          <span className="text-xl font-bold">
            <NumberCounter end={978} start={150} delay="4" preFix="+" />
          </span>
          <span>Members</span>
        </div>
        <div className="mr-12 flex flex-col text-white">
          <span className="text-xl font-bold">
            <NumberCounter end={50} start={0} delay="5" preFix="+" />
          </span>
          <span>Programs</span>
        </div>
      </div>
      <div className="mt-4" id="container-buton">
        <button
          data-intersection="slide-right"
          className="mr-6 translate-x-full rounded-lg border-2 border-orange-600 bg-orange-600 px-[25px] py-[10px] text-base font-bold text-white opacity-10 transition duration-[3000ms] hover:bg-white hover:text-orange-600"
        >
          Get Started
        </button>
        <button
          data-intersection="slide-right"
          className="mr-6 -translate-x-full rounded-lg border-2 border-orange-600 bg-orange-600 px-[25px] py-[10px] text-base font-bold text-white opacity-10 transition duration-[3000ms] hover:bg-white hover:text-orange-600"
        >
          Learn More
        </button>
      </div>
    </>
  );
}

export default HomeCount;
