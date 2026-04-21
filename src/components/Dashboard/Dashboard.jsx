import React from "react";
import "./Dashboard.css";
import BackgroundBlur from "../../assets/background-blur.png";
import Users from "../linksAndFiles/Users";
import { GrOverview } from "react-icons/gr";
import { BiAnalyse } from "react-icons/bi";
import { CiUser, CiCircleList, CiSettings } from "react-icons/ci";
import { TbUsersGroup } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineDiscount } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Dashboard = () => {
  const DashboardLinks = [
    { id: 1, Icon: GrOverview, name: "Overview" },
    { id: 2, Icon: BiAnalyse, name: "Analytics" },
    { id: 3, Icon: CiUser, name: "Suppliers" },
    { id: 4, Icon: TbUsersGroup, name: "Customers" },
    { id: 5, Icon: AiOutlineProduct, name: "Products" },
    { id: 6, Icon: CiCircleList, name: "Categories" },
    { id: 7, Icon: LiaShippingFastSolid, name: "Shippings" },
    { id: 8, Icon: MdOutlineDiscount, name: "Discount and Coupons" },
    { id: 9, Icon: CiSettings, name: "Settings" },
  ];

  return (
    <section className="h-screen w-full flex bg-white z-50">
      <aside
        id="aside"
        className="w-60 shrink-0 transition-all duration-300 h-full relative backdrop-blur-sm px-4 pr-4 flex flex-col items-center justify-center pt-26 gap-4 border-r border-gray-400">
        <div className="w-full flex gap-2 h-full items-center overflow-hidden">
          <img src="" alt="logo" className="w-10 shrink-0 h-10 rounded-full border" />
          <h1
            id="adminName"
            className="text-green-800 font-bold text-xl shrink-0 duration-300 transitioan-all">
            Admin Name
          </h1>
        </div>
        <div className="flex flex-col w-full h-full relative gap-2 text-white">
          {DashboardLinks.map((list) => {
            return (
              <li
                key={list.id}
                className="flex cursor-pointer gap-2 overflow-hidden p-2 hover:border-green-800 border duration-200 hover:scale-105 hover:shadow-lg  border-transparent w-full text-black rounded-md">
                <p className="w-full flex gap-2 items-center text-sm" id="dash">
                  <list.Icon className="text-3xl shrink-0" />
                  <p className="duration-300 shrink-0"> {list.name}</p>
                </p>
              </li>
            );
          })}
          ;
        </div>
        <button
          onClick={() => closeAside("close")}
          id="btn"
          className="flex w-8 h-8 absolute top-1/2 -right-4 text-green-800 bg-white backdrop-blur-md border-green-950/40 items-center justify-center p-2 rounded-full border cursor-pointer hover:scale-110 duration-300">
          <FaChevronLeft className="group-hover:scale-105 duration-200" />
        </button>
      </aside>
      {/* container side for informations */}
      <div className="w-full h-full bg-green-950/70"></div>
    </section>
  );
  function closeAside(e) {
    if (e === "close") {
      document.querySelectorAll("#dash p").forEach((p) => {
        p.classList.toggle("hidden");
        document.querySelector("#adminName").classList.toggle("hidden");
        document.querySelector("#btn").classList.toggle("rotate-180");
        document.querySelector("#aside").classList.add("w-20");
        document.querySelector("#aside").classList.toggle("w-60");
      });
    }
  }
};
export default Dashboard;
