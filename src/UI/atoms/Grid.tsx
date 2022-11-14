import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 0.5fr 2fr 0.2fr;
  grid-template-areas:
    'nav nav nav nav'
    'sidebar content content content'
    'sidebar main main main'
    'footer footer footer footer';
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 0.5fr;
    grid-template-areas:
      'nav'
      'content'
      'main'
      'sidebar'
      'footer';
  }
  color: white;
`
const NavBar = styled.nav`
  background: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.15rem;
`
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`
const Details = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`
const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`
export {
    Container, 
    NavBar, 
    SideBar, 
    Main, 
    ContentBox, 
    Details, 
    Footer 
}
