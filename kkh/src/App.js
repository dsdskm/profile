import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./view/Main";
import { initFirebaseApp } from "./common/FirebaseUtil";

function App() {
  console.log("App");
  initFirebaseApp();
  document.title = "KKH";
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
