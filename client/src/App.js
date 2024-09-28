import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import UserPage from "./pages/User";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CONSTANTS from "./constants";
import { refresh } from "./redux/slice/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshTokenFromLs = localStorage.getItem(CONSTANTS.REFRESH_TOKEN);

    if (refreshTokenFromLs) {
      dispatch(refresh(refreshTokenFromLs));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
