import React from 'react';
import './HomeSearchModel.css'
import Search from '../Search/Search'
import { ReactComponent as FilmIcon }from '../../assets/movie.svg'

const HomeSearchModel = ({ searchMovies }) => {
  return ( 
      <section className='home-search-model'>
        <h1 className='app-name'>Movie Rater</h1>
        <Search searchMovies={searchMovies} />
        <p className='welcome-inst'>Search for movies across the web and give them a rating!</p>
      </section>
  )
}

export default HomeSearchModel