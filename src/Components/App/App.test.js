import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

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
})