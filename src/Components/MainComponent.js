import React, {useState} from 'react'
import Home from '../pages/Home';
import Destonation from '../pages/Destonation';
import NavTabs from './Navtab';
import Crew from '../pages/Crew';
export default function MainComponent() {

    const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if(currentPage === 'Destonation'){
    return <Destonation />
    }
    if(currentPage === 'Crew'){
      return <Crew />
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  )
}
