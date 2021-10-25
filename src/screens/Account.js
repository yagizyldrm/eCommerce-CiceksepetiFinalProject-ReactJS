import React from "react";
import { AccountContainer } from "./styled/AccountSc";

const Account = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2", flex: "1" }}>
        <AccountContainer>
          <img
            src="./assets/AccountImage.svg"
            width="38px"
            height="38px"
            alt=""
          />
          <p style={{ marginLeft: "5px" }}>
            {localStorage.getItem("email-login")}
          </p>
        </AccountContainer>
      </div>
    </>
  );
};

export default Account;
