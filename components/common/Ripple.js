import React from "react";
import Ripples from "react-ripples";
function Ripple({ children, borderRadius, width, height }) {
  return (
    <div
      style={{
        borderRadius: borderRadius || "0px",
        overflow: "hidden",
        height: height || "auto",
        width: width || "auto",
      }}
    >
      <Ripples>{children}</Ripples>
    </div>
  );
}

export default Ripple;
