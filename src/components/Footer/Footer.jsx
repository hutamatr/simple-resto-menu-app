import React from "react";

import Love from "../../assets/love.svg";

const Footer = () => {
  return (
    <footer>
      <section className="text-center text-xs flex flex-col text-white bg-slate-800 py-8">
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

//  <h4>Challenge by Waveast Discord Group.</h4>
//         <h4>
//           Made with <img src={Love} alt="" className="w-5 mx-auto" /> by
//         </h4>
//         <a
//           href="https://twitter.com/huutamatr"
//           target="_blank"
//           rel="noreferrer"
//         >
//           hutamatr.
//         </a>
