/**
 *
 * Profile
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  profile: {
    paddingBottom: 10,
  },

  list: {
    paddingTop: 17,
  },

  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 9,
  },

  myData: {
    fontFamily: 'IBMPlexSans-Medium',
    lineHeight: '18px',
  },

  info: {
    lineHeight: '18px',
  },

  icon: {
    float: 'left',
    marginRight: 5,
  },

  social: {
    width: 18,
  },
})

const Profile = () => {
  const classes = useStyles()

  return (
    <div className={classes.profile}>
      <h2 className={classes.title}>Profile</h2>

      <ul className={classes.list}>
        <li className={classes.item}>
          <span className={classes.myData}>Date of birth:</span>

          <span className={classes.info}>18.02.1988</span>
        </li>

        <li className={classes.item}>
          <span className={classes.myData}>Phone:</span>

          <span className={classes.info}>+380661815339</span>
        </li>

        <li className={classes.item}>
          <span className={classes.myData}>Skype:</span>

          <span className={classes.info}>nikolai.v.lysenko</span>
        </li>

        <li className={classes.item}>
          <span className={classes.myData}>Mail:</span>

          <a href="mailto:nikolai.v.lysenko@gmail.com">
            nikolai.v.lysenko@gmail.com
          </a>
        </li>

        <li className={classes.item}>
          <span className={classes.myData}>GitHub:</span>

          <a href="https://github.com/nlysenko">github.com/nlysenko</a>
        </li>

        <li className={classes.item}>
          <span className={classes.myData}>Address:</span>

          <span className={classes.info}>Donetsk</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile
