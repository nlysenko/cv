/**
 *
 * Profile
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  profile: {
    paddingBottom: 30,
  },

  list: {
    paddingTop: 17,
  },

  item: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 9,
  },

  personal: {
    fontFamily: 'IBMPlexSans-Medium',
  },

  info: {
    opacity: 0.6,
  },
})

const Profile = () => {
  const classes = useStyles()

  return (
    <div className={classes.profile}>
      <h2 className={classes.title}>Profile</h2>

      <ul className={classes.list}>
        <li className={classes.item}>
          <span className={classes.personal}>Date of birth:</span>

          <span className={classes.info}>18.02.1988</span>
        </li>

        <li className={classes.item}>
          <span className={classes.personal}>Phone: (Telegram, Viber)</span>

          <span className={classes.info}>+380661815339</span>
        </li>

        <li className={classes.item}>
          <span className={classes.personal}>Mail:</span>

          <a href="mailto:nikolai.v.lysenko@gmail.com">
            nikolai.v.lysenko@gmail.com
          </a>
        </li>

        <li className={classes.item}>
          <span className={classes.personal}>Skype:</span>

          <span className={classes.info}>nikolai.v.lysenko</span>
        </li>

        <li className={classes.item}>
          <span className={classes.personal}>Address:</span>

          <span className={classes.info}>Donetsk</span>
        </li>

        <li className={classes.item}>
          <span className={classes.personal}>GitHub:</span>

          <a href="https://github.com/nlysenko">https://github.com/nlysenko</a>
        </li>
      </ul>
    </div>
  )
}

export default Profile
