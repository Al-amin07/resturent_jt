import bg from "../../assets/banner.png";

import Button from "../button/Button";
const Header = () => {
  return (
    <div className="bg-[#C4342A]  flex items-center justify-center py-7 lg:py-0 w-full lg:min-h-[calc(100vh-40px)] px-3 lg:px-0">
      <div className="   max-w-[1320px] px-6 lg:px-0 mx-auto">
        <div className=" flex gap-6 lg:gap-0 lg:flex-row flex-col items-center justify-between ">
          <div className=" flex-1">
            <h2 className=" text-5xl lg:text-[90px] bebas leading-[56px] lg:leading-[110px] text-white">
              Taste the authentic <br />
              Saudi cuisine
            </h2>
            <p className="text-2xl lg:w-10/12 text-white roboto mt-5 mb-10 ">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.{" "}
            </p>
            <Button size="18px" text={"Explore Menu"} />
          </div>
          <div className="relative flex-1">
            <img src={bg} className="w-full" alt="Banner" />
            <div className=" bg-[#FEC519] absolute bottom-3 lg:bottom-1 right-4 lg:-right-20 flex items-center justify-center  p-2 lg:p-3 rounded-full">
              <div className=" border h-[70px] lg:h-[120px] w-[70px] lg:w-[120px] rounded-full border-red-500 border-spacing-2 border-dotted flex items-center justify-center">
                <h2 className=" text-xl lg:text-3xl text-center font-bold">Today Offer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
