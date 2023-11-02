import React from "react";
import "./.css";
import logoapp from "./logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logoapp} alt="Log" />
    </div>
  );
}

export default Logo;
