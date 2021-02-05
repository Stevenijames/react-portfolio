import React from "react";
import "./Card.css";

function Card() {
    return (
        <div>
            <div className="card" style={{ marginBottom: "10px" }}>

                <div className="card-body">
                    <h5 className="card-title">Language Qualifications</h5>
                    <p className="card-text">
                        HTML5, CSS, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, MongoDB, Mongoose, MySQL, Command Line, Git
          </p>
                </div>
            </div>
        </div>
    );
}

export default Card;