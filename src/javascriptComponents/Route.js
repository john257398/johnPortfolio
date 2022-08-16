import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import portfolio from "./Portfolio";

const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={portfolio} />
      </Switch>
    </Router>
  );
};

export default Navigator;
