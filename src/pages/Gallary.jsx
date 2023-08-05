import React from "react";
import ProfileNavBar from "../ReusableComponents/ProfileNavBar";

const Gallary = () => {
  return (
    <>
      <ProfileNavBar title="Gallary" />
      <div
        style={{
          backgroundColor: "white",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Comimg Soon</h1>
      </div>
    </>
  );
};

export default Gallary;
