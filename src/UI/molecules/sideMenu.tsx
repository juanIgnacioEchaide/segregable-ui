import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { RoutesStack } from '../../AppRouter'
import { BaseBox } from '../atoms/Box'

const SideMenu = ({ setView }: any) => (
  <BaseBox pt={10} column alignCenter justifycenter>
    {RoutesStack?.map((i) => (
      <Link
        style={{
          paddingTop: '5vh',
          padding: '1vh',
          textDecoration: 'none',
          color: 'black',
        }}
        key={i.name}
        onClick={() => setView(i.name)}
        to={i.path}
      >
        {i.name}
      </Link>
    ))}
  </BaseBox>
)

export { SideMenu }
