import React, { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
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
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState(productData);
  const [productDetail, setProductDetail] = useState({});

  // const allCategories = [
  //   "ALL",
  //   ...productData.map((item) => item.category.title),
  // ];
  // console.log(allCategories);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
      .then((response) => response.data)
      .then((data) => setCategoryData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://bootcampapi.techcs.io/api/fe/v1/product/all")
      .then((response) => response.data)
      .then((data) => setProductData(data))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, []);

  // const filter = (button) => {
  //   const filteredData = productData.filter(item => item.category === button )
  // }

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

          {categoryData.map((category) => (
            <div key={category.id}>
              <CategoryButton
                onClick={() => handleProduct(`${category.title}`)}
              >
                {category.title}
              </CategoryButton>
            </div>
          ))}
        </CategoryContainer>
        <ProductContainer>
          {filteredData.map((product) => (
            <div key={product.id}>
              <Link
                onClick={() => setProductDetail(product)}
                to={`/Home/Product/Detail/${product.id}`}
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
      </div>
    </>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   // }
//   const [name,setName] =useState("React")

// const data = [
//   {
//       "id": 0,
//       "title": "TestProductForAzure",
//       "description": null,
//       "owner": "Seeded Company",
//       "link": null,
//       "url": "http://localhost:54729/api/product/3",
//       "type": "Internal",
//       "rank": 0,
//       "productid": 3
//   },
//   {
//       "id": 0,
//       "title": "Official example",
//       "description": null,
//       "owner": null,
//       "link": "/search/product?url=https://support.example.com/en-ae",
//       "url": "https://support.example.com/en-ae",
//       "type": "External",
//       "rank": 0,
//       "productid": 0
//   },
//   {
//       "id": 0,
//       "title": "Example1 Support",
//       "description": null,
//       "owner": null,
//       "link": "/search/product?url=https://support.example.com/",
//       "url": "https://support.example.com/",
//       "type": "External",
//       "rank": 0,
//       "productid": 0
//   }
// ];

// <select onChange={e => this.setState({filter: e.target.value})}>
//           <option value="">All</option>
//           <option value="Internal">Internal</option>
//           <option value="External">External</option>
//         </select>

// {
//   data
//     .filter(item => !this.state.filter || item.type === this.state.filter)
//     .map(item => (
//       item.type === filter ?
//       <div className="internal">
//         {item.title}
//       </div> :
//       <div className="external">
//         {item.title}
//       </div>
//   ))
// // }

// const filterHandler = () => {
//   switch (status) {
//     case "completed":
//       setFilteredTodos(todos.filter((todo) => todo.completed === true));
//       break;
//     case "uncompleted":
//       setFilteredTodos(todos.filter((todo) => todo.completed === false));
//       break;
//     default:
//       setFilteredTodos(todos);
//       break;
//   }
// };
