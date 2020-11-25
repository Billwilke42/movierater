import React from 'react';
import './MoviePage.css'
import ThumbsUp from '../../assets/thumbs-up-line.svg'
import ThumbsDown  from '../../assets/thumbs-down-line.svg'
const MoviePage = ({movie, rating, handleRating}) => {
  return (
    <section className='movie-page'>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className='movie-poster-selected'
        />
      <section className='movie-content'>
        <h1 className='movie-title'>{movie.Title}</h1>
        <p className='instruction'>
          Click a thumb below to rate the movie!
        </p>
        <section className='rating-box'>
          <p className='thumbs-up-counter'>
            +{rating[0].thumbs_up}
          </p>
            <button type='submit' className='thumbs-up-btn' onClick={e => handleRating(e, movie.imdbID)}>
              <img
                src={ThumbsUp}
                className='thumbs-up'
                alt='thumb-up'
              />
            </button>
            <button type='submit' className='thumbs-down-btn' onClick={e => handleRating(e, movie.imdbID)}>
            <img
                src={ThumbsDown}
                className='thumbs-down'
                alt='thumb-down'
              />
            </button>
          <p className='thumbs-down-counter'>
            -{rating[0].thumbs_down}
          </p>
        </section>
        <div className='movie-summary'>
          <p className='release-year'>
            <b>Released:</b> {movie.Year}
          </p>
          <p className='synopsis'>
            {movie.Plot}
          </p>
          <p className='rating'>
            <b>Rating:</b> {movie.Rated}
          </p>
          <p className='actors'>
            <b>Starring:</b> {movie.Actors}
          </p>
          <p className='directors'>
            <b>Directed by:</b> {movie.Director}
          </p>
        </div>
      </section>
    </section>
  )
}

export default MoviePage;