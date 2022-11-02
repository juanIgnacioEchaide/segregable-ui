import { RoutesStack } from '../../AppRouter'
import { SideContainer, SideLink } from '../atoms/SideMenu'

const SideMenu = () => (
  <SideContainer>
    {RoutesStack?.map((i) => (
      <SideLink style={{ paddingTop: '5vh' }} to={i.path}>
        {i.name}
      </SideLink>
    ))}
  </SideContainer>
)

export { SideMenu }
