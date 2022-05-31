import React, {useState} from 'react'

export default function Exlore({ currentPage, handlePageChange }) {
    const [currentPage, setCurrentPage] = useState('');
    const renderPage = () => {
        
        if(currentPage === 'Destonation'){
        return <Destonation />
        }
    }

  return (
    <div className='cirlceDiv'>
    <h1 className='explore'  >EXPLORE</h1>
  </div>
  )
}
