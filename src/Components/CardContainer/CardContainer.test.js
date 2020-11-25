import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitFor, fireEvent, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardContainer from './CardContainer';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';

const mockMovies = [
      {
        Title: "The Matrix",
        Year: "1999",
        imdbID: "tt0133093",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        Title: "The Matrix Reloaded",
        Year: "2003",
        imdbID: "tt0234215",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      }
    ]

const mockHandleClick = jest.fn()

describe('CardContainer', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <CardContainer />
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render cards', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <CardContainer movies={mockMovies} handleClick={mockHandleClick}/>
      </MemoryRouter>
    )

    const title = getByAltText('The Matrix')
    const title2 = getByAltText('The Matrix Reloaded')

    expect(title).toBeInTheDocument()
    expect(title2).toBeInTheDocument()
  })

  it('should call handleClick when a movie is clicked', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <CardContainer movies={mockMovies} handleClick={mockHandleClick}/>
      </MemoryRouter>
    )

    const title = getByAltText('The Matrix')
    expect(title).toBeInTheDocument()
    
    fireEvent.click(title)

    expect(mockHandleClick).toBeCalledTimes(1)
  })

  it('should tell a user to search again if nothing is returned', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CardContainer handleClick={mockHandleClick}/>
      </MemoryRouter>
    )

    const message = getByText('Try a different search, please try to be precise.')
    expect(message).toBeInTheDocument()
  })
})