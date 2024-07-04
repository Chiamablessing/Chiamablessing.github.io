import React from "react";
// import Button from "../src/Reusables/Button";
// import ImageCard from "../src/Reusables/ImageCard";
// import bg from "./images/center-2d76a691.png";
import bg from "../images/eye shadow.png";
import bc from "../images/lip shade.png";
import bd from "../images/creator.png";
function ThirdContainer() {
  return (
    <div className="h-[100vh] w-[100%]  flex ">
      <div className="h-full flex-1 min-w-[50%] ">
        <div className="w-full h-full relative ">
          <img className="h-full w-full object-cover block " src={bg} alt="" />
          <div className="h-[100%] bg-transparent">
            <img
              className=" bottom-[160px] left-[150px] absolute block h-[383px] w-[215px] object-cover align-middle"
              src={bc}
              alt=""
            />
            <img
              className=" bottom-[140px] left-[120px] object-cover block absolute w-[100px] h-[100px]"
              src={bd}
              alt=""
            />
            <p className="bottom-[130px] left-[200px] text-white text-2xl font-semibold absolute block  object-cover align-middle">
              {" "}
              Scout the City
            </p>
            <br />
            <p className="bottom-[100px] left-[200px] text-white text-2xl font-semibold absolute block  object-cover align-middle">
              56.7k followers
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex px-20 flex-col text-center bg-[#FFE2EB] ">
          <p className="text-6xl mt-[80px] text-red-600 font-bold ">
            See it, make it, <br /> try it, do it
          </p>
          <p className="text-2xl mt-[25px] text-red-600">
            The best part of Pinterest is discovering new things and ideas from
            people around the world.
          </p>
          <button className=" px-8 py-3 flex bg-red-600 text-white mb-2 mt-[50px] rounded-full w-fit mx-auto ">
            Explore
          </button>
      </div>
    </div>
  );
}

export default ThirdContainer;
