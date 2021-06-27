import styled from '@emotion/styled'

export const Container = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-auto-flow: row dense;
  grid-gap: 10px;

  @media all and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media all and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
