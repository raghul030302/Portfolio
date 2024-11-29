import React from 'react'
import { Home } from './component/Home/Home'
// import Navbar from './component/Navbar/Navbar'
import Background from './component/Background/Background'
import About from './component/About/About'
import Skill from './component/Skills/Skill'
import Project from './component/Project/Project'
import Experience from './component/Experience/Experience'
import Contact from './component/Contact/Contact'


// import Certificate from './component/Certificate/Certificate'

export const App = () => {
  return (
    <>

        <Background/>

    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Experience/>
    {/* <Certificate/> */}
    <Contact/>
        
    </>
  )
}
