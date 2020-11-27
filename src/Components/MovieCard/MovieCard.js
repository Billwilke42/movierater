import React from 'react';
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ( { movie, handleClick } ) => {
  return (
    <Link 
      to={`/movie/${movie.imdbID}`}
      style={{textDecoration: 'none'}}>
      <div 
        onClick={e => handleClick(e)}
        className='movie-card'>
          <img 
            className='movie-pic'
            id={movie.imdbID}
            alt={movie.Title}
            src={movie.Poster}
          />
      </div>
    </Link>
  )
}

export default MovieCard