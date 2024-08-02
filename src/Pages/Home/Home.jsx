// import React from 'react'

import Layout from "../../Components/Layouts/Layout"
import About from "./About"
import Hero from "./Hero"
import Menu from "./Menu"
import Promotion from "./Promotion"

function Home() {
  return (
    <Layout>
        <div>
            <Hero/>
            <About/>
            <Menu/>
            <Promotion/>
        </div>
    </Layout>
  )
}

export default Home