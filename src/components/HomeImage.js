import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import HeroImage from "../assets/hero_image.png";
import HeroBackground from "../assets/hero_image_back.png";

function HomeImage() {
  return (
    <>
      <div className="relative w-full lg:w-3/12 lg:bg-amber-500">
        <img
          className="absolute left-[55px] top-10 z-10 w-[350px] min-[500px]:left-40 md:left-[255px] lg:-left-44 lg:scale-[1.3] xl:scale-100"
          src={HeroImage}
          alt="Hero"
        />
        <img
          src={HeroBackground}
          alt="Hero Background"
          className="absolute top-0 left-[5px] z-0 translate-x-full opacity-10 duration-[3000ms] min-[500px]:left-20 md:left-[155px] lg:-left-[280px] lg:-top-[50px]"
          data-intersection="slide-left"
        />
        {/* Heart Rate */}
        <div
          data-intersection="slide-right"
          className="absolute right-[20px] top-[30px] hidden h-[180px] w-[180px] -translate-x-full flex-col items-center justify-center gap-4 rounded-lg bg-slate-800 p-[15px] opacity-10 transition duration-[3000ms] sm:flex"
        >
          <FaHeartBroken className="text-[40px] text-orange-500" />
          <h3 className="font-bold text-gray-400">Heart Rate</h3>
          <div className="text-lg font-bold text-white">116 bpm</div>
        </div>
      </div>
    </>
  );
}

export default HomeImage;
