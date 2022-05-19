import React, {useState} from 'react'
import DestinationNav from '../Components/DestinationNav';
import '../css/dest.css'
import Moon from './DestonationPages/Moon';


export default function Destonation() {
  const [currentPage, setCurrentPage] = useState('Moon');

  const renderPage = () => {
    if (currentPage === 'Moon') {
      return <Moon />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className='destBackGround' id='Destonation'>
       <div>
       <DestinationNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
</div>

    </div>
  )
}
