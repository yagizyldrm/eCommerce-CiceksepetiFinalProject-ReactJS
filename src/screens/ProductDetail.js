import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
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
import {
  BuyModalStyle,
  OfferModalStyle,
  Label,
  Header,
  ImageAndTitleContainer,
  LabelContainer,
  ApproveButton,
  OfferInput,
  BuyModalButtonContainer,
  BuyModalCloseButton,
  BuyModalPurchaseButton,
} from "./styled/ModalStyleSc";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const ProductDetail = ({ match }) => {
  const [delay, setDelay] = useState(false);
  const [itemDetail, setItemDetail] = useState({});
  const [buyModalIsOpen, setBuyModalIsOpen] = useState(false);
  const [offerModalIsOpen, setOfferModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://bootcampapi.techcs.io/api/fe/v1/product/${match.params.id}`)
      .then((response) => response.data)
      .then((data) => setItemDetail(data))
      .then(setDelay(true))
      .catch((error) => console.log(error));
  }, []);

  function openBuyModal() {
    setBuyModalIsOpen(true);
  }

  function closeBuyModal() {
    setBuyModalIsOpen(false);
  }
  function openOfferModal() {
    setOfferModalIsOpen(true);
  }

  function closeOfferModal() {
    setOfferModalIsOpen(false);
  }
  const placeOrder = () => {
    const satik = {
      isSold: false,
    };
    axios
      .put(
        `https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${match.params.id}`,
        satik
      )

      .then((satik) => console.log(satik));
  };

  return (
    <>
      <div>
        <Modal
          isOpen={buyModalIsOpen}
          onRequestClose={closeBuyModal}
          style={BuyModalStyle}
          contentLabel="Example Modal"
        >
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 20px 12px 20px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Satın Al
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "15px",
              marginBottom: "20px",
            }}
          >
            Satın Almak istiyor musunuz?
          </p>
          <BuyModalButtonContainer>
            <BuyModalCloseButton onClick={closeBuyModal}>
              Vazgeç
            </BuyModalCloseButton>
            <BuyModalPurchaseButton onClick={placeOrder}>
              Satın Al
            </BuyModalPurchaseButton>
          </BuyModalButtonContainer>
        </Modal>
      </div>
      <div>
        <Modal
          isOpen={offerModalIsOpen}
          onRequestClose={closeOfferModal}
          style={OfferModalStyle}
          contentLabel="Example Modal"
        >
          <div>
            <Header>
              <h2>{itemDetail?.title}</h2>
              <h3 style={{ cursor: "pointer" }} onClick={closeOfferModal}>
                X
              </h3>
            </Header>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#F0F8FF",
                padding: "6px",
                borderRadius: "10px",
              }}
            >
              <ImageAndTitleContainer>
                <img
                  src={itemDetail?.imageUrl}
                  width="50px"
                  height="50px"
                  alt=""
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: "5px",
                  }}
                />
                <p> {itemDetail?.title}</p>
              </ImageAndTitleContainer>
              <p>{itemDetail?.price} TL</p>
            </div>
            <div style={{ flexDirection: "column", display: "flex" }}>
              <LabelContainer>
                <input type="radio" id="20%" name="offer20" value="huey1" />
                <Label htmlFor="%20">%20'si Kadar Teklif Ver</Label>
              </LabelContainer>
              <LabelContainer>
                <input type="radio" id="30%" name="offer30" value="huey2" />
                <Label htmlFor="%30">%30'si Kadar Teklif Ver</Label>
              </LabelContainer>
              <LabelContainer>
                <input type="radio" id="40%" name="offer40" value="huey3" />
                <Label htmlFor="%40">%40'si Kadar Teklif Ver</Label>
              </LabelContainer>
              <OfferInput placeholder={"Teklifi Belirle"} />
              <ApproveButton>Onayla</ApproveButton>
            </div>
          </div>
        </Modal>
      </div>
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
                <BuyButton onClick={openBuyModal}>Satın Al</BuyButton>

                <OfferButton onClick={openOfferModal}>Teklif Ver</OfferButton>
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
