import React from "react";
import "./AboutCard.css";


function AboutCard(props) {
    return (
        <div className="animate__animated animate__fadeInUp">
            <div
                className="card"
                style={{ minHeight: "350px", marginBottom: "30px", marginTop: "40px", backgroundColor: "#F5F5DC", border: "5px solid #133b5c" }}
            >
                <img
                    src={props.image}
                    className="card-img-top" style={{ maxHeight: "350px" }}
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