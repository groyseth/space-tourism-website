import React, {useState} from 'react';
import "../css/home.scss"
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function MobileMenu({ currentPage, handlePageChange }) {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);


  return (
    <Navbar >
    <Container className='mobileMenu'>
    
    

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

        <div className='nav' onClick={() => {}}>
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
  )
}
