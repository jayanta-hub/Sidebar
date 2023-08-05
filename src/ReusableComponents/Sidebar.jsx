import { Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Sidebar = () => {
  const [menuItem, setmenuItem] = useState([
    {
      id: 2,
      path: "/profile",
      name: "Profile",
      iconIsVisible: true,
    },
    {
      id: 3,
      path: "/post",
      name: "Post",
      iconIsVisible: true,
      path: "/post",
      name: "Post",
      iconIsVisible: false,
    },
    {
      id: 4,
      path: "/gallary",
      name: "Gallary",
      iconIsVisible: false,
    },
    {
      id: 5,
      path: "/todo",
      name: "ToDo",
      iconIsVisible: false,
    },
  ]);
  const onClickHanlder = (id) => {
    let result = menuItem.map((item) => {
      if (item.id === id) {
        if (!item.iconIsVisible) {
          item.iconIsVisible = !item.iconIsVisible;
        }
      } else {
        item.iconIsVisible = false;
      }
      return item;
    });
    setmenuItem(result);
  };
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
              onClick={() => {
                onClickHanlder(item?.id);
              }}
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
                {item?.iconIsVisible && (
                  <>
                    <div className="sidebarIcon">
                      {/* <div
                        style={{
                          height: "30px",
                          width: "20px",
                          backgroundColor: "red",
                        }}
                      ></div> */}
                      <KeyboardArrowRightIcon
                        fontSize="medium"
                        style={{ color: "black", opacity: 0.3 }}
                      />
                    </div>
                  </>
                )}
              </div>
              {menuItem.length - 1 !== index && <div className="divider" />}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
