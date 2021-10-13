import Styled from "styled-components";

export const Container = Styled.div`
flex-direction:row;
margin:0px;
background-color:#FBFBFB;
display:flex;
max-width:1920px;
max-height:1080px;
`;
export const Banner = Styled.div`
object-fit:cover;
max-height:100%;
max-width:100%;
`;

export const SignInContainer = Styled.div`
display:flex;
margin:auto;
flex-direction:column;
`;
export const Logo = Styled.div`
display:flex;
margin:auto;
padding-bottom:20px
`;
export const InnerContainer = Styled.div`
align-items:center;
justify-content:center;
background-color:white;
padding:20px 100px;

`;
export const InformationContainer = Styled.div`
align-items:center;
justify-content:center;
display:flex;
flex-direction:column;
font-family: 'Nunito', sans-serif;
`;

export const EmailContainer = Styled.div`
font-family: 'Nunito', sans-serif;
padding:0px 100px;
background-color:white;
`;
export const EmailInput = Styled.input`
width:372px;
border-radius:5px;
background-color:#F4F4F4;
justify-content:flex-start;
display:flex;
padding:7px;
font-size:15px;
font-family: 'Nunito', sans-serif;
`;
export const PasswordContainer = Styled.div`
font-family: 'Nunito', sans-serif;
padding:0px 100px;
`;
export const PasswordInput = Styled.input`
width:372px;

border-radius:5px;
background-color:#F4F4F4;
justify-content:flex-start;
display:flex;
padding:7px;
font-size:15px;
font-family: 'Nunito', sans-serif;
margin-bottom:20px;
margin-top:0px;
`;

export const SignInButton = Styled.button`
border:none;
width:390px;
border-radius:5px;
font-family: 'Nunito', sans-serif;
color:white;
background-color:#4B9CE2;
padding:10px;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
`;

export const LoginText = Styled.div`
font-family: 'Nunito', sans-serif;
padding:0px 140px;
background-color:white;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
`;
