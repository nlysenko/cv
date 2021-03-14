/**
 *
 * Main
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  main: {},
})

const Main = () => {
  const classes = useStyles()

  return <main className={classes.main}></main>
}

export default Main
