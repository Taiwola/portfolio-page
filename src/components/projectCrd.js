import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard2() {
    return (
        <Col sm={5} md={4} className="mx-auto d-flex">
            <div className='proj-imgbx'>
                <div className='project_card'>
                    <h2>Learning Management System</h2>
                    <div class="code_highlight">
                        <h3>Key Code Contributions:</h3>
                        <ul>
                            <li>Implemented secure JWT-based authentication using NestJS and TypeScript.</li>
                            <li>Supported diverse user roles, catering to students, instructors, and administrators.</li>
                            <li>Implemented the uploading of video and images to an extenal library.</li>
                            <li>Implemented google auth.</li>
                            <li>Utilized NestJS and TypeScript for seamless development.</li>
                        </ul>
                    </div>
                </div>
                <div className='proj-txtx'>
                    <a href="https://github.com/Taiwola/LMS-PORTAL" target='_blank'>Learn More</a>
                </div>
            </div>
        </Col>
    )
}
