import "./App.css";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import Login from "./screens/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
