import React from 'react'
import useTrends from 'hooks/useTrends'
import {Img, Container, TrendsWrapper} from './style'

export default function Trends() {
  const {trends} = useTrends()
  return (
    <TrendsWrapper>
      <Container>
        {trends.map(({image, id, title}) => (
          <Img src={image} alt={title} key={id} />
        ))}
      </Container>
    </TrendsWrapper>
  )
}
