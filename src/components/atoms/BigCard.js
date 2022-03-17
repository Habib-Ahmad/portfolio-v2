import { Link } from "gatsby"
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
    <Link className="big-card" to={`/projects/${route}`}>
      <div className="image-wrapper">
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
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink />
          </a>
        </div>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <ul>
          {stack?.map((lang, idx) => (
            <li key={idx}>{lang}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default BigCard
