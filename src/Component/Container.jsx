import React, { useState } from "react";
import EveryThing from "./EveryThing";
import "../Styles/container.css";

const Container = () => {
  const [logo, setLogo] = useState("Gallery");

  return (
    <div className="container">
      <div className="navbar">
        <span>{logo}</span>
        <button>Delete</button>
      </div>
      <div className="all">
        <EveryThing />
      </div>
    </div>
  );
};

export default Container;
