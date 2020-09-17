import React from "react";
import "./Card.css";

function Card() {
    return (
        <div>
            <div className="card" style={{ marginBottom: "10px" }}>
                <h5 className="card-header">Skills</h5>
                <div className="card-body">
                    <h5 className="card-title">Paul's Language Qualifications</h5>
                    <p className="card-text">
                        HTML5, CSS, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, MongoDB, Mongoose, MySQL, Command Line, Git, debugging, and tests.
          </p>
                </div>
            </div>
        </div>
    );
}

export default Card;