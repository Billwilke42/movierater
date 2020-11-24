import React, { useState } from 'react';
import './Search.css'
import { Link } from 'react-router-dom'

const Search = ({ searchMovies }) => {
  const [searchInput, setSearchInput ] = useState('')

  return (
    <section className='search'>
      <input type='text' onChange={e => setSearchInput(e.target.value)} placeholder='Search by movie title...'></input>
      <Link to={`/search/${searchInput}`}>
        <button type='submit' onClick={e => searchMovies(searchInput)}>Search</button>
      </Link>
    </section>
  )
}

export default Search;