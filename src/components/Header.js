/**
 *
 * Header
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Banner from 'assets/img/banner.jpeg'

const useStyles = createUseStyles({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    width: '100%',
    height: 150,
    background: {
      image: `url(${Banner})`,
      size: 'cover',
      position: ['center', 'center'],
      repeat: 'no-repeat',
    },
  },
})

const Header = () => {
  const classes = useStyles()

  return <header className={classes.header} />
}

export default Header
