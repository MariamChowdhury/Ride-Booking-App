import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from "./Components/Destination/Destination";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="home-container">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/destination">
          <Home></Home>
            </PrivateRoute>
            <PrivateRoute path="/destination/:rideId">
              <Destination></Destination>
            </PrivateRoute>
            <Route exact path="*">
              <h1>404 Not found</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
