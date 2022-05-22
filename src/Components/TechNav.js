import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import "../css/tech/techNav.css"
export default function DestinationNav({ currentPage, handlePageChange }) {
  return (
    <Navbar className='' >
    <Container>

      <Nav className="crewNav">
        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('Douglas')}

            className={currentPage === 'Douglas' ? 'nav-link cirlceActive' : 'nav-link'}
          >
          <div className='circleNav'></div>
          </Nav.Link>
        </div>

        
        
       



      </Nav>

    </Container>
  </Navbar>
  )
}
