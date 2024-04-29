import React from "react";

function Contact() {
  return (
    <>
      <section>
        <div className="flex flex-wrap gap-4">
          <div className="w-full lg:w-1/3 lg:flex-1">
            <p className="mb-2 text-center text-2xl font-bold italic text-white sm:text-3xl md:text-4xl min-[1105px]:text-5xl ">
              READY TO LEVEL UP
            </p>
            <p className="text-center text-2xl font-bold italic text-white sm:text-3xl md:text-4xl min-[1105px]:text-5xl">
              YOUR BODY WITH US?
            </p>
          </div>
          <div className="mt-2 flex w-full items-center justify-center px-4 lg:mt-0 lg:w-1/3 lg:flex-1">
            <input
              type="text"
              className="mr-2 w-full rounded-md border-0 px-3 py-2 focus:border-2 focus:border-orange-600"
            />
            <button className="rounded-lg border-2 border-white bg-orange-500 py-2 px-6 font-bold text-white transition duration-700 hover:border-orange-500 hover:bg-white hover:text-orange-500">
              Join
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
