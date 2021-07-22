import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Whiskey from "./pages/Whiskey";
import Hazel from "./pages/Hazel";
import Tubby from "./pages/Tubby";

function App() {
  return (
    <div className="App">
      <h1>HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.</h1>
      <Navigation />
      <Switch>
        <Route path="/whiskey" component={Whiskey} />
        <Route path="/hazel" component={Hazel} />
        <Route path="/tubby" component={Tubby} />
      </Switch>
    </div>
  );
}

export default App;
