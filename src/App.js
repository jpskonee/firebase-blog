import React from "react";
import "../src/styles/app.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/Home/AboutUs";
import HomePage from "../src/components/Home/HomePage";
import Blog from "./components/Home/BlogHome";
import LoginReg from "./components/Home/LoginReg";
import { AuthProvider } from "./components/State-Management/AuthState";
import Compose from "./components/Home/Compose";
import SinglePost from "./components/Home/SinglePost";
import Footer from "./components/Footer";


function App() {
    
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path="/login" component={LoginReg} />
              <Route exact path="/compose" component={Compose} />
              <Route exact path="/posts/:id" component={SinglePost} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
