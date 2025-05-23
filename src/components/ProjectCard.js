import React from 'react'
import { Col } from 'react-bootstrap'

export default function ProjectCard({ title, highlights, link }) {
    return (
        <Col sm={5} md={4} className="mx-auto d-flex">
            <div className='proj-imgbx'>
                <div className='project_card'>
                    <h2>{title}</h2>
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
                    <a href={link.url} rel="noreferrer" target='_blank'>{link.label}</a>
                    {link.webLink && <a href={link.webLink}>visit web</a>}
                </div>
            </div>
        </Col>
    )
}