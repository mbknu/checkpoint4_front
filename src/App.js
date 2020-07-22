import React from "react";
import Home from "./components/Intro/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/auth/Login";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Misc from "./components/Misc/Misc";
import Facts from "./components/Misc/Facts/Facts";
import Battle from "./components/Battle/Battle";
import About from "./components/About/About";
import Profile from "./components/auth/Profile";
import ChuckJokes from "./components/Misc/Chuck/ChuckJokes";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" component={Home} exact />
        <Switch>
          <Route path="/homepage" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/projects" component={Projects} />
          <Route path="/misc" component={Misc} />
          <Route path="/facts" component={Facts} />
          <Route path="/battle" component={Battle} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/chuck" component={ChuckJokes} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
