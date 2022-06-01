import React, {useState} from 'react'
import DestinationNav from '../Components/DestinationNav';
import '../css/destinations/dest.scss'
import Moon from './DestonationPages/Moon';
import Mars from './DestonationPages/Mars';
import Europa from './DestonationPages/Europa';
import Titan from './DestonationPages/Titan';

export default function Destonation() {
  const [currentPage, setCurrentPage] = useState('Moon');

  const renderPage = () => {
    if (currentPage === 'Moon') {
      return <Moon />;
    }
    if (currentPage === 'Mars') {
      return <Mars />;
    }
    if (currentPage === 'Europa') {
      return <Europa />;
    }
    if (currentPage === 'Titan') {
      return <Titan />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <body className='destBackGround' id='Destonation'>
       <div>
       <DestinationNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
</div>

    </body>
  )
}
