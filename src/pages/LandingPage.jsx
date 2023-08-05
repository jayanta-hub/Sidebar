import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { connect } from "react-redux";
import {
  getUserInformation,
  postSelectedUser,
} from "../application/store/actions/timeLine";
const LandingPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let Userdata = props?.userInformation?.users || [];
  const init = async () => {
    setIsLoading(true);
    props
      .UserInformation()
      .then(async (res) => {
        setIsLoading(false);
        console.log("get porfile statusres----", res);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("error", err);
      });
  };
  const onClickHandler = (selectedUserInfo) => {
    props.postSelectedUserinfo(selectedUserInfo);
    navigate("/profile");
    //Navigate to profile details screen(dashboard)
  };
  React.useEffect(() => {
    init();
  }, []);
  return (
    <div className="wrapper">
      <div class="custom-shape-divider-bottom-1691069786">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="centered-div">
        <div
          style={{
            padding: "40px",
            backgroundColor: "white",
            borderRadius: "20px",
            paddingLeft: "35px",
            paddingRight: "35px",
            zIndex: 100,
            width: "40%",
          }}
        >
          <div
            style={{
              backgroundColor: "lightgray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Select an account</h2>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            {Userdata && Userdata.length ? (
              Userdata.map((user) => (
                <div key={user?.id} onClick={() => onClickHandler(user)}>
                  <div
                    key={user?.id}
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img src={user.profilepicture} height={"25px"} />
                    <h6 style={{ marginLeft: "10px" }}>{user.name}</h6>
                  </div>
                  <hr
                    style={{
                      height: "1px",
                      backgroundColor: "black",
                      marginTop: "8px",
                    }}
                  />
                </div>
              ))
            ) : (
              <div>
                <h6>No User Found...</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ timeLine: { userInformation } }) => ({
  userInformation,
});

const mapDispatchToProps = {
  postSelectedUserinfo: (payload) => postSelectedUser(payload),
  UserInformation: (AuthToken, ViewProfileUrl) =>
    getUserInformation(AuthToken, ViewProfileUrl),
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
