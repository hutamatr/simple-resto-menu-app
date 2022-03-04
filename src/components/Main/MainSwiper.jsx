import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MenuData from "../menu-data/MenuData";

const MainSwiper = () => {
  const menus = MenuData.map((menu) => {
    return (
      <li key={menu.id} className="">
        <SwiperSlide className="text-white flex flex-col gap-y-4 justify-center items-center md:py-8 md:px-28 lg:px-96">
          <img
            src={menu.image}
            alt={`menu-${menu.id}`}
            className="md:max-w-md"
          />
          <h2 className="font-noto font-semibold text-2xl">{menu.name}</h2>
          <p className="text-center text-gray-400 text-lg">{menu.desc}</p>
          <div className="text-2xl font-light ">$ {menu.price}</div>
        </SwiperSlide>
      </li>
    );
  });

  return (
    <Fragment>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={
          "hidden md:block md:mx-auto md:mb-48 lg:mb-12 md:mt-20 lg:mt-4"
        }
      >
        <ul>{menus}</ul>
      </Swiper>
    </Fragment>
  );
};

export default MainSwiper;
