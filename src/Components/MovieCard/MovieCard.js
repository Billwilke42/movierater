import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ( { movie, handleClick } ) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div 
        onClick={e => handleClick(e)}
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
    </Link>
  )
}

export default MovieCard