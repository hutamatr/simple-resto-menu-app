import React from "react";

import Love from "../../assets/love.svg";

const Footer = () => {
  return (
    <footer>
      <section className="text-center text-xs flex flex-col text-white py-8">
        <p>
          Challenge from{" "}
          <a
            href="https://azhariemuhammad.notion.site/1-Resto-app-df14ffa3b0e34469a71d8ee3f7f83a6c"
            className="text-lime-400"
          >
            Waveast
          </a>{" "}
          Discord Group.
        </p>
        <div className="flex flex-row justify-center items-center">
          Make with{" "}
          <img src={Love} alt="love" className="w-5 mx-1 animate-pulse" /> by{" "}
          <a href="https://twitter.com/huutamatr" className="text-lime-400">
            {" "}
            hutamatr
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
