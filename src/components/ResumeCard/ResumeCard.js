import React from "react";
// import "./ResumeCard.css";

function ResumeCard() {
  return (
    <div id="outer-card">
      <div
        className="card"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "#white",
        }}
      >
        <h5 className="card-header">Paul Ijames Projects</h5>
        <div className="card-body">
          <a
            alt="Resume"
            href="https://docs.google.com/document/d/1OG3sf-lF9MzWa_fA7TDKaYsj6smunuSGgIy5MGhGi2k/edit?usp=sharing"
            style={{ backgroundColor: "#153B5C" }}
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
