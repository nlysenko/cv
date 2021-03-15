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

import Avatar from 'assets/img/avatar.webp'

const useStyles = createUseStyles({
  main: {
    width: 768,
    margin: [0, 'auto'],
    padding: [240, 15, 48, 15],
    position: 'relative',
  },

  avatar: {
    width: 140,
    height: 140,
    position: 'absolute',
    zIndex: 200,
    top: 80,
    left: 'calc(50% - 70px)',
    right: 'calc(50% - 70px)',
    background: {
      image: `url(${Avatar})`,
      size: 'cover',
      position: ['center', 'center'],
      repeat: 'no-repeat',
    },
    border: {
      radius: '100%',
      style: 'solid',
      width: 3,
      color: '#ffffff',
    },
  },

  name: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 200,
  },

  position: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 16,
    opacity: 0.6,
  },

  content: {
    paddingTop: 40,
    display: 'flex',
    justifyContent: 'space-between',
  },

  aboutMe: {
    width: 290,
  },

  experience: {
    width: 400,
  },
})

const Main = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <i className={classes.avatar} />

      <h1 className={classes.name}>Nikolai Lysenko</h1>

      <p className={classes.position}>Junior front-end developer</p>

      <div className={classes.content}>
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
