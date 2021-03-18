/**
 *
 * Profile
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Viber from 'assets/img/viber.png'
import Telegram from 'assets/img/telegram.png'
import Skype from 'assets/img/skype.png'
import GitHub from 'assets/img/github.png'
import Gmail from 'assets/img/gmail.png'

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
    opacity: 0.6,
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
          <span className={classes.myData}>
            <i className={classes.icon}>
              <img className={classes.social} src={Viber} alt="viber" />
            </i>

            <i className={classes.icon}>
              <img className={classes.social} src={Telegram} alt="telegram" />
            </i>
          </span>

          <span className={classes.info}>+380661815339</span>
        </li>

        <li className={classes.item}>
          <i className={classes.icon}>
            <img className={classes.social} src={Skype} alt="skype" />
          </i>

          <span className={classes.info}>nikolai.v.lysenko</span>
        </li>

        <li className={classes.item}>
          <i className={classes.icon}>
            <img className={classes.social} src={Gmail} alt="gmail" />
          </i>

          <a href="mailto:nikolai.v.lysenko@gmail.com">
            nikolai.v.lysenko@gmail.com
          </a>
        </li>

        <li className={classes.item}>
          <i className={classes.icon}>
            <img className={classes.social} src={GitHub} alt="github" />
          </i>

          <a href="https://github.com/nlysenko">https://github.com/nlysenko</a>
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
