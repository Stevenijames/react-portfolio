import React from "react";

function ResumeCard() {
    return (
        <div>
            <div className="card" style={{ marginTop: "10px", marginBottom: "10px", backgroundColor: "#FFF8DC" }}>
                <h5 className="card-header">Paul Ijames Projects</h5>
                <div className="card-body">
                    <a href="https://docs.google.com/document/d/1pj8y8e57bk3yYmtH0F3vKXLqs6ecKZ5Apjtn410_4oU/edit?usp=sharing" style={{ backgroundColor: "#36454f" }} className="btn">
                        Resume
          </a>
                </div>
            </div>
        </div>
    );
}

export default ResumeCard;
