import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Dashboard from "./Components/pages/Dashboard";
import Contact from "./Components/pages/Contact";
import About from "./Components/pages/About";
import Error from "./Components/pages/Error";

class App extends React.Component {
  state = {
    isLoggedIn: true
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login">
            {this.state.isLoggedIn ? <Redirect to="/dashboard" /> : <Login />} 
          </Route>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
