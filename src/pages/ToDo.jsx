import React from "react";
import ProfileNavBar from "../ReusableComponents/ProfileNavBar";

const ToDo = () => {
  return (
    <>
      <ProfileNavBar title="ToDo" />
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

export default ToDo;
