import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import "../css/tech/techNav.scss"
export default function DestinationNav({ currentPage, handlePageChange }) {
  return (
    <Navbar className='' >
    <Container>

      <Nav className="techNav">
        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('Vehical')}

            className={currentPage === 'Vehical' ? 'nav-link techActive' : 'nav-link'}
          >
          <div className='techCircle '><h1>1</h1></div>
          </Nav.Link>
        </div>

        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('SpacePort')}

            className={currentPage === 'SpacePort' ? 'nav-link techActive' : 'nav-link'}
          >
          <div className='techCircle '><h1>2</h1></div>
          </Nav.Link>
        </div>

        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('SpaceCap')}

            className={currentPage === 'SpaceCap' ? 'nav-link techActive' : 'nav-link'}
          >
          <div className='techCircle '><h1>3</h1></div>
          </Nav.Link>
        </div>
        
        
       



      </Nav>

    </Container>
  </Navbar>
  )
}
