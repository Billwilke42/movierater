import React, { useEffect, useState } from 'react'
import './App.css';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import HomeSearchModel from '../HomeSearchModel/HomeSearchModal'
import { getMovies } from '../../apiCalls/getMovies'
import { getMovieDetails } from '../../apiCalls/getMovieDetails'
import { getRating } from '../../apiCalls/getRating'
import { addRating } from '../../apiCalls/addRating'
import { Switch, Route } from 'react-router-dom'
import MoviePage from '../MoviePage/MoviePage';

const App = () => {
  const [allMovies, setAllMovies ] = useState([])
  const [movieDetails, setMovieDetails ] = useState({})
  const [movieRating, setMovieRating ] = useState({})
  const [hasErrored, setHasErrored] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (event) => {
    const imdbID = event.target.id;
    await getMovieInfo(imdbID)
  }
  
  const handleRating = async (event, imdbID) => {
    debugger
    const className = event.target.className
    if(className === 'thumbs-up') {
      await giveRating(imdbID, movieRating[0].thumbs_up + 1, movieRating[0].thumbs_down)
    } else {
      await giveRating(imdbID, movieRating[0].thumbs_up, movieRating[0].thumbs_down + 1)
    }
  }

  const giveRating = async (imdbID, thumbsUp, thumbsDown) => {
    debugger
    try {
      const data = await addRating(imdbID, thumbsUp, thumbsDown)
      const newRating = await getRating(imdbID)
      if(data) {
        setMovieRating(newRating)
      }
    } catch(error) {
      setHasErrored(error.toString())
    }
  }

  const getMovieInfo = async (imdb_id) => {
    debugger
    setIsLoading(true)
    try {
      const rating = await getRating(imdb_id)
      const data = await getMovieDetails(imdb_id)
      if(data) {
        setMovieRating(rating)
        setMovieDetails(data)
        return setIsLoading(false)
      }
    } catch(error) {
      setHasErrored(error.toString())
    }
  }

  const searchAllMovies = async (searchValue) => {
    setIsLoading(true)
    try {
      const data = await getMovies(searchValue)
      if(data) {
        setAllMovies(data.Search)
        return setIsLoading(false)
      }
    } catch(error) {
      setHasErrored(error.toString())
    }
  }

  const loading = () => {
    return (
      <p className='animate'>Loading</p>
    )
  }

  return (
    <main className='App'>
      <Switch>
        <Route path='/movie/:imdb_id'>
          <Header searchMovies={searchAllMovies} />
          {isLoading ? loading() :
            <MoviePage
              handleRating={handleRating}
              rating={movieRating} 
              movie={movieDetails} 
            />
          }
        </Route>
        <Route path='/search/:searchValue'>
          <Header searchMovies={searchAllMovies}/>
          {isLoading ? loading() : 
            <CardContainer 
              handleClick={handleClick} 
              movies={allMovies}
            />
          }
        </Route>
        <Route path='/'>
          <HomeSearchModel 
            searchMovies={searchAllMovies} 
          />
        </Route>
      </Switch>
    </main>
  );
}

export default App;