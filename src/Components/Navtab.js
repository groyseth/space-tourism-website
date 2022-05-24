import React, {useState} from 'react';
import "../css/home.css"
import { Nav, Navbar, Container } from 'react-bootstrap';
import hamburgerNav from "../assets/shared/icon-hamburger.svg"
function NavTabs({ currentPage, handlePageChange }) {
 const [menu, setMenu]=useState(false);


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

          <div className='nav'>
            <Nav.Link
              href="#Crew"

              onClick={() => handlePageChange('Crew')}
              className={currentPage === 'Crew' ? 'nav-link active' : 'nav-link'}
            >
              CREW
            </Nav.Link>
          </div>

          <div className='nav'>
            <Nav.Link
              href="#Tech"

              onClick={() => handlePageChange('Tech')}
              className={currentPage === 'Tech' ? 'nav-link active' : 'nav-link'}
            >
              TECHNOLOGY
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