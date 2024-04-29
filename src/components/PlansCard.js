import React from "react";
import { FaCrown, FaDollarSign, FaRupeeSign } from "react-icons/fa";
import whiteTick from "../assets/whiteTick.png";

const cards = [
  {
    icon: <FaRupeeSign className="text-5xl text-orange-600" />,
    plan: "BASIC PLAN",
    price: "$ 25",
    list1: "2 hours of exercises",
    list2: "Free consulation to coaches",
    list3: "Access to the Community",
  },
  {
    icon: <FaCrown className="text-5xl text-white" />,
    plan: "PREMIUM PLAN",
    price: "$ 35",
    list1: "5 hours of exercises",
    list2: "Free consulation to coaches",
    list3: "Access to minibar",
    type: "main",
  },
  {
    icon: <FaDollarSign className="text-5xl text-orange-600" />,
    plan: "PRO PLAN",
    price: "$ 50",
    list1: "8 hours of exercises",
    list2: "Consulation of Private Coach",
    list3: "Free Fitness Merchandises",
  },
];

function PlansCard() {
  return (
    <div className="flex flex-wrap items-center">
      {cards.map((card, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className={`w-full py-4 px-8 lg:w-1/3 ${
                card.type === "main" && "lg:py-0"
              }`}
            >
              <div
                className={`flex flex-col items-center justify-center gap-5 rounded-lg py-5 px-[10px] opacity-0 duration-[3000ms] ${
                  card.type === "main"
                    ? "bg-orange-600 lg:-translate-y-1/2 lg:py-12 lg:delay-300"
                    : "bg-slate-800 lg:translate-y-1/2"
                }`}
                data-intersection="fade-in"
              >
                {card.icon}
                <h2 className="text-2xl font-bold text-white">{card.plan}</h2>
                <h1 className="mb-4 text-4xl font-bold text-white">
                  {card.price}
                </h1>
                <ul className="text-center">
                  <li className="mb-6 font-medium text-white">
                    <img
                      src={whiteTick}
                      className="mr-5 inline-block h-5 w-5 "
                      alt=""
                    />
                    <span>{card.list1}</span>
                  </li>
                  <li className="mb-6 font-medium text-white">
                    <img
                      src={whiteTick}
                      className="mr-5 inline-block h-5 w-5 "
                      alt=""
                    />
                    <span>{card.list2}</span>
                  </li>
                  <li className="mb-6 font-medium text-white">
                    <img
                      src={whiteTick}
                      className="mr-5 inline-block h-5 w-5 "
                      alt=""
                    />
                    <span>{card.list3}</span>
                  </li>
                </ul>
                <button className="rounded-full border-2 border-white bg-orange-500 py-[10px] px-[25px] font-bold text-white transition duration-700 hover:border-orange-500 hover:bg-white hover:text-orange-500">
                  See more benefits
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default PlansCard;
