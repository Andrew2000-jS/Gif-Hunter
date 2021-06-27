import React from 'react'
import {useHistory} from 'react-router-dom'
import {SearchInput, Form} from './styles'

export default function SearchBar({handleChange, keyword}) {
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()

    history.push(`/search/${keyword}`)
  }
  return (
    <Form onSubmit={onSubmit}>
      <SearchInput type='text' onChange={handleChange} value={keyword} />
      <button>Submit</button>
    </Form>
  )
}
