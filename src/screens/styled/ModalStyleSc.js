import Styled from "styled-components";

export const BuyModalStyle = {
  content: {
    margin: "auto",
    width: "355px",
    height: "171px",
    borderRadius: "8px",
    backgroundColor: "white",
    padding: "0px",
  },
  overlay: {
    backgroundColor: "rgba(75, 156, 226, 0.7)",
  },
};
export const OfferModalStyle = {
  content: {
    margin: "auto",
    width: "480px",
    height: "461px",
    borderRadius: "8px",
    backgroundColor: "white",
  },
  overlay: {
    backgroundColor: "rgba(75, 156, 226, 0.7)",
  },
};

export const Header = Styled.div`
flex-direction:row;
justify-content:space-between;
margin:5px auto;
display:flex;
background-color:white;
align-items:center;
padding:0;
`;

export const ImageAndTitleContainer = Styled.div`
flex-direction:row;
align-items:center;
display:flex;
`;

export const LabelContainer = Styled.div`
border:1px solid #E0E0E0;
flex-direction:row;
margin:7.5px auto;
width:480px; 
justify-content:flex-start;
border-radius:8px; 
font-size:15px;
padding:10px;
box-sizing: border-box;

 &:active{
  border:1px solid #4B9CE2;
  background-color:#F0F8FF;
  color:#4B9CE2;
 }
`;

export const Label = Styled.label`
font-size:15px;
padding:10px;
`;

export const OfferInput = Styled.input`
box-sizing: border-box;
width:480px;
heigth:45px;
background-color:#F4F4F4;
border:0;
color :#99A0A7;
border-radius:8px;
padding:13px;
margin:10px auto;
letter-spacing:1px;
outline:none;
    &:focus{
        border:1px solid #4B9CE2;
        background-color:#F0F8FF ;
        color:#4B9CE2;
    }
`;

export const ApproveButton = Styled.button`
width:315px;
height:45px;
color:white;
background-color:#4B9CE2;
margin:10px auto;
display:flex;
font-weight:bold;
align-items:center;
justify-content:center;
border:none;
border-radius:8px;
cursor:pointer;
font-size:16px;
`;

export const BuyModalButtonContainer = Styled.div`
flex-direction:row;
width:100%;
justify-content:center;
gap:10px;
align-items:center;
display:flex;
    &:first-child{
      margin-left:10px;
    }
`;

export const BuyModalCloseButton = Styled.button`
width:150px;
height:45px;
border:none;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:18px;
border-radius:8px;
cursor:pointer;
display:flex;
background-color:#F0F8FF;
color:#4B9CE2;
`;
export const BuyModalPurchaseButton = Styled.button`
width:150px;
height:45px;
border:none;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:18px;
border-radius:8px;
cursor:pointer;
display:flex;
background-color:#4B9CE2;
color:white;
`;
// display:flex;
// margin:auto;
// width:355px;
// height:171px;
// background-color:lightgrey;
// border-radius:10px;

// export const style = {
//   input[type=radio]:checked+label {
//     background-color: red;
// }
// }
