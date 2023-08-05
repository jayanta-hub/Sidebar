import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { CustomText } from "../ReusableComponents/CustomText.jsx";
import { connect } from "react-redux";
import {
  getUserInformation,
  postSelectedUser,
} from "../application/store/actions/timeLine.js";
import ProfileNavBar from "../ReusableComponents/ProfileNavBar.jsx";
const Profile = (props) => {
  const data = props?.selectedUser || [];
  return (
    <>
      <ProfileNavBar title="Profile" />

      <div
        style={{
          backgroundColor: "white",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              width: "40%",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "1rem",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={data?.profilepicture}
                sx={{ width: 140, height: 140, marginBottom: "1rem" }}
              />
              <Typography
                variant="h6"
                component="h6"
                style={{
                  fontWeight: "bold",
                }}
              >
                {data?.name}
              </Typography>
            </div>

            <CustomText Title="UserName" value={data?.username} />
            <CustomText Title="e-mail" value={data?.email} />
            <CustomText Title="Phone" value={data?.phone} />
            <CustomText Title="Website" value={data?.website} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid #7E7E7E",
                opacity: "0.3",
                width: "80%",
                alignSelf: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
            <Typography
              variant="h6"
              component="h6"
              style={{
                fontWeight: "lighter",
                opacity: "0.5 ",
              }}
            >
              Company
            </Typography>
            <CustomText Title="Name" value={data?.company?.name} />
            <CustomText
              Title="Catchphrase"
              value={data?.company?.catchPhrase}
            />
            <CustomText Title="bs" value={data?.company?.bs} />
          </div>

          <div
            style={{
              borderLeft: "1px solid #7E7E7E",
              opacity: "0.3",
              height: "80%",
            }}
          />
          <div
            style={{
              width: "58%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              minHeight: "100vh",
              paddingLeft: "4rem",
              paddingRight: "1rem",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{
                fontWeight: "lighter",
                opacity: "0.5 ",
              }}
            >
              Address:
            </Typography>
            <CustomText
              Title="Street"
              value={data?.address?.street}
              leftWidth="15%"
              rightWidth="81%"
            />
            <CustomText
              Title="Suite"
              value={data?.address?.suite}
              leftWidth="15%"
              rightWidth="81%"
            />
            <CustomText
              Title="City"
              value={data?.address?.city}
              leftWidth="15%"
              rightWidth="81%"
            />
            <CustomText
              Title="Zip Code"
              value={data?.address?.zipcode}
              leftWidth="15%"
              rightWidth="81%"
            />
            {/* map section  start*/}
            <div
              style={{
                width: "100%",
                minHeight: "20rem",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48603.18234173311!2d-71.51349024088587!3d41.68802344085237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1691144363114!5m2!1sen!2sin"
                width="100%"
                height="310px"
                style={{ borderRadius: "20px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* map section  end*/}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="subtitle1"
                component="subtitle1"
                style={{
                  fontWeight: "lighter",
                  opacity: "0.5 ",
                  fontSize: "14px",
                }}
              >
                Lat:
              </Typography>
              <Typography
                variant="subtitle1"
                component="subtitle1"
                style={{
                  paddingLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  opacity: "0.8 ",
                  color: "#24262F",
                }}
              >
                {data?.address?.geo?.lat}
              </Typography>
              <Typography
                variant="subtitle1"
                component="subtitle1"
                style={{
                  fontWeight: "lighter",
                  opacity: "0.5 ",
                  fontSize: "14px",
                  marginLeft: "1rem",
                }}
              >
                Long:
              </Typography>
              <Typography
                variant="subtitle1"
                component="subtitle1"
                style={{
                  paddingLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  opacity: "0.8 ",
                  color: "#24262F",
                  marginRight: "1rem",
                }}
              >
                {data?.address?.geo?.lng}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ timeLine: { userInformation, selectedUser } }) => ({
  userInformation,
  selectedUser,
});

const mapDispatchToProps = {
  postSelectedUserinfo: (payload) => postSelectedUser(payload),
  UserInformation: (AuthToken, ViewProfileUrl) =>
    getUserInformation(AuthToken, ViewProfileUrl),
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
