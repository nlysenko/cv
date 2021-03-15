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
    paddingTop: 25,
  },

  work: {
    paddingBottom: 20,
  },

  title: {
    paddingBottom: 10,
  },

  item: {
    padding: {
      top: 5,
      left: 20,
    },
  },

  info: {
    opacity: 0.6,
    paddingRight: 10,
  },
})

const Works = [
  {
    name: 'Markup from PSD',
    code: 'https://github.com/nlysenko/abz-agency-test',
    result: 'https://nlysenko.github.io/abz-agency-test',
  },

  {
    name: 'Markup from Figma',
    code: 'https://github.com/nlysenko/expoforum',
    result: 'https://nlysenko.github.io/expoforum',
  },

  {
    name: 'Number to Words Translator',
    code: 'https://github.com/nlysenko/number-to-words-translator',
    result: 'https://nlysenko.github.io/number-to-words-translator',
  },

  {
    name: 'Markup from Zeplin',
    code: 'https://github.com/nlysenko/cobase-test',
    result: 'https://nlysenko.github.io/cobase-test',
  },
]

const Examples = () => {
  const classes = useStyles()

  return (
    <div className={classes.examples}>
      <h2>Code examples</h2>

      <div className={classes.portfolio}>
        {Works.map((work, i) => (
          <div className={classes.work} key={i}>
            <h3 className={classes.title}>{work.name}</h3>

            <p className={classes.item}>
              <span className={classes.info}>Code:</span>

              <a href={work.code}>{work.code}</a>
            </p>

            <p className={classes.item}>
              <span className={classes.info}>Result:</span>

              <a href={work.result}>{work.result}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Examples
