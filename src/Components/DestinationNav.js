import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import "../css/destinations/destNav.css"
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
           MOON
          </Nav.Link>
        </div>
        <div className=''>
          <Nav.Link
            href="#Mars"
            onClick={() => handlePageChange('Mars')}

            className={currentPage === 'Mars' ? 'nav-link active' : 'nav-link'}
          >
           MARS
          </Nav.Link>
        </div>
        <div className=''>
          <Nav.Link
            href="#Europa"
            onClick={() => handlePageChange('Europa')}

            className={currentPage === 'Europa' ? 'nav-link active' : 'nav-link'}
          >
           EUROPA
          </Nav.Link>
        </div>
        <div className=''>
          <Nav.Link
            href="#Titan"
            onClick={() => handlePageChange('Titan')}

            className={currentPage === 'Titan' ? 'nav-link active' : 'nav-link'}
          >
           TITAN
          </Nav.Link>
        </div>



      </Nav>

    </Container>
  </Navbar>
  )
}
