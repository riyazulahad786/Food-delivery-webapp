// import React from 'react'

import Layout from "../../Components/Layouts/Layout"
import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Menu from "./Menu"
import Promotion from "./Promotion"
import Resturent from "./Resturent"
import View from './View'

function Home() {
  return (
    <Layout>
        <div>
            <Hero/>
            <About/>
            <Menu/>
            <Promotion/>
            <Resturent/>
            <View/>
            <Contact/>
        </div>
    </Layout>
  )
}

export default Home