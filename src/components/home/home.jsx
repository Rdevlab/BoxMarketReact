import React from "react";
import products from "../src.js";
const Home = () => {
  return (
    <>
      <section
        className=" min-h-screen bg- w-full gap-2  p-4 flex justify-between flex-wrap"
        id="home">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-md w-40 h-60">
              <img src={product.img} className="w-full h-max" />
              <h1>{product.name}</h1>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home;
