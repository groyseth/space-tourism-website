import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import "../css/tech/techNav.css"
export default function DestinationNav({ currentPage, handlePageChange }) {
  return (
    <Navbar className='' >
    <Container>

      <Nav className="techNav">
        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('Douglas')}

            className={currentPage === 'Douglas' ? 'nav-link techActive' : 'nav-link'}
          >
          <div className='techCircle'><h1>1</h1></div>
          </Nav.Link>
        </div>

        
        
       



      </Nav>

    </Container>
  </Navbar>
  )
}
