import React from "react";
import "./HomePage.css";
import Navbar from "../../../components/Navbar/Navbar";
import Welcome from "../../../components/Welcome/Welcome";
import AboutCard from "../../../components/AboutCard/AboutCard";
import Footer from "../../../components/Footer/Footer";
import Card from "../../../components/Card/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import about from "./about.json";
import "../../App.css";

function HomePage() {
  const isBackgroundDark = true;

  return (
    <div
      style={{
        backgroundColor: isBackgroundDark ? "#11999e" : "light",
      }}
    >
      <Navbar />
      <Welcome />

      <Container>
        <Row>
          <Col>
            <AboutCard
              image={about[0].image}
              idescription={about[0].idescription}
              cardtext={about[0].cardtext}
            />
          </Col>
          <Col>
            <AboutCard
              image={about[1].image}
              idescription={about[1].idescription}
              cardtext={about[1].cardtext}
            />
          </Col>
          <Col>
            <AboutCard
              image={about[2].image}
              idescription={about[2].idescription}
              cardtext={about[2].cardtext}
            />
          </Col>
        </Row>
      </Container>
      <Card />

      <Footer />
    </div>
  );
}

export default HomePage;
