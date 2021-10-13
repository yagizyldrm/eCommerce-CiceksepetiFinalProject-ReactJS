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
margin:0 11.5%;
`;

export const ButtonContainer = Styled.div`
display: flex;
`;

export const Button = Styled.button`
border-radius:20px;
background-color: #F0F8FF;
border: none;
color:#4B9CE2;
padding:10px;
margin-left:10px;
align-items:center;
justify-content:center;
font-family: 'Nunito', sans-serif;
`;
export const Banner = Styled.div`
display: flex;
align-items: center;
max-height: 430px;
max-width:1480px;
margin:5px auto;
border-radius:10px;
`;

export const CategoryContainer = Styled.div`
display:flex;
flex-direction: row;
margin: 10px auto;
max-width:1480px;
max-height:30px;
justify-content:space-between;
border-bottom: 2px solid lightgrey;

`;

export const CategoryButton = Styled.button`
background-color: transparent;
border:none;
margin-top:10px;
border-bottom:2px solid #4B9CE2;
font-family: 'Nunito', sans-serif;
transition:ease in 1s;
    .CategoryButton:hover {
    background-color:blue;
}
`;
