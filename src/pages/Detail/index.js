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
  SubCapa,
} from './style'
import SEO from 'components/SEO'

export default function Detail({match}) {
  const {id} = match.params
  const {oneGif} = useOneGif(id)

  return (
    <>
      <SEO title={oneGif.title} name='detail page' content='detail' />
      <Container>
        <Content>
          <CardGif>
            <h5 style={{color: '#ddd'}}>{oneGif.title}</h5>
            <Figure>
              <ImgGif src={oneGif.image} alt={oneGif.title} />
              <Capa>
                <SubCapa>
                  <p>Uploaded: {oneGif.date}</p>
                  <p>Id: {id}</p>
                  <p>Rating: {oneGif.rating}</p>
                </SubCapa>
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
    </>
  )
}
