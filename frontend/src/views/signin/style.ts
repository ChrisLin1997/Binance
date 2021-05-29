import styled from 'styled-components'
import { colors } from '../../assets/style'
import { Link } from 'react-router-dom'

export const SignForm = styled.form`
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    height: auto;
  }
  margin: 40px auto;
  padding: 24px;
  width: 386px;
  height: fit-content;
  color: ${ colors.cream };
  text-align: center;
  border-radius: 2px;
  background: ${ colors.gray };
`

export const SignUp = styled(Link)`
  color: ${ colors.active };
  &:hover {
    border-bottom: 1px solid ${ colors.active };
  }
`

export const DialogContent = styled.div`
  text-align: center;
  color: white
`
