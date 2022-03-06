import React from "react";

import Love from "../../assets/love.svg";

const Footer = () => {
  return (
    <footer>
      <section className="text-center text-xs flex flex-col text-white py-8">
        <p>Challenge from Waveast Discord Group.</p>
        <div className="flex flex-row justify-center items-center">
          Make with{" "}
          <img src={Love} alt="love" className="w-5 mx-1 animate-pulse" />
          by <a href="https://twitter.com/huutamatr">hutamatr</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
