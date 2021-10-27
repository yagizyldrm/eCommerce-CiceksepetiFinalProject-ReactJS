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
  //Creating an empty object so we can put the data which is getting from inputs.
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch(); //This line is making to call action
  const register = useSelector((state) => state);
  const handleSubmit = (e) => {
    e.preventDefault(); //This line is using to prevent the refreshing the page on every submitting. This line is mandatory.
    dispatch(authRegisterAction(user)); //Here we are putting the user object into action so we can post the object to API.
  };
  if (localStorage.getItem("token") !== null) return <Redirect to="/Login" />; //This line is using to redirect to home page after an succesfully registering request.

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
        <Link to="/Home" style={{ margin: "0 auto" }}>
          <Logo>
            <img src="./assets/logo.svg" width="225px" height="49px" alt="" />
          </Logo>
        </Link>
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
            {" "}
            {/* this is a form so we are using submit attribute to get the data */}
            <Label>Email</Label>
            <EmailInput
              type="email"
              placeholder="Email@example.com"
              name="E-mail"
              value={user.email}
              onChange={
                (event) => setUser({ ...user, email: event.target.value }) //We are setting the email part of the user object
              }
            />
            <Label>Şifre</Label>
            <PasswordInput
              type="password"
              placeholder="Örn:12345"
              name="Password"
              value={user.password}
              onChange={
                (event) => setUser({ ...user, password: event.target.value }) //We are setting the passoword part of the user object
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

export default Register;
