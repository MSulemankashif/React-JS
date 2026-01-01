import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
// import {BrowserRouter, Routes, Route} from "
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>

    <BrowserRouter>

      <nav>

        <Link  to={"/"}  >   Home  </Link>
        <Link  to={"/about"}  >    About  </Link>
        <Link  to={"/contact"}>   Contact  </Link>
        
      </nav>
      <Routes>
        <Route path='/'  element={<Home/>}   />
        <Route path='/about'  element={<About/>}   />
        <Route path='/contact'  element={<Contact/>}   />
        <Route path='*'  element={<NotFound/>}   />
      </Routes>
    </BrowserRouter>





    </>
  )
}

export default App