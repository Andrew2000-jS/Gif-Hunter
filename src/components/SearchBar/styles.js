import styled from '@emotion/styled'

export const Form = styled.form`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 45px;
`
export const SearchInput = styled.input`
  width: 50%;
  height: 100%;
  padding: 10px;
  border: 1px solid #a2b29f;
  border-radius: 5px;

  &:focus {
    border: 1px solid #798777;
    outline: none;
  }

  &:hover {
    border: 1px solid #798777;
  }
`
export const Logo = styled.img`
  height: 100%;
  width: 250px;
  object-fit: cover;
`
