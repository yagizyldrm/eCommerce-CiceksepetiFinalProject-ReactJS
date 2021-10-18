import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authRegisterAction } from "../redux/actions/AuthAction";
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

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authRegisterAction(user));
    setUser({
      email: "",
      password: "",
    });
  };
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
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>Üye Ol</p>
            <p>Fırsatlardan Yararlanmak İçin Üye Ol!</p>
          </InformationContainer>
          <EmailAndPasswordContainer onSubmit={handleSubmit}>
            <label>Email</label>
            <EmailInput
              type="email"
              placeholder="Email@example.com"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />

            <label>Şifre</label>
            <PasswordInput
              type="password"
              placeholder="Örn:12345"
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

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     register: (email, password) => {},
//   };
// };

export default Register;
