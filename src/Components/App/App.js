import React, { useEffect, useState } from 'react'
import './App.css';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import HomeSearchModel from '../HomeSearchModel/HomeSearchModal'
import { getMovies } from '../../apiCalls/getMovies'
import { getMovieDetails } from '../../apiCalls/getMovieDetails'
import { Switch, Route } from 'react-router-dom'
import MoviePage from '../MoviePage/MoviePage';

const App = () => {
  const [allMovies, setAllMovies ] = useState([])
  const [movieDetails, setMovieDetails ] = useState({})
  const [hasErrored, setHasErrored] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async (event) => {
    const imdbID = event.target.id;
    await getMovieInfo(imdbID)
  }

  const getMovieInfo = async (imdbID) => {
    setIsLoading(true)
    try {
      const data = await getMovieDetails(imdbID)
      if(data) {
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
        <Route path='/movie/:imdbID'>
          <Header searchMovies={searchAllMovies} />
          {isLoading ? loading() :
            <MoviePage 
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
