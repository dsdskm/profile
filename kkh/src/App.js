import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./view/Main";
import Profile from "./view/profile/Profile";
import Study from "./view/study/Study";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/study" component={Study} exact={true} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
