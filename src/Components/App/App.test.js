import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitFor, fireEvent, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { getMovies } from '../../apiCalls/getMovies'
import { getRating } from '../../apiCalls/getRating'
import { getMovieDetails } from '../../apiCalls/getMovieDetails'
import { addRating } from '../../apiCalls/addRating'
jest.mock('../../apiCalls/getMovies')
jest.mock('../../apiCalls/getRating')
jest.mock('../../apiCalls/getMovieDetails')
jest.mock('../../apiCalls/addRating')

// getMovies.mockResolvedValue([
//   {
//     Title: "The Matrix",
//     Year: "1999",
//     imdbID: "tt0133093",
//     Type: "movie",
//     Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
//   }
// ])

// getRating.mockResolvedValue([{
//   imdb_id: "tt0133093",
//   thumbs_up: 7,
//   thumbs_down: 3,
//   title: 'The Matrix'
// }])

// getMovieDetails.mockResolvedValue({
//   Title: "The Matrix",
//   Year: "1999",
//   Rated: "R",
//   Released: "31 Mar 1999",
//   Runtime: "136 min",
//   Genre:"Action, Sci-Fi",
//   Director:"Lana Wachowski, Lilly Wachowski",
//   Writer:"Lilly Wachowski, Lana Wachowski",
//   Actors:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
//   Plot:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
//   Language:"English",
//   Country:"USA",
//   Awards:"Won 4 Oscars. Another 37 wins & 51 nominations.",
//   Poster:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   Metascore:"73",
//   imdbRating:"8.7",
//   imdbVotes:"1,647,373",
//   imdbID:"tt0133093",
//   Type:"movie"
// })

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render the home model', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>);

    const appName = getByText('Movie Rater')
    const input = getByPlaceholderText('Search by movie title...')
    const button = getByRole('button', {value: 'submit'})

    expect(appName).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  // it('should allow you to search for a movie', async () => {
  //   getMovies.mockResolvedValueOnce([
  //     {
  //       Title: "The Matrix",
  //       Year: "1999",
  //       imdbID: "tt0133093",
  //       Type: "movie",
  //       Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  //     }
  //   ])
  //   const { getByPlaceholderText, getByRole, getByText, getByTestId } = render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>);


// const appName = getByText('Movie Rater')
// const input = getByPlaceholderText('Search by movie title...')
// const button = getByTestId('search-btn')

// fireEvent.change(input, {target: {value: 'the matrix'}})
// fireEvent.click(button)
    
//     const year = await waitFor(() => getByText('1999'))
    // const movie = getByRole('img', {value: 'The Matrix'})

    // expect(movie).toBeInTheDocument()

  // it('should allow you to click on a movie to get more details about it', async () => {
  //   const { getByText, getByPlaceholderText, getByRole, getByTestId } = render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>);
  //   const input = getByPlaceholderText('Search by movie title...')
  //   const button = getByRole('button', {value: {type: 'submit'}})

  //   fireEvent.change(input, {value: 'the matrix'})
  //   fireEvent.click(button)
    // const movie = getByRole('img', {value: 'The sams'})
    // expect(movie).toBeInTheDocument()
    // fireEvent.click(movie)

  //   const year = await waitFor(() => getByText('1999'))
  // })
})