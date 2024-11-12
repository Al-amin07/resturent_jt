import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard,  Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import test from "../../assets/food/test.png";
import { IoMdPlay } from "react-icons/io";

const arr = [
  {
    name: "Khalid Al Dawsy",
    location: "Jeddah, Saudi",
    testimonial:
      "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    profileImage: "url-to-profile-image-1",
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    location: "Dubai, UAE",
    testimonial:
      "The flavors were authentic and the food was served fresh. It reminded me of home. Highly recommended!",
    profileImage: "url-to-profile-image-2",
    rating: 4,
  },
  {
    name: "John Doe",
    location: "Riyadh, Saudi",
    testimonial:
      "Amazing experience! The spices were balanced and the rice was perfectly cooked. Will visit again.",
    profileImage: "url-to-profile-image-3",
    rating: 5,
  },
  {
    name: "Amina Karim",
    location: "Abu Dhabi, UAE",
    testimonial:
      "The best mandi I’ve had in a long time. The meat was tender and flavorful. Can’t wait to return.",
    profileImage: "url-to-profile-image-4",
    rating: 5,
  },
  {
    name: "Mohammed Al Zahrani",
    location: "Dammam, Saudi",
    testimonial:
      "Great ambiance and excellent food! The mandi was delicious, especially the lamb. Highly recommend it.",
    profileImage: "url-to-profile-image-5",
    rating: 4,
  },
];
export default function Testimonial() {
  return (
    <div className="max-w-[1320px]  p-[30px] lg:p-0 relative mx-auto min-h-[600px]">
      <h2 className=" text-base lg:text-xl roboto text-[#BD1F17] font-bold">
        {" "}
        <span className="h-[13px] w-[13px] bg-[#BD1F17] inline-block mr-2"></span>
        Crispy, Every Bite Taste
      </h2>
      <h2 className="text-4xl lg:text-6xl bebas mt-4 mb-10">
        What Some of my Customers Say
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
       
        modules={[Keyboard, Navigation, Autoplay]}
        className="mySwiper  hover:cursor-pointer"
      >
        {arr.map((ar) => (
          <SwiperSlide className="" key={ar.name}>
            <div className=" flex lg:flex-row flex-col-reverse">
              <div className="py-6 flex flex-col gap-10 justify-between lg:py-[60px]  min-w-auto max-w-full lg:max-w-[550px] bg-[#FEBF00] px-6  lg:px-[70px]">
                <h2 className="text-xl lg:text-2xl text-black">
                  &quot;You can&apos;t go wrong with Chicken Mandi, I had it
                  twice. The chicken was cooked perfectly, juicy & soft (usually
                  mandi chicken is a bit dry). I would defiantly recommend it.
                </h2>
                <div className=" flex justify-between items-center">
                  <div>
                    <h2 className=" text-xl bebas">{ar?.name}</h2>
                    <h2 className=" roboto">{ar?.location}</h2>
                  </div>
                  <img
                    src=""
                    className="h-16 w-16 rounded-full bg-green-500"
                    alt=""
                  />
                </div>
              </div>
              <div className=" relative h-[200px] lg:h-[555px]  flex-1 bg-red-300 ">
                <img src={test} alt="Test" className="h-[280px] lg:h-full w-full" />
                <div className="p-7  rounded-full bg-[#FEBF00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <IoMdPlay
                    size={28}
                    className=" text-black ml-[3px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" absolute lg:top-3 mt-10 lg:mt-0  z-10 lg:left-[95%] left-1/2 -translate-x-1/2  flex gap-3">
        <button className="custom-prev cursor-pointer p-4 bg-white rounded-full hover:text-red-700 font-bold shadow-md">
          <FaChevronLeft size={26} />
        </button>
        <button className="custom-next p-4 cursor-pointer bg-white rounded-full hover:text-red-700 font-bold shadow-md">
          <FaChevronRight size={26} />
        </button>
      </div>
    </div>
  );
}
