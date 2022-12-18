import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        {/* <a href="https://you-buyapp.herokuapp.com/" target="_blank"></a>
        <a href="https://thrill-rides.herokuapp.com/" target="_blank"></a>
        <a
          href="https://anime-revival-frontend.herokuapp.com/"
          target="_blank"
        ></a> */}
      </Routes>
    </div>
  )
}

export default App
