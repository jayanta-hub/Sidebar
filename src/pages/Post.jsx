import React from "react";
import ProfileNavBar from "../ReusableComponents/ProfileNavBar";

const Post = () => {
  return (
    <>
      <ProfileNavBar title="Post" />

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

export default Post;
