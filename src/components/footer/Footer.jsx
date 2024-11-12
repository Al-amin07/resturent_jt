import details from "./details";

import bg from "../../assets/footer/footer.jpeg";
import InfoCart from "./InfoCart";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  console.log(details);
  return (
    <footer
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className=" bg-no-repeat relative mb-[300px] py-[120px]"
    >
      <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
      <div className="max-w-[1320px] relative z-10 mx-auto  ">
        <h2 className=" bebas text-6xl text-white text-center">
          We ready to have you the best dining experiences
        </h2>
        <div className="grid px-12 md:px-0 mt-12 mb-[120px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {details.map((item) => (
            <InfoCart key={item?.title} item={item} />
          ))}
        </div>
      </div>
      <div className=" relative z-10">
        <SocialIcons />
        <p className=" text-xl text-center text-white">© 2023 All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
