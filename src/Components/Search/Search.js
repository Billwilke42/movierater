import React, { useState } from 'react';
import './Search.css'
import { Link } from 'react-router-dom'
import { ReactComponent as SearchIcon }from '../../assets/search.svg'

const Search = ({ searchMovies }) => {
  const [searchInput, setSearchInput ] = useState('')

  return (
    <section className='search'>
      <input 
        type='text' 
        onChange={e => setSearchInput(e.target.value)} 
        placeholder='Search by movie title...'>
      </input>
      <Link to={`/search/${searchInput}`}>
        <button 
          className='search-btn' 
          type='submit'
          data-testid='search-btn'
          onClick={e => searchMovies(searchInput)}>
            <SearchIcon />
        </button>
      </Link>
    </section>
  )
}

export default Search;