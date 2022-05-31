import React, { useState } from 'react';
import "../css/home.scss"
import { Nav, Navbar, Container } from 'react-bootstrap';


function NavTabs({ currentPage, handlePageChange }) {
  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu(true);
  }
  const closeMenu = () => {
    setMenu(false);
  }
  return (
    
    <Navbar className='mobilePos'>
      <div className='mobileMenu' onClick={() => handleMenu()} />
<>
        {menu ? (
          <div className='menuActive'>
            <Nav className="navMobileMain">
              <div className='' onClick={()=>closeMenu()}>
                <Nav.Link
                  href="#home"
                  onClick={() => handlePageChange('Home')}

                  className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                  
                >
               <strong>00</strong> HOME
                </Nav.Link>
              </div >

              <div className='nav' onClick={()=>closeMenu()}>
                <Nav.Link
                  href="#Destonation"

                  onClick={() => handlePageChange('Destonation')}
                  className={currentPage === 'Destonation' ? 'nav-link active' : 'nav-link'}
                >
                 <strong>01</strong> DESTONATION
                </Nav.Link>
              </div>

              <div className='nav' onClick={()=>closeMenu()}>
                <Nav.Link
                  href="#Crew"

                  onClick={() => handlePageChange('Crew')}
                  className={currentPage === 'Crew' ? 'nav-link active' : 'nav-link'}
                >
                <strong>02</strong>  CREW
                </Nav.Link>
              </div>

              <div className='nav' onClick={()=>closeMenu()}>
                <Nav.Link
                  href="#Tech"

                  onClick={() => handlePageChange('Tech')}
                  className={currentPage === 'Tech' ? 'nav-link active' : 'nav-link'}
                >
                <strong>03</strong>  TECHNOLOGY
                </Nav.Link>
              </div>



            </Nav>

          </div>
         
        ) : (<></>)}
   
     </>
     
      <Container className='navMain'>



        <Nav className="navHome">
          <div className='nav'>
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange('Home')}

              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
           <strong className='navNumber'>00</strong> HOME
            </Nav.Link>
          </div >

          <div className='nav'>
            <Nav.Link
              href="#Destonation"

              onClick={() => handlePageChange('Destonation')}
              className={currentPage === 'Destonation' ? 'nav-link active' : 'nav-link'}
            >
            <strong className='navNumber'>01</strong>  DESTONATION
            </Nav.Link>
          </div>

          <div className='nav'>
            <Nav.Link
              href="#Crew"

              onClick={() => handlePageChange('Crew')}
              className={currentPage === 'Crew' ? 'nav-link active' : 'nav-link'}
            >
            <strong className='navNumber'>02</strong>  CREW
            </Nav.Link>
          </div>

          <div className='nav' onClick={() => { }}>
            <Nav.Link
              href="#Tech"

              onClick={() => handlePageChange('Tech')}
              className={currentPage === 'Tech' ? 'nav-link active' : 'nav-link'}
            >
            <strong className='navNumber'>03</strong>  TECHNOLOGY
            </Nav.Link>
          </div>

<div className='logo' />

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