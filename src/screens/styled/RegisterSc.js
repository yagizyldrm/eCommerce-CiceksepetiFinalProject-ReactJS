import Styled from "styled-components";

export const Container = Styled.div`
flex-direction:row;
margin:0px;
background-color:#FBFBFB;
display:flex;
max-width:1920px;
max-height:1080px;
background:black;
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
export const EmailAndPasswordContainer = Styled.form`
margin:auto;
flex-direction:column;

`;

export const EmailInput = Styled.input`
width:372px;
border-radius:5px;
background-color:#F4F4F4;
justify-content:flex-start;
margin:0px auto;
display:flex;
padding:7px;
font-size:15px;
font-family: 'Nunito', sans-serif;
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
margin:0px auto 10px auto;
&:active{
    background-color:#4B9CE2;
    border: 1px solid #4B9CE2;
}
`;
export const Label = Styled.label`
margin:0 auto;
width:480px;
display:flex;
justify-content:flex-start;
`;

export const SignInButton = Styled.button`
border:none;
width:390px;
border-radius:5px;
font-weight:normal;
font-size:14px;
color:white;
background-color:#4B9CE2;
padding:10px;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    cursor:pointer;
}
&:active{
    background-color:black;
}
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
