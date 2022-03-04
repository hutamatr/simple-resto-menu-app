import React, { Fragment } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MainSwiper from "./components/Main/MainSwiper";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <MainSwiper />
      <Footer />
    </Fragment>
  );
}

export default App;
