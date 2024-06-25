import React from "react";
/* Button component
 *@color: button color
 *@action: function that defines button functionlity on click
 *@w: defines butons custom with
 *@h: defines buttons custom height
 *@text: button text content
 *@font: size of button text
 */
const Button = ({ color, action, w, h, backgroundColor, text, font, radius }) => {
  return (
    <button
    className="Signup"
      style={{
        color: color || "white",
        fontWeight: "600",
        fontSize: `${font || 1}rem`,
        border: "none",
        backgroundColor: backgroundColor|| "red",
        width: w ? `${w}rem` : "fit-content",
        padding: `${h || 0.1}rem ${font || 1}rem `,
        textAlign: "center",
        borderRadius: `${radius || 1}rem`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => action()}
    >
      {text || "Signup"}
    </button>
  );
};

export default Button;
