// import React from 'react'

import Layout from "../../Components/Layouts/Layout"
import About from "./About"
import Hero from "./Hero"
import Menu from "./Menu"

function Home() {
  return (
    <Layout>
        <div>
            <Hero/>
            <About/>
            <Menu/>
        </div>
    </Layout>
  )
}

export default Home