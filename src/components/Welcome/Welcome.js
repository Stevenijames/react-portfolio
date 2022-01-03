import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="animate__animated animate__slideInLeft">
      <div
        className="jumbotron"
        style={{
          backgroundColor: "#d4b66b",
        }}
      >
        <h1 className="display-4">Paul Ijames Web Development</h1>
        <p className="lead">
          Scroll down for more information or visit his Projects and Contact
          page.
        </p>
        <a
          className="btn btn-md"
          style={{
            backgroundColor: "#153B5C",
          }}
          href="https://www.linkedin.com/in/paul-ijames-94765054"
        >
          LinkedIn
        </a>
        <a
          className="btn btn-md"
          style={{
            backgroundColor: "#153B5C",
          }}
          href="https://github.com/Stevenijames"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Welcome;
