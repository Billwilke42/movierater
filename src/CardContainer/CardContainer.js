import React from 'react';
import './CardContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const CardContainer = ({ movies }) => {
  // eslint-disable-next-line array-callback-return
  const allMovies = movies.map(movie => {
    if (movie.Poster !== "N/A" && movie.Type === 'movie') {
      return (
        <MovieCard movie={movie}/>
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