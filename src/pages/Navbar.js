import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import NavbarMenu from "../components/NavbarMenu";

const menus = ["Home", "Programs", "Why Us", "Plans", "Testimonial"];

function Navbar() {
  const [click, setClick] = useState(false);

  const showMenu = () => {
    setClick(!click);
  };

  return (
    <>
      <section>
        <div>
          <div className="flex justify-between">
            {/* navbar logo */}
            <div className="h-10 w-36 object-cover object-center">
              <img src={logo} alt="Logo" />
            </div>
            {/* Navbar Menu */}
            <ul className="hidden items-center justify-center text-white lg:flex">
              {menus.map((menu, index) => {
                return (
                  <li
                    key={index}
                    className="mr-4 font-bold transition duration-700 hover:text-orange-600"
                  >
                    <a href={`#${menu}`}>{menu}</a>
                  </li>
                );
              })}
            </ul>
            {/* navbar button */}
            <div className="flex items-center justify-center">
              <button className="mr-3 rounded-full bg-gradient-to-b from-yellow-400 to-amber-600 px-6 py-3 font-bold text-white shadow-xl shadow-amber-400/40 hover:border-2 hover:border-amber-600 hover:bg-white hover:bg-none hover:text-amber-500">
                Join
              </button>
              <div className="inline-block rounded-full border-2 border-orange-600 bg-orange-600 px-4 py-2 text-white transition duration-700 hover:bg-white hover:text-orange-600 lg:hidden">
                {click ? (
                  <BiX className="h-6 w-6 stroke-2" onClick={showMenu} />
                ) : (
                  <FaBars className="h-6 w-6" onClick={showMenu} />
                )}
              </div>
            </div>
          </div>
          {/* Navbar Clip Menu */}
          <NavbarMenu showMenu={showMenu} click={click} />
        </div>
      </section>
    </>
  );
}

export default Navbar;
