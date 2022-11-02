import { GridTemplateProps } from '../../common/models/props'
import { NavBar, ContentBox, Details, Main, SideBar, Footer, Container } from '../atoms/Grid'

const Grid = ({
  nav,
  main,
  details,
  side,
  footer,
}: GridTemplateProps): JSX.Element => {
  return (
    <Container>
      <NavBar>{nav}</NavBar>
      <ContentBox>
        <Details>{details}</Details>
      </ContentBox>
      <Main>{main}</Main>
      <SideBar>{side}</SideBar>
      <Footer>{footer}</Footer>
    </Container>
  )
}

export { Grid }
