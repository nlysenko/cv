/**
 *
 * Examples
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  examples: {
    paddingTop: 30,
  },

  portfolio: {
    paddingTop: 17,
  },
})

const Examples = () => {
  const classes = useStyles()

  return (
    <div className={classes.examples}>
      <h2>Code examples</h2>

      <div className={classes.portfolio}>
        <p>Markup from PSD</p>

        <a href="https://nlysenko.github.io/abz-agency-test/">
          https://nlysenko.github.io/abz-agency-test
        </a>

        <p>Markup from Figma</p>

        <a href="https://nlysenko.github.io/expoforum/">
          https://nlysenko.github.io/expoforum
        </a>

        <p>Number to Words Translator</p>

        <a href="https://nlysenko.github.io/number-to-words-translator/">
          https://nlysenko.github.io/number-to-words-translator
        </a>

        <p>Markup from Zeplin</p>

        <a href="https://nlysenko.github.io/cobase-test/">
          https://nlysenko.github.io/cobase-test
        </a>
      </div>
    </div>
  )
}

export default Examples
