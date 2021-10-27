import Styled from "styled-components";

export const MainContainer = Styled.div`
max-width:1420px;
max-height:768px;
display:flex;
margin:10px auto;
background:white;
height:821px;
border-radius:8px;
padding:30px;
`;
export const ProductNameInput = Styled.input`
width:730px;
height:45px;
border:none;
box-sizing:border-box;
background-color:#F4F4F4;
color:#99A0A7;
border-radius:8px;
outline:none;
padding-left:10px;

    &:focus{
    border:1px solid #4B9CE2;
    background-color:#F0F8FF ;
    color:#4B9CE2;
 }
`;

export const DescriptionInput = Styled.input`
width:730px;
height:92px;
align-items:flex-start;
border:none;
box-sizing:border-box;
background-color:#F4F4F4;
color:#99A0A7;
border-radius:8px;
outline:none;
padding-left:10px;
justify-content:flex-start;
 &:focus{
    border:1px solid #4B9CE2;
    background-color:#F0F8FF ;
    color:#4B9CE2;
 }
`;
export const SaveButton = Styled.button`
position:absolute;
bottom:-460px;
right:15px;
width:315px;
height:45px;
border:none;
font-weight:bold;
font-size:18px;
border-radius:8px;
cursor:pointer;
background-color:#4B9CE2;
color:white;
 &:active{
    color:#4B9CE2;
    background-color:white;
 }
`;
export const Select = Styled.select`
border:none;
border-radius:8px;
background-color:#F4F4F4;
color:#99A0A7;
height:45px;
`;
export const FirstSelectContainer = Styled.div`
flex-direction:column;
display:flex;
width:353px;
height:190px;
gap:5px;
`;
export const SecondSelectContainer = Styled.div`
flex-direction:column;
display:flex;
width:353px;
height:190px;
gap:5px;
`;
export const PriceInput = Styled.input`
background-color:#F4F4F4;
color:#99A0A7;
font-size:16px;
padding:0 15px;
width:236px;
height:45px;
border-radius:8px;
border:none;
box-sizing:border-box;
outline:none;
 &:focus{
    border:1px solid #4B9CE2;
    background-color:#F0F8FF;
    color:#4B9CE2;
 }
`;
export const FormikContainer = Styled.div`
`;
// export const AddPhotoContainer = Styled.div`
// `;
