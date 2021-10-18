import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  NavContainer,
  ImgContainer,
  ButtonContainer,
  Button,
  Banner,
  CategoryContainer,
  CategoryButton,
} from "./styled/HomeSc";

const Home = () => {
  const [pagesData, setPagesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
      .then((response) => response.data)
      .then((data) => setPagesData(data))
      .catch((error) => console.log(error));
  }, []);

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
      <Banner>
        <img src="./assets/Banner1.png" alt="asd" width="100%" height="100%" />
      </Banner>
      <CategoryContainer>
        <div>
          <CategoryButton>Hepsi</CategoryButton>
        </div>
        {pagesData.map((product) => (
          <div key={product.id}>
            <CategoryButton>{product.title}</CategoryButton>
          </div>
        ))}
        <div>
          <CategoryButton>Diğer</CategoryButton>
        </div>
      </CategoryContainer>
    </>
  );
};

export default Home;
