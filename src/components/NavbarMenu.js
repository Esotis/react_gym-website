import React from "react";

const menus = ["Home", "Programs", "Why Us", "Plans", "Testimonial"];

function NavbarMenu(props) {
  return (
    <>
      <div
        className={`transition-all duration-1000 lg:hidden ${
          props.click ? "clip-100" : "clip-0 "
        }`}
      >
        <ul className={`py-5 ${props.click ? "block" : "hidden"}`}>
          {menus.map((menu, index) => {
            return (
              <li
                className="mb-3 rounded-lg border-2 border-orange-600 py-3 text-center font-bold text-white transition-all duration-700 hover:bg-orange-600"
                key={index}
              >
                <a href={`#${menu}`}>{menu}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavbarMenu;
