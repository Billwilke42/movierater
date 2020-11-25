import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';
import { MemoryRouter } from 'react-router-dom';

const mockSearchMovies = jest.fn()

describe('Search', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Search />
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render an input and a button', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    const input = getByPlaceholderText('Search by movie title...')
    const searchBtn = getByTestId('search-btn')

    expect(input).toBeInTheDocument()
    expect(searchBtn).toBeInTheDocument()
  })

  it('should execute a search when the button is clicked', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Search searchMovies={mockSearchMovies}/>
      </MemoryRouter>
    )

    const searchBtn = getByTestId('search-btn')
    expect(searchBtn).toBeInTheDocument()

    fireEvent.click(searchBtn)

    expect(mockSearchMovies).toHaveBeenCalled()
  })
})