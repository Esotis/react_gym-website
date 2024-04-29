import React from "react";
import PlansCard from "../components/PlansCard";

function Plans() {
  return (
    <>
      <section id="Plans">
        <div className="container mx-auto xl:max-w-[1024px]">
          <div className="m-8 flex flex-col gap-2 text-center text-2xl font-bold text-white sm:text-5xl lg:flex-row lg:justify-between lg:text-left">
            <h1>READY TO START</h1>
            <h1>YOUR JOURNEY</h1>
            <h1>NOW WITH US</h1>
          </div>
          <PlansCard />
        </div>
      </section>
    </>
  );
}

export default Plans;
