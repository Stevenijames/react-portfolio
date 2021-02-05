import React from "react";
import "./Welcome.css";


function Welcome() {

    return (
        <div>
            <div className="animate__animated animate__slideInLeft">
                <div className="jumbotron" style={{ height: "320px", marginTop: "20px", backgroundColor: "#FFF8DC" }}>
                    <h1 className="display-4">Paul Ijames Web Development</h1>
                    <p className="lead">Scroll down for more information or visit his Projects and Contact page.</p>
                    <hr className="my-4" />
                    <a className="btn btn-md" style={{ backgroundColor: "#36454f", marginBottom: "25px", marginTop: "15px" }} href="https://github.com/Stevenijames">GitHub</a> <a className="btn btn-md" style={{ backgroundColor: "#36454f", marginBottom: "25px", marginTop: "15px" }} href="https://www.linkedin.com/in/paul-ijames-94765054">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

// {/* <style>
// @media for screen only and (max-width:1080px) {
//     .card-img {
//         width: 100%;
//         max-width: 1000px;
//     }
// }
//     @media for screen only and (max-width: 810px) {
//         .card-img {
//             width: 100%;
//             max-width: 750px;
//         }
//     }
//      @media for screen only and (max-width: 414px) {
//         .card-img {
//             width: 100%;
//             max-width: 390px;
//         }
//     }
//      @media for screen only and (max-width: 375px) {
//         .card-img {
//             width: 100%;
//             max-width: 350px;
//         }
//     }
// </style> */}