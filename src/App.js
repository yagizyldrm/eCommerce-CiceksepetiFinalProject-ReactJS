import "./App.css";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
