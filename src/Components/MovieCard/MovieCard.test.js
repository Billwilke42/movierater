import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieCard from './MovieCard';
import { MemoryRouter } from 'react-router-dom';

const mockMovie = 
      {
        Title: "The Matrix",
        Year: "1999",
        imdbID: "tt0133093",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      }

const mockHandleClick = jest.fn()

describe('MovieCard', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <MovieCard movie={mockMovie}/>
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render a movie image', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <MovieCard movie={mockMovie} />
      </MemoryRouter>
    )

    const image = getByAltText('The Matrix')

    expect(image).toBeInTheDocument()
  })

  it('should call the handleClick prop when when clicked', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <MovieCard handleClick={mockHandleClick} movie={mockMovie} />
      </MemoryRouter>
    )

    const image = getByAltText('The Matrix')
    expect(image).toBeInTheDocument()

    fireEvent.click(image)

    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})
