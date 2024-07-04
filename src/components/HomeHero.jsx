import React from "react";
import goglelogo from "../images/gogle-logo.png";
import mobileHeroBgImages from '../images/bedroom.png'
import pntLogo from '../images/pinterest-3.svg'

function HomeHero() {
  const imgesCount = []
  for (let index = 0; index < 15; index++) {
    imgesCount.push(index)

  }
  return (
    <div>
      {/* desktop view starts */}
      <div className="hidden lg:block relative h-full overflow-y-hidden">
        <p className="text-black font-semibold h-20 w-[] mx-[2px] my-[2px] text-center block text-6xl no-underline decoration-solid decoration-auto break-words pt-2">Get your next </p>
        <div>
          <p className="absolute text-6xl z-0 items-center w-[100%] font-semibold left-0 opacity-90 m-0 text-center text-yellow-700 block break-words animate-pulse translate-y-2">weeknight dinner</p>
          {/* <p className="absolute text-6xl z-0 items-center w-[100%] font-semibold left-0 opacity-0 m-0 text-center text-green-700 block break-words animate-pulse translate-y-2">Home decor idea</p> */}
          {/* <p className="absolute text-6xl z-0 items-center w-[100%] font-semibold left-0 opacity-0 m-0 text-center text-blue-700 block break-words animate-pulse translate-y-2">new look outfit</p> */}
          {/* <p className="absolute text-6xl z-0 items-center w-[100%] font-semibold left-0 opacity-90 m-0 text-center text-green-700 block break-words animate-pulse translate-y-2">Green thumb idea</p> */}
        </div>
        <div
          className="gradient"
          style={{
            background:
              "linear-gradient(rgba(255,255,255,0) 0%, rgb(255,255,255) 70%)",
            height: "200px",
          }}
        ></div>
        <div className="flex gap-2">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>

      </div>
      {/* desktop view ends */}
      {/* mobile view starts */}
      <div className="lg:hidden relative h-full overflow-y-hidden min-h-screen">
        <div className=" absolute -top-[50px] bg-black z-[1]">
          <div className="flex w-full flex-wrap gap-2 justify-center">
            {
              imgesCount.map((img, index) => (
                <img key={index} className="w-[90px] h-[110px] " src={mobileHeroBgImages} alt="" />
              ))
            }
          </div>
        </div>
        {/* overly starts */}
        <div className="z-50 relative text-white pt-[100px] flex flex-col items-center bg-[#00000084] h-screen ">
          {/* <svg
          color="#f0ecec"
            aria-label="logo"
            class="ePF gUZ U9O kVc"
            height="48"
            role="img"
            viewBox="0 0 24 24"
            width="48"
          >
            <path d="M7.55 23.12c-.15-1.36-.04-2.67.25-3.93L9 14.02a7 7 0 0 1-.34-2.07c0-1.68.8-2.88 2.08-2.88.88 0 1.53.62 1.53 1.8q0 .57-.22 1.28l-.53 1.73q-.15.5-.15.91c0 1.2.92 1.88 2.09 1.88 2.08 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.11-5.06-5.11-3.36 0-5.49 2.19-5.49 5.23 0 1.23.38 2.37 1.11 3.15-.24.4-.5.48-.88.48-1.2 0-2.34-1.7-2.34-4 0-3.99 3.2-7.16 7.68-7.16 4.7 0 7.66 3.28 7.66 7.33 0 4.07-2.88 7.13-5.98 7.13a3.8 3.8 0 0 1-3.07-1.47l-.61 2.5c-.33 1.28-.83 2.5-1.62 3.67A12 12 0 0 0 24 11.99 12 12 0 1 0 7.55 23.12"></path>
          </svg> */}
          <img className="w-16" src={pntLogo} alt="" />
          <p>Welcome to Pinterest</p>
          <p className="bg-red-600 mb-2 px-4 py-2 rounded-full ">Continue with email</p>
          <p className="flex gap-2 bg-white px-4 py-2 rounded-full ">
            <img src={goglelogo} className="w-6 h-6" alt="" />
            <span className="text-black">Continue with Google</span>
          </p>
          <p>Already a member? Login</p>
          <p>Are you a business? Get started here</p>
          <p className="text-xs text-center py-1">By continuing, you agree to pinterest Terms of  Service and acknowledge you've read our privacy, Notice of collection </p>
        </div>
      </div>
      {/* mobile view ends */}
    </div>
  );
}

export default HomeHero;
