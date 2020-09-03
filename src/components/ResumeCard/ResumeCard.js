import React from "react";

function ResumeCard() {
    return (
        <div>
            <div className="card" style={{ marginTop: "10px", marginBottom: "10px", backgroundColor: "#FFF8DC" }}>
                <h5 className="card-header">Paul's Resume</h5>
                <div className="card-body">
                    <h5 className="card-title">Check out Paul's resume via the link below.</h5>
                    <p className="card-text">
                        Contact Paul for a formal cover letter further explaining his experience with web development. In the meantime, check out his resume below.
          </p>
                    <a href="https://docs.google.com/document/d/1pj8y8e57bk3yYmtH0F3vKXLqs6ecKZ5Apjtn410_4oU/edit?usp=sharing" style={{ backgroundColor: "#556B2F" }} className="btn btn-primary">
                        Resume
          </a>
                </div>
            </div>
        </div>
    );
}

export default ResumeCard;
