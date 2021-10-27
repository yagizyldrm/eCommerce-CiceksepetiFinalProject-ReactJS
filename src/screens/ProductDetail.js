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
  NotAvaliableButton,
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

const ProductDetail = ({ match }) => {
  // match is a unique word which is we have to use it to get the data from the link down below
  const [delay, setDelay] = useState(false);
  const [itemDetail, setItemDetail] = useState({});
  const [buyModalIsOpen, setBuyModalIsOpen] = useState(false);
  const [offerModalIsOpen, setOfferModalIsOpen] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [price, setPrice] = useState(false);
  const [offeredPrice, setOfferedPrice] = useState("");
  useEffect(() => {
    //fetching data from the item that we clicked
    axios
      .get(`https://bootcampapi.techcs.io/api/fe/v1/product/${match.params.id}`)
      .then((response) => response.data)
      .then((data) => setItemDetail(data))
      .then(setDelay(true))
      .catch((error) => console.log(error));
  }, []);
  // basic logic functions
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

  function offeredPriceToEmpty() {
    setOfferedPrice("");
  }
  //this fetching is not working properly due to isSold=true in database
  const sendOfferRequest = () => {
    axios
      .post(
        `https://bootcampapi.techcs.io/api/fe/v1/product/offer/${match.params.id}`,
        offeredPrice
      )
      .then((response) => response.data)
      .catch((error) => console.log("offer error", error));
  };
  //this fethcing is not working either with the same problem above
  const placeOrder = () => {
    const article = { isSold: false };
    axios
      .put(
        `https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${match.params.id}`,
        article
      )
      .then((response) => {
        setIsBought(response.itemDetail.isSold);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div>
        <Modal //this comes from modal library
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
            <BuyModalPurchaseButton
              onClick={() => {
                setIsBought(true);
                closeBuyModal();
                placeOrder();
              }}
            >
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
              <h3
                style={{ cursor: "pointer" }} //I used X here because the image that I wanted to add here wasn't working properly.
                onClick={() => {
                  closeOfferModal();
                  setOfferedPrice("");
                }}
              >
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
              {/* name attribute must be the same for every each of input otherwise this may effect troubleshooting */}
              <LabelContainer>
                <input
                  type="radio"
                  id="20%"
                  name="offer"
                  value={itemDetail?.price * 0.2}
                  onChange={(event) => setOfferedPrice(event.target.value)}
                />
                <Label htmlFor="20%">%20'si Kadar Teklif Ver</Label>
              </LabelContainer>

              <LabelContainer>
                <input
                  type="radio"
                  id="30%"
                  name="offer"
                  value={itemDetail?.price * 0.3}
                  onChange={(event) => setOfferedPrice(event.target.value)}
                />

                <Label htmlFor="30%">%30'si Kadar Teklif Ver</Label>
              </LabelContainer>
              <LabelContainer>
                <input
                  type="radio"
                  id="40%"
                  name="offer"
                  value={itemDetail?.price * 0.4}
                  onChange={(event) => setOfferedPrice(event.target.value)}
                />
                <Label htmlFor="40%">%40'si Kadar Teklif Ver</Label>
              </LabelContainer>
              <OfferInput
                placeholder={"Teklifi Belirle"}
                value={offeredPrice}
                onChange={(e) => setOfferedPrice(e.target.value)}
              />
              <ApproveButton
                onClick={() => {
                  setPrice(true);
                  closeOfferModal();
                  sendOfferRequest();
                }}
              >
                Onayla
              </ApproveButton>
            </div>
          </div>
        </Modal>
      </div>
      <div
        style={{
          backgroundColor: "#F2F2F2",
          paddingTop: "5px",
          width: "100%",
          height: "889.4px",
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

                {price ? (
                  <div
                    style={{
                      width: "230px",
                      height: "36px",
                      backgroundColor: "#F2F2F2",
                      borderRadius: "8px",
                      flexDirection: "initial",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      marginTop: "2px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#B1B1B1",
                        paddingLeft: "10px",
                      }}
                    >
                      Verilen Teklif:{" "}
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      {" "}
                      {offeredPrice} TL
                    </p>
                  </div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </PriceContainer>

              {isBought ? (
                <NotAvaliableButton>Bu Ürün Satışta Değil</NotAvaliableButton>
              ) : (
                <ButtonsContainer>
                  <BuyButton onClick={openBuyModal}>Satın Al</BuyButton>
                  {offeredPrice ? (
                    <OfferButton
                      onClick={() => {
                        setPrice(false);
                        offeredPriceToEmpty();
                      }}
                    >
                      Teklifi Geri Çek
                    </OfferButton>
                  ) : (
                    <OfferButton onClick={() => openOfferModal(true)}>
                      Teklif Ver
                    </OfferButton>
                  )}
                </ButtonsContainer>
              )}
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
