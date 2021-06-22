import React from "react";
import Intro from "./Intro";
import List from "./list";
import Hook from "./hook";
import Connect from "./connect";
import Bind from "./bind";
import Flatten from "./flatten";
import PromiseAll from "./promiseAll";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/bind" component={Bind} />
        <Route exact path="/promise" component={PromiseAll} />
        <Route exact path="/connect" component={Connect} />
        <Route exact path="/flatten" component={Flatten} />
        <Route exact path="/hook" component={Hook} />
        <Route exact path="/list" component={List} />
        <Route path="/" component={Intro} />
      </Switch>
    </BrowserRouter>
  );
}
