import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/Homepage";
import NavBar from "./components/NavBar";

function App() {
  console.log("it works!");
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discovermovies" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
