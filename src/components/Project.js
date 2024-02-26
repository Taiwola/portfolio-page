import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import ProjectCard2 from './projectCrd';
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard3 from './projectCard2';
import ProjectCard4 from './projectCard4';
import ProjectCard5 from './projectCard5';

export default function Project() {
    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Project</h2>

                        <Tab.Container id='projects-tab' defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <ProjectCard />

                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <ProjectCard2 />
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <ProjectCard3 />
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        <ProjectCard4 />
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Row>
                                        <ProjectCard5 />
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='img' />
        </section>
    )
}
