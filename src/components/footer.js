import React from 'react'
import { Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaGithub } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className='footer'>
            <Row className="align-item-center">
                <Col sm={6}>
                    <h2>Seun olanitori</h2>
                </Col>

                <Col sm={6} className='text-center text-sr-end'>
                    <div className='social-icon'>
                        <a href='https://github.com/Taiwola'>
                            <FaGithub className='icon' />
                        </a>
                    </div>
                    <p>&copy; 2024 WebDecoded. All rights reserved. | Web design by Design WebDecoded.</p>
                </Col>
            </Row>
        </footer>
    )
}
