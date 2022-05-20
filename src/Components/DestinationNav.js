import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import "../css/destNav.css"
export default function DestinationNav({ currentPage, handlePageChange }) {
  return (
    <Navbar className='' >
    <Container>

      <Nav className="destNav">
        <div className=''>
          <Nav.Link
            href="#Moon"
            onClick={() => handlePageChange('Moon')}

            className={currentPage === 'Moon' ? 'nav-link active' : 'nav-link'}
          >
           <h1>MOON</h1>
          </Nav.Link>
        </div>



      </Nav>

    </Container>
  </Navbar>
  )
}
