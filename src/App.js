import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FormComponent from "./components/ContactForm/Form";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/formcomponents" component={FormComponent} />
        <Route exact path="/contact-page" component={ContactPage} />
        <Route exact path="/projects-page" component={ProjectsPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
