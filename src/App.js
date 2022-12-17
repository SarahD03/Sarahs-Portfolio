import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ProjectsPage from './pages/ProjectsPage'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/contact-me" element={<ContactMe />}></Route>
      </Routes>
    </div>
  )
}

export default App
