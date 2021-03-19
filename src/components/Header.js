/**
 *
 * Header
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Banner from 'assets/img/banner.png'
import Avatar from 'assets/img/avatar.webp'

const WhiteColor = '#fff'

const useStyles = createUseStyles({
  header: {
    maxWidth: 615,
    padding: [0, 10],
    margin: [0, 'auto'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  banner: {
    width: 595,
    height: 150,
  },

  avatar: {
    width: 140,
    height: 140,
    marginTop: -70,

    border: {
      radius: '100%',
      style: 'solid',
      width: 3,
      color: WhiteColor,
    },
  },

  name: {
    textAlign: 'center',
    paddingTop: 20,
  },

  position: {
    textAlign: 'center',
    fontSize: 10,
    lineHeight: '10px',
    paddingTop: 20,
  },
})

const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <img className={classes.banner} src={Banner} alt="banner" />

      <img className={classes.avatar} src={Avatar} alt="avatar" />

      <h1 className={classes.name}>Nikolai Lysenko</h1>

      <p className={classes.position}>Front-end developer</p>
    </header>
  )
}

export default Header
