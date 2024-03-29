import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"

export default function Contact() {
    const initForm = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    };

    const [formDetails, setFormDetails] = useState(initForm);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <section className='contact' id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact us' />
                    </Col>
                    <Col md={6}>
                        <h1>Get in touch</h1>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>

                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>

                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type='submit'>
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}></p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
