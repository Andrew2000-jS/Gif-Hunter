import React from 'react'
import Gif from '../../components/Gif/List'

export default function Home() {
  return (
    <div>
      <h1 style={{fontFamily: 'Roboto'}}>Gif Hunter</h1>
      <Gif keyword='goku' />
    </div>
  )
}
