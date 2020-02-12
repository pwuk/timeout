import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import PageOne from "./components/pageone/PageOne";
import PageTwo from "./components/pagetwo/PageTwo";

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={PageOne} />
      <Route path="/page-two" component={PageTwo} />
    </Switch>
  </Router>
);

export default App;
