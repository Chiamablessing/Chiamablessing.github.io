import React from "react";
import { leftNavItems, rightNavItems } from "../navItems";
import "../Styles/Navbar.css";
import Logo from "../images/pinterest-3.svg";
import Button from "./Button";
const user = {
  name: "Pinterest",
  imageurl: Logo,
  imageSize: 40,
};
const Navbar = () => {
  return (
    <div style={{ position: "fixed", width: "100%" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", font: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", font: "16px" }}>
            <div>
              <img
                className="logo"
                src={user.imageurl}
                alt={"Photo of " + user.name}
                style={{
                  width: user.imageSize,
                  height: user.imageSize,
                  // paddingTop: "20px",
                }}
              />
            </div>

            <div style={{ padding: "0 12px" }}>
              <h1>Pinterest</h1>
            </div>
          </div>
          <ul>
            {leftNavItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul>
            {rightNavItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div style={{ padding: "8px 12px", font: "16px" }}>
            <Button text={"Log in"} font={1} w={5} color={"#FFFFFF"} />
          </div>
          <div>
            <Button text={"Sign up"} color={"#111111"} font={1} w={6} backgroundColor={"#E9E9E9"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
