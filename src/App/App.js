import React, { useEffect, useState } from 'react'
import './App.css';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import HomeSearchModel from '../HomeSearchModel/HomeSearchModal'
import { getMovies } from '../apiCall'
import { Switch, Route } from 'react-router-dom'

function App() {
  const [allMovies, setAllMovies ] = useState([])
  const [hasErrored, setHasErrored] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const searchAllMovies = async (searchValue) => {
    setIsLoading(true)
    try {
      const data = await getMovies(searchValue)
      if(data) {
        setAllMovies(data.Search)
        setIsSearching(true)
        return setIsLoading(false)
      }
    } catch(error) {
      setHasErrored(error.toString())
    }
  }

  return (
    <main className='App'>
      <Switch>
        <Route path='/search/:searchValue'>
          <Header searchMovies={searchAllMovies}/>
          <CardContainer movies={allMovies}/>
        </Route>
        <Route path='/'>
          <HomeSearchModel searchMovies={searchAllMovies} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
