import React from "react";
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import coach1 from "../assets/t-image1.png";
import coach2 from "../assets/t-image2.jpg";
import coach3 from "../assets/t-image3.jpg";

const slides = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorem debitis sint quaerat nisi nulla.",
    name: "JOHN KEVIN",
    job: "COACH",
    image: coach1,
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quam! Fugiat exercitationem non facere obcaecati.",
    name: "ANDREW",
    job: "CUSTOMER",
    image: coach2,
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora modi unde necessitatibus, illo voluptatibus?",
    name: "THOMAS",
    job: "CUSTOMER",
    image: coach3,
  },
];

function TestimonialSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide>
              <div className="mx-auto max-w-[620px] rounded-lg bg-slate-800 px-4 py-8">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="w-full lg:w-1/3 lg:flex-1">
                    <p className="mb-12 text-justify font-medium text-white">
                      {slide.description}
                    </p>
                    <h2 className="mb-4 text-center font-finlandica text-xl font-semibold italic text-white">
                      {slide.name} -{" "}
                      <span className="text-orange-500">{slide.job}</span>
                    </h2>
                  </div>
                  <div className="w-full flex-1 lg:w-1/3">
                    <img
                      src={slide.image}
                      className="mx-auto max-h-[280px] max-w-[250px] rounded-md border-4 border-orange-600 object-cover p-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default TestimonialSlide;
