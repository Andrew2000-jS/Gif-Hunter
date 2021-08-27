import styled from '@emotion/styled'

export const TrendsWrapper = styled.div`
  display: flex;
  justify-items: center;
  overflow-x: scroll;
  max-width: 70%;
  max-height: 100px;

  &::-webkit-scrollbar {
    height: 8px;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #57837b);
    border-radius: 6px;
  }
`
export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  gap: 3px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`
