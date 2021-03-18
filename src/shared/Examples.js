/**
 *
 * Examples
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  examples: {
    paddingTop: 17,
  },

  portfolio: {
    paddingTop: 15,
  },

  work: {
    paddingBottom: 15,
  },

  title: {
    display: 'inline-block',
    padding: {
      right: 5,
      bottom: 5,
    },
  },

  description: {
    opacity: 0.5,
    fontSize: 10,
  },

  stack: {
    opacity: 0.6,
  },

  item: {
    padding: {
      top: 5,
      left: 20,
    },

    display: 'flex',
  },

  info: {
    paddingRight: 10,
  },
})

const Works = [
  {
    name: 'Abz-Agency',
    description: '(Landing)',
    code: 'https://github.com/nlysenko/abz-agency-test',
    result: 'https://nlysenko.github.io/abz-agency-test',
  },

  {
    name: 'Expoforum',
    description: '(Landing)',
    code: 'https://github.com/nlysenko/expoforum',
    result: 'https://nlysenko.github.io/expoforum',
  },

  {
    name: 'Number to Words Translator',
    description: '(Application)',
    code: 'https://github.com/nlysenko/number-to-words-translator',
    result: 'https://nlysenko.github.io/number-to-words-translator',
  },

  {
    name: 'Cobase',
    description: '(Application)',
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

            <span className={classes.description}>{work.description}</span>

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
