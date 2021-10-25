import Styled from "styled-components";

export const customStyles = {
  content: {
    margin: "auto",
    width: "480px",
    height: "412px",
    backgroundColor: "grey",
  },
  element: {
    backgroundColor: "rgba(100, 255, 255, 0.75)",
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

export const LabelContainer = Styled.div`
border:1px solid #E0E0E0;
flex-direction:row;
margin:7.5px auto;
width:441px; 
justify-content:flex-start;
border-radius:8px; 
padding:13px;
font-size:15px;
`;

export const ImageAndTitleContainer = Styled.div`
flex-direction:row;
align-items:center;
display:flex;
`;
export const Label = Styled.label`
font-size:15px;
`;

// display:flex;
// margin:auto;
// width:355px;
// height:171px;
// background-color:lightgrey;
// border-radius:10px;
