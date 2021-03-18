/**
 *
 * Main
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Profile from 'shared/Profile'
import Education from 'shared/Education'
import Skills from 'shared/Skills'
import Employment from 'shared/Employment'
import Examples from 'shared/Examples'

const useStyles = createUseStyles({
  main: {
    maxWidth: 535,
    margin: [0, 'auto'],
    padding: [30, 10, 48, 10],
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  aboutMe: {
    width: 170,
    paddingRight: 10,
  },

  experience: {
    width: 325,
    paddingLeft: 10,
  },
})

const Main = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.aboutMe}>
          <Profile />

          <Education />

          <Skills />
        </div>

        <div className={classes.experience}>
          <Employment />

          <Examples />
        </div>
      </div>
    </main>
  )
}

export default Main
