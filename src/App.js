import "./App.css";
import { Home } from "./screens/Home";
import Register from "./screens/Register";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/Login";
import Account from "./screens/Account";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ProductDetail from "./screens/ProductDetail";
import Nav from "./screens/Nav";
import ModalPage from "./screens/Modal";

function App() {
  return (
    <Router>
      <Route path="/Register" exact component={Register} />
      <Route path="/Login" exact component={Login} />
      <Route path="/" exact render={() => <Redirect to="/Home" />} />

      <Route path="/Home" component={Nav} />
      <Route path="/Home" exact component={Home} />
      <Switch>
        <Route path="/Home/Product/Add" component={AddProduct} />
        <Route path="/Home/Product/Detail/:id" component={ProductDetail} />
        <Route path="/Home/Account" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;
