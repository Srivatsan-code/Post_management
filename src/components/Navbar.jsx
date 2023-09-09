import React from 'react'
import Searchbar from './Searchbar'
const Navbar = ({searchTerm,setSearchTerm,toggle,settoggle}) => {
  return (
    <div className='navbar'>
     <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  )
}

export default Navbar
