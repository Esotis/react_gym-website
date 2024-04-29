import React from "react";
import { FaDumbbell, FaFire, FaHeartbeat, FaRunning } from "react-icons/fa";

const cards = [
  {
    id: "Card 1",
    icon: <FaFire className="text-5xl text-white" />,
    text: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
    slide: "slide-up",
  },
  {
    id: "Card 2",
    icon: <FaRunning className="text-5xl text-white" />,
    text: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
    slide: "slide-up",
  },
  {
    id: "Card 3",
    icon: <FaDumbbell className="text-5xl text-white" />,
    text: "In this program, you are trained to improve your strength through many exercises.",
    slide: "slide-up",
  },
  {
    id: "Card 4",
    icon: <FaHeartbeat className="text-5xl text-white" />,
    text: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
    slide: "slide-up",
  },
];

function ProgramCard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          return (
            <div
              className={`flex translate-y-1/2 flex-col items-center justify-center gap-4 rounded-lg bg-slate-800 p-5 opacity-10 shadow-xl transition duration-[3000ms] hover:bg-orange-600`}
              key={card.id}
              data-intersection={card.slide}
            >
              {card.icon}
              <p className="text-justify font-semibold text-white">
                {card.text}
              </p>
              <button className="mb-4 rounded-lg border-2 border-white bg-orange-500 py-[10px] px-[25px] font-bold text-white transition duration-700 hover:border-orange-500 hover:bg-white hover:text-orange-500">
                Join
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProgramCard;
