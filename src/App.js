import React, { useState } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Content from './Component/Content'
import './Component/Sabka.css'
import User from './Component/User'
import Textconverter from './Component/Textconverter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './Component/Products/Products'
// import Meme from './Component/Meme'

function App() {
  const [darkMode,setDarkMode] = useState(true);
  return (


    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route className={({ isActive }) => (isActive ? 'active' : 'inactive')} path='/Content' element ={<Content/>}/>
        <Route className={({ isActive }) => (isActive ? 'active' : 'inactive')} path='/Textconverter' element ={<Textconverter/>}/>
        <Route className={({ isActive }) => (isActive ? 'active' : 'inactive')} path='/User/:id' element ={<User/>}/>
        <Route className={({ isActive }) => (isActive ? 'active' : 'inactive')} path='/Products' element ={<Products/>}/>
      </Routes>
      </Router>
    

    
  )
}

export default App