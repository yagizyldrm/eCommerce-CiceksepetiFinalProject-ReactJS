import Styled from "styled-components";

export const NavContainer = Styled.div`
background-color: white;
height:75px;
`;

export const ImgContainer = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
max-width:1480px;
margin:0 auto;

`;

export const ButtonContainer = Styled.div`
display: flex;
align-items:baseline;
`;

export const Button = Styled.button`
border-radius:17px;
background-color: #F0F8FF;
border: none;
color:#4B9CE2;
padding:15px;
margin-left:10px;
align-items:center;
justify-content:center;
font-family: 'Nunito', sans-serif;
font-weight: bold;
transition:ease in 1s;
cursor:pointer !important;
&:hover{   
    padding:20px;
}
`;
