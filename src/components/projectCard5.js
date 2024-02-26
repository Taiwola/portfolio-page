import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard5() {
    return (
        <Col sm={5} md={4} className="mx-auto d-flex">
            <div className='proj-imgbx'>
                <div className='project_card'>
                    <h2>Hotel Management Frontend</h2>
                    <div class="code_highlight">
                        <h3>Key Code Contributions:</h3>
                        <ul>
                            <li>Implemented login and registration using use-hook-form</li>
                            <li>Made use of useContext to make queries and request to the backend</li>
                            <li>Implemented client-side routing using libraries such as React Router to enable navigation between different views and pages within the application.</li>
                            <li>Implemented form validation and error handling to provide feedback to users and ensure data integrity when submitting forms, enhancing user experience and reducing errors.</li>
                        </ul>
                    </div>
                </div>
                <div className='proj-txtx'>
                    <a href="https://github.com/Taiwola/hotel-booking-frontend" rel="noreferrer" target='_blank'>Learn More</a>
                </div>
            </div>
        </Col>
    )
}
