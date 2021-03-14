/**
 *
 * Skills
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const MainColor = '#212121'

const useStyles = createUseStyles({
  title: {
    paddingBottom: 11,
  },

  lists: {
    display: 'flex',
  },

  list: {
    paddingLeft: 30,

    '&:first-child': {
      paddingLeft: 0,
    },
  },

  item: {
    marginBottom: 5,
    paddingLeft: 12,
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      width: 5,
      height: 5,
      backgroundColor: MainColor,
      display: 'block',
      transform: 'rotate(45deg)',
      top: 8,
      left: 0,
    },
  },
})

const Experience = [
  ['JavaScript', 'ES6', 'React', 'Redux', 'React Router'],
  ['HTML5', 'CSS3', 'PostCSS', 'JSS', 'SASS'],
  ['Photoshop', 'Zeplin', 'Figma', 'Git'],
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
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Skills
