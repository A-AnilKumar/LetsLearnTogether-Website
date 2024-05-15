import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Card from 'react-bootstrap/Card';

import Git from './images/Git.png';
import Linux from './images/Linux.png';
import Login from './Login';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Let's Learn Together</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Git Commands</Nav.Link>
                        <Nav.Link href='#action3'>Linux Commands</Nav.Link>
                        <NavDropdown title="Future Tutorials" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Java</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Python
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                DevOps
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            <AccountButton />
        </Navbar>
    );
}


const AccountButton = () => {
    return (
        <Button onClick={login()} variant="outline-primary" href="/account">
            Account
        </Button>
    );
};

const login = () => {
    return (
        <>
            <Login />
        </>

    );
}




// Generalized Reusable Card Component
const CommandCard = ({ imageSrc, title, description, links }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Body>
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    <Card.Link href={link.href}>{link.text}</Card.Link>
                    <br />
                </React.Fragment>
            ))}
        </Card.Body>
    </Card>
);

const Homepage = () => {
    // Git Card Data
    const gitCardData = {
        imageSrc: Git, // Adjust the path to your image
        title: 'Git Commands',
        description:
            'Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing ...',
        links: [
            { href: '#', text: 'What is Git ??' },
            { href: '#', text: 'Git Commands' },
        ],
    };

    // Linux Card Data
    const linuxCardData = {
        imageSrc: Linux, // Adjust the path to your image
        title: 'Linux Commands',
        description:
            'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.',
        links: [
            { href: '#', text: 'What is Linux ??' },
            { href: '#', text: 'Linux Terminal Commands' },
        ],
    };



    return (
        <>
            <NavScrollExample />,
            <Container>
                <Row>
                    <Col sm={16} md={4}>
                        <CommandCard {...gitCardData} />
                    </Col>
                    <Col sm={16} md={4}>
                        <CommandCard {...linuxCardData} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Homepage;