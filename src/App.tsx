import HeyPage from "./pages/HeyPage"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactLinks from "./pages/ContactLinks";



function App() {
  const location = useLocation();

  return (
    <div  className="main min-h-screen">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path = "/" element = {<HeyPage/>} />
          <Route path="/aboutMe" element = {<AboutMe/>}/>
          <Route path="/skills" element = {<Skills/>}/>
          <Route path="/projects" element = {<Projects/>}/>
          <Route path="/contact" element = {<ContactLinks/>}/>
        </Routes>
      </AnimatePresence>
      
    </div>
  )
}

export default App
