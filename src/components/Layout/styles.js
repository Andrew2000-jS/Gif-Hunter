import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 5%;
  background: #161616;
  color: #fff;
  padding: 10px;
  height: 10vh;
`
export const LinkStyle = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-family: montserrat;
`
