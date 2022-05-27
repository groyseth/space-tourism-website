import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import "../css/crew/crewNav.scss"
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

        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('Mark')}

            className={currentPage === 'Mark' ? 'nav-link cirlceActive' : 'nav-link'}
          >
          <div className='circleNav'></div>
          </Nav.Link>
        </div>

        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('Victor')}

            className={currentPage === 'Victor' ? 'nav-link cirlceActive' : 'nav-link'}
          >
          <div className='circleNav'></div>
          </Nav.Link>
        </div>

        <div className=''>
          <Nav.Link
            href="#"
            onClick={() => handlePageChange('Anousheh')}

            className={currentPage === 'Anousheh' ? 'nav-link cirlceActive' : 'nav-link'}
          >
          <div className='circleNav'></div>
          </Nav.Link>
        </div>
        
       



      </Nav>

    </Container>
  </Navbar>
  )
}
