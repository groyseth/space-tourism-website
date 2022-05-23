import React, {useState} from 'react';
import "../css/home.css"
import { Nav, Navbar, Container } from 'react-bootstrap';
import hamburger from "../assets/shared/icon-hamburger.svg"
function NavTabs({ currentPage, handlePageChange }) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);


  return (
    <Navbar className='navMain' >
      <Container>
      <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

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