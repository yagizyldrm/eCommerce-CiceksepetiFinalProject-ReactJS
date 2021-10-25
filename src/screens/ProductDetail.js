import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ElementContainer,
  ImageContainer,
  DetailContainer,
  HeaderContainer,
  InfoContainer,
  FirstContainer,
  PriceContainer,
  SecondContainer,
  ButtonsContainer,
  BuyButton,
  OfferButton,
  DescriptionContainer,
  DescriptionHeader,
  Description,
} from "./styled/ProductDetailSc";

const ProductDetail = ({ match }) => {
  const [delay, setDelay] = useState(false);
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://bootcampapi.techcs.io/api/fe/v1/product/${match.params.id}`)
      .then((response) => response.data)
      .then((data) => setItemDetail(data))
      .then(setDelay(true))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#F2F2F2",
          paddingTop: "5px",
          width: "100%",
          height: "872px",
        }}
      >
        {delay ? (
          <ElementContainer>
            <ImageContainer>
              <img
                src={itemDetail?.imageUrl}
                alt=""
                width="100%"
                height="100%"
              />
            </ImageContainer>
            <DetailContainer>
              <HeaderContainer>{itemDetail?.title}</HeaderContainer>
              <InfoContainer>
                <FirstContainer>
                  <p>Marka:</p>
                  <p>Renk:</p>
                  <p>Kullanım Durumu:</p>
                </FirstContainer>
                <SecondContainer>
                  <p>{itemDetail?.brand?.title}</p>
                  <p>{itemDetail?.color?.title}</p>
                  <p>{itemDetail?.status?.title}</p>
                </SecondContainer>
              </InfoContainer>
              <PriceContainer>
                <p style={{ fontWeight: "bold" }}>{itemDetail?.price} TL</p>
              </PriceContainer>
              <ButtonsContainer>
                <BuyButton>Satın Al</BuyButton>
                <OfferButton>Teklif Ver</OfferButton>
              </ButtonsContainer>
              <DescriptionContainer>
                <DescriptionHeader>Açıklama</DescriptionHeader>
                <Description>{itemDetail?.description}</Description>
              </DescriptionContainer>
            </DetailContainer>
          </ElementContainer>
        ) : (
          console.log("error")
        )}
      </div>
    </>
  );
};
export default ProductDetail;
