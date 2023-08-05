import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { Button, Popover, Typography } from "@mui/material";
import { connect } from "react-redux";
import Divider from "./Divider";
import { postSelectedUser } from "../application/store/actions/timeLine";
import { useNavigate } from "react-router-dom";

const ProfileNavBar = ({
  title,
  selectedUser,
  userInformation,
  postSelectedUserinfo,
}) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popover" : undefined;
  const navigate = useNavigate();

  const handleClickOpen = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    setOpen(false);
  };

  let data = selectedUser || [];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "15px",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="subtitle1"
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            opacity: "0.8 ",
            color: "#24262F",
          }}
        >
          {title}
        </Typography>
        <Stack
          aria-describedby={id}
          onClick={handleClickOpen}
          direction="row"
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={data?.profilepicture}
            sx={{ width: 30, height: 30 }}
          />

          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "lighter",
              opacity: "0.8 ",
              fontSize: "18px",
            }}
          >
            {data?.name}
          </Typography>
        </Stack>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid #7E7E7E",
          opacity: "0.3",
          width: "96%",
          alignSelf: "center",
          marginTop: "10px",
          marginBottom: "10px",
          marginLeft: "18px",
          marginRight: "18px",
        }}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        style={{
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "30px",
            paddingBottom: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
            width: "300px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={data?.profilepicture}
            sx={{ width: 80, height: 80 }}
          />
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "lighter",
              opacity: "0.8 ",
              fontSize: "16px",
              marginTop: "1rem",
            }}
          >
            {data?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "lighter",
              opacity: "0.5 ",
              fontSize: "16px",
            }}
          >
            {data?.email}
          </Typography>
          {userInformation?.users
            .filter(
              (item, index) => index <= 2 && item?.name !== selectedUser?.name,
            )
            .map((info, index) => {
              return (
                <>
                  <Divider />
                  <div
                    onClick={() => {
                      postSelectedUserinfo(info);
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={info?.profilepicture}
                      sx={{ width: 30, height: 30 }}
                    />
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontWeight: "lighter",
                        opacity: "0.8 ",
                        fontSize: "14px",
                        marginLeft: "10px",
                      }}
                    >
                      {info?.name}
                    </Typography>
                  </div>
                </>
              );
            })}
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            style={{
              marginTop: "30px",
              borderRadius: "40px",
              textTransform: "capitalize",
              backgroundColor: "red",
            }}
          >
            Sign Out
          </Button>
        </div>
      </Popover>
    </>
  );
};
const mapStateToProps = ({ timeLine: { userInformation, selectedUser } }) => ({
  userInformation,
  selectedUser,
});
const mapDispatchToProps = {
  postSelectedUserinfo: (payload) => postSelectedUser(payload),
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileNavBar);
