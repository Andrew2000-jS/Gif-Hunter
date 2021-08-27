import React from 'react'
import useOneGif from 'hooks/useOneGif'
import {
  CardGif,
  Content,
  Container,
  CardContainer,
  ImgCard,
  ImgBox,
  CardContent,
  Img,
  H2,
  P,
  Figure,
  Capa,
  ImgGif,
} from './style'

export default function Detail({match}) {
  const {id} = match.params
  const {oneGif} = useOneGif(id)

  return (
    <Container>
      <Content>
        <CardGif>
          <h5 style={{color: '#ddd'}}>{oneGif.title}</h5>
          <Figure>
            <ImgGif src={oneGif.image} alt={oneGif.title} />
            <Capa>
              <div style={{margin: '2% 0 0 2%', fontSize: '0.8rem'}}>
                <p>Uploaded: {oneGif.date}</p>
                <p>Id: {id}</p>
                <p>Rating: {oneGif.rating}</p>
              </div>
            </Capa>
          </Figure>
        </CardGif>

        <CardContainer>
          <ImgCard>
            <ImgBox>
              <Img src={oneGif.avatar} alt={oneGif.username} />
            </ImgBox>
            <CardContent>
              <H2>{oneGif.username}</H2>
              <P>{oneGif.description}</P>
            </CardContent>
          </ImgCard>
        </CardContainer>
      </Content>
    </Container>
  )
}
