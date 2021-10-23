import React from "react";
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
        <Link to="/home">
          <img src="./assets/logo.svg" width="129px" height="42px" alt="" />
        </Link>
        <ButtonContainer>
          <Link style={{ cursor: "pointer" }} to="/Product/Add">
            <Button>
              <img src="./assets/PlusImage.svg" alt="" /> Ürün Ekle
            </Button>
          </Link>
          <Link to="/Register">
            <Button>
              <img src="./assets/PersonImage.svg" alt="" /> Kayıt Ol
            </Button>
          </Link>
        </ButtonContainer>
      </ImgContainer>
    </NavContainer>
  );
};

export default Nav;
