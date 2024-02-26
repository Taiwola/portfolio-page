import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard3() {
    return (
        <Col sm={5} md={4} className="mx-auto d-flex">
            <div className='proj-imgbx'>
                <div className='project_card'>
                    <h2>A Mini-Transaction-App</h2>
                    <div class="code_highlight">
                        <h3>Key Code Contributions:</h3>
                        <ul>
                            <li>Implemented secure JWT-based authentication using NestJS and TypeScript.</li>
                            <li>Supported diverse user roles, catering to users, their accounts, and administrators.</li>
                            <li>Implemented transactions sessions using mongo session.</li>
                            <li>Implemented transactions like deposit, withdrawal and between two accounts.</li>
                            <li>Implemented robust error handling mechanisms to ensure graceful degradation in case of unexpected failures.</li>
                            <li>Implemented data validation and sanitization techniques to prevent injection attacks and ensure data integrity.</li>
                            <li>Implemented logging and monitoring functionalities to track system events, detect anomalies, and facilitate troubleshooting.</li>
                            <li>Designed and implemented RESTful APIs adhering to best practices for routing, request handling, and response formatting.</li>
                            <li>Implemented filtering functionalities for transaction history to enhance user experience and performance.</li>
                        </ul>
                    </div>
                </div>
                <div className='proj-txtx'>
                    <a href="https://github.com/Taiwola/learnly-transaction-app" rel="noreferrer" target='_blank'>Learn More</a>
                </div>
            </div>
        </Col>
    )
}
