import React from 'react'
import './Header.css'
import Search from '../Search/Search'

const Header = ({ searchMovies }) => {
  return (
    <header>
      <h2>Movie Challenge</h2>
      <Search searchMovies={searchMovies}/>
    </header>
  )
}

export default Header
