import React, {useCallback, useRef} from 'react'

import {useHistory} from 'react-router-dom'
import {SearchInput, Form, Logo} from './styles'
import logo from 'assets/logo_transparent.png'
import useKeyword from 'hooks/useKeyword'

function SearchBar() {
  const inputRef = useRef(null)
  const {keywordToUse, handleKeyword} = useKeyword(inputRef)

  const history = useHistory()

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      history.push(`/search/${keywordToUse}`)
    },
    [history, keywordToUse],
  )

  return (
    <Form onSubmit={onSubmit} role='form'>
      <Logo src={logo} />
      <SearchInput
        type='text'
        onChange={handleKeyword}
        value={keywordToUse}
        ref={inputRef}
      />
    </Form>
  )
}

export default React.memo(SearchBar)
