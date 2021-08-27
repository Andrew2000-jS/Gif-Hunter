import {useState, useCallback} from 'react'

export default function useKeyword(externalRef) {
  const [keywordToUse, setKeywordToUse] = useState('')

  const handleKeyword = useCallback(
    () => setKeywordToUse(externalRef.current.value),
    [externalRef],
  )

  return {keywordToUse, handleKeyword}
}
