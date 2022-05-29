import React, {useState} from 'react'
import TechNav from "../Components/TechNav"
import '../css/tech/tech.scss'
import Vehical from "./TechPages/Vehical"
import SpacePort from './TechPages/SpacePort'
import SpaceCap from './TechPages/SpaceCap'
export default function Crew() {
  const [currentPage, setCurrentPage] = useState('Vehical');

  const renderPage = () => {
    if (currentPage === 'Vehical') {
      return <Vehical />;
    }
    if (currentPage === 'SpacePort') {
      return <SpacePort />;
    }
    if (currentPage === 'SpaceCap') {
      return <SpaceCap />;
    }
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