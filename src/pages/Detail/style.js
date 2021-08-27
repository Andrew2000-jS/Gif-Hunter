import styled from '@emotion/styled/macro'
import {IoMdMore} from 'react-icons/io'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
`
//*-------------------------------------*//

export const CardGif = styled.div`
  justify-self: center;
`

export const ImgCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 250px;
  max-width: 300px;
  margin: 25px 10px;
  background: #ddd;
  transition: 0.3s ease-in-out;
`
export const ImgBox = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  top: -50px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`

export const Img = styled.img`
  position: relative;
  object-fit: cover;
  height: 250px;
  max-width: 100%;
  border-radius: 5px;
`
export const CardContent = styled.div`
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  visibility: hidden;
  opacity: 0;
`

export const CardContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  padding: 25px;

  ${ImgCard}:hover ${CardContent} {
    visibility: visible;
    opacity: 1;
    margin-top: -20px;
    transition-delay: 0.3s;
  }

  ${ImgCard}:hover {
    box-shadow: 0 5px 200px rgba(201, 201, 201, 1);
    height: 320px;
  }
`

export const ImgGif = styled.img`
  width: 100%;
`

export const Capa = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  top: 0;
  width: 100%;
  height: 99%;
  background: rgba(0, 0, 0, 0.56);
  transition: all 0.2s ease-in-out;
  opacity: 0;
  visibility: hidden;
  color: #fff;
`
export const Figure = styled.figure`
  position: relative;
  height: auto;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  border-radius: 6px;
  &:hover > ${Capa} {
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease-in-out;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 690px) {
    ${CardContainer} {
      display: none;
    }
  }
`

//*-------------------------------------*//
export const H2 = styled.h2`
  font-family: 'montserrat';
  font-size: 1rem;
`
export const P = styled.p`
  font-family: 'montserrat';
  font-size: 0.8rem;
`
//*-------------------------------------*//
export const Icon = styled(IoMdMore)`
  font-size: 20px;
  cursor: pointer;
`
