import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Switch from "react-switch";
import {
  FormikContainer,
  MainContainer,
  FirstSelectContainer,
  SecondSelectContainer,
  ProductNameInput,
  DescriptionInput,
  Select,
  PriceInput,
  SaveButton,
} from "./styled/AddProductSc";
const AddProduct = () => {
  const [isOfferable, setIsOfferable] = useState(false);
  // const formik = useFormik({});

  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        paddingTop: "5px",
        width: "100%",
        height: "889.4px",
      }}
    >
      <MainContainer>
        <FormikContainer>
          <Formik
            initialValues={{
              productName: "",
              description: "",
              category: "",
              brand: "",
              color: "",
              status: "",
              price: "",
              image: "",
            }}
            validationSchema={Yup.object({
              productName: Yup.string().required(
                "Lütfen Eklemek İstediğiniz Ürünün Adını Girin"
              ),
              description: Yup.string().required(
                "Ürününüzün Bir Açıklaması Olmalı"
              ),
              category: Yup.string()
                .required("Lütfen Bir Kategori Seçin")
                .oneOf([
                  "Pantolon",
                  "Gömlek",
                  "Tişört",
                  "Sweatshirt",
                  "Mont",
                  "Polar",
                  "Şort",
                  "Kazak",
                  "Ayakkabı",
                ]),
              brand: Yup.string()
                .required("Lütfen Bir Marka Seçin")
                .oneOf([
                  "Levis",
                  "Mavi",
                  "Vakko",
                  "Nike",
                  "Lacoste",
                  "Pull&Bear",
                  "Underarmour",
                ]),
              color: Yup.string()
                .required("Lütfen Bir Renk Seçin")
                .oneOf([
                  "Mavi",
                  "Lacivert",
                  "Beyaz",
                  "Kahverengi",
                  "Yeşil",
                  "Mor",
                  "Siyah",
                  "Pembe",
                  "Kırmızı",
                ]),
              status: Yup.string()
                .required("Lütfen Bir Kullanım Durumunu Seçin")
                .oneOf(["Yeni", "Kullanılmış", "Az Kullanılmış"]),
              price: Yup.boolean().required("Ürünün Fiyatını Girin"),
            })}
            onSubmit={(values) => {
              console.log(values);
              console.log("asd");
            }}
          >
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              dirty,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <div
                    style={{
                      borderRight: "1px solid #F4F4F4",
                      marginRight: "5px",
                      paddingRight: "5px",
                    }}
                  >
                    <p style={{ color: "#525252", fontSize: "25px" }}>
                      Ürün Detayları
                    </p>
                    <div>
                      <div
                        style={{
                          flexDirection: "column",
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <div
                          style={{
                            flexDirection: "column",
                            display: "flex",
                          }}
                        >
                          <label htmlFor="productName">Ürün Adı</label>
                          <ProductNameInput
                            id="productName"
                            type="text"
                            value={values.productName}
                            onChange={handleChange}
                            placeholder="Ürün Adı..."
                          />
                        </div>
                        <div
                          style={{ flexDirection: "column", display: "flex" }}
                        >
                          <label htmlFor="description">Ürün Açıklaması</label>
                          <DescriptionInput
                            id="description"
                            type="text"
                            value={values.description}
                            onChange={handleChange}
                            placeholder="Ürün Açıklaması..."
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          flexDirection: "row",
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "5px",
                        }}
                      >
                        <FirstSelectContainer>
                          <label
                            style={{
                              marginTop: "25px",
                              fontSize: "15px",
                              color: "#525252",
                            }}
                            htmlFor="category"
                          >
                            Kategori
                          </label>
                          <Select
                            id="category"
                            value={values.category}
                            onChange={handleChange}
                          >
                            <option
                              value=""
                              label="Kategori Seç"
                              style={{ paddingLeft: "5px" }}
                            />
                            <option value="Pantolon" label="Pantolon" />
                            <option value="Gömlek" label="Gömlek" />
                            <option value="Tişört" label="Tişört" />
                            <option value="Sweatshirt" label="Sweatshirt" />
                            <option value="Mont" label="Mont" />
                            <option value="Polar" label="Polar" />
                            <option value="Şort" label="Şort" />
                            <option value="Kazak" label="Kazak" />
                            <option value="Ayakkabı" label="Ayakkabı" />
                          </Select>
                          <label
                            style={{
                              marginTop: "25px",
                              fontSize: "15px",
                              color: "#525252",
                            }}
                            htmlFor="brand"
                          >
                            Marka
                          </label>
                          <Select
                            id="brand"
                            value={values.brand}
                            onChange={handleChange}
                          >
                            <option value="" label="Marka Seç" />
                            <option value="Levis" label="Levis" />
                            <option value="Vakko" label="Vakko" />
                            <option value="Nike" label="Nike" />
                            <option value="Lacoste" label="Lacoste" />
                            <option value="Pull&Bear" label="Pull&Bear" />
                            <option value="Underarmour" label="Underarmour" />
                          </Select>
                        </FirstSelectContainer>
                        <SecondSelectContainer>
                          <label
                            style={{
                              marginTop: "25px",
                              fontSize: "15px",
                              color: "#525252",
                            }}
                            htmlFor="color"
                          >
                            Renk
                          </label>
                          <Select
                            id="color"
                            value={values.color}
                            onChange={handleChange}
                            placeholder="color"
                          >
                            <option value="" label="Renk Seç" />
                            <option value="Mavi" label="Mavi" />
                            <option value="Lacivert" label="Lacivert" />
                            <option value="Beyaz" label="Beyaz" />
                            <option value="Kahverengi" label="Kahverengi" />
                            <option value="Mor" label="Mor" />
                            <option value="Yeşil" label="Yeşil" />
                            <option value="Siyah" label="Siyah" />
                            <option value="Pembe" label="Pembe" />
                            <option value="Kırmızı" label="Kırmızı" />
                          </Select>
                          <label
                            style={{
                              marginTop: "25px",
                              fontSize: "15px",
                              color: "#525252",
                            }}
                            htmlFor="status"
                          >
                            Kullanım Durumu
                          </label>
                          <Select
                            id="status"
                            value={values.status}
                            onChange={handleChange}
                            placeholder="status"
                          >
                            <option value="" label="Kullanım Durumu" />
                            <option value="Yeni" label="Yeni" />
                            <option value="Kullanılmış" label="Kullanılmış" />
                            <option
                              value="Az Kullanılmış"
                              label="Az Kullanılmış"
                            />
                            <option
                              value="Doktordan Temiz"
                              label="Doktordan Temiz"
                            />
                            <option value="Emsalsiz" label="Emsalsiz" />
                          </Select>
                        </SecondSelectContainer>
                      </div>
                    </div>
                    <div style={{ flexDirection: "column", display: "flex" }}>
                      <label>Fiyat</label>
                      <PriceInput
                        id="price"
                        type="number"
                        placeholder="Bir Fiyat Girin"
                        value={values.price}
                        onChange={handleChange}
                      />
                      {/* <div
                        style={{
                          flexDirection: "baseline",
                          display: "flex",
                          justifyContent: "space-between",
                          width: "236px",
                        }}
                      >
                        <p style={{ color: "#B1B1B1", fontSize: "16px" }}>
                          Teklif Opsiyonu
                        </p>
                        
                        <Switch
                          checked={setIsOfferable(false)}
                          onChange={setIsOfferable(true)}
                          onColor="#86d3ff"
                          onHandleColor="#2693e6"
                          uncheckedIcon={false}
                          checkedIcon={false}
                          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                          height={20}
                          width={44}
                          className="react-switch"
                          id="material-switch"
                        />
                      </div> */}
                    </div>
                  </div>
                  <div
                    style={{
                      height: "768px",
                      width: "690px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "25px",
                          color: "#525252",
                          marginBottom: "20px",
                          display: "flex",
                        }}
                      >
                        Ürün Görseli
                      </p>
                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "60px auto",
                          gap: "1px",
                          flexDirection: "column",
                          display: "flex",
                        }}
                      >
                        <img
                          src="./assets/uploadimage.svg"
                          width="30px"
                          height="30px"
                          alt=""
                        />
                        <p style={{ fontSize: "14px", color: "#525252" }}>
                          Sürükleyip bırakarak yükle
                        </p>
                        <p style={{ fontSize: "14px", color: "#525252" }}>
                          {" "}
                          veya
                        </p>
                        <input
                          type="file"
                          style={{ border: "0" }}
                          value={values.image}
                          onChange={handleChange}
                          id="image"
                        />
                        <p style={{ fontSize: "12px", color: "#B1B1B1" }}>
                          PNG ve JPEG Dosya boyutu: max. 100kb
                        </p>
                      </div>
                      <SaveButton type="submit" onClick={handleSubmit}>
                        Kaydet
                      </SaveButton>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </FormikContainer>
      </MainContainer>
    </div>
  );
};

export default AddProduct;
