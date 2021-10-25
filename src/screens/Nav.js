import React, { useState } from "react";
import {
  NavContainer,
  ImgContainer,
  ButtonContainer,
  Button,
} from "./styled/HomeSc";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <NavContainer>
      <ImgContainer>
        <Link to="/">
          <img src="./assets/logo.svg" width="129px" height="42px" alt="" />
        </Link>
        <ButtonContainer>
          {localStorage.getItem("email-login") !== null ? (
            <Link style={{ cursor: "pointer" }} to="/Home/Product/Add">
              <Button>
                <img src="./assets/PlusImage.svg" alt="" /> Ürün Ekle
              </Button>
            </Link>
          ) : (
            <Link style={{ cursor: "pointer" }} to="/Home/Product/Add">
              <Button style={{ display: "none" }}>
                <img src="./assets/PlusImage.svg" alt="" /> Ürün Ekle
              </Button>
            </Link>
          )}

          {localStorage.getItem("email-login") !== null ? (
            <Link to="/Account">
              <Button>
                <img src="./assets/PersonImage.svg" alt="" /> Hesabım
              </Button>
            </Link>
          ) : (
            <Link to="/Register">
              <Button>
                <img src="./assets/PersonImage.svg" alt="" /> Kayıt Ol
              </Button>
            </Link>
          )}
        </ButtonContainer>
      </ImgContainer>
    </NavContainer>
  );
};

export default Nav;
