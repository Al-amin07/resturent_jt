import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {
  Pagination,
  Navigation,
  HashNavigation,
  Autoplay,
} from "swiper/modules";
import { menuItems } from "./populrFoods";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function PopularFood() {
  return (
    <div className="bg-[#FBF7F2]  w-full pt-8 pb-28 px-7 lg:px-0 lg:py-[120px]">
      <div className="max-w-[1320px] relative mx-auto">
        <h2 className=" text-base lg:text-xl roboto text-[#BD1F17] font-bold">
          {" "}
          <span className="h-[13px] w-[13px] bg-[#BD1F17] inline-block mr-2"></span>
          Crispy, Every Bite Taste
        </h2>
        <h2 className="text-4xl lg:text-6xl bebas mt-4 mb-10">
          POPULAR FOOD ITEMS
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          hashNavigation={{
            watchState: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.25": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination, HashNavigation, Autoplay]}
          className="mySwiper  "
        >
          {menuItems.map((menu, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer select-none p-8 bg-white"
            >
              <img
                src={menu?.image}
                className="mix-blend-multiply mx-auto max-w-[180px]"
                alt=""
              />
              <div className=" w-16 mt-2 mx-auto h-[3px] bg-[#BD1F17]  "></div>
              <h2 className=" text-2xl mt-6 bebas line-clamp-1  text-center">
                {menu?.name}
              </h2>
              <p className="line-clamp-2">{menu?.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className=" absolute top-3 right-0 flex gap-3">
          <button className="custom-prev cursor-pointer p-4 bg-white rounded-full hover:text-red-700 font-bold shadow-md"><FaChevronLeft size={26}/></button>
          <button className="custom-next p-4 cursor-pointer bg-white rounded-full hover:text-red-700 font-bold shadow-md"><FaChevronRight size={26}/></button>
        </div> */}
        <div className=" absolute lg:top-3 mt-10 lg:mt-0  z-10 lg:left-[95%] left-1/2 -translate-x-1/2  flex gap-3">
          <button className="custom-prev cursor-pointer p-4 bg-white rounded-full hover:text-red-700 font-bold shadow-md">
            <FaChevronLeft size={26} />
          </button>
          <button className="custom-next p-4 cursor-pointer bg-white rounded-full hover:text-red-700 font-bold shadow-md">
            <FaChevronRight size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}
