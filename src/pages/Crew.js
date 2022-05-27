import React, {useState} from 'react'
import CrewNav from "../Components/CrewNav"
import '../css/crew/crew.scss'
import Douglas from './CrewPages/Douglas';
import Mark from './CrewPages/Mark';
import Victor from './CrewPages/Victor';
import Anousheh from "./CrewPages/Anousheh"
export default function Crew() {
  const [currentPage, setCurrentPage] = useState('Douglas');

  const renderPage = () => {
    if (currentPage === 'Douglas') {
      return <Douglas />;
    }
    if (currentPage === 'Mark') {
      return <Mark />;
    }
    if (currentPage === 'Victor') {
      return <Victor />;
    }
    if (currentPage === 'Anousheh') {
      return <Anousheh />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className='crewBackGround' id='Crew'>
       <div>
       <CrewNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
</div>

    </div>
  )
}