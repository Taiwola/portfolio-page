import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard4() {
    return (
        <Col sm={5} md={4} className="mx-auto d-flex">
            <div className='proj-imgbx'>
                <div className='project_card'>
                    <h2>Hotel Management Backend</h2>
                    <div class="code_highlight">
                        <h3>Key Code Contributions:</h3>
                        <ul>
                            <li>Implemented secure JWT-based authentication using TypeScript.</li>
                            <li>Implemented REST API for the routes</li>
                            <li>Implemented cloudinary for image upload</li>
                            <li>Implemented filtering, pagination and sorting</li>
                            <li>Implemented middleware for request validation and sanitization to prevent injection attacks and ensure data integrity.</li>
                        </ul>
                    </div>
                </div>
                <div className='proj-txtx'>
                    <a href="https://github.com/Taiwola/hotel-booking-backend" rel="noreferrer" target='_blank'>Learn More</a>
                </div>
            </div>
        </Col>
    )
}
