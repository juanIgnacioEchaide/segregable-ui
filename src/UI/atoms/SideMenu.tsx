import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  padding-top: 4vh;
`
const SideLink = styled(Link)`
  text-decoration: none;
  flex-direction: flex-start;
  color: white;
`

export { SideContainer, SideLink }
