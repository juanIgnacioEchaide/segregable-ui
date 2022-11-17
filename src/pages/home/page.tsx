import { useContext, useEffect, useState } from 'react'
import { QueryContext } from '../../context/query/QueryProvider'
import { VIEW } from '../../common/constants/uri'
import { QueryActions } from '../../context/query/QueryActions'
import { getViewState } from '../../common/utils/helpers'
import { ItemsList } from '../../UI/molecules/ItemsList'
import { AnyBusinessEntity } from '../../common/models/entities'
import { Layout } from '../../UI/atoms/Grid'

const Page = (): JSX.Element => {
  const { state, dispatch } = useContext(QueryContext)
  const [title, setTitle] = useState<string>()
  const [items, setItems] = useState<AnyBusinessEntity[]>([])
  const [detailsData, setDetailsData] = useState<{
    title: string
    currentPage: number
    totalPages: number
  }>({
    title: '',
    currentPage: 0,
    totalPages: 0,
  })

  const atHomeView = () => {
    return state?.view === VIEW.HOME || state?.view === VIEW.DEFAULT
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

  useEffect(() => {
    if (state?.currentPage) {
      setDetailsData({
        ...detailsData,
        currentPage: state?.currentPage,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <Layout
      nav={undefined}
      sideMenu={undefined}
      main={undefined}
      footer={undefined}
    />
  )
}

export default Page
