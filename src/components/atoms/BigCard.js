import { navigate } from "gatsby"
import React from "react"
import ExternalLink from "../../images/ExternalLink"
import Github from "../../images/Github"

const BigCard = ({
  img,
  heading,
  paragraph,
  githubLink,
  projectLink,
  stack,
  route,
}) => {
  return (
    <div className="big-card">
      <div
        className="image-wrapper"
        role="button"
        onClick={() => navigate(`/projects/${route}`)}
        onKeyDown={() => navigate(`/projects/${route}`)}
      >
        <img src={img} alt={img} />
      </div>
      <div className="content">
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          )}
          <div style={{ width: 10 }} />
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink />
            </a>
          )}
        </div>
        <div
          style={{ cursor: "pointer" }}
          role="button"
          onClick={() => navigate(`/projects/${route}`)}
          onKeyDown={() => navigate(`/projects/${route}`)}
        >
          <h3>{heading}</h3>
          <p>{paragraph}</p>
          <ul>
            {stack?.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BigCard
