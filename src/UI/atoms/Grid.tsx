import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { LayoutProps } from '../../common/models/props'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    height: '9vh',
    backgroundColor: 'grey',
    textAlign: 'center',
  },
  main: {
    backgroundColor: 'green',
    textAlign: 'center',
    height: '86vh',
    color: theme.palette.text.secondary,
  },
  sideMenu: {
    backgroundColor: 'red',
    height: '86vh',
  },
  footer: {
    backgroundColor: 'yellow',
    height: '5vh',
  },
}))

const Layout = ({ nav, sideMenu, main, footer }: LayoutProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box className={classes.nav}>{nav}</Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.sideMenu}>{sideMenu}</Box>
        </Grid>
        <Grid item xs={9}>
          <Box className={classes.main}>{main}</Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.footer}>{footer}</Box>
        </Grid>
      </Grid>
    </div>
  )
}

export { Layout }
