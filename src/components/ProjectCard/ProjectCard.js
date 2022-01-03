import React from "react";
import "./ProjectsPage.css";

function ProjectCard(props) {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div
        className="card-style"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          border: "5px solid #153B5C",
          backgroundColor: "white",
        }}
      >
        <img
          className="card-img-top"
          src={props.projectimage}
          alt={props.imagedescription}
        />
        <div className="card-body">
          <h5 className="card-title">{props.projecttitle}</h5>
          <p className="card-text">{props.projectdescription}</p>
        </div>
        <div className="card-body">
          <a href={props.link1} className="card-link">
            Project
          </a>
          <a href={props.link2} className="card-link">
            App
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
