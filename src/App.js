import "./App.css";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./screens/ProductDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
