import React from 'react';
import './MovieCard.css'

const MovieCard = ( { movie } ) => {
  return (
    <div 
      className='movie-card'
      key={movie.imdbID}>
      <img className='movie-pic'
        id={movie.imdbID}
        alt={movie.Title}
        src={movie.Poster}
        key={movie.imdbID}
      />
      <h5>{movie.Title}</h5>
    </div>
  )
}

export default MovieCard