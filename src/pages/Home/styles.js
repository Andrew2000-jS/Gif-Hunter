import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  width: 100vw;
`

export const TrendsContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  margin: 5% 0 5% 0;

  @media screen and (max-width: 500px) {
    margin-top: 15%;
  }
`

export const LinkTrend = styled(Link)`
  width: 65%;
  color: #d6d2c4;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #5e454b;
    transition: all 0.2s ease;
  }
`

export const H4 = styled.h4`
  width: 65%;
  color: #d6d2c4;
`

export const ListContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
`
