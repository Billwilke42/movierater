import React from 'react';
import './CardContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const CardContainer = ({ movies, handleClick }) => {
  let allMovies;
  if(movies) {
    // eslint-disable-next-line array-callback-return
    allMovies = movies.map(movie => {
    if (movie.Poster !== "N/A" && movie.Type === 'movie') {
      return (
        <MovieCard 
          handleClick={handleClick} 
          movie={movie}
        />
      )
    } 
  })}
  return (
    <section className='card-container'>
      {allMovies ? allMovies : 
        <p className='diff-search-msg'>
          Try a different search, please try to be precise.
        </p>}
    </section>
  )
}

export default CardContainer;