import React from 'react';
import './CardContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const CardContainer = ({ movies, handleClick }) => {
  // eslint-disable-next-line array-callback-return
  let allMovies;
  if(movies) {
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
      {allMovies ? allMovies : <p>Try a different search, try to be precise</p>}
    </section>
  )
}

export default CardContainer;