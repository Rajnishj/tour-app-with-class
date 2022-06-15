import React, { Component } from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TourPage from "./pages/TourPage";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tour" element={<TourPage />} />
        </Routes>
        </Router>
    );
  }
}

export default App;
