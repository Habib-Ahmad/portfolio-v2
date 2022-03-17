import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/About"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ahmad Habib"
      description="Ahmad Habib is a full stack developer with a passion for solving problems and learning new things"
      lang="en"
    />
    <Header />
    <Work />
    <About />
    <Footer />
  </Layout>
)

export default IndexPage
