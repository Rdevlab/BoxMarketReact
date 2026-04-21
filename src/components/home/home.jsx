import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import products from "../../assets/src.jsx";
const Home = () => {
  return (
    <>
      <section
        className=" min-h-screen bg- w-full gap-2 pt-20  p-4 flex justify-between flex-wrap"
        id="products">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col gap-2 p-4 rounded-xl bg-white/30 backdrop-blur-md w-44 min-h-70 h-max hover:border-black/10 hover:shadow-2xl hover:scale-105 duration-200 cursor-pointer overflow-hidden ">
              <img
                src={product.link}
                alt={product.name}
                className="w-full h-40 hover:scale-120 duration-200"
              />
              <h3 className="text-sm">{product.name}</h3>
              <p>$12.45</p>
              <button className="flex gap-1 items-center px-4 relative group text-sm cursor-pointer  justify-center  hover:bg-green-700 rounded-full">
                <FiShoppingCart className="group-hover:text-transparent duration-300 absolute" />
                <span className="flex text-sm flex-col text-transparent px-2 py-1 w-max justify-center gap-1 items-center group-hover:text-white duration-300 transition-all ">
                  Add To Cart
                </span>
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home;
