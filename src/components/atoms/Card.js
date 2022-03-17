import React from "react"
import ExternalLink from "../../images/ExternalLink"
import Folder from "../../images/Folder.js"
import Github from "../../images/Github"

const Card = ({ heading, paragraph, githubLink, projectLink, stack }) => {
  return (
    <div className="card">
      <div className="content">
        <header>
          <div className="folder">
            <Folder />
          </div>

          <div className="project-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            )}
            <div style={{ width: 10 }} />
            <a
              href={projectLink ? projectLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink />
            </a>
          </div>
        </header>

        <h3>{heading}</h3>
        <p>{paragraph}</p>

        <footer>
          <ul>
            {stack.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Card
