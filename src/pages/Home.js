import React from "react";
import HomeImage from "../components/HomeImage";
import HomeTitle from "../components/HomeTitle";

function Home() {
  return (
    <>
      <section id="Home" className="flex flex-wrap">
        <HomeTitle />
        <HomeImage />
      </section>
    </>
  );
}

export default Home;
