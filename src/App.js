import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Comic from "./components/Comic";
import Homepage from "./components/Homepage";
import Hire from "./components/Hire";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/aboutme" component={About} />
          <Route path="/hireme" component={Hire} />
          <Route path="/cornstaff/:id" component={Comic} />
          <Route path="/" component={Homepage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
