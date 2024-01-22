import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";


export function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['web developer', 'web designer', 'backend developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{`Hi i'm seun `} <span>{text}</span></h1>
                        <p>As a web development engineer, my focus centers on backend architecture and performance optimization. I thrive on navigating the complexities of backend systems, whether it's building robust server-side solutions for specific examples or fine-tuning performance to ensure seamless user experiences. In shaping the digital world, I play a pivotal role, contributing one efficient line of code at a time. </p>
                        <hr />
                        <div>
                            <h2>Get in touch</h2>
                            <Row xs={1} md={2} xl={2}>
                                <Col >
                                    <p className="justify"><span className="highlighted-text">Full name:</span> Oluwaseun Olanitori</p>
                                </Col>
                                <Col>
                                    <p className="justify"><span className="highlighted-text">Email: </span>seunolanitori@gmail.com</p>
                                </Col>
                                <Col>
                                    <p className="justify"><span className="highlighted-text">Phone: </span> 08105765035</p>
                                </Col>
                                <Col>
                                    <p className="justify"><span className="highlighted-text">Country: </span> Nigeria</p>
                                </Col>
                            </Row>
                            <a href="https://drive.google.com/file/d/1VFwNzkd1ILVRC5u84O3L98wl6RAis8Pr/view?usp=drive_link" className="custom-link" target="_blank">View Cv</a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 