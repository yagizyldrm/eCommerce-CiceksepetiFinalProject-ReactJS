import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import axios from "axios";
import {
  NavContainer,
  ImgContainer,
  ButtonContainer,
  Button,
  Banner,
  CategoryContainer,
  CategoryButton,
  ProductContainer,
  ItemContainer,
  ImageContainer,
  BrandAndColorContainer,
  Brand,
  Color,
  Price,
} from "./styled/HomeSc";
import ProductDetail from "./ProductDetail";

const Home = () => {
  const [categoryData, setcategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
      .then((response) => response.data)
      .then((data) => setcategoryData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => response.data)
      .then((data) => setProductData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleProduct = () => {
    const filteredData = productData.filter((item) => item.category.id);
  };

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
      <Route
        exact
        path="/home"
        render={() => (
          <div style={{ backgroundColor: "#F2F2F2" }}>
            <Banner>
              <img
                src="./assets/Banner1.png"
                alt="asd"
                width="100%"
                height="100%"
              />
            </Banner>
            <CategoryContainer>
              <Link to="/home/all">
                <CategoryButton>Hepsi</CategoryButton>
              </Link>
              {categoryData.map((category) => (
                <div key={category.id}>
                  <CategoryButton onClick={handleProduct}>
                    {category.title}
                  </CategoryButton>
                </div>
              ))}
              <div>
                <CategoryButton>Diğer</CategoryButton>
              </div>
            </CategoryContainer>
            <Route
              exact
              path="/home"
              render={() => (
                <ProductContainer>
                  {productData.map((product) => (
                    <div key={product.id}>
                      <Link
                        to={`/product/${product.id}`}
                        style={{
                          textDecorationLine: "none",
                          color: "black",
                        }}
                      >
                        <ItemContainer>
                          <ImageContainer>
                            <img
                              src={product.imageUrl}
                              width="250"
                              height="205"
                              alt=""
                            />
                          </ImageContainer>
                          <BrandAndColorContainer>
                            <Brand>{product.brand.title}</Brand>
                            <Color>Renk: {product.color.title}</Color>
                          </BrandAndColorContainer>
                          <Price>
                            {product.price}
                            {""} TL
                          </Price>
                        </ItemContainer>
                      </Link>
                    </div>
                  ))}
                </ProductContainer>
              )}
            ></Route>
          </div>
        )}
      ></Route>
    </>
  );
};

export default Home;
