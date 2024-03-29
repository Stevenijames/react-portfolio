import React from "react";
import "./ContactForm.css";
import "./Form";

function ContactForm() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <form
        action="ijamesproductions1@gmail.com"
        method="get"
        type="text/plain"
        style={{ marginLeft: "20px", marginRight: "20px" }}
      >
        <div className="form-group">
          <label for="exampleFormControlInput1" style={{ color: "white" }}>
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1" style={{ color: "white" }}>
            Personal Note Here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Personal Note"
            rows="3"
          ></textarea>
          <br></br>
          <input className="btn" type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
