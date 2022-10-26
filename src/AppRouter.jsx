import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Posts from './Posts/Posts'

export default function AppRouter() {
  return (
   <BrowserRouter>
    <nav>
        <Link to="/posts">Home</Link>
      </nav>


    <Routes> 
    <Route path="/posts" element = {<Posts/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="*" element = {<About/>}/>
    </Routes>

   </BrowserRouter>
    
  )
}
 