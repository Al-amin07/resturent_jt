import { useState } from "react";
import img from "../../assets/about/aboutbg.png";
import Button from "../button/Button";
import one from "../../assets/about/one.png";
import { MdPhoneInTalk } from "react-icons/md";

const details = [
  {
    name: "About",
    title: "Experience the Essence of Our Story",
    desc: "Our restaurant blends traditional culinary arts with modern innovation, offering a dining experience that is both flavorful and memorable. Our story reflects a passion for quality and excellence, from humble beginnings to a beloved dining destination.",
  },
  {
    name: "Experience",
    title: "A Unique and Memorable Dining Adventure",
    desc: "Step into a world where ambiance and flavor come together seamlessly. Our chefs bring each dish to life with precision and passion, ensuring a dining experience that lingers in memory long after the last bite.",
  },
  {
    name: "Contact",
    title: "Explore Our Diverse and Flavorful Menu",
    desc: "Our menu celebrates the best of seasonal ingredients and culinary creativity, offering a wide selection from appetizers to desserts. Each dish is crafted to please various tastes, with options for every preference, including vegan and gluten-free choices.",
  },
];

const About = () => {
  const [tab, setTab] = useState("About");
  const tabData = details.find((t) => t.name === tab);
  console.log(tabData);
  return (
    <div className="max-w-[1320px] mx-auto px-7 lg:px-0">
      <div className=" flex flex-col w-full  lg:flex-row   gap-16">
        <img className="w-[610px]" src={img} alt="" />
        <div className=" flex-1 h-[300px] ">
          <div className=" border-b-2 border-b-[#B52B1D]">
            <button
              onClick={() => setTab("About")}
              className={`py-[6px] px-4 text-sm ${
                tab === "About" && "bg-[#B52B1D] text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setTab("Experience")}
              className={`py-[6px] px-4 text-sm ${
                tab === "Experience" && "bg-[#B52B1D] text-white"
              } `}
            >
              Experience
            </button>
            <button
              onClick={() => setTab("Contact")}
              className={`py-[6px] px-4 text-sm ${
                tab === "Contact" && "bg-[#B52B1D] text-white"
              }`}
            >
              Contact
            </button>
          </div>
          <div>
            <h2 className=" bebas mt-8 mb-4 text-[40px] lg:text-6xl ">
              {tabData?.title}
            </h2>
            <h2 className="roboto">{tabData?.desc}</h2>
          </div>
          <div className=" flex gap-3 lg:gap-8 mt-8">
            <Button text={"About More"} size="18px" />
            <button className="py-[10px] transition-colors duration-500 text-lg lg:text-xl  px-3 lg:px-6 roboto bg-white hover:bg-[#FEBF00] uppercase font-bold text-[#0A1425]"><MdPhoneInTalk className="inline-block" size={28} /> +88 3426 739 485</button>
          </div>
        </div>
      </div>
      <div className=" mt-16  flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
        <div className=" flex gap-6 items-center">
          <img
            src={one}
            alt=""
            className=" p-6 h-[90px] w-[90px] bg-white rounded-full shadow-xl"
          />
          <div>
            <h2 className=" uppercase text-3xl bebas">Fast Delivery</h2>
            <p className="text-xl text-[#0A1425] mt-2">Within 30 minutes</p>
          </div>
        </div>
        <div className=" flex gap-6 items-center">
          <img
            src={one}
            alt=""
            className=" p-6 h-[90px] w-[90px] bg-white rounded-full shadow-xl"
          />
          <div>
            <h2 className=" uppercase text-3xl bebas">absolute dining</h2>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className=" flex gap-6 items-center">
          <img
            src={one}
            alt=""
            className=" p-6 h-[90px] w-[90px] bg-white rounded-full shadow-xl"
          />
          <div>
            <h2 className=" uppercase text-3xl bebas">pickup delivery</h2>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
