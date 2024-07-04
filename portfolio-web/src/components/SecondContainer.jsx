import React from 'react'
import mobileHeroBgImages from '../images/bedroom.png'
// import Button from "../src/Reusables/Button";

function SecondContainer() {
  const imgesCount = []
  for (let index = 0; index < 6; index++) {
    imgesCount.push(index)
  }
  return (

    <div className='h-[120vh] w-[100%] bg-teal-100 mt-0 table relative flex-row'>

      <div className='mb-1 '>
      <p className='text-6xl px-8 text-green-900 font-bold items-center block mt-20 justify-center '>Save ideas you like</p>
      </div>
      <div
      className="sideb"
      style={{
        fontSize: "24px",
        color: "rgb(0,107,108)",
        alignItems: "right",
        paddingRight: "16px",
        paddingLeft: "40px",
        boxSizing:"border-box",
      }}>
      <p>Collect your favourite so that you can get back to them </p>
      </div>

     <div className='mt-2 p-8 justify-center px-8'>
      <button className="bg-red-600 text-white mb-2 px-4 py-2 rounded-full ">Explore</button>
     </div>

    <div className='flex w-full flex-wrap gap-2 justify-center'>
    {
              imgesCount.map((img, index) => (
                <img key={index} className="w-[90px] h-[110px] " src={mobileHeroBgImages} alt="" />
              ))
            }
    <div className="item1" style={{ top: "0px", left: "464px" }}></div>
    <div className="item2" style={{ top: "0px", left: "464px" }}></div>
    <div className="item3" style={{ top: "20px", left: "447px" }}></div>
    <div className="item4" style={{ top: "500px", left: "429px" }}></div>
    <div className="item5" style={{ top: "460px", left: "159px" }}></div>
    </div>

  </div>

  )
}

export default SecondContainer