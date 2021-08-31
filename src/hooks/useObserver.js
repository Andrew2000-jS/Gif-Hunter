import {useEffect, useRef, useState} from 'react'

export default function useObserver(options) {
  console.log(options)
  const refToUse = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (refToUse.current) observer.observe(refToUse.current)

    return () => {
      if (refToUse.current) observer.disconnect(refToUse.current)
    }
  }, [refToUse, options])

  return {isVisible, refToUse}
}
