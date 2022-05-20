import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import "../css/crew.css"
export default function DestinationNav({ currentPage, handlePageChange }) {
  return (
    <Navbar className='' >
    <Container>

      <Nav className="crewNav">
        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('Douglas')}

            className={currentPage === 'Douglas' ? 'nav-link active' : 'nav-link'}
          >
           Douglas
          </Nav.Link>
        </div>
        {/* <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('')}

            className={currentPage === '' ? 'nav-link active' : 'nav-link'}
          >
           
          </Nav.Link>
        </div>
        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('')}

            className={currentPage === '' ? 'nav-link active' : 'nav-link'}
          >
           
          </Nav.Link>
        </div>
        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('')}

            className={currentPage === '' ? 'nav-link active' : 'nav-link'}
          >
           
          </Nav.Link>
        </div> */}



      </Nav>

    </Container>
  </Navbar>
  )
}
