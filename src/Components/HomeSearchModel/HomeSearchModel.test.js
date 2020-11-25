import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeSearchModel from './HomeSearchModel';
import { MemoryRouter } from 'react-router-dom';

const mockSearchMovies = jest.fn()

describe('HomeSearchModel', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <HomeSearchModel />
      </MemoryRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render the home model', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <HomeSearchModel />
      </MemoryRouter>);

    const appName = getByText('Movie Rater')
    const input = getByPlaceholderText('Search by movie title...')
    const button = getByRole('button', {value: 'submit'})

    expect(appName).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should call the search function when button is clicked', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <HomeSearchModel searchMovies={mockSearchMovies}/>
      </MemoryRouter>
    )
    
    const button = getByTestId('search-btn')

    fireEvent.click(button)

    expect(mockSearchMovies).toBeCalledTimes(1)
  })
})