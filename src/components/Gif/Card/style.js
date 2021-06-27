import styled from '@emotion/styled'

export const GifCard = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  cursor: pointer;
`

export const Img = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 5px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  color: #4b3e3e;
  position: absolute;
  font-size: 0.7rem;
  bottom: 0;
  width: 100%;
  background-color: rgba(181, 180, 180, 0.55);
`
