import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Banner,
  SignInContainer,
  Logo,
  InnerContainer,
  InformationContainer,
  EmailContainer,
  EmailInput,
  PasswordContainer,
  PasswordInput,
  SignInButton,
  LoginText,
} from "./styled/SignInSc";

const Login = () => {
  return (
    <Container>
      <Banner>
        <img
          src="./assets/SignInBanner.png"
          alt=""
          width="834px"
          height="1080px"
        />
      </Banner>
      <SignInContainer>
        <Logo>
          <img src="./assets/logo.svg" width="225px" height="49px" alt="" />
        </Logo>
        <InnerContainer>
          <InformationContainer>
            <p style={{ fontSize: "30px" }}>Giriş Yap</p>
            <p>Fırsatlardan Yararlanmak İçin Giriş Yap!</p>
          </InformationContainer>
          <EmailContainer>
            <p>Email</p>
            <EmailInput type="email" placeholder="Email@example.com" />
          </EmailContainer>
          <PasswordContainer>
            <p>Şifre</p>
            <PasswordInput type="password" placeholder="Örn:12345" />
          </PasswordContainer>
          <SignInButton>Giriş Yap</SignInButton>
          <LoginText>
            <p>
              Hesabın yok mu?{""}{" "}
              <Link
                to="/SignIn"
                style={{ textDecoration: "none", color: "#4B9CE2" }}
              >
                {" "}
                Üye Ol
              </Link>
            </p>
          </LoginText>
        </InnerContainer>
      </SignInContainer>
    </Container>
  );
};

export default Login;
