import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const Layout = (): JSX.Element => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={8}></Grid>
      <Grid item xs={12} sm={8}>
        <Paper style={{ height: '100vh', background: 'lightgrey' }} />
      </Grid>
      <Grid item container direction="column" xs={12} sm={4} spacing={2}>
        <Grid item>
          <Paper style={{ height: '49vh', background: 'orange' }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: '49vh', background: 'green' }} />
        </Grid>
      </Grid>
    </Grid>
  )
}
export { Layout }
