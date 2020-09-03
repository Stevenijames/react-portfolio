import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

    return (
        <div>
            <div></div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Please Reach Out for Current Availability</h5>
                    <p className="card-text">Contact Paul below!</p>
                    <Link to="/contact-page" className="btn btn-primary">
                        Contact
            </Link>
                </div>
            </div>
        </div>
    )
};

export default Footer;