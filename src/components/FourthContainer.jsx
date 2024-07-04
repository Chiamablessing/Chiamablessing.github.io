import React from "react";
import BG from "../images/Capture.png";
// import floral from "../images/floral.png"
import Signup from "../Forms/Signup.js";

function FourthContainer() {
  return (
    <div
      style={{
        background: `url('${BG}')`,
      }}
      className={` h-[100%] w-[100%] `}
    >
      <div className="bg-black/20 flex justify-around items-center h-full w-full">
        <h2 className="text-white   text-7xl font-semibold pl-10 ">
          Sign up to <br /> get your <br /> ideas
        </h2>

        <div className="min-h[400px] items-center h-[100%] px-5 py-6 relative rounded-s-3xl">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default FourthContainer;
