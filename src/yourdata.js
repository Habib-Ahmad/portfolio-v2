import React from "react"

// Work
import companion from "./images/companion-thumbnail.png"
import invoice from "./images/invoice-thumbnail.png"

// About
import avatar from "./images/avatar.svg"

// Contact
import Github from "./images/Github"
import LinkedIn from "./images/LinkedIn"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Ahmad",
  headerTagline: [
    //Line 1 For Header
    "Let's build",
    //Line 2 For Header
    "Something Amazing",
    //Line 3 For Header
    "together",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am a full stack developer with a passion for solving problems and learning new things.",

  //Contact Email
  contactEmail: "ahmadalkali.dev@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Invoice Application", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project URL - Add Your Project Url Here
      github: "https://github.com/Habib-Ahmad/aimedicare-landing-page",
      url: "http://aimedicare.com.ng/",
      stack: ["React-Native", "Firebase"],
      img: invoice,
      route: "invoice",
    },
    {
      title: "100 Day Companion", //Project Title - Add Your Project Title Here
      para:
        "A productivity tool to help developers complete the 100 days of code challenge by tracking progress, achieving badges and more.", // Add Your Service Type Here
      //Project URL - Add Your Project Url Here
      github: "https://github.com/Habib-Ahmad/aimedicare-landing-page",
      url: "http://aimedicare.com.ng/",
      stack: ["React", "Typescript", "Material-UI", "Firebase"],
      img: companion,
      route: "100-day-companion",
    },
  ],

  moreProjects: [
    {
      title: "AiMedicare Landing page", //Project Title - Add Your Project Title Here
      para:
        "Landing page for AiMedicare, a startup aiming to improve the Nigerian healthcare sector with telemedicine services and artificial intelligence.", // Add Your Service Type Here
      //Project URL - Add Your Project Url Here
      github: "https://github.com/Habib-Ahmad/aimedicare-landing-page",
      url: "http://aimedicare.com.ng/",
      stack: ["React", "Material-UI", "AWS", "wordpress", "baba"],
    },
    {
      title: "Hulu Clone", //Project Title - Add Your Project Title Here
      para: "A simple clone of one of the most popular sreaming services", // Add Your Service Type Here
      //Project URL - Add Your Project Url Here
      github: "https://github.com/Habib-Ahmad/hulu-clone",
      url: "https://hulu-clone-e6e67.web.app/",
      stack: ["React"],
    },
    {
      title: "Fasta Ride Landing Page", //Project Title - Add Your Project Title Here
      para:
        "Landing page for Fasta Ride. A startup providing ride-hailing services in suburban Nigeria", // Add Your Service Type Here
      //Project URL - Add Your Project Url Here
      github: "https://github.com/Habib-Ahmad/fasta-landing-page",
      url: "http://chetanverma.com/",
      stack: ["React", "Material-UI"],
    },
    {
      title: "Ercas Solutions", //Project Title - Add Your Project Title Here
      para: "Website for an online payment processing platform.", // Add Your Service Type Here
      //Project URL - Add Your Project Url Here
      url: "https://ercas.com.ng/",
      stack: ["Wordpress", "HTML", "CSS"],
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hello, my name is Ahmad. I describe myself as a passionate developer who loves creating solutions to real world problems.",
  aboutParaTwo:
    "I enjoy collaborating with like minded people to build interesting web or mobile applications. I am a fast and earnest learner and I'm commited to growing as a developer. I also code in my sleep!",
  aboutParaThree:
    "Here are a few technologies I've been working with recently:",
  skillList: [
    "React",
    "Javascript",
    "Typescript",
    "Node.js",
    "MongoDB",
    "React Native",
  ],
  aboutImage: avatar,

  //   End About Section ---------------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: <Github />, url: "https://github.com/habib-ahmad" },
    { img: <LinkedIn />, url: "https://www.linkedin.com/in/ahmad--habib/" },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
