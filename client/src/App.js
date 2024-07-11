import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import UserPage from "./pages/User";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
