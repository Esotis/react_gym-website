import React from "react";
import imgTop from "../assets/image2.png";
import imgBottom1 from "../assets/image3.png";
import imgBottom2 from "../assets/image4.png";

function WhyImage() {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2">
        <div className="flex flex-wrap justify-center">
          {/* Top Image */}
          <div className="max-w-[480px]">
            <img src={imgTop} className="rounded" alt="" />
          </div>

          {/* Bottom Image */}
          <div className="mt-2 flex max-w-[480px] justify-between gap-2">
            <img
              src={imgBottom1}
              className="w-1/3 flex-1 rounded object-cover "
              alt=""
            />
            <img
              src={imgBottom2}
              className="w-1/3 flex-1 rounded object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyImage;
