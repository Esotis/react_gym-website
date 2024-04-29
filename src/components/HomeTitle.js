import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import HomeCount from "./HomeCount";

function HomeTitle() {
  return (
    <>
      <div className="relative w-full pb-10 lg:w-9/12">
        {/* Sliding Component */}
        <div className="relative max-w-xs rounded-full bg-zinc-800 px-3 py-5">
          {/* Sliding Animation */}
          <div className="animate-sliding absolute left-0 top-0 z-10 h-full w-1/4 rounded-full bg-amber-500"></div>
          {/* Text */}
          <div className="relative z-20 text-center text-base text-sm font-semibold text-white">
            The Most Bad Fitness Club in Semarang
          </div>
        </div>
        {/* Title Component */}
        <h1 className="mt-10 max-w-sm font-finlandica text-5xl italic leading-normal text-white lg:max-w-md lg:text-7xl">
          <span className="stroke font-medium text-transparent">SHAPE</span>{" "}
          YOUR IDEAL BODY
        </h1>
        <p className="mt-4 text-white">
          In here we will help you to shape and build your ideal body and live
          up your life to fullest
        </p>
        {/* Count and Button Components */}
        <HomeCount />
        {/* Calories Burn */}
        <div className="absolute left-0 top-[810px] flex h-[180px] w-[180px] flex-col items-center justify-center gap-4 rounded-lg bg-slate-800 p-[15px] lg:top-2/3 lg:left-1/2">
          <FaHeartbeat className="text-[40px] text-orange-500" />
          <h3 className="font-bold text-gray-400">Calories burned</h3>
          <div className="text-lg font-bold text-white">550 kcal</div>
        </div>
      </div>
    </>
  );
}

export default HomeTitle;
