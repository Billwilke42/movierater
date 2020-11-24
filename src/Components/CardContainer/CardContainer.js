import React from 'react';
import './CardContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const CardContainer = ({ movies, handleClick }) => {
  // eslint-disable-next-line array-callback-return
  const allMovies = movies.map(movie => {
    if (movie.Poster !== "N/A" && movie.Type === 'movie') {
      return (
        <MovieCard 
          handleClick={handleClick} 
          movie={movie}
        />
      )
    }
  })
  return (
    <section className='card-container'>
      {allMovies}
    </section>
  )
}

export default CardContainer;