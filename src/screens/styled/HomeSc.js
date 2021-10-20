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
padding:6px;
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
font-family: 'Nunito', sans-serif;
text-transform:capitalize;
font:normal normal 600 18px/24px Nunito;
color:#525252;
&:hover{
    color:#4B9CE2;
    cursor:pointer; 
}
&:active{
    border-bottom:2px solid #4B9CE2;
}
`;

export const ProductContainer = Styled.div`
max-width:1480px;
margin: 10px auto;
display:flex;
gap:20px;
flex-wrap: wrap

`;

export const ItemContainer = Styled.div`
width:270px;
height:300px;
padding:5px;
background-color:white;
border-radius:5px;
display:flex;
flex-direction:column;
`;

export const ImageContainer = Styled.div`
width=250px;
height:280px;
margin: 1px auto;
display:flex;
border-radius:5px;
`;

export const BrandAndColorContainer = Styled.div`
margin:0 10px;
display:flex;
justify-content:space-between;
`;

export const Brand = Styled.p`
color:#4B9CE2;
font-weight:bold;
text-transform:capitalize;
font-size:13px;
`;
export const Color = Styled.p`
text-transform:capitalize;
font-weight:bold;
font-size:13px;
`;
export const Price = Styled.p`
font-weight:bold;
margin-left:10px;
font-size:20px;
`;
