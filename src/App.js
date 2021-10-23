import "./App.css";
import { Home } from "./screens/Home";
import Register from "./screens/Register";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import ProductDetail from "./screens/ProductDetail";
import Nav from "./screens/Nav";

function App() {
  return (
    <Router>
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Nav />
      <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/Product/Add" component={AddProduct} />
        <Route path="/Home/Product/Detail/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
