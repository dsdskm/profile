import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./view/Main";
import Profile from "./view/profile/Profile";
import Career from "./view/profile/Career";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/career" component={Career} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
