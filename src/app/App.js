/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

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
  },
})

const App = () => {
  useStyles()

  return <div>CV</div>
}

export default App
