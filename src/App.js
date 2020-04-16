import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" component={About} exact />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
