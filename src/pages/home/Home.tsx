import { useContext, useEffect, useState } from 'react'
import { Grid } from '../../UI/molecules/Grid'
import { SideMenu } from '../../UI/molecules/SideMenu'
import { QueryContext } from '../../context/query/QueryProvider'
import { VIEW } from '../../common/constants/uri'
import { QueryActions } from '../../context/query/QueryActions'
import { getViewState } from '../../common/utils/helpers'
import { ItemsList } from '../../UI/molecules/ItemsList'

const Home = (): JSX.Element => {
  const { state, dispatch } = useContext(QueryContext)
  const [title, setTitle] = useState<string>()
  const [items, setItems] = useState<any[]>([])

  const atHomeView = () => {
    return (state?.view === VIEW.HOME || state?.view === VIEW.DEFAULT)
  }
  
  const setView = (viewName: VIEW) => {
    dispatch(QueryActions.SetView(viewName))
  }

  const getItemsByView = () => getViewState(state)

  useEffect(() => {
    if (state?.view) setTitle(state.view)
  }, [state])

  useEffect(() => {
    if (state) {
      setItems(getItemsByView())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <Grid
      nav={<div>swapi</div>}
      main={!atHomeView() && <ItemsList items={items} />}
      details={<p>{title}</p>}
      side={<SideMenu setView={setView} />}
      footer={undefined}
    />
  )
}

export default Home
