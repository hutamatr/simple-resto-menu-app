import React from "react";
import MenuData from "../menu-data/MenuData";

const Main = () => {
  const menus = MenuData.map((menu) => {
    return (
      <li
        key={menu.id}
        className="flex flex-col gap-y-5 justify-center items-center text-white"
      >
        <img src={menu.image} alt={`menu-${menu.id}`} />
        <h2 className="font-noto font-semibold text-lg">{menu.name}</h2>
        <p className="text-center text-gray-400">{menu.desc}</p>
        <div className="text-2xl font-light ">$ {menu.price}</div>
      </li>
    );
  });

  return (
    <main>
      <section className="container md:hidden">
        <ul className="flex flex-col gap-y-16 my-16 px-12">{menus}</ul>
      </section>
    </main>
  );
};

export default Main;
