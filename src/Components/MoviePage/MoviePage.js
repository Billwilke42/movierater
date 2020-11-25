import React from 'react';
import './MoviePage.css'
import { ReactComponent as ThumbsUp }from '../../assets/thumbs-up-line.svg'
import { ReactComponent as ThumbsDown } from '../../assets/thumbs-down-line.svg'
const MoviePage = ({movie, rating, handleRating}) => {
  return (
    <section className='movie-page'>
        <h1 className='movie-title'>{movie.Title}</h1> 
      <section className='movie-content'>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className='movie-poster-selected'
        />
        <section className='rating-box'>
          <p className='thumbs-up'>
            +{rating[0].thumbs_up}
          </p>
            <button type='submit' className='thumbs-up' onClick={e => handleRating(e, movie.imdbID)}>
              Thumbs up
            </button>
          <p className='thumbs-down'>
            -{rating[0].thumbs_down}
          </p>
            <button type='submit' className='thumbs-down' onClick={e => handleRating(e, movie.imdbID)}>
            Thumbs down
            </button>
        </section>
        <div className='movie-summary'>
          <p className='release-year'>
            Released: {movie.Year}
          </p>
          <p className='synopsis'>
            {movie.Plot}
          </p>
          <p className='rating'>
            Rating: {movie.Rated}
          </p>
          <p className='actors'>
            Starring: {movie.Actors}
          </p>
          <p className='directors'>
            Directed by: {movie.Director}
          </p>
        </div>
      </section>
    </section>
  )
}

export default MoviePage;