import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard() {
    return (
        <Col sm={5} md={4} className="mx-auto d-flex">
            <div className='proj-imgbx'>
                <div className='project_card'>
                    <h2>Yemsay Real Estate Project</h2>
                    <div class="code_highlight">
                        <h3>Key Code Contributions:</h3>
                        <ul>
                            <li>Implemented JWT authentication.</li>
                            <li>Performed CRUD operations.</li>
                            <li>Developed complex query functions.</li>
                            <li>Utilized NestJS and TypeScript for seamless development.</li>
                        </ul>
                    </div>
                </div>
                <div className='proj-txtx'>
                    <a href="https://github.com/Taiwola/yemsats-V2" target='_blank'>Learn More</a>
                </div>
            </div>
        </Col>
    )
}
