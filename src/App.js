import * as React from "react";
// import { useRef } from 'react'
import HomeScreen from './Components/HomeScreen/HomeScreen';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import ContactForm from './Components/ContactForm/ContactForm';
import PortFooterBar from './Components/PortFooterBar/PortFooterBar'
import ScrollToTop from "./Components/Scroll/ScrollToTop";
import Navbar from "./Components/Navbar";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <HomeScreen></HomeScreen>
      <AboutMe></AboutMe>
      <Projects
      ></Projects>
      <Skills
      ></Skills>
      
      <ContactForm
      ></ContactForm>
      <PortFooterBar>
      </PortFooterBar>
    </div>
  );
}

export default App;