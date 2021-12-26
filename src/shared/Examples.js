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

  title: {
    paddingBottom: 5,
  },

  portfolio: {
    paddingTop: 15,
  },

  inner: {
    paddingTop: 15,
  },

  porject: {
    padding: {
      top: 8,
      left: 15,
    },
  },

  link: {
    display: 'block',
    margin: {
      top: 5,
      left: 15,
    },
  },
})

const PetProjects = {
  landings: [
    {
      name: 'ABZ Agency',
      code: 'https://github.com/nlysenko/abz-agency-test',
      demo: 'https://nlysenko.github.io/abz-agency-test',
    },

    {
      name: 'EXPOFORUM',
      code: 'https://github.com/nlysenko/expoforum',
      demo: 'https://nlysenko.github.io/expoforum',
    },

    {
      name: 'Farel',
      code: 'https://github.com/nlysenko/farel',
      demo: 'https://nlysenko.github.io/farel',
    },
  ],

  apps: [
    {
      name: 'Number Translator',
      code: 'https://github.com/nlysenko/number-to-words-translator',
      demo: 'https://nlysenko.github.io/number-to-words-translator',
    },

    {
      name: 'Cobase',
      code: 'https://github.com/nlysenko/cobase-test',
      demo: 'https://nlysenko.github.io/cobase-test',
    },
  ],
}

const Examples = () => {
  const classes = useStyles()

  return (
    <div className={classes.examples}>
      <h2>Pet-projects</h2>

      <div className={classes.inner}>
        <h3 className={classes.title}>Landings</h3>

        {PetProjects.landings.map((project, i) => (
          <div className={classes.porject} key={i}>
            <h4>{project.name}</h4>

            <a
              className={classes.link}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              {project.demo}
            </a>

            <a
              className={classes.link}
              href={project.code}
              target="_blank"
              rel="noreferrer"
            >
              {project.code}
            </a>
          </div>
        ))}
      </div>

      <div className={classes.inner}>
        <h3 className={classes.title}>Apps</h3>

        {PetProjects.apps.map((project, i) => (
          <div className={classes.porject} key={i}>
            <h4>{project.name}</h4>

            <a
              className={classes.link}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              {project.demo}
            </a>

            <a
              className={classes.link}
              href={project.code}
              target="_blank"
              rel="noreferrer"
            >
              {project.code}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Examples
