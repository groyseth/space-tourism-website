import React, {useState} from 'react'
import CrewNav from "../Components/CrewNav"
import '../css/crew.css'
import Douglas from './CrewPages/Douglas';

export default function Crew() {
  const [currentPage, setCurrentPage] = useState('Douglas');

  const renderPage = () => {
    if (currentPage === 'Douglas') {
      return <Douglas />;
    }
//     if (currentPage === '') {
//       return < />;
//     }
//     if (currentPage === '') {
//       return < />;
//     }
//     if (currentPage === '') {
//       return < />;
//     }
    
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