import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import PostIdPage from './Pages/PostIdPage'
import Posts from './Posts/Posts'

export default function AppRouter() {
  return (
   <BrowserRouter>
    
    <Routes> 
    <Route path="/posts" element = {<Posts/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/posts/:id" element = {<PostIdPage/>}/>
    <Route path="*" element = {<About/>}/>
    </Routes>

   </BrowserRouter>
    
  )
}
 