import React from "react";

const Divider = ({ width = "80%", opacity = 0.5 }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid #7E7E7E",
        opacity: opacity,
        width: width,
        alignSelf: "center",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    />
  );
};

export default Divider;
