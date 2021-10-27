import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
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

export const Home = () => {
  //Setting states
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState(productData);
  const [initialData, setInitialData] = useState(true);
  //fetching data for category section
  useEffect(() => {
    axios
      .get("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
      .then((response) => response.data)
      .then((data) => setCategoryData(data))
      .catch((error) => console.log(error));
  }, []);
  //fetching the whole product data for product section
  useEffect(() => {
    axios
      .get("https://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => response.data)
      .then((data) => setProductData(data))
      .catch((error) => console.log(error));
  }, []);
  //Filtering the data accordingly on specific cagetory
  const handleProduct = (props) => {
    const filter = productData.filter((item) => {
      return item.category.title === props;
    });
    setFilteredData(filter);
  };
  return (
    <>
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
          <div>
            <CategoryButton onClick={() => setFilteredData(productData)}>
              Hepsi
            </CategoryButton>
          </div>

          {categoryData.map(
            (
              category //Mapping the category section
            ) => (
              <div key={category.id}>
                <CategoryButton
                  onClick={() => {
                    handleProduct(`${category.title}`);
                    setInitialData(false);
                  }}
                >
                  {category.title}
                </CategoryButton>
              </div>
            )
          )}
        </CategoryContainer>
        {initialData ? ( // This logic is using to render whole product data when the page render. So it prevent the product section to being empty at rendering.
          <ProductContainer>
            {productData.map((product) => (
              <div key={product.id}>
                <Link
                  to={{
                    pathname: `/Home/Product/Detail/${product.id}`,
                  }}
                  style={{
                    textDecorationLine: "none",
                    color: "black",
                  }}
                >
                  <ItemContainer>
                    <ImageContainer>
                      <img
                        src={product.imageUrl}
                        width="260px"
                        height="297px"
                        alt=""
                        style={{ objectFit: "cover", borderRadius: "8px" }}
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
        ) : (
          <ProductContainer>
            {filteredData.map(
              // This logic is using to render specific items accordingly on category
              (product) => (
                <div key={product.id}>
                  <Link
                    to={{
                      pathname: `/Home/Product/Detail/${product.id}`,
                    }}
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
              )
            )}
          </ProductContainer>
        )}
      </div>
    </>
  );
};
