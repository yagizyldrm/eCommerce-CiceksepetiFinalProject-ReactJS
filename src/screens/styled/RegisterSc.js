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
min-height:100%;
max-width:100%;
`;

export const SignInContainer = Styled.div`
display:flex;

margin:auto;
flex-direction:column;
object-fit:cover;

`;
export const Logo = Styled.div`
display:flex;
margin:auto;
padding-bottom:20px
`;
export const InnerContainer = Styled.div`
align-items:center;
max-width:569px;
max-height:554px;
justify-content:center;
background-color:white;
padding:20px 100px;
border-radius:8px;

`;
export const InformationContainer = Styled.div`
align-items:center;
justify-content:center;
display:flex;
margin:0px;
flex-direction:column;
`;
export const EmailAndPasswordContainer = Styled.form`
margin:0 auto;
width:390px;
flex-direction:column;

`;

export const EmailInput = Styled.input`
width:390px;
height:45px;
box-sizing:border-box;
border-radius:5px;
border:none;
background-color:#F4F4F4;
margin:0px auto;
display:flex;
padding:0px 15px;
font-size:16px;
outline:none;
  &:focus{
    border:1px solid #4B9CE2;
    background-color:#F0F8FF ;
    color:#4B9CE2;
  }
`;

export const PasswordInput = Styled.input`
width:390px;
height:45px;
border-radius:5px;
box-sizing:border-box;
border:none;
background-color:#F4F4F4;
margin:0px auto;
display:flex;
padding:0px 15px;
font-size:16px;
outline:none;
  &:focus{
    border:1px solid #4B9CE2;
    background-color:#F0F8FF ;
    color:#4B9CE2;
  }
`;
export const Label = Styled.label`
margin-bottom:5px;
width:480px;
display:flex;
font-size:15px;
justify-content:flex-start;
    :last-of-type{
        margin-top:15px;
    }
`;

export const SignInButton = Styled.button`
border:none;
width:390px;
height:45px;
border-radius:5px;
font-weight:bold;
font-size:18px;
color:white;
background-color:#4B9CE2;
margin-top:30px;
display:flex;
align-items:center;
justify-content:center;
box-sizing:border-box;
&:hover{
    cursor:pointer;
}
&:active{
    background-color:white;
    color:#4B9CE2;
}
`;

export const LoginText = Styled.div`
font-family: 'Nunito', sans-serif;
background-color:white;
margin:20px auto 51px auto;
display:flex;
align-items:center;
justify-content:center;
font-size:15px;
`;
