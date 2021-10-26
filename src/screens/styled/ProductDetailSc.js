import Styled from "styled-components";

export const ElementContainer = Styled.div`
display:flex;
margin:20px auto;
background:white;
max-width:1480px;
max-height:769px;
border-radius:10px;
`;
export const ImageContainer = Styled.div`
position:relative;
max-width:700px;
height:737px;
padding:10px;
border-radius:8px;
margin-right:60px;
    &img{
        border-radius:8px;
        width:100%;
        object-fit:contain;
    }
`;
export const DetailContainer = Styled.div`
margin-top:20px
`;
export const HeaderContainer = Styled.div`
color:#555555
margin-top:30px;
font-size:34px;
`;
export const InfoContainer = Styled.div`
flex-direction:row;
display:flex;
`;
export const FirstContainer = Styled.div`
flex-direction:column;
display:flex;
font-weight:bold;
margin:25 px 20px 0px 0px;
font-size:15px;
color:#525252;
`;
export const SecondContainer = Styled.div`
flex-direction:column;
display:flex;
font-size:15px;
margin-left: 20px;
color:#525252;
text-transform:capitalize;
`;
export const PriceContainer = Styled.div`
font-size:23px;
display:flex;
color:#525252;
margin-top:30px;
`;
export const ButtonsContainer = Styled.div`
margin: 30px 0 30px 0;
max-width:480px;

`;
export const BuyButton = Styled.button`
border:none;
color:white;
background-color:#4B9CE2;
border-radius:5px;
width:235px;
padding:10px;
font-weight:bold;
font-size:16px;
cursor:pointer;
margin-right:10px;
flex:1;
`;
export const OfferButton = Styled.button`
border:none;
color:#4B9CE2;
background-color:#F0F8FF;
border-radius:5px;
width:235px;
padding:10px;
font-weight:bold;
font-size:16px;

cursor:pointer;
flex:1;
`;
export const DescriptionContainer = Styled.div`
max-width:480px;
`;
export const DescriptionHeader = Styled.div`
font-weight:bold;
font-size;18px;
margin-bottom:10px;
`;
export const Description = Styled.div`
font-size:15px;
font-weight:regular;
max-width:480px;
`;
