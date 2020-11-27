import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MoviePage from './MoviePage';
import { MemoryRouter } from 'react-router-dom';

const mockMovie = {
    Title: "The Matrix",
    Year: "1999",
    Rated: "R",
    Released: "31 Mar 1999",
    Runtime: "136 min",
    Genre:"Action, Sci-Fi",
    Director:"Lana Wachowski, Lilly Wachowski",
    Writer:"Lilly Wachowski, Lana Wachowski",
    Actors:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    Plot:"This would be the synopsis",
    Language:"English",
    Country:"USA",
    Awards:"Won 4 Oscars. Another 37 wins & 51 nominations.",
    Poster:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Metascore:"73",
    imdbRating:"8.7",
    imdbVotes:"1,647,373",
    imdbID:"tt0133093",
    Type:"movie"
  }

const mockRating = [{
    imdb_id: "tt0133093",
    thumbs_up: 7,
    thumbs_down: 3,
    title: 'The Matrix'
  }]

const mockHandleRating = jest.fn()

describe('MoviePage', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <MoviePage rating={mockRating} movie={mockMovie}/>
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render the movies details', () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <MoviePage rating={mockRating} movie={mockMovie} />
      </MemoryRouter>
    )
    
    const image = getByAltText('The Matrix')
    const title = getByText('The Matrix')
    const synopsis = getByText('This would be the synopsis')
    const year = getByText('1999')
    const director = getByText('Lana Wachowski, Lilly Wachowski')
    
    expect(image).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(synopsis).toBeInTheDocument()
    expect(year).toBeInTheDocument()
    expect(director).toBeInTheDocument()
  })

  it('should allow a user to add a rating', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <MoviePage 
          handleRating={mockHandleRating} 
          rating={mockRating} 
          movie={mockMovie} />
      </MemoryRouter>
    )
    
    const thumbsUpButton = getByAltText('thumb-up')

    fireEvent.click(thumbsUpButton)

    expect(mockHandleRating).toHaveBeenCalledTimes(1)
  })
})