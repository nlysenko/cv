/**
 *
 * Education
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  education: {
    paddingBottom: 5,
  },

  university: {
    fontFamily: 'IBMPlexSans-Medium',
    paddingTop: 10,
  },

  specialty: {
    paddingTop: 6,
    opacity: 0.6,
  },

  ending: {
    fontSize: 10,
    opacity: 0.5,
    textAlign: 'right',
    marginTop: -8,
  },
})

const Education = () => {
  const classes = useStyles()

  return (
    <div className={classes.education}>
      <h2 className={classes.title}>Education</h2>

      <p className={classes.university}>
        Donetsk National University of Economics and Trade named after M.I.
        Tugan-Baranovsky
      </p>

      <p className={classes.specialty}>Specialist in Banking</p>

      <p className={classes.ending}>Jun 2010</p>
    </div>
  )
}

export default Education
