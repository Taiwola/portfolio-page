import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard({ title, highlights, link }) {
    return (
        <Col sm={10} md={6} lg={5} className="mx-auto d-flex">
            <div className='proj-imgbx improved-card'>
                <div className='project_card'>
                    <div className="card-header-gradient">
                        <span role="img" aria-label="project" className="project-emoji">🚀</span>
                        <h2>{title}</h2>
                    </div>
                    <hr className="card-divider" />
                    <div className="code_highlight">
                        <h3>Key Code Contributions:</h3>
                        <ul>
                            {highlights.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='proj-txtx'>
                    <a href={link.url} rel="noreferrer" target='_blank' className="project-link-btn">{link.label}</a>
                </div>
            </div>
        </Col>
    )
}