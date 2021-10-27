import React from "react";
import { AccountContainer } from "./styled/AccountSc";

const Account = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F2F2F2",
          paddingTop: "5px",
          width: "100%",
          height: "889.4px",
        }}
      >
        <AccountContainer>
          <img
            src="./assets/AccountImage.svg"
            width="38px"
            height="38px"
            alt=""
          />
          <p style={{ marginLeft: "5px" }}>
            {/*Setting the email address which is used in Login/Register screen*/}
            {localStorage.getItem("email-login")}{" "}
          </p>
        </AccountContainer>
      </div>
    </>
  );
};

export default Account;
