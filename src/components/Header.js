/**
 *
 * Header
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Banner from 'assets/img/banner.jpeg'
import Avatar from 'assets/img/avatar.webp'

const useStyles = createUseStyles({
  header: {
    position: 'relative',
    width: '100%',
    height: 150,
    background: {
      image: `url(${Banner})`,
      size: 'cover',
      position: ['center', 'center'],
      repeat: 'no-repeat',
    },
  },

  avatar: {
    width: 140,
    height: 140,
    position: 'absolute',
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
})

const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.avatar}></div>
    </header>
  )
}

export default Header
