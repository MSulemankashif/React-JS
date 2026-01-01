
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Detail from './pages/Detail'

function App() {

  return (
    <>
      <BrowserRouter>

      <Box>
        <NavBar/>

        {/* ROUTES */}
        <Routes>
          <Route path='/'  element={<Home/>}   />
          <Route path='/about'  element={<About/>}   />
          <Route path='/contact'  element={<Contact/>}   />
          <Route path='/dish/:id'  element={<Detail/>}   />



        </Routes>




      </Box>

      </BrowserRouter>
    </>
  )
}

export default App