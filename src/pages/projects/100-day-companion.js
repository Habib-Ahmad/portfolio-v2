import React from "react"
import Navbar from "../../components/Navbar"
import landing from "../../images/companion-landing.png"
import milestones from "../../images/companion-milestones.png"
import sketch1 from "../../images/companion-sketch-1.png"
import sketch2 from "../../images/companion-sketch-2.png"
import sketch3 from "../../images/companion-sketch-3.png"

const companion = () => {
  return (
    <>
      <Navbar />
      <div className="section" id="about">
        <div className="container">
          <div className="invoice-wrapper">
            <h1>100 Day Companion</h1>
            <img src={landing} alt="landing" />
            <img src={milestones} alt="milestones" />

            <h2>The idea</h2>
            <p>
              100 day companion is a productivity tool for developers to assist
              in the 100 days of code challenge by gamifyig the process by
              setting milestones, sending daily/weekly reminders, geerating
              insights into your habits and more. The idea came about in a brain
              storming session for a hackathon and I joined team of three to
              build this.
            </p>

            <h2>Development Process</h2>
            <h3>Strategy and Planning</h3>
            <p>
              We held a strategy session to discuss the core features of the web
              app, timeline, responsibilities, etc. We created issues on GitHub
              to track our progress
            </p>
            <br />
            <p>
              I was responsible for creating the code base, authentication
              functionality and creating the Landing and Milestones pages.
            </p>

            <h3>Design and App Structure</h3>
            <p>
              The design for the app was sketched using{" "}
              <a href="https://excalidraw.com/" target="__blank">
                excalidraw
              </a>{" "}
              We went for a simple and straight forward design.
            </p>
            <div className="image-wrapper">
              <img src={sketch3} alt="Sketch 3" />
              <img src={sketch1} alt="Sketch 1" />
              <img src={sketch2} alt="Sketch 2" />
            </div>
            <h3>Development</h3>
            <p>
              Working in a cohesive team is always a pleasure. There is the
              feeling of camaraderie from working towards a goal together and
              keeping each other accountable and there is also the extra
              motivation from trying to one up your team mates (Maybe that part
              is only me though).
            </p>

            <h3>Testing and Quality Assurance</h3>
            <p>
              We showed the app to a couple of our developer friends to test it
              out. Overall, we received a positive feedback and we are committed
              to developing it further
            </p>

            <h2>App features</h2>
            <ul>
              <li>GitHub authentication with Firebase</li>
              <li>Keep track of your progress and milestones with badges</li>
              <li>Explore insights and statistics</li>
              <li>
                A roadmap where users can make and upvote/downvote feature
                suggestions
              </li>
              <li>Daily / weekly notifications</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default companion
