import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./styles/App.css";
import New from "./components/New.jsx";
import Footer from "./components/Footer.jsx";
import Memorial from "./components/Memorial.jsx";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <Header />
            <div>
              <Route path="/" exact component={Projects} />
              <Route path="/memorial/:id" component={Memorial} />
              <Route path="/new" component={New} />
            </div>
            <Footer />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
