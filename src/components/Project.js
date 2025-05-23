import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png"

const tabs = [
    {
        key: "first",
        label: "Tab 1",
        title: "Thirenow Remote Job Platform",
        highlights: [
            "Redesigned the landing page for improved user engagement and modern aesthetics.",
            "Developed login and registration pages with enhanced user experience and security.",
            "Built the dashboard overview page to provide users with a comprehensive summary of their activities.",
            "Implemented an AI-powered chat box for instant user support and guidance.",
            "Integrated an AI resume checker to help users optimize their resumes for job applications.",
            "Created settings and profile pages for personalized user management and customization."
        ],
        link: {
            url: "https://thirenowland.netlify.app",
            label: "Visit Web"
        }
    },
    {
        key: "second",
        label: "Tab 2",
        title: "TDA Retail Store",
        highlights: [
            "Built the landing page and dashboard using Next.js best practices.",
            "Implemented Paystack payment gateway for secure and seamless transactions.",
            "Utilized Next.js Server Actions for efficient API calls and server-side logic.",
            "Applied modular and reusable component architecture for maintainability.",
            "Ensured responsive design and optimized performance across devices."
        ],
        link: {
            url: "https://www.tdaretail.com/",
            label: "Visit Web"
        }
    },
    {
        key: "third",
        label: "Tab 3",
        title: "Expense Tracker Application",
        highlights: [
            "Developed both the backend and frontend for a full-stack expense tracker.",
            "Implemented JWT authentication on both frontend and backend for secure user sessions.",
            "Designed and built a user-friendly dashboard for tracking expenses and visualizing data.",
            "Created a modern, responsive landing page to introduce the application.",
            "Ensured seamless integration between frontend and backend APIs."
        ],
        link: {
            url: "https://expense-tracker-frontend-inky.vercel.app/",
            label: "Visit Web"
        }
    },
    {
        key: "fourth",
        label: "Tab 4",
        title: "Kemora Landing Page",
        highlights: [
            "Designed and developed a clean, modern landing page.",
            "Utilized attractive and harmonious color patterns for strong visual appeal.",
            "Ensured responsive layout for seamless experience across devices.",
            "Optimized for fast load times and accessibility.",
            "Implemented modular, reusable components for maintainability."
        ],
        link: {
            url: "https://kemora.vercel.app/",
            label: "Visit Web"
        }
    },

    {
        key: "fifth",
        label: "Tab 5",
        title: "Unsplash Photo Search App",
        highlights: [
            "Built with Next.js for fast, modern frontend development.",
            "Integrated Unsplash API to enable simple and effective photo search functionality.",
            "Utilized react-query for efficient and optimized API data fetching and caching.",
            "Designed a clean, responsive UI for seamless user experience.",
            "Implemented error handling and loading states for robust UX."
        ],
        link: {
            url: "https://photo-search-dusky.vercel.app/",
            label: "Visit Web"
        }
    },
    {
        key: "sixth",
        label: "Tab 6",
        title: "Hotel Management Frontend",
        highlights: [
            "Implemented login and registration using use-hook-form.",
            "Made use of useContext to make queries and request to the backend.",
            "Implemented client-side routing using libraries such as React Router to enable navigation between different views and pages within the application.",
            "ented form validation and error handling to provide feedback to users and ensure data integrity when submitting forms, enhancing user experience and reducing errors."
        ],
        link: { url: "https://github.com/Taiwola/hotel-booking-frontend", label: "Learn More" }
    },
    {
        key: "seventh",
        label: "Tab 7",
        title: "Yemsay Real Estate Project",
        highlights: [
            "Implemented JWT authentication.",
            "Performed CRUD operations.",
            "Developed complex query functions.",
            "Utilized NestJS and TypeScript for seamless development."
        ],
        link: { url: "https://github.com/Taiwola/yemsats-V2", label: "Learn More" }
    },
    {
        key: "eighth",
        label: "Tab 8",
        title: "A Mini-Transaction-App",
        highlights: [
            "Implemented secure JWT-based authentication using NestJS and TypeScript.",
            "Supported diverse user roles, catering to users, their accounts, and administrators.",
            "Implemented transactions sessions using mongo session.",
            "Implemented transactions like deposit, withdrawal and between two accounts.",
            "Implemented robust error handling mechanisms to ensure graceful degradation in case of unexpected failures.",
            "Implemented data validation and sanitization techniques to prevent injection attacks and ensure data integrity.",
            "Implemented logging and monitoring functionalities to track system events, detect anomalies, and facilitate troubleshooting.",
            "Designed and implemented RESTful APIs adhering to best practices for routing, request handling, and response formatting.",
            "Implemented filtering functionalities for transaction history to enhance user experience and performance."
        ],
        link: {
            url: "https://github.com/Taiwola/learnly-transaction-app",
            label: "Learn More"
        }
    },
    {
        key: "ninth",
        label: "Tab 9",
        title: "Learning Management System",
        highlights: [
            "Implemented secure JWT-based authentication using NestJS and TypeScript.",
            "Supported diverse user roles, catering to students, instructors, and administrators.",
            "Implemented the uploading of video and images to an external library.",
            "Implemented google auth.",
            "Utilized NestJS and TypeScript for seamless development."
        ],
        link: {
            url: "https://github.com/Taiwola/LMS-PORTAL",
            label: "Learn More"
        }
    },
];

export default function Project() {
    return (
        <section className='project' id="projects" style={{ position: 'relative', padding: '60px 0', background: '#151515' }}>
            <Container>
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-center mb-2" style={{ fontWeight: 700, letterSpacing: 1 }}>Projects</h2>
                        <p className="text-center text-muted mb-4" style={{ maxWidth: 600, margin: '0 auto' }}>
                            Explore some of the projects I’ve built, ranging from full-stack applications to beautiful landing pages.
                        </p>
                    </Col>
                </Row>
                <Tab.Container id='projects-tab' defaultActiveKey={tabs[0].key}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center project-tabs">
                        {tabs.map(tab => (
                            <Nav.Item key={tab.key}>
                                <Nav.Link eventKey={tab.key} className="project-tab-link">{tab.label}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Tab.Content>
                        {tabs.map(tab => (
                            <Tab.Pane eventKey={tab.key} key={tab.key}>
                                <Row className="justify-content-center">
                                    <ProjectCard
                                        title={tab.title}
                                        highlights={tab.highlights}
                                        link={tab.link}
                                    />
                                </Row>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='img' style={{ position: 'absolute', right: 0, bottom: 0, width: 250, opacity: 0.15, zIndex: 0 }} />
        </section>
    )
}