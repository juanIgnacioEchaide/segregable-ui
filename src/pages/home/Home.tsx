import { useContext, useEffect, useState } from 'react'
import { Grid } from '../../UI/molecules/Grid'
import { SideMenu } from '../../UI/molecules/SideMenu'
import { QueryContext } from '../../context/query/QueryProvider'

const Home = (): JSX.Element => {
  const { state, dispatch } = useContext(QueryContext)

  return (
    <Grid
      nav={<div>swapi</div>}
      main={undefined}
      details={<p>DETALLE</p>}
      side={<SideMenu />}
      footer={undefined}
    />
  )
}

export default Home
