import React, { Children } from "react";
import bg from "../images/center-2d76a691.png";


const card2Images = [
  { "image": bg },
  { "image": bg },
  { "image": bg },
]

const ImageCard = ({ w, h, radius, overlay, text, font }) => {
  return (
    <div
      style={{
        position: "relative",
        border: "none",
        minWidth: "1rem",
        // padding: "2rem",
        width: `${w || 1}rem`,
        height: `${h || 1}rem`,
        background: `url(${bg})`,
        backgroundColor: `black`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: `${radius || 1}rem`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {overlay ? <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          color: "white",
          borderRadius: `${radius || 1}rem`,
          fontSize: `${font || 1}rem`,
          fontWeight: `600`,
          padding: "",
          cursor: "pointer",
        }}
      >
        <p style={{ padding: `${font || 1}rem` }}>
          {text || ""}
        </p>
      </div> : ""}
    </div>
  );
};
const ImageCard2 = ({ w, h, radius, overlay, text, font, fs, childImage }) => {
  return (
    <div
      style={{
        position: "relative",
        border: "none",
        minWidth: "1rem",
        // padding: "2rem",
        width: `${w || 1}rem`,
        height: `${h || 1}rem`,
        background: `url(${bg})`,
        backgroundColor: `black`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: `${radius || 1}rem`,
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {overlay ? <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          display: "flex",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          color: "white",
          borderRadius: `${radius || 1}rem`,
          fontSize: `${font || 1}rem`,
          fontWeight: `500`,
          padding: "",
          cursor: "pointer",
          // textAlign: "center",
        }}
      >
        <div className=" " style={{
          display: "grid",
        }}>

          <p style={{
            padding: `0 .7em`,
            margin: "auto",
            fontSize: `${fs ? fs + 'em' : ''}`,
          }}>
            {text || ""}
          </p>
          {childImage && <div className="bottom-images" style={{
            display:"flex",
            gap:"1em",
            justifyContent:"center",
            // border: "1px solid",
            }}>
            {card2Images.map((data) => (
              <div style={{
                backgroundImage: `url(${data.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "2em",
                width: "6em",
                height: "11em",
              }}>

              </div>
            ))}
          </div>}
        </div>
      </div> : ""
      }
    </div>
  );
};

export { ImageCard2 }
export default ImageCard;
