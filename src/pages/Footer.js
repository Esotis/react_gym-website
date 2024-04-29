import React from "react";
import facebook from "../assets/facebook-logo.png";
import github from "../assets/github-logo.svg";
import instagram from "../assets/instagram-logo.webp";

function Footer() {
  return (
    <>
      <section className="px-12">
        <hr className="mb-20 h-1 rounded-lg border-0 bg-orange-600" />
        <div className="mb-20 flex items-center justify-center gap-12">
          <a
            href="https://instagram.com/jovananggata"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagram}
              className="w-10 cursor-pointer object-cover opacity-0 brightness-50 transition delay-500 duration-[3000ms] hover:brightness-75"
              alt=""
              data-intersection="fade-in"
            />
          </a>
          <a
            href="https://instagram.com/jovananggata"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              className="w-10 cursor-pointer object-cover opacity-0 brightness-50 transition duration-[3000ms] hover:brightness-0"
              alt=""
              data-intersection="fade-in"
            />
          </a>
          <a
            href="https://instagram.com/jovananggata"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebook}
              className="w-10 cursor-pointer object-cover opacity-0 brightness-50 transition delay-500 duration-[3000ms] hover:brightness-75"
              alt=""
              data-intersection="fade-in"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
