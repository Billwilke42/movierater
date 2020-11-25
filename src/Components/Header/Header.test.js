import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

const mockSearchMovies = jest.fn()

describe('Header', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Header />
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render the app title and search', () => {
    const { getByTestId, getByText, getByPlaceholderText} = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const appName = getByText('Movie Rater')
    const input = getByPlaceholderText('Search by movie title...')
    const button = getByTestId('search-btn')

    expect(appName).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should call the search function when button is clicked', () => {
    const { getByTestId, getByText, getByPlaceholderText} = render(
      <MemoryRouter>
        <Header searchMovies={mockSearchMovies}/>
      </MemoryRouter>
    )
    
    const button = getByTestId('search-btn')

    fireEvent.click(button)

    expect(mockSearchMovies).toBeCalledTimes(1)
  })
})