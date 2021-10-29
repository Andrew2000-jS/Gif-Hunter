import {screen, render, fireEvent} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from '../../pages/Home'

describe('<Home />', () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>,
    )
  })
  test('Home performs properly', () => {
    const title = screen.getByText(/Trending/i)
    expect(title).toBeInTheDocument()
  })

  test('<SearchBar /> in home is render', () => {
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  test('Should search a gif', () => {
    const form = screen.getByRole('form')
    fireEvent.submit(form)

    const location = window.location.pathname
    const path = jest.fn()
    path(location)

    expect(form).toBeInTheDocument()
    expect(path).toHaveBeenCalledWith('/search/')
  })

  test('Trends link work properly', () => {
    const a = screen.getByRole('a')
    fireEvent.click(a)

    const location = window.location.pathname
    const path = jest.fn()
    path(location)

    expect(a).toBeInTheDocument()
    expect(path).toHaveBeenCalledWith('/trends')
  })

  test('Last search is render', () => {
    const lastSearch = screen.getByText(/Last search/i)

    expect(lastSearch).toBeInTheDocument()
  })
})
