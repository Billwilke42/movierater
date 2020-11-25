import React from 'react'
import './Header.css'
import Search from '../Search/Search'
import FilmIcon from '../../assets/movie.svg'

const Header = ({ searchMovies }) => {
  return (
    <header>
      <h2 className='header-app-name'>
        <img 
            src={FilmIcon} 
            alt='film-ico' 
            className='film-icon'
          />Movie Rater</h2>
      <Search searchMovies={searchMovies}/>
    </header>
  )
}

export default Header
