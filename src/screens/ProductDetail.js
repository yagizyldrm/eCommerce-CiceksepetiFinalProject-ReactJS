import {
  NavContainer,
  ImgContainer,
  ButtonContainer,
  Button,
} from "./styled/ProductSc";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <>
      <NavContainer>
        <ImgContainer>
          <img src="./assets/logo.svg" width="129px" height="42px" alt="" />
          <ButtonContainer>
            <Link style={{ cursor: "pointer" }}>
              <Button>
                <img src="./assets/PlusImage.svg" alt="" /> Ürün Ekle
              </Button>
            </Link>
            <Link to="/Register">
              <Button>
                <img src="./assets/PersonImage.svg" alt="" /> Kayıt Ol
              </Button>
            </Link>
          </ButtonContainer>
        </ImgContainer>
      </NavContainer>
    </>
  );
};
export default ProductDetail;
