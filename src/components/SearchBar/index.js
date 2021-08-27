import React, {useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {SearchInput, Form, Logo} from './styles'
import logo from 'assets/logo_transparent.png'

export default function SearchBar({handleChange, keyword, inputRef}) {
  const history = useHistory()

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()

      history.push(`/search/${keyword}`)
    },
    [history, keyword],
  )

  return (
    <Form onSubmit={onSubmit}>
      <Logo src={logo} />
      <SearchInput
        type='text'
        onChange={handleChange}
        value={keyword}
        ref={inputRef}
      />
    </Form>
  )
}
