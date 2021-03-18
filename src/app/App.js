/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Header from 'components/Header'
import Main from 'components/Main'

const WhiteColor = '#fff'
const MainColor = '#212121'

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },

    html: {
      boxSizing: 'border-box',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },

    a: {
      textDecoration: 'none',
      color: MainColor,
      marginBottom: -2,
      opacity: 0.6,

      '&:hover': {
        opacity: 0.8,
      },
    },

    body: {
      fontSize: 11,
      fontFamily: 'Hind-Regular',
      color: MainColor,
      background: WhiteColor,
    },

    ul: {
      listStyle: 'none',
    },

    img: {
      display: 'block',
    },

    h1: {
      fontSize: 32,
      fontFamily: 'IBMPlexSans-SemiBold',
      lineHeight: '25px',
    },

    h2: {
      fontFamily: 'IBMPlexSans-Bold',
      fontSize: 13,
      lineHeight: '15px',
    },

    h3: {
      fontSize: 11,
      fontFamily: 'IBMPlexSans-Medium',
    },
  },
})

const App = () => {
  useStyles()

  return (
    <div>
      <Header />

      <Main />
    </div>
  )
}

export default App
