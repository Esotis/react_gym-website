import React from "react";
import tick from "../assets/tick.png";

function WhyText() {
  return (
    <>
      <div className="mt-10 w-full text-center lg:mt-0 lg:w-1/2 lg:text-left">
        <h5 className="mb-2 text-lg font-semibold text-orange-600">
          SOME REASONS
        </h5>
        <h1 className="mb-12 text-3xl font-bold text-white sm:text-5xl ">
          <span className="stroke font-finlandica italic text-transparent">
            WHY
          </span>{" "}
          CHOOSE US ?
        </h1>
        <ul className="font-medium text-white">
          <li
            className="mb-6 -translate-y-full opacity-0 delay-200 duration-[3000ms]"
            data-intersection="slide-down"
          >
            <img
              src={tick}
              className="mr-[25px] inline-block w-[30px] object-cover"
              alt=""
            />
            <span>OVER 140+ EXPERTS COACHS</span>
          </li>
          <li
            className="mb-6 -translate-y-full opacity-0 delay-[400ms] duration-[3000ms]"
            data-intersection="slide-down"
          >
            <img
              src={tick}
              className="mr-[25px] inline-block w-[30px] object-cover"
              alt=""
            />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </li>
          <li
            className="mb-6 -translate-y-full opacity-0 delay-[600ms] duration-[3000ms]"
            data-intersection="slide-down"
          >
            <img
              src={tick}
              className="mr-[25px] inline-block w-[30px] object-cover"
              alt=""
            />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </li>
          <li
            className="mb-6 -translate-y-full opacity-0 delay-[800ms] duration-[3000ms]"
            data-intersection="slide-down"
          >
            <img
              src={tick}
              className="mr-[25px] inline-block w-[30px] object-cover"
              alt=""
            />
            <span>RELIABLE PARTNERS</span>
          </li>
        </ul>
        <h5 className="mt-12 mb-4 text-lg font-semibold text-orange-600">
          OUR PARTNERS
        </h5>
        <div
          className="flex items-center justify-center gap-[30px] lg:justify-start
        "
        >
          <img
            src="/adidas-logo.svg"
            className="w-[60px] object-cover opacity-0 duration-[3000ms]"
            data-intersection="fade-in"
            alt=""
          />
          <img
            src="/nike-logo.png"
            className="w-[60px] object-cover opacity-0 duration-[3000ms] "
            data-intersection="fade-in"
            alt=""
          />
          <img
            src="/nb-logo.png"
            className="w-[60px] object-cover opacity-0 duration-[3000ms] "
            data-intersection="fade-in"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default WhyText;
