import React, { forwardRef, useState } from "react";

export const Photo = forwardRef(
  ({ url, index, faded, style, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    const checkmarkColor = isClicked ? "blue" : "white";

    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 410 : 198,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "white",
      cursor: "pointer",
      filter: `brightness(${isHovered ? 0.8 : 1})`,
      borderRadius: "8px",
      border: isHovered ? "1px solid #000" : "1px dotted rgb(180, 180, 180)",
      position: "relative",
      ...style,
      transition: "filter 0.3s, border 0.3s",
    };

    const checkmarkStyles = {
      position: "absolute",
      top: "15px",
      left: "15px",
      fontSize: "1.5rem",
      color: isClicked ? "blue" : "red",
      visibility: isHovered ? "visible" : "hidden",
    };

    return (
      <div
        ref={ref}
        style={inlineStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      >
        <div className="checkmark" style={checkmarkStyles}>
          ✔
        </div>
      </div>
    );
  }
);
