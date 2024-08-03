// import React from 'react'

import Layout from "../../Components/Layouts/Layout"
import About from "./About"
import Hero from "./Hero"
import Menu from "./Menu"
import Promotion from "./Promotion"
import Resturent from "./Resturent"

function Home() {
  return (
    <Layout>
        <div>
            <Hero/>
            <About/>
            <Menu/>
            <Promotion/>
            <Resturent/>
        </div>
    </Layout>
  )
}

export default Home