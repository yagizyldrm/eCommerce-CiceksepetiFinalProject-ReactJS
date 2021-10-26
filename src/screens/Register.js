import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authRegisterAction from "../redux/actions/RegisterAction";

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
  Label,
  SignInButton,
  LoginText,
} from "./styled/RegisterSc";
import { useDispatch } from "react-redux";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const register = useSelector((state) => state);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authRegisterAction(user));
    console.log("state", register);
    console.log("register-page", user);
  };

  if (localStorage.getItem("token") !== null) return <Redirect to="/Login" />;

  return (
    <Container>
      <Banner>
        <img
          src="./assets/SignInBanner.png"
          alt=""
          width="100%"
          height="1080px"
          style={{ objectFit: "cover" }}
        />
      </Banner>
      <SignInContainer>
        <Logo>
          <img src="./assets/logo.svg" width="225px" height="49px" alt="" />
        </Logo>
        <InnerContainer>
          <InformationContainer>
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#525252",
                margin: "70px auto 10px auto",
              }}
            >
              Üye Ol
            </p>
            <p style={{ fontSize: "15px", marginBottom: "50px" }}>
              Fırsatlardan Yararlanmak İçin Üye Ol!
            </p>
          </InformationContainer>
          <EmailAndPasswordContainer onSubmit={handleSubmit}>
            <Label>Email</Label>
            <EmailInput
              type="email"
              placeholder="Email@example.com"
              name="E-mail"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />

            <Label>Şifre</Label>
            <PasswordInput
              type="password"
              placeholder="Örn:12345"
              name="Password"
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
            <SignInButton type="submit">Üye Ol</SignInButton>
          </EmailAndPasswordContainer>

          <LoginText>
            <p>
              Hesabın var mı?{" "}
              <Link
                to="/Login"
                style={{
                  textDecoration: "none",
                  color: "#4B9CE2",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Giriş Yap
              </Link>
            </p>
          </LoginText>
        </InnerContainer>
      </SignInContainer>
    </Container>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     register: (email, password) => {},
//   };
// };

export default Register;
