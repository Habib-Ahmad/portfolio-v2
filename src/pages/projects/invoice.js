import React from "react"
import Navbar from "../../components/Navbar"
import img1 from "../../images/invoice-clients.jpg"
import img2 from "../../images/invoice-view-client.jpg"
import img3 from "../../images/invoice-new-invoice.jpg"
import img4 from "../../images/invoice-invoices.jpg"
import sketch1 from "../../images/invoice-sketch-1.png"
import sketch2 from "../../images/invoice-sketch-2.png"

const invoice = () => {
  return (
    <>
      <Navbar />
      <div className="section" id="about">
        <div className="container">
          <div className="project-wrapper">
            <h1>Invoice Application</h1>

            <div className="screenshots">
              <img src={img1} alt="clients" />
              <img src={img2} alt="view-client" />
              <img src={img3} alt="new-invoice" />
              <img src={img4} alt="invoices" />
            </div>

            <h2>The problem</h2>
            <p>
              The client worked for a{" "}
              <a href="http://switchboxltd.com/" target="__blank">
                solar energy company
              </a>{" "}
              and regularly had to generate quotes and estimates. The issue was
              it was inconvenient and slow because he would constantly go back
              to old invoices and edit from there. Another problem was his
              clients wanted estimates, sometimes almost immediately, and he had
              to create them on the spot often forgetting and misquoting things
            </p>

            <h2>Development Process</h2>
            <h3>Strategy and Planning</h3>
            <p>
              The first thing to do was to gather inormation. What exactly did
              the client want? What features were most essential? What other
              problems could be solved with this app?
            </p>

            <h3>Design and App Structure</h3>
            <p>
              I'm more of a visual planner so even I don't have a fancy, high
              quality design I have to sketch a basic layout to better
              understand what i'm building and to avoid mistaked and re-writing
              code. So I went on{" "}
              <a href="https://excalidraw.com/" target="__blank">
                excalidraw
              </a>{" "}
              and made a simple design of what I wanted it to look like
            </p>
            <img src={sketch1} alt="Sketch 1" className="sketch" />
            <img src={sketch2} alt="Sketch 2" className="sketch" />

            <h3>Development</h3>
            <p>
              Now the fun begins. In hindsight I should have probably used
              typescript instead of plain javascript because of all the
              unecessary errors I had to deal with. But to be fair to myself, I
              wasn't comfortable with Typescript at the time and I even disliked
              it then but I love it now - I feel like every developer goes
              through this cycle with Typescript. The app was complete in about
              a month and a half with firebase integration.
            </p>

            <h3>Testing and Quality Assurance</h3>
            <p>
              Complete overview of the design and development process through
              meetigs with the client. I receive feedback from the users of the
              app and adjust accordingly.
            </p>

            <h2>App features</h2>
            <ul>
              <li>Invoices can be generated on the go</li>
              <li>Invoices are save under the client it was generated for</li>
              <li>Old invoices can be usd as templates to create new ones</li>
              <li>
                Each item in an invoice is added to the firebase database along
                with its price
              </li>
              <li>
                Changing the price for an iem in a new invioce would update the
                price of that item
              </li>
              <li>App is only on android for now</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default invoice
