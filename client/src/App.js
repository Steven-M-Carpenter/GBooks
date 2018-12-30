import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/AppMain";
import Detail from "./pages/AppDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Title from "/components/Title";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Title />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/books" component={Main} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
