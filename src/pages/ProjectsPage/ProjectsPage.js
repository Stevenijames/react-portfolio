import React from "react";
import "./ProjectsPage.css";
import Navbar from "../../components/Navbar/Navbar"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import projects from "./projects.json";
import ResumeCard from "../../components/ResumeCard/ResumeCard"
import Footer from "../../components/Footer/Footer";
import "../../App.css"

function ProjectsPage() {

    const isBackgroundDark = true;

    return (

        <div
            className="App"
            style={{
                backgroundColor: isBackgroundDark ? '#BDB76B' : 'light',
            }}
        >
            <Navbar />

            <Container>

                <Row>
                    <Col>
                        <ResumeCard />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ProjectCard
                            projectimage={projects[0].projectimage}
                            imagedescription={projects[0].imagedescription}
                            projecttitle={projects[0].projecttitle}
                            projectdescription={projects[0].projectdescription}
                            link1={projects[0].link1}
                            link2={projects[0].link2}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            projectimage={projects[1].projectimage}
                            imagedescription={projects[1].imagedescription}
                            projecttitle={projects[1].projecttitle}
                            projectdescription={projects[1].projectdescription}
                            link1={projects[1].link1}
                            link2={projects[1].link2}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            projectimage={projects[2].projectimage}
                            imagedescription={projects[2].imagedescription}
                            projecttitle={projects[2].projecttitle}
                            projectdescription={projects[2].projectdescription}
                            link1={projects[2].link1}
                            link2={projects[2].link2}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ProjectCard
                            projectimage={projects[3].projectimage}
                            imagedescription={projects[3].imagedescription}
                            projecttitle={projects[3].projecttitle}
                            projectdescription={projects[3].projectdescription}
                            link1={projects[3].link1}
                            link2={projects[3].link2}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            projectimage={projects[4].projectimage}
                            imagedescription={projects[4].imagedescription}
                            projecttitle={projects[4].projecttitle}
                            projectdescription={projects[4].projectdescription}
                            link1={projects[4].link1}
                            link2={projects[4].link2}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            projectimage={projects[5].projectimage}
                            imagedescription={projects[5].imagedescription}
                            projecttitle={projects[5].projecttitle}
                            projectdescription={projects[5].projectdescription}
                            link1={projects[5].link1}
                            link2={projects[5].link2}
                        />
                    </Col>
                </Row>

            </Container>

            <Footer />
        </div>

    );
}


export default ProjectsPage;