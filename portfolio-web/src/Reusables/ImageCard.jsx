import React from "react";
import bg from "../images/center-2d76a691.png";

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
      {overlay?<div
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
          {text || "play idflj lksd jlvjsdl kcj lxcjk"}
        </p>
      </div>:""}
    </div>
  );
};

export default ImageCard;
