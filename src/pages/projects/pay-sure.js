import React from "react"
import Navbar from "../../components/Navbar"
import img1 from "../../images/paysure-dashboard1.png"
import img2 from "../../images/paysure-dashboard2.png"
import img3 from "../../images/paysure-enumeration.png"
import img4 from "../../images/paysure-settings.png"
import design1 from "../../images/paysure-design1.png"
import design2 from "../../images/paysure-design2.png"

const paysure = () => {
  return (
    <>
      <Navbar />
      <div className="section" id="about">
        <div className="container">
          <div className="project-wrapper">
            <h1>Paysure</h1>

            <h2>The problem</h2>
            <p>
              The previous process of tax and revenue collection from MDAs
              (ministries, departments and agencies) was strenuous and slow and
              also prone to mistakes where all transactions and records where
              calculated and collected manually.
              <br />
              <br />I was approched to join the developmnet team as the front
              end lead after the company was contracted by the government to
              create a platform to make this process easier and more efficient.
            </p>

            <h2>Development Process</h2>
            <h3>Strategy and Planning</h3>
            <p>
              By the time I joined the team, the planning and the design were
              already complete. My role was to exucute the plan and develop the
              software in a clean, scalable and maintanable way. They also
              needed it in six weeks.
            </p>

            <h3>Design</h3>
            <p>
              The application was desinged by a talented team using figma - a
              web based graphics and design tool.
            </p>
            <img src={design1} alt="Design 1" className="sketch" />
            <img src={design2} alt="Design 2" className="sketch" />

            <h3>Development</h3>
            <p>
              The application was made using the Next.JS framework and
              Typescript. Material UI was also used to make the development
              process faster rather than making componentss from scratch. I
              worked with a team of four - two frontend and two backend
              developers. For the frontend we decided to translate all the figma
              pages first, then go back to integrate the APIs from the backend.
              This was done to give them time to complete the APIs.
            </p>

            <h3>Testing and Quality Assurance</h3>
            <p>
              We handled unit testing with react testing library and jest. User
              testing was outsourced to a different company.
            </p>

            <h2>App features</h2>
            <ul>
              <li>
                After authentication, users will only be able to access screens
                that they have priviledged to view
              </li>
              <li>The entire application is responsive</li>
              <li>Self service section where users can pay their tax bills</li>
              <li>Record and transaction history generation</li>
              <li>RESTful APIs</li>
            </ul>

            <h2>Screenshots</h2>
            <img src={img1} alt="dashboard 1" />
            <img src={img2} alt="dashboard 2" />
            <img src={img3} alt="enumeration" />
            <img src={img4} alt="settings" />
          </div>
        </div>
      </div>
    </>
  )
}

export default paysure
