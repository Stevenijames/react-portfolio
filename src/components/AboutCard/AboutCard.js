import React from "react";
import "./AboutCard.css";


function AboutCard(props) {
    return (
        <div className="animate__animated animate__fadeInUp">
            <div
                className="card"
                style={{ minHeight: "500px", marginBottom: "30px", marginTop: "30px", backgroundColor: "#F5F5DC", border: "5px solid #A9A9A9" }}
            >
                <img
                    src={props.image}
                    className="card-img-top" style={{ maxHeight: "250px" }}
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