import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/AppMain";
import Saved from "./pages/AppSaved";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Title from "./components/Title";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Title />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
