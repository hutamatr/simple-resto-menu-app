import React from "react";

const Header = () => {
  return (
    <header>
      <section className="container flex flex-col gap-y-5 mt-8 justify-center px-6 md:mx-auto md:mb-6">
        <h1 className="text-center font-bold text-white text-4xl font-noto">
          Our Top Menu
        </h1>
        <p className="text-center text-white">
          Some of the best menu choices that you can order at our restaurant
        </p>
        <button className="block mx-auto py-3 px-6 border-2 bg-[#6259ac] border-white text-white hover:border-slate-200 hover:text-slate-200">
          View More
        </button>
      </section>
    </header>
  );
};

export default Header;
