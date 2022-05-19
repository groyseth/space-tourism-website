import React from 'react';
import "../css/home.css"
import { Nav, Navbar, Container } from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className='navMain' >
      <Container>

        <Nav className="navHome">
          <div className='nav'>
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange('Home')}

              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              HOME
            </Nav.Link>
          </div >
          <div className='nav'>
            <Nav.Link
              href="#Destonation"

              onClick={() => handlePageChange('Destonation')}
              className={currentPage === 'Destonation' ? 'nav-link active' : 'nav-link'}
            >
              DESTONATION
            </Nav.Link>

          </div>



        </Nav>

      </Container>
    </Navbar>


  );
}

export default NavTabs;

{/* <nav className='navMain'>
    <ol className='navHome'>
      <Nav.Link onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href='#home'> 00 Home</Nav.Link>
      <Nav.Link onClick={() => handlePageChange('Destonation')} className={currentPage === 'Destonation' ? 'nav-link active' : 'nav-link'} href='#Destonation'>01 Destination</Nav.Link>
      <li>02 Crew</li>
      <li>03 Technology</li>
    </ol>
  </nav> */}