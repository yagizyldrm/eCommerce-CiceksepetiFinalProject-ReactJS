import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authLoginAction from "../redux/actions/LoginAction";
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
    dispatch(authLoginAction(user));
    console.log("state", register);
    console.log("register-page", user);
  };
  if (localStorage.getItem("token-login") !== null) return <Redirect to="/" />;
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
        <Link style={{ display: "flex", margin: "auto" }} to="/">
          <Logo>
            <img src="./assets/logo.svg" width="225px" height="49px" alt="" />
          </Logo>
        </Link>
        <InnerContainer>
          <InformationContainer>
            <p
              style={{ fontSize: "30px", fontWeight: "bold", color: "#525252" }}
            >
              Giriş Yap
            </p>
            <p>Fırsatlardan Yararlanmak İçin Üye Ol!</p>
          </InformationContainer>
          <EmailAndPasswordContainer onSubmit={handleSubmit}>
            <label>Email</label>
            <EmailInput
              type="email"
              placeholder="Email@example.com"
              name="E-mail"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />

            <label>Şifre</label>
            <PasswordInput
              type="password"
              placeholder="Örn:12345"
              name="Password"
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
            <SignInButton type="submit">Giriş Yap</SignInButton>
          </EmailAndPasswordContainer>

          <LoginText>
            <p>
              Hesabın yok mu?{" "}
              <Link
                to="/Register"
                style={{
                  textDecoration: "none",
                  color: "#4B9CE2",
                  fontWeight: "bold",
                }}
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     register: (email, password) => {},
//   };
// };

export default Register;
