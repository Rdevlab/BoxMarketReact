import React from "react";
import "./Navbar.css";
import backgroundBlur from "../../assets/background-blur.png";
import HeadPhones from "/consumer-electronics/headphones.png";
import HeroBg from "../../assets/heroBG.png";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { SlList } from "react-icons/sl";
import { AiOutlineProduct } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import { FaBars, FaUser, FaChevronDown } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import products from "../../assets/src";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const links = [
    { id: 1, Icon: GrHomeRounded, link: "#home", name: "Home" },
    { id: 2, Icon: AiOutlineProduct, link: "#products", name: "Product" },
    { id: 3, Icon: SlList, link: "#home", name: "Categories" },
    { id: 5, Icon: FiShoppingCart, link: "#home", name: "Cart" },
    { id: 4, Icon: FiUser, link: "#home", name: "Account" },
    { id: 6, Icon: MdOutlineWbSunny, name: "LightMood" },
  ];

  return (
    <>
      {/* Computer Navbar */}
      <nav className="w-fll flex justify-between md:px-20 xl:px-20 px-4 pt-4 py-1 items-center z-40 bg-white backdrop-blur-md text-black fixed top-0 right-0 left-0">
        <a href="#home" className="flex gap-4 items-center text-2xl font-bold">
          <img src="/logo.png" alt="logo" className="w-12 h-12" />
          BoxMarket.com
        </a>

        <ul className="md:flex xl:flex hidden gap-8 text-2xl font-semibold transition-all ease-in ">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="hover:scale-110 duration-300 cursor-pointer h-full w-max  hover:drop-shadow-2xl hover:drop-shadow-amber-500 group">
                <a href={link.link} className="flex gap-1 items-center relative  justify-center">
                  <link.Icon className="group-hover:text-transparent duration-300 absolute" />
                  <span className="text-sm flex text-transparent  group-hover:text-black duration-300 transition-all ">
                    {link.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <button className="flex md:hidden xl:hidden text-2xl cursor-pointer hover:scale-110 duration-300">
          <FaUser />
        </button>
      </nav>
      {/* mobile Navbar */}
      <nav className="w-fll flex xl:hidden md:hidden justify-between md:px-20 xl:px-20 px-4 py-2 pb-6  items-center z-50  bg-white backdrop-blur-md text-black fixed bottom-0 right-0 left-0">
        <ul className="xl:hidden md:hidden flex w-full justify-evenly items-center  p-2 text-3xl font-semibold transition-all ease-in ">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="hover:scale-110 duration-300 cursor-pointer h-full w-max  hover:drop-shadow-2xl hover:drop-shadow-amber-500 group">
                <a href={link.link} className="flex gap-1 items-center relative  justify-center">
                  <link.Icon className="group-hover:text-transparent duration-300 absolute" />
                  <span className="text-sm flex text-transparent  group-hover:text-black duration-300 transition-all ">
                    {link.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <section className={`w-full h-screen flex pt-20 p-8 relative`} id="home">
        <div
          className="w-full h-full rounded-4xl flex items-center overflow-hidden border-2 border-white"
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="w-full flex flex-col md:flex-row xl:flex-row overflow-hidden h-full backdrop-blur-xs  items-center">
            <article className=" flex flex-col gap-8 rounded-r-2xl xl:p-8 p-4 xl:pl-20 xl:max-w-120 w-90 md:w-120 h-max bg-white relative">
              <span className="w-10 h-4 border-l-4 border-b-4 absolute -top-3 -left-1 rounded-bl-4xl border-white  "></span>
              <span className="w-10 h-4 border-l-4 border-t-4 absolute -bottom-3 -left-1 rounded-tl-4xl border-white  "></span>
              <h1 className="xl:text-5xl text-3xl font-bold appearUp opacity-0">BoxMarket.com</h1>
              <p className="max-w-[40ch] text-sm xl:text-xl md:text-xl  appearUp1 opacity-0 ">
                Welcome to BoxMarket.com – your one-stop destination for amazing deals and
                top-quality products! Discover the latest trends in fashion, electronics, home
                essentials, beauty, and much more—all at prices you’ll love.
              </p>
              <div className="flex w-full gap-10 opacity-0 appearUp2">
                <button className="px-4 p-1 rounded-full bg-green-600 border-green-700 border text-white ">
                  Explore
                </button>
                <button className="px-4 p-1 rounded-full border-green-700 border text-green-700">
                  Join Community
                </button>
              </div>
            </article>

            {/* product slider section */}

            <article className="w-full h-full gap-6 flex flex-col items-center">
              <div className=" rounded-2xl relative overflow-hidden w-full h-full flex flex-col justify-center items-center bg-[radial-gradient(circle_at_center,_white_0%,_transparent_60%)]">
                <img
                  src={HeadPhones}
                  alt=""
                  className="w-140 h-full  productAppear cursor-pointer"
                />
                <div className="flex gap-2 flex-col absolute max-w-60 rounded-2xl bg-white/50 right-6 p-2 pt-4">
                  <h1 className="font-bold text-xl appearUp opacity-0">HeadPhones</h1>
                  <p className="leading-5 text-sm appearUp1 opacity-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illo rerum eos
                    quidem quasi culpa molestiae modi officia cum maxime?
                  </p>
                  <span className="flex gap-4">
                    <button className="flex gap-1 items-center px-4 relative group text-md cursor-pointer  justify-center  hover:bg-green-700 rounded-full appearUp2 opacity-0">
                      <FiShoppingCart className="group-hover:text-transparent duration-300 absolute" />
                      <span className="flex text-transparent px-2 py-1 w-max justify-center gap-4 items-center group-hover:text-white duration-300 transition-all ">
                        Add To Cart <p>$12.45</p>
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
        <FaChevronDown className="absolute left-1/2 bottom-16 animate-bounce" />
      </section>
    </>
  );
};

export default Navbar;
