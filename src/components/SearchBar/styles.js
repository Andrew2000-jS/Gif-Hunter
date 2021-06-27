import styled from '@emotion/styled'

export const Form = styled.form`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
`
export const SearchInput = styled.input`
  width: 50%;
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
