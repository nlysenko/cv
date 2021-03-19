/**
 *
 * Skills
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Diamond from 'assets/img/diamond.png'

const useStyles = createUseStyles({
  title: {
    paddingBottom: 11,
  },

  lists: {
    display: 'flex',
  },

  list: {
    paddingLeft: 23,

    '&:first-child': {
      paddingLeft: 0,
    },
  },

  item: {
    marginBottom: 4,
    display: 'flex',
  },

  diamond: {
    width: 5,
    margin: {
      top: 6,
      right: 5,
    },
  },
})

const Experience = [
  ['React', 'Redux', 'React Router', 'PostCSS', 'JSS'],
  ['SASS', 'Photoshop', 'Zeplin', 'Figma', 'Git'],
]

const Skills = () => {
  const classes = useStyles()

  return (
    <div>
      <h2 className={classes.title}>Skills</h2>

      <div className={classes.lists}>
        {Experience.map((arr, i) => (
          <ul className={classes.list} key={i}>
            {arr.map((item, i) => (
              <li className={classes.item} key={i}>
                <i>
                  <img
                    className={classes.diamond}
                    src={Diamond}
                    alt="diamond"
                  />
                </i>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Skills
