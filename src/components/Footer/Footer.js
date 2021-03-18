import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-bottom">
          <h5>Please Reach Out for Current Availability</h5>
          <Link to="/contact-page" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
