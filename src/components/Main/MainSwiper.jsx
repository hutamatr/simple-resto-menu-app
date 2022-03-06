import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MenuData from "../menu-data/MenuData";

const MainSwiper = ({ className }) => {
  const menus = MenuData.map((menu) => {
    return (
      <li key={menu.id}>
        <SwiperSlide className="text-white flex flex-col gap-y-4 justify-center items-center md:py-8">
          <img
            src={menu.image}
            alt={`menu-${menu.id}`}
            className="md:w-60 lg:max-w-xs"
          />
          <h2 className="font-noto font-semibold text-xl text-center">
            {menu.name}
          </h2>
          <p className="text-center text-gray-400 md:text-sm lg:text-base">
            {menu.desc}
          </p>
          <div className="text-2xl font-light ">$ {menu.price}</div>
        </SwiperSlide>
      </li>
    );
  });

  return (
    <section className="container mx-auto lg:px-24 md:px-10 mb-12">
      <Swiper
        slidesPerView={3}
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
        className={className}
      >
        <ul>{menus}</ul>
      </Swiper>
    </section>
  );
};

export default MainSwiper;
