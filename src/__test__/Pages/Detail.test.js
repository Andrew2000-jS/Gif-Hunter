import {screen, render} from '@testing-library/react'
import {renderHook, act} from '@testing-library/react-hooks'
import {BrowserRouter as Router} from 'react-router-dom'
import Detail from 'pages/Detail'
import useOneGif from 'hooks/useOneGif'

beforeEach(() => {
  render(
    <Router>
      <Detail
        match={{
          params: {id: 'KDnxbHF3N7EDKhZIGE'},
          isExact: true,
          path: '/search/gif/:id',
          url: '/search/gif/KDnxbHF3N7EDKhZIGE',
        }}
      />
    </Router>,
  )
})

describe('<Detail />', () => {
  test('is render properly', () => {
    const gifElemnt = screen.getByText(/Uploaded/i)
    expect(gifElemnt).toBeInTheDocument()
  })

  test('useOneGif is render an []', async () => {
    const {result} = await renderHook(
      () => useOneGif().oneGif,
    )
    await act(async () => {
      await result.current.oneGif
    })
    expect(result.current).toEqual([])
  })
})
