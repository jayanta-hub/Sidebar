import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = [
    {
      path: "/profile",
      name: "Profile",
      icon: <FaTh />,
    },
    {
      path: "/post",
      name: "Post",
      icon: <FaUserAlt />,
    },
    {
      path: "/gallary",
      name: "Gallary",
      icon: <FaRegChartBar />,
    },
    {
      path: "/todo",
      name: "ToDo",
      icon: <FaCommentAlt />,
    },
  ];
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        className="sidebar"
      >
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
            style={{ width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
              className="link_text"
            >
              <Typography variant="subtitle1">{item?.name}</Typography>
              <div className="sidebarIcon">
                <KeyboardArrowRightIcon
                  fontSize="medium"
                  style={{ color: "black", opacity: 0.3 }}
                />
              </div>
            </div>
            {menuItem.length - 1 !== index && <div className="divider" />}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
