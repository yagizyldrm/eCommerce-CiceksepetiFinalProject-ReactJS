import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Banner,
  SignInContainer,
  Logo,
  InnerContainer,
  InformationContainer,
  EmailAndPasswordContainer,
  EmailInput,
  PasswordInput,
  SignInButton,
  LoginText,
} from "./styled/RegisterSc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>Giriş Yap</p>
            <p>Fırsatlardan Yararlanmak İçin Giriş Yap!</p>
          </InformationContainer>
          <EmailAndPasswordContainer>
            <p>Email</p>
            <EmailInput
              type="email"
              placeholder="Email@example.com"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />

            <p>Şifre</p>
            <PasswordInput
              type="password"
              placeholder="Örn:12345"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </EmailAndPasswordContainer>
          <SignInButton onClick={Login}>Giriş Yap</SignInButton>
          <LoginText>
            <p>
              Hesabın yok mu?{""}{" "}
              <Link
                to="/Register"
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
