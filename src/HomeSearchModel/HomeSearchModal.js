import React from 'react';
import './HomeSearchModel.css'
import Search from '../Search/Search'

const HomeSearchModel = ({ searchMovies }) => {
  return ( 
      <section className='home-search-model'>
        <Search searchMovies={searchMovies} />
      </section>
  )
}

export default HomeSearchModel