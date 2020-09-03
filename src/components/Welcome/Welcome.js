import React from "react";
import "./Welcome.css";

function Welcome() {

    return (
        <div>
            <div className="animate__animated animate__slideInLeft">
                <div className="jumbotron" style={{ height: "320px", marginTop: "20px", backgroundColor: "#FFF8DC" }}>
                    <h1 className="display-4">Welcome to Paul's Web Development Portfolio!</h1>
                    <p className="lead">Scroll down for more information about Paul, or visit his Projects and Contacts pages.</p>
                    <hr className="my-4" />
                    <p>Please Check out Paul's GitHub and LinkedIn profiles below.</p>
                    <a className="btn btn-primary btn-md" style={{ backgroundColor: "#556B2F", marginBottom: "25px", marginTop: "15px" }} href="https://github.com/Stevenijames" role="button">GitHub</a> <a className="btn btn-primary btn-md" style={{ backgroundColor: "#556B2F", marginBottom: "25px", marginTop: "15px" }} href="https://www.linkedin.com/in/paul-ijames-94765054" role="button">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;