import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  FormikContainer,
  MainContainer,
  AddPhotoContainer,
  FirstSelectContainer,
  SecondSelectContainer,
} from "./styled/AddProductSc";
const AddProduct = () => {
  const formik = useFormik({});
  return (
    <>
      <div style={{ backgroundColor: "#F2F2F2" }}>
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
            >
              {({
                values,
                errors,
                handleSubmit,
                handleChange,
                dirty,
                isSubmitting,
              }) => (
                <form>
                  <label htmlFor="productname">Ürün Adı</label>
                  <input
                    id="productname"
                    placeholder="Ürün Adı..."
                    type="text"
                    value={values.productName}
                    onChange={handleChange}
                  />
                  <label htmlFor="description">Ürün Adı</label>
                  <input
                    id="description"
                    placeholder="Ürün Açıklaması..."
                    type="text"
                    value={values.description}
                    onChange={handleChange}
                  />
                  <FirstSelectContainer>
                    <select
                      id="category"
                      value={values.category}
                      onChange={handleChange}
                    >
                      <option></option>
                    </select>
                    <select id="brand"></select>
                  </FirstSelectContainer>
                  <SecondSelectContainer>
                    <select id="color"></select>
                    <select id="status"></select>
                  </SecondSelectContainer>
                </form>
              )}
            </Formik>
          </FormikContainer>
          <AddPhotoContainer></AddPhotoContainer>
        </MainContainer>
      </div>
    </>
  );
};

export default AddProduct;
