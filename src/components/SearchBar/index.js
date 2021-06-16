import React, {useState, useEffect} from 'react'

export default function SeatchBar() {
  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => setKeyword(e.target.value)
  return (
    <div>
      <input type='text' onChange={handleChange} value={keyword} />
    </div>
  )
}
