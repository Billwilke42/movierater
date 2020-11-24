import React from 'react';
import './MoviePage.css'

const MoviePage = ({movie}) => {
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
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
          </svg>
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