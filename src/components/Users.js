import React from 'react'
import '../App.css'
import BlogPosts from '../pages/BlogPosts';
import '../pages/HeroSection.css';
import Blog from './Blog'
import {Actions} from '../Actions'
import Footer from '../pages/Footer'

function Users() {
  const data = Actions();
  return (
    <>  
        <BlogPosts/>
        <Blog value={data}/>
        <Footer/>
    </>
  );
}
export default Users;