import React from "react";
import "./AboutCard.css";

function AboutCard(props) {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div
        className="card"
        style={{
          minHeight: "350px",
          marginTop: "10px",
          marginBottom: "40px",
          backgroundColor: "#d4b66b",
          borderRadius: "inherent",
          border: "5px solid #153B5C",
        }}
      >
        <img
          src={props.image}
          className="card-img-top"
          alt={props.idescription}
        />
        <div className="card-body">
          <p className="card-text">{props.cardtext}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
