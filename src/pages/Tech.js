import React, {useState} from 'react'
import TechNav from "../Components/TechNav"
import '../css/tech/tech.css'
import Vehical from "./TechPages/Vehical"

export default function Crew() {
  const [currentPage, setCurrentPage] = useState('');

  const renderPage = () => {
    if (currentPage === '') {
      return <Vehical />;
    }
    // if (currentPage === 'Mark') {
    //   return <Mark />;
    // }
    // if (currentPage === 'Victor') {
    //   return <Victor />;
    // }
    // if (currentPage === 'Anousheh') {
    //   return <Anousheh />;
    // }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className='techBackGround' id='Tech'>
       <div>
       <TechNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
</div>

    </div>
  )
}