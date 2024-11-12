import { useState } from "react";
import logo from "../../assets/logoo.png";
import Button from "../button/Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#C4342A] sticky z-20 top-0">
      <div className="flex  text-white py-4 px-3 lg:px-0  justify-between items-center max-w-[1320px] mx-auto">
        <div className=" flex items-center gap-[80px]">
          <div className="flex items-center gap-2 ">
            <img src={logo} alt="logo" />
            <h2 className="text-3xl poppins">Restaurent</h2>
          </div>
          <ul className=" hidden lg:flex  gap-10 items-center">
            <li className="text-[15px] raleway font-medium">
              <a href="">Home</a>
            </li>
            <li className="text-[15px] raleway font-medium">
              <a href="">About</a>
            </li>
            <li className="text-[15px] raleway font-medium">
              <a href="">Portfolio</a>
            </li>
            <li className="text-[15px] raleway font-medium">
              <a href="">Clients</a>
            </li>
            <li className="text-[15px] raleway font-medium">
              <a href="">Blog</a>
            </li>
            <li className="text-[15px] raleway font-medium">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className=" flex items-center">
          <div className="lg:inline-block hidden">
            <Button text={"Book a Table"} />
          </div>

          <div className=" relative ">
            <RxHamburgerMenu
              onClick={() => setOpen(!open)}
              className="lg:hidden"
              size={28}
            />
            {open && (
              <ul className=" shadow-lg z-40 lg:hidden w-[150px] absolute top-10 right-0 bg-white space-y-1 text-black p-4">
                <li className="text-[15px]  raleway font-medium">
                  <a
                    className="hover:bg-slate-100  py-1 px-3 w-full inline-block"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li className="text-[15px]  raleway font-medium">
                  <a
                    className="hover:bg-slate-100  py-1 px-3 w-full inline-block"
                    href=""
                  >
                    About
                  </a>
                </li>
                <li className="text-[15px]  raleway font-medium">
                  <a
                    className="hover:bg-slate-100  py-1 px-3 w-full inline-block"
                    href=""
                  >
                    Portfolio
                  </a>
                </li>
                <li className="text-[15px]  raleway font-medium">
                  <a
                    className="hover:bg-slate-100  py-1 px-3 w-full inline-block"
                    href=""
                  >
                    Clients
                  </a>
                </li>
                <li className="text-[15px]  raleway font-medium">
                  <a
                    className="hover:bg-slate-100  py-1 px-3 w-full inline-block"
                    href=""
                  >
                    Blog
                  </a>
                </li>
                <li className="text-[15px]  raleway font-medium">
                  <a
                    className="hover:bg-slate-100  py-1 px-3 w-full inline-block"
                    href=""
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
