import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/home/Navbar";
import Home from "./components/home/Home";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
