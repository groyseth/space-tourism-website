import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

export default function HomeNav() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">00 Home</Nav.Link>
      <Nav.Link href="#features">01 Destination</Nav.Link>
      <Nav.Link href="#pricing">02 Crew</Nav.Link>
      <Nav.Link href="#pricing">03 Technology</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

