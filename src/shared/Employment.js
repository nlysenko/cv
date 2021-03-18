/**
 *
 * Employment
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    paddingTop: 17,
  },

  experience: {
    fontFamily: 'IBMPlexSans-Medium',
    display: 'inline-block',
  },

  timeSpan: {
    fontSize: 10,
    opacity: 0.5,
    float: 'right',
  },
})

const Employment = () => {
  const classes = useStyles()

  return (
    <div>
      <h2>Employment</h2>

      <div className={classes.wrapper}>
        <p className={classes.experience}>
          Self-learning frontend technologies
        </p>

        <span className={classes.timeSpan}>Oct 2020 - Mar 2021</span>
      </div>
    </div>
  )
}

export default Employment
