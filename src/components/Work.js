import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"
import BigCard from "./atoms/BigCard"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div>
            {data.projects.map((project, index) => (
              <BigCard
                key={index}
                img={project.img}
                heading={project.title}
                paragraph={project.para}
                githubLink={project.github}
                projectLink={project.url}
                stack={project.stack}
                route={project.route}
              />
            ))}
          </div>

          <div className="grid">
            <Fade bottom cascade>
              {data.moreProjects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  githubLink={project.github}
                  projectLink={project.url}
                  stack={project.stack}
                />
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
