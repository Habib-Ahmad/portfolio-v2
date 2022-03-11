import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            <svg
              className="svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.81347 11.0773L21 1.1547L38.1865 11.0773V30.9226L21 40.8453L3.81347 30.9226V11.0773Z"
                stroke="#64FFDA"
                strokeWidth="2"
              />
              <path
                d="M21.332 14.9395L17.2793 27H14.4375L19.75 12.7812H21.5664L21.332 14.9395ZM24.7207 27L20.6484 14.9395L20.4043 12.7812H22.2305L27.5723 27H24.7207ZM24.5352 21.7168V23.8359H16.9082V21.7168H24.5352Z"
                fill="#64FFDA"
              />
            </svg>
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
            <button className="resume">Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
